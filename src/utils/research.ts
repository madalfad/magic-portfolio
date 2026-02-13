const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTr7eQUgELzHP-OWCfawhK3M4fDpaXfE059ZSFmZ1elRcv7pu0Yx4l1xyvsc_QhG3vosSzhfHJG-fUx/pub?gid=0&single=true&output=csv";

export interface ResearchProject {
  date: string;
  type: "Publication" | "Presentation" | string;
  title: string;
  description: string; // Journal/Conference — matches existing shape
  link: string;
  image: string;
  abstract: string;
  status: string;
  slug: string;
}

/**
 * Parse a single CSV row respecting quoted fields that may contain commas and newlines.
 * Returns an array of field values.
 */
function parseCSVRow(row: string): string[] {
  const fields: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < row.length; i++) {
    const char = row[i];

    if (inQuotes) {
      if (char === '"') {
        // Check for escaped quote ("")
        if (i + 1 < row.length && row[i + 1] === '"') {
          current += '"';
          i++; // skip next quote
        } else {
          inQuotes = false;
        }
      } else {
        current += char;
      }
    } else {
      if (char === '"') {
        inQuotes = true;
      } else if (char === ",") {
        fields.push(current.trim());
        current = "";
      } else {
        current += char;
      }
    }
  }

  fields.push(current.trim());
  return fields;
}

/**
 * Split the full CSV text into logical rows, handling quoted fields that span
 * multiple lines.
 */
function splitCSVIntoRows(text: string): string[] {
  const rows: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    if (char === '"') {
      inQuotes = !inQuotes;
      current += char;
    } else if ((char === "\n" || char === "\r") && !inQuotes) {
      // Handle \r\n
      if (char === "\r" && i + 1 < text.length && text[i + 1] === "\n") {
        i++;
      }
      if (current.trim().length > 0) {
        rows.push(current);
      }
      current = "";
    } else {
      current += char;
    }
  }

  if (current.trim().length > 0) {
    rows.push(current);
  }

  return rows;
}

/**
 * Parse full CSV text into an array of ResearchProject objects.
 */
function parseCSV(csvText: string): ResearchProject[] {
  const rows = splitCSVIntoRows(csvText);
  if (rows.length < 2) return [];

  // Skip header row (index 0)
  const dataRows = rows.slice(1);

  return dataRows
    .map((row) => {
      const fields = parseCSVRow(row);

      // Expect 9 columns: Date, Type, Title, Journal/Conference, Link, Image, Abstract, Status, Slug
      const [
        date = "",
        type = "",
        title = "",
        journal = "",
        link = "",
        image = "",
        abstract = "",
        status = "",
        slug = "",
      ] = fields;

      if (!title) return null;

      return {
        date,
        type,
        title,
        description: journal, // maps to existing `description` field used in about page
        link,
        image,
        abstract,
        status,
        slug,
      } satisfies ResearchProject;
    })
    .filter((item): item is ResearchProject => item !== null);
}

/**
 * Fetch research projects from the published Google Sheet.
 *
 * Uses Next.js extended fetch with `next.revalidate` so the data is cached at
 * build time and re-validated periodically (default: every 1 hour).
 *
 * Falls back to an empty array on any network / parse error so the page still
 * renders.
 */
export async function getResearchFromSheet(
  revalidateSeconds = 3600,
): Promise<ResearchProject[]> {
  try {
    const response = await fetch(SHEET_CSV_URL, {
      next: { revalidate: revalidateSeconds },
    });

    if (!response.ok) {
      console.error(
        `[research] Failed to fetch sheet: ${response.status} ${response.statusText}`,
      );
      return [];
    }

    const csvText = await response.text();
    return parseCSV(csvText);
  } catch (error) {
    console.error("[research] Error fetching research data:", error);
    return [];
  }
}
