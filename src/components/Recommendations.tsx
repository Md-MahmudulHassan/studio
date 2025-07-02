'use client';

import { useState } from 'react';
import { recommendContent, RecommendContentOutput } from '@/ai/flows/recommend-content';
import { contentData, Content } from '@/lib/data';
import { Button } from './ui/button';
import ContentRow from './ContentRow';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

export default function Recommendations() {
  const [recommendations, setRecommendations] = useState<RecommendContentOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGetRecommendations = async () => {
    setIsLoading(true);
    try {
      const result = await recommendContent({
        viewingHistory: ['1', '3', '6'], // Mock data
        preferences: 'I enjoy sci-fi thrillers with a complex plot and strong world-building.', // Mock data
      });
      setRecommendations(result);
    } catch (error) {
      console.error(error);
      toast({
        title: 'Error',
        description: 'Failed to get recommendations. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const recommendedContent = contentData.filter(item => recommendations?.recommendations.includes(item.id));

  return (
    <div className="py-6">
      {!recommendations && (
        <div className="text-center p-8 border-2 border-dashed border-border rounded-lg">
          <h2 className="text-2xl font-bold mb-2">Want personalized recommendations?</h2>
          <p className="text-muted-foreground mb-4">Click the button to let our AI find content you'll love.</p>
          <Button onClick={handleGetRecommendations} disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Get AI Recommendations
          </Button>
        </div>
      )}
      {recommendations && (
         <>
         <p className="text-muted-foreground mb-4 ml-4 md:ml-0 italic">AI-powered recommendations based on your taste. {recommendations.reasoning}</p>
        <ContentRow title="Recommended For You" content={recommendedContent} />
         </>
      )}
    </div>
  );
}
