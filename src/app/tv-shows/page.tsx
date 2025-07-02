import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ContentRow from '@/components/ContentRow';
import Recommendations from '@/components/Recommendations';
import { contentData } from '@/lib/data';

export default function TvShowsPage() {
  const tvShows = contentData.filter((c) => c.type === 'tv-show');
  const heroContent = tvShows.length > 0 ? tvShows[0] : null;

  if (!heroContent) {
    return (
       <div className="bg-background">
        <Header />
        <main className="container mx-auto px-4 py-36 text-center">
          <h1 className="text-3xl font-bold">No TV Shows Found</h1>
          <p className="text-muted-foreground mt-2">There are currently no TV shows available. Please check back later.</p>
        </main>
        <Footer />
      </div>
    );
  }

  const tvShowGenres = [...new Set(tvShows.map((m) => m.genre))];

  return (
    <div className="bg-background">
      <Header />
      <main>
        <Hero content={heroContent} />
        <div className="container mx-auto px-4 -mt-16 md:-mt-24 lg:-mt-32 relative z-10">
          {tvShowGenres.map((genre) => (
            <ContentRow
              key={genre}
              title={genre}
              content={tvShows.filter((c) => c.genre === genre)}
            />
          ))}
          <Recommendations />
        </div>
      </main>
      <Footer />
    </div>
  );
}