"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

export default function LazyAnalytics() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const onFirst = () => setLoad(true);
    window.addEventListener("pointerdown", onFirst, { once: true });
    window.addEventListener("keydown", onFirst, { once: true });

    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {/* no-op: wait for interaction or idle */});
    }
    return () => {
      window.removeEventListener("pointerdown", onFirst);
      window.removeEventListener("keydown", onFirst);
    };
  }, []);

  if (!load) return null;

  const GoogleTagManagerScript = dynamic(() => import("@/components/GoogleTagManagerScript"), { ssr: false });
  const GoogleAnalyticsScript = dynamic(() => import("@/components/GoogleAnalyticsScript"), { ssr: false });

  return (
    <>
      <GoogleTagManagerScript />
      <GoogleAnalyticsScript />
    </>
  );
}