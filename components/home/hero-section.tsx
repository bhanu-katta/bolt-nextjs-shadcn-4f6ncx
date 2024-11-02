"use client";

import { useState } from "react";
import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function HeroSection() {
  const [location, setLocation] = useState("New York");

  return (
    <section className="relative h-[600px] flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1521783988139-89397d761dce?auto=format&fit=crop&q=80&w=2000"
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-20 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Professional Services at Your Doorstep
        </h1>
        <p className="text-xl text-gray-200 mb-8">
          Book trusted professionals for all your household needs
        </p>
        
        <div className="max-w-2xl mx-auto flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <MapPin className="absolute left-3 top-3 text-gray-400" />
            <Input
              type="text"
              placeholder="Enter your location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="pl-10 h-12 text-lg"
            />
          </div>
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for services"
              className="pl-10 h-12 text-lg"
            />
          </div>
          <Button size="lg" className="h-12 px-8">
            Search
          </Button>
        </div>
      </div>
    </section>
  );
}