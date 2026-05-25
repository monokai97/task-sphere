import { cn } from "@/lib/utils";

export function VentoGlow({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute -z-10 h-[300px] w-[300px] rounded-full blur-[120px] opacity-20 bg-vento-highlight mix-blend-screen",
        className
      )}
    />
  );
}
