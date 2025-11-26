"use client";

import React, { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";

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
  url = "https://calendly.com/jefrin-jui-dev/30min",
  onReady,
  onEventSelected,
  height = "700px",
}: CalendlyWidgetProps) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleLoad = () => {
        setLoading(false);
        onReady?.();
    };
    
    iframe.addEventListener("load", handleLoad);
    return () => iframe.removeEventListener("load", handleLoad);
  }, [onReady]);

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      const data = e.data;
      if (!data) return;
      if (data.event === "calendly.event_scheduled") {
        const p = data.payload;
        onEventSelected?.({ 
            start: p?.event?.start_time, 
            end: p?.event?.end_time 
        });
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, [onEventSelected]);

  return (
    <div className="relative w-full h-full bg-white">
        {loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 z-10">
                <Loader2 className="w-8 h-8 text-slate-300 animate-spin mb-4" />
                <p className="text-sm text-slate-400 font-medium">Loading Scheduler...</p>
            </div>
        )}
      <iframe
        ref={iframeRef}
        src={`${url}?hide_gdpr_banner=1&background_color=ffffff&text_color=0f172a&primary_color=0f172a`}
        className="w-full h-full border-none"
        style={{ height }}
        title="Calendly Scheduler"
        aria-label="Calendly scheduler"
      />
    </div>
  );
}