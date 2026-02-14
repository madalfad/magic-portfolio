"use client";

import {
  Carousel,
  Column,
  Flex,
  Heading,
  Media,
  Row,
  SmartLink,
  Tag,
  Text,
} from "@/once-ui/components";

interface ResearchProject {
  date: string;
  type: string;
  title: string;
  description: string;
  link: string;
  image: string;
  abstract: string;
  status: string;
  slug: string;
}

interface ResearchCarouselProps {
  projects: ResearchProject[];
}

export function ResearchCarousel({ projects }: ResearchCarouselProps) {
  if (projects.length === 0) return null;

  const items = projects.map((project) => ({
    slide: (
      <Row
        fillWidth
        border="neutral-alpha-weak"
        radius="l"
        background="surface"
        style={{ overflow: "hidden", minHeight: "16rem" }}
      >
        {project.image && (
          <Flex
            style={{
              flex: "0 0 40%",
              overflow: "hidden",
            }}
          >
            <Media
              src={project.image}
              alt={project.title}
              sizes="(max-width: 768px) 100vw, 400px"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Flex>
        )}
        <Column
          fillWidth
          padding="l"
          gap="m"
          vertical="center"
          style={{ flex: project.image ? "1 1 60%" : "1 1 100%" }}
        >
          <Column gap="8">
            <Heading as="h3" variant="heading-strong-xl" wrap="balance">
              {project.title}
            </Heading>
            {project.description && (
              <Text
                variant="body-default-m"
                onBackground="neutral-weak"
                wrap="balance"
              >
                {project.description}
              </Text>
            )}
          </Column>
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
            {project.type && (
              <Tag size="s" variant="neutral" label={project.type} />
            )}
            {project.status && (
              <Tag size="s" variant="neutral" label={project.status} />
            )}
            {project.date && (
              <Text variant="label-default-s" onBackground="neutral-weak">
                {project.date}
              </Text>
            )}
          </Flex>
          {project.link && (
            <SmartLink
              href={project.link}
              suffixIcon="arrowUpRightFromSquare"
              style={{ width: "fit-content" }}
            >
              <Text variant="body-default-s">View publication</Text>
            </SmartLink>
          )}
        </Column>
      </Row>
    ),
    alt: project.title,
  }));

  return (
    <Carousel
      indicator="line"
      aspectRatio="2 / 1"
      items={items}
      revealedByDefault
    />
  );
}
