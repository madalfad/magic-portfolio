import {
  Avatar,
  Column,
  Flex,
  Heading,
  IconButton,
  Row,
  Tag,
  Text,
  Timeline,
} from "@/once-ui/components";
import { Mailchimp } from "@/components";
import { ResearchCarousel } from "@/components/research/ResearchCarousel";
import { baseURL } from "@/resources";
import { research, person, newsletter } from "@/resources";
import { getResearchFromSheet } from "@/utils/research";
import { Meta, Schema } from "@once-ui-system/core";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return Meta.generate({
    title: research.title,
    description: research.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(research.title)}`,
    path: research.path,
  });
}

function statusToState(status: string): "active" | "success" | "default" {
  const s = status.toLowerCase().trim();
  if (
    s.includes("in progress") ||
    s.includes("ongoing") ||
    s.includes("active") ||
    s.includes("under review") ||
    s.includes("pending") ||
    s.includes("submitted")
  ) {
    return "active";
  }
  if (
    s.includes("published") ||
    s.includes("completed") ||
    s.includes("accepted") ||
    s.includes("presented")
  ) {
    return "success";
  }
  return "default";
}

export default async function Research() {
  // Always fetches fresh from CSV, pre-sorted by date descending
  const allProjects = await getResearchFromSheet();

  // Featured projects for the carousel (driven by CSV "Featured" column)
  const featured = allProjects.filter((p) => p.featured);

  return (
    <Column maxWidth="s">
      <Schema
        as="article"
        baseURL={baseURL}
        title={research.title}
        description={research.description}
        path={research.path}
        image={`${baseURL}/og?title=${encodeURIComponent(research.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${research.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="display-strong-l">
        {research.title}
      </Heading>
      <Column fillWidth flex={1} gap="l">
        {/* Featured research carousel */}
        {featured.length > 0 && (
          <Column fillWidth gap="m">
            <Heading as="h2" variant="display-strong-xs">
              Featured
            </Heading>
            <ResearchCarousel projects={featured} key="research-carousel" />
          </Column>
        )}

        {/* All research items as a timeline */}
        {allProjects.length > 0 && (
          <Column fillWidth>
            <Heading as="h2" variant="display-strong-xs" marginBottom="m">
              All Research
            </Heading>
            <Column fillWidth marginBottom="40">
              <Timeline
                items={allProjects.map((project, index) => ({
                  marker: project.image ? (
                    <Avatar
                      src={project.image}
                      size="m"
                      style={{
                        border: "1px solid var(--neutral-alpha-medium)",
                      }}
                    />
                  ) : undefined,
                  label: project.title,
                  description: project.description || undefined,
                  children: (
                    <Column gap="8" marginTop="8">
                      {project.abstract && (
                        <Text
                          variant="body-default-s"
                          onBackground="neutral-weak"
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {project.abstract}
                        </Text>
                      )}
                      <Flex gap="8" wrap vertical="center">
                        {project.tags?.map((tag) => (
                          <Tag
                            key={tag}
                            size="s"
                            variant="accent"
                            label={tag}
                          />
                        ))}
                        {project.type && (
                          <Tag
                            size="s"
                            variant="neutral"
                            label={project.type}
                          />
                        )}
                        {project.status && (
                          <Tag
                            size="s"
                            variant="neutral"
                            label={project.status}
                          />
                        )}
                        {project.date && (
                          <Row
                            fitWidth
                            radius="full"
                            paddingY="4"
                            paddingX="8"
                            border="neutral-alpha-medium"
                            textVariant="label-default-xs"
                            onBackground="neutral-weak"
                          >
                            {project.date}
                          </Row>
                        )}
                      </Flex>
                      {project.link && (
                        <Flex marginTop="4">
                          <IconButton
                            href={project.link}
                            icon="arrowUpRightFromSquare"
                            variant="secondary"
                            size="s"
                            tooltip="View publication"
                          />
                        </Flex>
                      )}
                    </Column>
                  ),
                  state: project.status
                    ? statusToState(project.status)
                    : index === 0
                      ? "active"
                      : "success",
                }))}
              />
            </Column>
          </Column>
        )}

        {/* Empty state */}
        {allProjects.length === 0 && (
          <Column fillWidth padding="xl" horizontal="center" gap="m">
            <Text
              variant="body-default-m"
              onBackground="neutral-weak"
              align="center"
            >
              Research publications coming soon.
            </Text>
          </Column>
        )}
      </Column>
      {newsletter.display && <Mailchimp />}
    </Column>
  );
}
