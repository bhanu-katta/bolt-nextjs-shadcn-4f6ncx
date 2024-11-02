import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import Link from "next/link";

const allServices = [
  {
    title: "Home Cleaning",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=400",
    rating: 4.8,
    price: "from $49",
    slug: "home-cleaning",
    description: "Professional home cleaning services"
  },
  {
    title: "Appliance Repair",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=400",
    rating: 4.7,
    price: "from $39",
    slug: "appliance-repair",
    description: "Expert appliance repair and maintenance"
  },
  {
    title: "Beauty & Spa",
    image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=400",
    rating: 4.9,
    price: "from $29",
    slug: "beauty-spa",
    description: "Professional beauty and spa services"
  },
  {
    title: "Plumbing",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=80&w=400",
    rating: 4.6,
    price: "from $59",
    slug: "plumbing",
    description: "Expert plumbing services"
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">All Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allServices.map((service) => (
          <Link href={`/services/${service.slug}`} key={service.slug}>
            <Card className="group cursor-pointer hover:shadow-lg transition-shadow h-full">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute bottom-2 right-2">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current" />
                      {service.rating}
                    </Badge>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-2">{service.description}</p>
                  <p className="font-medium">{service.price}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}