"use client";

import { useCallback } from "react";
import { Button, Flex, IconButton, useToast } from "@once-ui-system/core";

interface CopyToClipboardProps {
  /** The text to copy (e.g. the raw email address) */
  textToCopy: string;
  /** Button label shown on desktop */
  label: string;
  /** Icon to display */
  icon: string;
  /** Optional toast message shown after copying */
  toastMessage?: string;
}

export function CopyToClipboard({
  textToCopy,
  label,
  icon,
  toastMessage = "Copied to clipboard!",
}: CopyToClipboardProps) {
  const { addToast } = useToast();

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      addToast({
        variant: "success",
        message: toastMessage,
      });
    } catch {
      // Fallback for older browsers / insecure contexts
      const textarea = document.createElement("textarea");
      textarea.value = textToCopy;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      addToast({
        variant: "success",
        message: toastMessage,
      });
    }
  }, [textToCopy, toastMessage, addToast]);

  return (
    <>
      {/* Desktop: full button with label */}
      <Flex s={{ hide: true }}>
        <Button
          onClick={handleCopy}
          prefixIcon={icon}
          label={label}
          size="s"
          variant="secondary"
        />
      </Flex>

      {/* Mobile: icon-only button */}
      <Flex hide s={{ hide: false }}>
        <IconButton
          onClick={handleCopy}
          icon={icon}
          size="l"
          variant="secondary"
          tooltip={label}
        />
      </Flex>
    </>
  );
}
