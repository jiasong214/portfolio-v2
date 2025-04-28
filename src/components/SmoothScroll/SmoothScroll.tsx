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
    if (scrollRef.current) {
      const scrollbar = Scrollbar.init(scrollRef.current, {
        damping: 0.05,
        alwaysShowTracks: false,
        renderByPixels: true,
      });

      if (isMobile) {
        scrollbar.addListener(() => {
          const tracks =
            scrollRef.current?.querySelectorAll(".scrollbar-track");
          const thumbs =
            scrollRef.current?.querySelectorAll(".scrollbar-thumb");

          tracks?.forEach((track) => {
            (track as HTMLElement).style.background = "transparent";
            (track as HTMLElement).style.width = "4px";
          });

          thumbs?.forEach((thumb) => {
            (thumb as HTMLElement).style.width = "2px";
            (thumb as HTMLElement).style.background =
              "rgba(150, 150, 150, 0.7)";
          });
        });
      }

      return () => {
        scrollbar.destroy();
      };
    }
  }, []);

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
