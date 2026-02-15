"use client";

import { useEffect, useRef } from "react";
import { Column } from "@/once-ui/components";

interface ReclaimSchedulerProps {
  dataId: string;
  redirect?: "NONE" | "REDIRECT";
}

export function ReclaimScheduler({
  dataId,
  redirect = "NONE",
}: ReclaimSchedulerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current || loadedRef.current) return;

    loadedRef.current = true;

    const script = document.createElement("script");
    script.src =
      "https://meet.reclaimai.com/scripts/embed-scheduling-link.0.x.x.js";
    script.dataset.id = dataId;
    script.dataset.redirect = redirect;
    script.async = true;

    containerRef.current.appendChild(script);
  }, [dataId, redirect]);

  return (
    <Column
      ref={containerRef}
      fillWidth
      radius="l"
      style={{ overflow: "hidden", minHeight: "36rem" }}
    />
  );
}
