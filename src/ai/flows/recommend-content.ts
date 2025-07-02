'use server';

/**
 * @fileOverview Recommends videos the user may enjoy, based on viewing history and preferences.
 *
 * - recommendContent - A function that handles the content recommendation process.
 * - RecommendContentInput - The input type for the recommendContent function.
 * - RecommendContentOutput - The return type for the recommendContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendContentInputSchema = z.object({
  viewingHistory: z
    .array(z.string())
    .describe('An array of video IDs representing the user\'s viewing history.'),
  preferences: z
    .string()
    .describe(
      'A description of the user\'s content preferences (e.g., genres, actors, directors).' + 
      'Example: action movies with strong female leads, directed by Christopher Nolan.'
    ),
});
export type RecommendContentInput = z.infer<typeof RecommendContentInputSchema>;

const RecommendContentOutputSchema = z.object({
  recommendations: z
    .array(z.string())
    .describe('An array of video IDs representing the recommended content.'),
  reasoning: z
    .string()
    .describe('The reasoning behind the recommendations.'),
});
export type RecommendContentOutput = z.infer<typeof RecommendContentOutputSchema>;

export async function recommendContent(input: RecommendContentInput): Promise<RecommendContentOutput> {
  return recommendContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendContentPrompt',
  input: {schema: RecommendContentInputSchema},
  output: {schema: RecommendContentOutputSchema},
  prompt: `You are a video recommendation expert. Given a user's viewing history and preferences, you will recommend videos that the user may enjoy.

  The output should be an array of video IDs (field name: recommendations) representing the recommended content.
  Also explain the reasoning behind the recommendations (field name: reasoning).

  User Viewing History: {{{viewingHistory}}}
  User Preferences: {{{preferences}}}
  `,
});

const recommendContentFlow = ai.defineFlow(
  {
    name: 'recommendContentFlow',
    inputSchema: RecommendContentInputSchema,
    outputSchema: RecommendContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
