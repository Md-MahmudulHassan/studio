import Link from 'next/link';
import Image from 'next/image';
import { Play, Plus } from 'lucide-react';

import { type Content } from '@/lib/data';
import { Button } from './ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type MediaCardProps = {
  content: Content;
};

export default function MediaCard({ content }: MediaCardProps) {
  return (
    <TooltipProvider delayDuration={200}>
      <div className="group relative rounded-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:z-10">
        <Link href={`/watch/${content.id}`}>
          <Image
            src={content.thumbnailUrl}
            alt={content.title}
            width={300}
            height={450}
            className="object-cover w-full h-full"
            data-ai-hint="movie poster"
          />
        </Link>
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="font-bold text-white truncate">{content.title}</h3>
          <div className="flex items-center gap-2 mt-1">
             <Tooltip>
                <TooltipTrigger asChild>
                    <Button size="icon" className="h-8 w-8 bg-primary/80 hover:bg-primary" asChild>
                        <Link href={`/watch/${content.id}`}>
                        <Play className="h-4 w-4 fill-white" />
                        </Link>
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Play</p>
                </TooltipContent>
            </Tooltip>
             <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="secondary" size="icon" className="h-8 w-8">
                        <Plus className="h-4 w-4" />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Add to My List</p>
                </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
