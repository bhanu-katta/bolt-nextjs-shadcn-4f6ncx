"use client";

import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="border-b bg-background">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          ServiceHub
        </Link>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>New York</span>
          </div>
          
          <Button variant="ghost" asChild>
            <Link href="/services">Browse Services</Link>
          </Button>
          
          <Button variant="ghost" asChild>
            <Link href="/professionals">For Professionals</Link>
          </Button>
          
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}