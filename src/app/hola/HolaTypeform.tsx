"use client";

import { useEffect } from "react";

export default function HolaTypeform() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div data-tf-live="01KPS6Y5MC96VZM3EG0DWY1ECP" />;
}
