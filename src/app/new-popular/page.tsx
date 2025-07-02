import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ContentRow from '@/components/ContentRow';
import Recommendations from '@/components/Recommendations';
import { contentData } from '@/lib/data';

export default function NewPopularPage() {
  const currentYear = new Date().getFullYear();
  const newContent = contentData
    .filter((c) => c.year >= currentYear - 2)
    .sort((a, b) => b.year - a.year);
    
  const heroContent = newContent.length > 0 ? newContent[0] : null;

  if (!heroContent) {
    return (
       <div className="bg-background">
        <Header />
        <main className="container mx-auto px-4 py-36 text-center">
          <h1 className="text-3xl font-bold">No New & Popular Content Found</h1>
          <p className="text-muted-foreground mt-2">There is currently no new content available. Please check back later.</p>
        </main>
        <Footer />
      </div>
    );
  }

  const contentByYear: { [year: number]: typeof contentData } = newContent.reduce((acc, item) => {
    const year = item.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(item);
    return acc;
  }, {} as { [year: number]: typeof contentData });


  return (
    <div className="bg-background">
      <Header />
      <main>
        <Hero content={heroContent} />
        <div className="container mx-auto px-4 -mt-16 md:-mt-24 lg:-mt-32 relative z-10">
          {Object.entries(contentByYear)
            .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
            .map(([year, content]) => (
            <ContentRow
              key={year}
              title={`Released in ${year}`}
              content={content}
            />
          ))}
          <Recommendations />
        </div>
      </main>
      <Footer />
    </div>
  );
}