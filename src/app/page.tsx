import React from "react";

import {
  Heading,
  Flex,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Tag,
  Card,
  Grid,
  IconButton,
  TiltFx,
  HoloFx,
} from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";
import { baseURL, routes } from "@/resources";
import { home, about, person, newsletter } from "@/resources";
import { Mailchimp } from "@/components";
import { getResearchFromSheet } from "@/utils/research";
import { Meta, Schema } from "@once-ui-system/core";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
  });
}

export default async function Home() {
  const recentResearch = routes["/research"]
    ? (await getResearchFromSheet()).slice(0, 4)
    : [];

  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`${baseURL}/og?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Hero */}
      <Column fillWidth paddingY="24" gap="m">
        <Column maxWidth="s">
          {home.featured?.display && (
            <RevealFx
              fillWidth
              horizontal="start"
              paddingTop="16"
              paddingBottom="32"
              paddingLeft="12"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx
            translateY="4"
            fillWidth
            horizontal="start"
            paddingBottom="16"
          >
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx
            translateY="8"
            delay={0.2}
            fillWidth
            horizontal="start"
            paddingBottom="24"
          >
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="heading-default-xl"
            >
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx
            paddingTop="12"
            delay={0.4}
            horizontal="start"
            paddingLeft="12"
          >
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              arrowIcon
            >
              <Flex gap="8" vertical="center">
                {about.avatar?.display && (
                  <Avatar
                    style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Flex>
            </Button>
          </RevealFx>
        </Column>
      </Column>

      {/* Projects */}
      <RevealFx translateY="12" delay={0.55} fillWidth>
        <Column fillWidth gap="16">
          <Flex fillWidth horizontal="between" vertical="center">
            <Heading as="h2" variant="display-strong-xs">
              Projects
            </Heading>
            {routes["/work"] && (
              <Button
                href="/work"
                variant="tertiary"
                size="s"
                data-border="rounded"
              >
                See all projects
              </Button>
            )}
          </Flex>
          <Projects range={[1, 2]} />
        </Column>
      </RevealFx>

      {/* Research */}
      {routes["/research"] && recentResearch.length > 0 && (
        <RevealFx translateY="16" delay={0.65} fillWidth>
          <Column fillWidth gap="16">
            <Flex fillWidth horizontal="between" vertical="center">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Research
              </Heading>
              <Button
                href="/research"
                variant="tertiary"
                size="s"
                data-border="rounded"
              >
                View all research
              </Button>
            </Flex>
            <Text onBackground="neutral-weak" variant="body-default-m">
              Publications, abstracts, and academic writing.
            </Text>
            <Column fillWidth gap="12">
              {recentResearch.map((project, index) => (
                <Card
                  key={`${project.slug}-${index}`}
                  fillWidth
                  radius="l"
                  border="neutral-alpha-medium"
                  href={project.link || undefined}
                >
                  <Flex fillWidth padding="20" gap="16" vertical="center">
                    <Column fillWidth gap="4">
                      <Text variant="heading-strong-s">{project.title}</Text>
                      <Text
                        variant="body-default-s"
                        onBackground="neutral-weak"
                      >
                        {project.description}
                      </Text>
                      <Flex gap="8" vertical="center" paddingTop="4">
                        {project.type && (
                          <Tag size="s" variant="neutral">
                            {project.type}
                          </Tag>
                        )}
                        {project.status && (
                          <Tag size="s" variant="neutral">
                            {project.status}
                          </Tag>
                        )}
                        {project.date && (
                          <Text
                            variant="label-default-s"
                            onBackground="neutral-weak"
                          >
                            {project.date}
                          </Text>
                        )}
                      </Flex>
                    </Column>
                    {project.link && (
                      <IconButton
                        icon="chevronRight"
                        variant="secondary"
                        size="s"
                      />
                    )}
                  </Flex>
                </Card>
              ))}
            </Column>
          </Column>
        </RevealFx>
      )}

      {/* Education */}
      <RevealFx translateY="8" delay={0.45} fillWidth>
        <Column
          fillWidth
          gap="16"
          marginLeft="8"
          marginRight="8"
          marginBottom="8"
        >
          <Flex fillWidth horizontal="between" vertical="center">
            <Heading as="h2" variant="display-strong-xs">
              Education
            </Heading>
            <Button
              href="/about#studies"
              variant="tertiary"
              size="s"
              data-border="rounded"
            >
              View education details
            </Button>
          </Flex>
          <Grid
            fillWidth
            columns="4"
            m={{ columns: "2" }}
            s={{ columns: "1" }}
            gap="12"
          >
            {about.studies.institutions.map((institution, index) => (
              <TiltFx key={`t${institution.name}-${index}`}>
                <Card
                  key={`${institution.name}-${index}`}
                  fillWidth
                  radius="l"
                  border="neutral-alpha-medium"
                  href="/about#studies"
                >
                  <Column
                    fillWidth
                    paddingX="20"
                    paddingY="32"
                    gap="20"
                    horizontal="center"
                    style={{
                      textAlign: "center",
                      minHeight: "14rem",
                    }}
                  >
                    <HoloFx
                      minHeight={5}
                      shine={{
                        opacity: 30,
                        blending: "color-dodge",
                      }}
                      burn={{
                        opacity: 30,
                        blending: "color-dodge",
                      }}
                      texture={{
                        opacity: 10,
                        image: "/images/textures/foil.jpg",
                        blending: "color-dodge",
                      }}
                    >
                      <Avatar
                        src={institution.image}
                        size={5}
                        style={{
                          border: "1px solid var(--neutral-alpha-medium)",
                        }}
                      />
                    </HoloFx>
                    <Column gap="8" horizontal="center">
                      <Text variant="heading-strong-s" align="center">
                        {institution.name}
                      </Text>
                      <Text
                        variant="label-default-s"
                        onBackground="neutral-weak"
                        align="center"
                      >
                        {institution.description}
                      </Text>
                    </Column>
                  </Column>
                </Card>
              </TiltFx>
            ))}
          </Grid>
        </Column>
      </RevealFx>

      {/* Optional spotlight cards for section navigation */}
      <RevealFx translateY={16} delay={0.75} fillWidth>
        <Flex fillWidth gap="12" s={{ direction: "column" }}>
          <Card
            fillWidth
            radius="l"
            border="neutral-alpha-medium"
            href="/about#research"
          >
            <Column fillWidth padding="20" gap="8">
              <Heading as="h3" variant="heading-strong-m">
                Research profile
              </Heading>
              <Text onBackground="neutral-weak" variant="body-default-s">
                Explore publications and ongoing interests.
              </Text>
            </Column>
          </Card>
          <Card fillWidth radius="l" border="neutral-alpha-medium" href="/work">
            <Column fillWidth padding="20" gap="8">
              <Heading as="h3" variant="heading-strong-m">
                Project portfolio
              </Heading>
              <Text onBackground="neutral-weak" variant="body-default-s">
                Browse selected builds and case studies.
              </Text>
            </Column>
          </Card>
        </Flex>
      </RevealFx>

      {newsletter.display && <Mailchimp />}
    </Column>
  );
}
