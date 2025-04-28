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
  // const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // if (isMobile) {
  //   document.body.style.overflow = "auto";
  //   return;
  // }

  useEffect(() => {
    if (scrollRef.current) {
      const scrollbar = Scrollbar.init(scrollRef.current, {
        damping: 0.05,
        alwaysShowTracks: false,
        renderByPixels: true,
      });

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
