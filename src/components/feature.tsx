import { Feature } from "./who-we-are";

interface FeatureProps {
  feature: Feature;
}

export async function Feature({ feature }: FeatureProps) {
  return (
    <div className="flex gap-4 border-b border-dashed py-6">
      {feature.icon}

      <div className="flex flex-col gap-2">
        <strong className="bg-gradient-to-b from-title to-title-foreground bg-clip-text text-2xl font-bold text-transparent">
          {feature.title}
        </strong>
        <p className="text-muted-foreground">{feature.description}</p>
      </div>
    </div>
  );
}
