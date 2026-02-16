"use client";

import {
  AvatarGroup,
  Card,
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Tag,
  Text,
} from "@once-ui-system/core";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
  tags?: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
  tags,
}) => {
  return (
    <Card fillWidth radius="l" border="neutral-alpha-medium" overflow="hidden">
      <Column fillWidth gap="s">
        <Carousel
          sizes="(max-width: 960px) 100vw, 960px"
          items={images.map((image) => ({
            slide: image,
            alt: title,
          }))}
        />
        <Flex
          s={{ direction: "column" }}
          fillWidth
          paddingX="s"
          paddingTop="24"
          paddingBottom="24"
          gap="l"
        >
          {title && (
            <Flex flex={3} paddingX="s">
              <Column gap="8">
                <Heading
                  as="h2"
                  wrap="balance"
                  variant="heading-strong-xl"
                  paddingX="4"
                >
                  {title}
                </Heading>
                {tags && tags.length > 0 && (
                  <Flex gap="8" wrap>
                    {tags.map((tag) => {
                      const variantMap: Record<
                        string,
                        | "success"
                        | "neutral"
                        | "warning"
                        | "danger"
                        | "info"
                        | "accent"
                      > = {
                        "open source": "success",
                        "closed source": "warning",
                        "work in progress": "info",
                      };
                      const variant =
                        variantMap[tag.toLowerCase()] || "neutral";
                      return (
                        <Tag key={tag} variant={variant} size="s" label={tag} />
                      );
                    })}
                  </Flex>
                )}
              </Column>
            </Flex>
          )}
          {(avatars?.length > 0 || description?.trim() || content?.trim()) && (
            <Column flex={9} gap="16" paddingLeft="s">
              {avatars?.length > 0 && (
                <AvatarGroup avatars={avatars} size="m" reverse />
              )}
              {description?.trim() && (
                <Text
                  wrap="balance"
                  variant="body-default-s"
                  onBackground="neutral-weak"
                >
                  {description}
                </Text>
              )}
              <Flex gap="24" wrap>
                {content?.trim() && (
                  <SmartLink
                    suffixIcon="arrowRight"
                    style={{ margin: "0", width: "fit-content" }}
                    href={href}
                  >
                    <Text variant="body-default-s">Read case study</Text>
                  </SmartLink>
                )}
                {link && (
                  <SmartLink
                    suffixIcon="arrowUpRightFromSquare"
                    style={{ margin: "0", width: "fit-content" }}
                    href={link}
                  >
                    <Text variant="body-default-s">View project</Text>
                  </SmartLink>
                )}
              </Flex>
            </Column>
          )}
        </Flex>
      </Column>
    </Card>
  );
};
