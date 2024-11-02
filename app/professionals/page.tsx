import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, ArrowRight } from "lucide-react";

export default function ProfessionalsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Join Our Professional Network</h1>
          <p className="text-xl text-muted-foreground">
            Grow your business by joining our network of trusted service providers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Build Your Reputation</h3>
              </div>
              <p className="text-muted-foreground">
                Get reviews from clients and build your online presence
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Verified Jobs</h3>
              </div>
              <p className="text-muted-foreground">
                Access pre-screened customers and guaranteed payments
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6">How It Works</h2>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Create Your Profile",
                  description: "Sign up and showcase your skills and experience",
                },
                {
                  step: "2",
                  title: "Get Verified",
                  description: "Complete our verification process",
                },
                {
                  step: "3",
                  title: "Start Earning",
                  description: "Receive job requests and grow your business",
                },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <Badge variant="outline" className="w-8 h-8 flex items-center justify-center rounded-full">
                    {item.step}
                  </Badge>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button size="lg" className="gap-2">
            Apply Now <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}