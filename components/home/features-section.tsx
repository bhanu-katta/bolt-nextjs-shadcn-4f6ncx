import { Shield, Star, Clock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Verified Professionals",
    description: "Background checked and skilled experts",
  },
  {
    icon: Star,
    title: "Satisfaction Guaranteed",
    description: "100% money back if you're not satisfied",
  },
  {
    icon: Clock,
    title: "On-Time Service",
    description: "Punctual and reliable service delivery",
  },
];

export function FeaturesSection() {
  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}