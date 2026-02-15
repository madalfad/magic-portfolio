"use client";

import { useState } from "react";
import { Button, Dialog, Column } from "@once-ui-system/core";
import { ReclaimScheduler } from "@/components/ReclaimScheduler";
import styles from "./about.module.scss";

interface ScheduleCallModalProps {
  embedId: string;
}

export function ScheduleCallModal({ embedId }: ScheduleCallModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        variant="secondary"
        size="s"
        data-border="rounded"
        prefixIcon="calendar"
        suffixIcon="chevronRight"
        className={styles.blockAlign}
        style={{
          marginBottom: "var(--static-space-m)",
        }}
      >
        Schedule a meeting
      </Button>
      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Schedule a meeting"
        description="Pick a time that works for you."
        maxWidth={48}
      >
        <Column fillWidth radius="m" style={{ minHeight: "36rem" }}>
          <ReclaimScheduler dataId={embedId} />
        </Column>
      </Dialog>
    </>
  );
}
