import Image from 'next/image';
import Link from 'next/link';
import { Play, Plus } from 'lucide-react';
import { Button } from './ui/button';
import { type Content } from '@/lib/data';

type HeroProps = {
  content: Content;
};

export default function Hero({ content }: HeroProps) {
  return (
    <div className="relative h-[56.25vw] min-h-[400px] max-h-[800px] w-full">
      <Image
        src={content.largeImageUrl}
        alt={content.title}
        fill
        className="object-cover"
        priority
        data-ai-hint="movie scene"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/20 to-transparent"></div>

      <div className="absolute bottom-[20%] md:bottom-[25%] lg:bottom-[30%] left-0 px-4 md:px-16">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white drop-shadow-lg">
            {content.title}
          </h1>
          <p className="mt-4 text-sm md:text-base lg:text-lg text-white/90 drop-shadow-md line-clamp-3">
            {content.description}
          </p>
          <div className="mt-6 flex items-center gap-4">
            <Button asChild size="lg">
              <Link href={`/watch/${content.id}`}>
                <Play className="mr-2 h-6 w-6 fill-current" />
                Play
              </Link>
            </Button>
            <Button variant="secondary" size="lg">
              <Plus className="mr-2 h-6 w-6" />
              My List
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
