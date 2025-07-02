'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import { Tv, Clapperboard, Award } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { Skeleton } from '@/components/ui/skeleton';

const landingNavLinks = [
  { href: '/tv-shows', label: 'TV Shows' },
  { href: '/movies', label: 'Movies' },
  { href: '/new-popular', label: 'New & Popular' },
];

const LandingHeader = () => {
    const { user, loading } = useAuth();
    
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
          <div className="container mx-auto flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-8">
              <Link href="/" className="text-2xl font-bold text-primary">
                STRIMO
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                {landingNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            <nav className="flex items-center gap-2">
              {loading ? (
                <Skeleton className="h-9 w-20" />
              ) : user ? (
                <Button asChild>
                    <Link href="/browse">Go to App</Link>
                </Button>
              ) : (
                <>
                  <Button variant="ghost" asChild>
                      <Link href="/login">Login</Link>
                  </Button>
                  <Button asChild>
                      <Link href="/signup">Sign Up</Link>
                  </Button>
                </>
              )}
            </nav>
          </div>
        </header>
    )
};

export default function LandingPage() {
  return (
    <div className="bg-background text-foreground">
      <LandingHeader />
      <main className="pt-16">
        <section className="relative h-[calc(100vh-4rem)] flex items-center justify-center text-center">
            <Image
                src="https://placehold.co/1920x1080.png"
                alt="Movie collage background"
                fill
                className="object-cover"
                data-ai-hint="movie collage"
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 max-w-4xl mx-auto px-4">
                <h1 className="text-5xl md:text-7xl font-black text-white drop-shadow-lg">
                    Your Universe of Movies & TV Shows.
                </h1>
                <p className="mt-4 text-lg md:text-xl text-white/90 drop-shadow-md">
                    Unlimited movies, TV shows, and more. Watch anywhere. Cancel anytime.
                </p>
                <div className="mt-8">
                    <Button size="lg" asChild>
                        <Link href="/signup">
                           Get Started
                        </Link>
                    </Button>
                </div>
            </div>
        </section>

        <section className="py-20 bg-card">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-12 text-center">
                    <div className="flex flex-col items-center">
                        <Tv className="h-12 w-12 text-primary mb-4" />
                        <h3 className="text-2xl font-bold">Watch on any device</h3>
                        <p className="text-muted-foreground mt-2">Stream on your phone, tablet, laptop, and TV.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Clapperboard className="h-12 w-12 text-primary mb-4" />
                        <h3 className="text-2xl font-bold">Endless entertainment</h3>
                        <p className="text-muted-foreground mt-2">Discover new and classic movies and TV shows.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Award className="h-12 w-12 text-primary mb-4" />
                        <h3 className="text-2xl font-bold">Award-winning content</h3>
                        <p className="text-muted-foreground mt-2">Enjoy critically acclaimed original productions.</p>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to watch?</h2>
            <p className="text-muted-foreground mb-8">Enter your email to create or restart your membership.</p>
            <div className="flex justify-center">
                <Button size="lg" asChild>
                    <Link href="/signup">
                       Sign Up Now
                    </Link>
                </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
