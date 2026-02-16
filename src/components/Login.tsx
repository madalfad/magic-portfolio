"use client";

import { useState } from "react";
import {
  Button,
  Input,
  Column,
  PasswordInput,
  Row,
  SmartLink,
  Heading,
  Text,
} from "@once-ui-system/core";
import { Background2 } from "@/once-ui/components";

const Login = () => {
  const [showEmailLogin, setShowLoginForm] = useState(false);

  return (
    <Column fill>
      <Row
        s={{ hide: true }}
        fillWidth
        height="64"
        borderBottom="neutral-medium"
      >
        <Row minWidth="64" borderRight="neutral-medium" />
        <Row fillWidth />
        <Row minWidth="64" borderLeft="neutral-medium" />
      </Row>
      <Row fill>
        <Row minWidth="64" s={{ hide: true }} borderRight="neutral-medium" />
        <Row fillWidth horizontal="center" overflow="hidden">
          <Row
            fill
            position="absolute"
            top="0"
            left="0"
            style={{ transform: "scale(1.5)" }}
          >
            <Background2 />
          </Row>
          <Column center gap="32" padding="l" maxWidth={32}>
            <Column horizontal="center" fillWidth gap="4">
              <Heading variant="heading-strong-xl" marginTop="24">
                Welcome to Once UI
              </Heading>
              <Text onBackground="neutral-medium" variant="body-default-s">
                Access your account
              </Text>
            </Column>
            {!showEmailLogin ? (
              <>
                <Column fillWidth gap="-1">
                  <Button
                    label="Continue with Google"
                    fillWidth
                    size="l"
                    radius="top"
                    variant="secondary"
                    weight="default"
                    prefixIcon="google"
                  />
                  {/*<Button
                    label="Continue with GitHub"
                    fillWidth
                    size="l"
                    radius="none"
                    variant="secondary"
                    weight="default"
                    prefixIcon="github"
                  />
                  <Button
                    label="Continue with Email"
                    fillWidth
                    size="l"
                    radius="bottom"
                    variant="secondary"
                    weight="default"
                    prefixIcon="email"
                    onClick={() => setShowLoginForm(true)}
                  />*/}
                </Column>
                {/*<Row
                  onBackground="neutral-medium"
                  gap="4"
                  marginBottom="24"
                  textVariant="body-default-s"
                >
                  Don't have an account?
                  <SmartLink href="#">Sign up!</SmartLink>
                </Row>*/}
              </>
            ) : (
              <Column fillWidth gap="24" horizontal="center">
                <Column gap="-1" fillWidth>
                  <Input radius="top" id="email" label="Email" height="s" />
                  <PasswordInput
                    radius="bottom"
                    id="password"
                    label="Password"
                    height="s"
                  />
                  <Row
                    fillWidth
                    horizontal="end"
                    textVariant="label-default-s"
                    paddingRight="12"
                    paddingTop="12"
                  >
                    <SmartLink href=" ">Forgot password</SmartLink>
                  </Row>
                </Column>
                <Button id="login" label="Log in" arrowIcon fillWidth />
                <Button
                  data-border="rounded"
                  prefixIcon="arrowLeft"
                  variant="tertiary"
                  weight="default"
                  size="s"
                  onClick={() => setShowLoginForm(false)}
                >
                  Back to login
                </Button>
              </Column>
            )}
          </Column>
        </Row>
        <Row minWidth="64" s={{ hide: true }} borderLeft="neutral-medium" />
      </Row>
      <Row s={{ hide: true }} fillWidth height="64" borderTop="neutral-medium">
        <Row minWidth="64" borderRight="neutral-medium" />
        <Row fillWidth />
        <Row minWidth="64" borderLeft="neutral-medium" />
      </Row>
    </Column>
  );
};

export { Login };
