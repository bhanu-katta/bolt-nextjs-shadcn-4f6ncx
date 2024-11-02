import { Button } from "@/components/ui/button";

export function AppSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="bg-primary rounded-2xl text-primary-foreground p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">Get Our Mobile App</h2>
            <p className="text-lg mb-6 text-primary-foreground/90">
              Book services on the go with our mobile app. Get exclusive offers and track your service in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" size="lg">
                Download for iOS
              </Button>
              <Button variant="secondary" size="lg">
                Download for Android
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400"
              alt="Mobile App"
              className="w-64 rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}