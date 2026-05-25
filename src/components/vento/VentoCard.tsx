import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";

export function VentoCard({ title, description }: { title: string; description: string }) {
  return (
    <Card className="border-vento-neutral-200">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
