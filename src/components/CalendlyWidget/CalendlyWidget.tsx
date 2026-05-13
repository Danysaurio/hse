"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

export function CalendlyWidget() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      ref.current &&
      typeof window !== "undefined" &&
      (window as unknown as { Calendly?: { initInlineWidget: (opts: object) => void } }).Calendly
    ) {
      (window as unknown as { Calendly: { initInlineWidget: (opts: object) => void } }).Calendly.initInlineWidget({
        url: "https://calendly.com/agenda-hsesolutions/30min?background_color=f5f5f5&text_color=2d364c&primary_color=1a5b4c",
        parentElement: ref.current,
      });
    }
  }, []);

  return (
    <>
      <div ref={ref} style={{ minWidth: "320px", height: "700px" }} />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (
            ref.current &&
            (window as unknown as { Calendly?: { initInlineWidget: (opts: object) => void } }).Calendly
          ) {
            (window as unknown as { Calendly: { initInlineWidget: (opts: object) => void } }).Calendly.initInlineWidget({
              url: "https://calendly.com/agenda-hsesolutions/30min?background_color=f5f5f5&text_color=2d364c&primary_color=1a5b4c",
              parentElement: ref.current,
            });
          }
        }}
      />
    </>
  );
}
