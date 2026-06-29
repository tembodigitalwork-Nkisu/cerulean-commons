import type { ReactNode } from "react";

// Lightweight entrance animation built on a pure CSS keyframe (animate-rise).
// The keyframe always ends visible with fill-mode "both", so content can never
// get stranded at opacity 0 the way a JS-driven reveal can. Reduced-motion is
// handled globally in globals.css.
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div className={`animate-rise ${className}`} style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  );
}
