"use client";

import { useCallback } from "react";
import { Row, IconButton, SmartLink, Text, TiltFx } from "@once-ui-system/core";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import type { DotLottie } from "@lottiefiles/dotlottie-react";
import { person, social } from "@/resources";
import { CopyToClipboard } from "@/components/about/CopyToClipboard";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const dotLottieRefCallback = useCallback((dotLottie: DotLottie | null) => {
    if (!dotLottie) return;
    dotLottie.addEventListener("complete", () => {
      dotLottie.setFrame(dotLottie.totalFrames - 500);
      dotLottie.pause();
    });
  }, []);

  return (
    <Row
      as="footer"
      fillWidth
      padding="8"
      horizontal="center"
      s={{ direction: "column" }}
    >
      <Row
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="between"
        vertical="center"
        s={{
          direction: "column",
          horizontal: "center",
          align: "center",
        }}
      >
        <Row style={{ flex: 1 }} horizontal="start" vertical="center">
          <Text variant="body-default-s" onBackground="neutral-strong">
            <Text onBackground="neutral-weak">© {currentYear} /</Text>
            <Text paddingX="4">{person.name}</Text>
          </Text>
        </Row>
        <Row style={{ flex: 1 }} horizontal="center" vertical="center">
          <SmartLink href="/">
            <TiltFx intensity={3}>
              <DotLottieReact
                src="https://lottie.host/0a075407-3062-462b-87d5-ec959b435ad5/Q8RW4BqYt4.lottie"
                autoplay
                dotLottieRefCallback={dotLottieRefCallback}
                style={{ width: 80, height: 64 }}
              />
            </TiltFx>
          </SmartLink>
        </Row>
        <Row style={{ flex: 1 }} horizontal="end" vertical="center" gap="16">
          {social.map(
            (item) =>
              item.link &&
              (item.link.startsWith("mailto:") ? (
                <CopyToClipboard
                  key={item.name}
                  textToCopy={item.link.replace("mailto:", "")}
                  label={item.name}
                  icon={item.icon}
                  toastMessage="Email address copied to clipboard!"
                  variant="ghost"
                  size="s"
                  iconOnly
                />
              ) : (
                <IconButton
                  key={item.name}
                  href={item.link}
                  icon={item.icon}
                  tooltip={item.name}
                  size="s"
                  variant="ghost"
                />
              )),
          )}
        </Row>
      </Row>
      <Row height="80" hide s={{ hide: false }} />
    </Row>
  );
};
