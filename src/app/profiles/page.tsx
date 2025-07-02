import Link from 'next/link';
import Image from 'next/image';
import { profiles } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ProfilesPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <div className="text-center">
        <h1 className="text-5xl font-semibold mb-8">Who's watching?</h1>
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {profiles.map((profile) => (
            <Link key={profile.id} href="/browse" className="group">
              <div className="w-40 h-40 rounded-md overflow-hidden transition-all duration-300 border-2 border-transparent group-hover:border-primary group-hover:scale-105">
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                  data-ai-hint="person face"
                />
              </div>
              <p className="mt-2 text-muted-foreground text-lg group-hover:text-foreground transition-colors">
                {profile.name}
              </p>
            </Link>
          ))}
        </div>
        <Button variant="outline" size="lg" className="text-muted-foreground border-muted-foreground hover:bg-muted-foreground/10 hover:text-foreground">
          Manage Profiles
        </Button>
      </div>
    </div>
  );
}