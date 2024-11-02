import { Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const popularServices = [
  {
    title: "Home Cleaning",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=400",
    rating: 4.8,
    price: "from $49",
    slug: "home-cleaning"
  },
  {
    title: "Appliance Repair",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=400",
    rating: 4.7,
    price: "from $39",
    slug: "appliance-repair"
  },
  {
    title: "Beauty & Spa",
    image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=400",
    rating: 4.9,
    price: "from $29",
    slug: "beauty-spa"
  },
  {
    title: "Plumbing",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=80&w=400",
    rating: 4.6,
    price: "from $59",
    slug: "plumbing"
  },
];

export function PopularServices() {
  return (
    <section className="py-16 container mx-auto px-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Popular Services</h2>
        <Button variant="ghost" asChild className="flex items-center gap-2">
          <Link href="/services">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {popularServices.map((service) => (
          <Link href={`/services/${service.slug}`} key={service.slug}>
            <Card className="group cursor-pointer hover:shadow-lg transition-shadow">
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
                  <h3 className="font-semibold text-lg mb-1">{service.title}</h3>
                  <p className="text-muted-foreground">{service.price}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}