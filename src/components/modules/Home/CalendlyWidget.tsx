/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect } from "react";

export type CalendlyEventPayload = {
  start: string;
  end?: string;
};

export type CalendlyWidgetProps = {
  url?: string;
  onReady?: () => void;
  onEventSelected?: (payload: CalendlyEventPayload) => void;
  height?: string | number;
};

export default function CalendlyWidget({
  height = "100%",
}: CalendlyWidgetProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://asset-tidycal.b-cdn.net/js/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://asset-tidycal.b-cdn.net/js/embed.js"]');
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="w-full h-full bg-white relative">
      {/* Scrollable Wrapper */}
      <div className="w-full h-full overflow-y-auto custom-scrollbar">
        <div 
          className="tidycal-embed" 
          data-path="findanylead" 
          style={{ width: "100%" }}
        ></div>
      </div>
    </div>
  );
}