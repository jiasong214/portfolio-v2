import { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";

export default function SmoothScroll({
  children,
  disabled,
}: {
  children: React.ReactNode;
  disabled: boolean;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isMobile = window.innerWidth <= 980;

  useEffect(() => {
    if (!isMobile) return;

    const html = document.documentElement;
    const body = document.body;
    const overflowValue = disabled ? "hidden" : "auto";

    html.style.overflowY = overflowValue;
    body.style.overflowY = overflowValue;

    return () => {
      html.style.overflowY = "auto";
      body.style.overflowY = "auto";
    };
  }, [disabled, isMobile]);

  useEffect(() => {
    if (scrollRef.current) {
      const scrollbar = Scrollbar.init(scrollRef.current, {
        damping: 0.05,
        alwaysShowTracks: false,
        renderByPixels: true,
      });

      return () => scrollbar.destroy();
    }
  }, []);

  if (isMobile) return children;

  return (
    <div
      ref={scrollRef}
      id="scroll-container"
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        pointerEvents: disabled ? "none" : "auto",
      }}
    >
      {children}
    </div>
  );
}
