import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import { motivationalQuotes } from '@/lib/data';
import { cn } from '@/lib/utils';

export function QuoteGenerator() {
  const [currentQuote, setCurrentQuote] = useState(motivationalQuotes[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const generateNewQuote = () => {
    setIsAnimating(true);
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    setCurrentQuote(motivationalQuotes[randomIndex]);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <Card className="max-w-2xl mx-auto bg-white/50 backdrop-blur-sm border-blue-100">
      <CardContent className="p-6">
        <div className="flex items-center justify-center mb-4">
          <Quote className="w-8 h-8 text-blue-500" />
        </div>
        <div
          className={cn(
            "transition-opacity duration-500",
            isAnimating ? "opacity-0" : "opacity-100"
          )}
        >
          <p className="text-xl text-gray-800 mb-4 italic">
            "{currentQuote.text}"
          </p>
          <p className="text-gray-600 font-medium">
            - {currentQuote.author}
          </p>
        </div>
        <Button
          onClick={generateNewQuote}
          className="mt-6 bg-blue-600 hover:bg-blue-700"
        >
          Generate New Quote
        </Button>
      </CardContent>
    </Card>
  );
}