import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ContentRow from '@/components/ContentRow';
import Recommendations from '@/components/Recommendations';
import { contentData, genres } from '@/lib/data';

export default function BrowsePage() {
  const heroContent = contentData.find(c => c.id === '1');

  if (!heroContent) {
    return null; // or a loading/error state
  }

  return (
    <div className="bg-background">
      <Header />
      <main>
        <Hero content={heroContent} />
        <div className="container mx-auto px-4 -mt-16 md:-mt-24 lg:-mt-32 relative z-10">
          {genres.map((genre) => (
            <ContentRow
              key={genre}
              title={genre}
              content={contentData.filter((c) => c.genre === genre || (genre === 'Trending Now' && ['1','2','9'].includes(c.id)))}
            />
          ))}
          <Recommendations />
        </div>
      </main>
      <Footer />
    </div>
  );
}
