
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import UserAvatar from './UserAvatar';
import { formatDistanceToNow } from 'date-fns';
import { MessageSquare, Trophy } from 'lucide-react';

interface QuestionCardProps {
  title: string;
  content: string;
  author: {
    name: string;
    avatarUrl?: string;
  };
  timestamp: Date;
  answersCount: number;
  voteCount: number;
}

const QuestionCard = ({ title, content, author, timestamp, answersCount, voteCount }: QuestionCardProps) => {
  const [votes, setVotes] = useState(voteCount);
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = () => {
    if (hasVoted) {
      setVotes(votes - 1);
    } else {
      setVotes(votes + 1);
    }
    setHasVoted(!hasVoted);
  };

  return (
    <Card className="mb-4">
      <CardHeader className="pb-2">
        <div className="flex justify-between">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <div className="flex items-center text-sm text-gray-500">
            <span>{formatDistanceToNow(timestamp, { addSuffix: true })}</span>
          </div>
        </div>
        <div className="flex items-center mt-2">
          <UserAvatar name={author.name} src={author.avatarUrl} size="sm" />
          <span className="text-sm ml-2">{author.name}</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">{content}</p>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-3">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="sm" 
            className={`flex items-center gap-1 ${hasVoted ? 'text-purple-600' : ''}`}
            onClick={handleVote}
          >
            <Trophy className="h-4 w-4" />
            <span>{votes}</span>
          </Button>
          <div className="flex items-center text-gray-500 text-sm">
            <MessageSquare className="h-4 w-4 mr-1" />
            <span>{answersCount} answers</span>
          </div>
        </div>
        <Button variant="outline" size="sm">View</Button>
      </CardFooter>
    </Card>
  );
};

export default QuestionCard;
