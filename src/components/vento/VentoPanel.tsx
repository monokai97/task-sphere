import * as React from "react";
import { cn } from "@/lib/utils";

export const VentoPanel = React.forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "backdrop-blur-vento border border-vento-panel/50 rounded-xl",
        className
      )}
    >
      {children}
    </div>
  );
});
VentoPanel.displayName = "VentoPanel";
