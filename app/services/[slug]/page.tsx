"use client";

import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Shield, MapPin } from "lucide-react";

const services = {
  "home-cleaning": {
    title: "Home Cleaning",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1200",
    rating: 4.8,
    price: "from $49",
    description: "Professional home cleaning services tailored to your needs",
    features: ["Deep Cleaning", "Regular Cleaning", "Move-in/Move-out Cleaning"],
  },
  "appliance-repair": {
    title: "Appliance Repair",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1200",
    rating: 4.7,
    price: "from $39",
    description: "Expert appliance repair and maintenance services",
    features: ["Refrigerator Repair", "Washing Machine Repair", "Dishwasher Repair"],
  },
  "beauty-spa": {
    title: "Beauty & Spa",
    image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=1200",
    rating: 4.9,
    price: "from $29",
    description: "Luxurious beauty and spa treatments",
    features: ["Massage", "Facial", "Manicure & Pedicure"],
  },
  "plumbing": {
    title: "Plumbing",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=80&w=1200",
    rating: 4.6,
    price: "from $59",
    description: "Professional plumbing services for your home",
    features: ["Leak Repair", "Pipe Installation", "Drain Cleaning"],
  },
};

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = services[slug as keyof typeof services];

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <img
            src={service.image}
            alt={service.title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary" className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-current" />
              {service.rating}
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              Available 24/7
            </Badge>
          </div>
          
          <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">{service.description}</p>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">What's Included</h2>
            <ul className="space-y-2">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <Card className="p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-medium">Service Area</span>
              </div>
              <Badge>Available in your area</Badge>
            </div>
            <p className="text-muted-foreground">
              We provide services in New York and surrounding areas
            </p>
          </Card>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-medium">{service.price}</p>
              <p className="text-sm text-muted-foreground">Starting price</p>
            </div>
            <Button size="lg">Book Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
}