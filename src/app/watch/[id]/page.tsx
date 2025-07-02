'use client';

import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Plus, ThumbsUp, ThumbsDown, Loader2 } from 'lucide-react';

import { contentData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import ContentRow from '@/components/ContentRow';
import { useAuth } from '@/hooks/useAuth';

export default function WatchPage() {
  const params = useParams<{ id: string }>();
  const { user, loading } = useAuth();
  const content = contentData.find((c) => c.id === params.id);

  if (!content) {
    notFound();
  }

  const similarContent = contentData.filter(
    (c) => c.genre === content.genre && c.id !== content.id
  );
  
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen">
      <div className="relative pt-[56.25%] bg-black">
        {user ? (
          <video
            className="absolute top-0 left-0 w-full h-full"
            controls
            autoPlay
            src={content.videoUrl}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center text-white bg-black/80">
            <h2 className="text-3xl font-bold">Please sign in to watch</h2>
            <p className="text-muted-foreground max-w-sm">
              Create an account or log in to enjoy this content and much more from Strimo.
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <Link href={`/login?redirect=/watch/${params.id}`}>Login</Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href={`/signup?redirect=/watch/${params.id}`}>Sign Up</Link>
              </Button>
            </div>
          </div>
        )}
        <div className="absolute top-4 left-4 z-10">
          <Button asChild variant="ghost" size="icon" className="h-12 w-12 rounded-full bg-black/50 hover:bg-black/75">
            <Link href="/browse">
              <ArrowLeft className="h-8 w-8 text-white" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-8 text-white">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-black mb-2">{content.title}</h1>
          <div className="flex items-center gap-4 text-muted-foreground mb-4">
            <span>{content.year}</span>
            <span>{content.duration}</span>
            <span className="border px-1.5 rounded text-xs">{content.rating}</span>
          </div>
          <p className="mb-6">{content.description}</p>
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <Button size="lg">
              <Plus className="mr-2 h-5 w-5" /> My List
            </Button>
            <Button variant="secondary" size="icon">
              <ThumbsUp className="h-5 w-5" />
            </Button>
            <Button variant="secondary" size="icon">
              <ThumbsDown className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="text-sm">
            <p className="text-muted-foreground">
              <span className="font-semibold text-white/90">Cast:</span> {content.cast.join(', ')}
            </p>
            <p className="text-muted-foreground mt-2">
              <span className="font-semibold text-white/90">Genres:</span> {content.genre}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 pb-16">
        <ContentRow title="More Like This" content={similarContent} />
      </div>
    </div>
  );
}
