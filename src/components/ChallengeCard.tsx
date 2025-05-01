
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award } from 'lucide-react';

interface ChallengeCardProps {
  title: string;
  description: string;
  points: number;
  difficulty: 'easy' | 'medium' | 'hard';
}

const ChallengeCard = ({ title, description, points, difficulty }: ChallengeCardProps) => {
  const difficultyColor = {
    easy: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    hard: 'bg-red-100 text-red-800'
  };

  return (
    <Card className="overflow-hidden border-2 border-gray-100 dark:border-gray-800 hover:border-purple-400 dark:hover:border-purple-700 transition-all">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <span className={`text-xs px-2 py-1 rounded-full ${difficultyColor[difficulty]}`}>
            {difficulty}
          </span>
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center border-t pt-3 bg-gray-50 dark:bg-gray-900">
        <div className="flex items-center text-sm">
          <Award className="h-4 w-4 text-purple-500 mr-1" />
          <span>{points} points</span>
        </div>
        <Button size="sm">Take Challenge</Button>
      </CardFooter>
    </Card>
  );
};

export default ChallengeCard;
