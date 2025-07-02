import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { type Content } from '@/lib/data';
import MediaCard from './MediaCard';

type ContentRowProps = {
  title: string;
  content: Content[];
};

export default function ContentRow({ title, content }: ContentRowProps) {
  if (!content || content.length === 0) {
    return null;
  }
  
  return (
    <div className="py-6">
      <h2 className="text-2xl font-bold mb-4 ml-4 md:ml-0">{title}</h2>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2">
          {content.map((item) => (
            <CarouselItem key={item.id} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 pl-2">
              <MediaCard content={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-12 hidden md:flex" />
        <CarouselNext className="mr-12 hidden md:flex" />
      </Carousel>
    </div>
  );
}
