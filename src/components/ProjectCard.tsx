"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Tag,
  Text,
} from "@/once-ui/components";

type TagVariant =
  | "brand"
  | "accent"
  | "warning"
  | "success"
  | "danger"
  | "neutral"
  | "info"
  | "gradient";

const tagVariantMap: Record<string, TagVariant> = {
  "open source": "success",
  "closed source": "neutral",
  "work in progress": "warning",
  archived: "danger",
  beta: "info",
  new: "accent",
};

function getTagVariant(tag: string): TagVariant {
  return tagVariantMap[tag.toLowerCase()] || "neutral";
}

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
  tags = [],
}) => {
  return (
    <Column fillWidth gap="m">
      <Carousel
        sizes="(max-width: 960px) 100vw, 960px"
        images={images.map((image) => ({
          src: image,
          alt: title,
        }))}
      />
      <Flex
        mobileDirection="column"
        fillWidth
        paddingX="s"
        paddingTop="12"
        paddingBottom="24"
        gap="l"
      >
        {title && (
          <Flex flex={5} gap="8" direction="column">
            <Heading as="h2" wrap="balance" variant="heading-strong-xl">
              {title}
            </Heading>
            {tags.length > 0 && (
              <Flex gap="8" wrap>
                {tags.map((tag) => (
                  <Tag
                    key={tag}
                    variant={getTagVariant(tag)}
                    size="s"
                    label={tag}
                  />
                ))}
              </Flex>
            )}
          </Flex>
        )}
        {(avatars?.length > 0 || description?.trim() || content?.trim()) && (
          <Column flex={7} gap="16">
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
  );
};
