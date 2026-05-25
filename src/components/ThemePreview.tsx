import { VentoCard } from "./vento/VentoCard";

export function ThemePreview() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-4xl font-bold">Vento Theme Preview</h1>
      <div className="grid grid-cols-5 gap-4">
        {Object.entries({
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
        }).map(([shade, color]) => (
          <div key={shade} className="space-y-2">
            <div
              className="h-20 w-full rounded-md"
              style={{ backgroundColor: color }}
            />
            <span className="text-sm font-medium">{shade}</span>
          </div>
        ))}
      </div>
      <VentoCard title="Test Card" description="Component visual verification" />
    </div>
  );
}
