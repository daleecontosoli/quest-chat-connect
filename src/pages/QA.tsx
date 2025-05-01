
import React from 'react';
import QuestionCard from '@/components/QuestionCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { HelpCircle, Search } from 'lucide-react';

const QA = () => {
  // Mock data for questions
  const questions = [
    {
      id: 1,
      title: "How do you handle clients who question your rates?",
      content: "Some of my clients think my rates are too high, but I'm barely breaking even. How do I handle this?",
      author: { name: "Samir Patel", avatarUrl: undefined },
      timestamp: new Date(2025, 4, 1, 8, 30),
      answersCount: 4,
      voteCount: 12
    },
    {
      id: 2,
      title: "Understanding async/await vs Promises",
      content: "I'm confused about when to use async/await versus regular Promises. What are the advantages of each approach and when should I prefer one over the other?",
      author: { name: "Jamie Smith", avatarUrl: undefined },
      timestamp: new Date(2025, 4, 1, 7, 15),
      answersCount: 6,
      voteCount: 18
    },
    {
      id: 3,
      title: "Best practices for state management in large applications",
      content: "As my application grows, I'm finding it harder to manage state efficiently. Should I use Context API, Redux, or something else? What are the trade-offs?",
      author: { name: "Taylor Wilson", avatarUrl: undefined },
      timestamp: new Date(2025, 3, 30, 15, 45),
      answersCount: 8,
      voteCount: 24
    },
    {
      id: 4,
      title: "How to handle form validation properly in React?",
      content: "I'm working on a complex form with various validation requirements. What's the most efficient approach to handle form validation in React while maintaining good user experience?",
      author: { name: "Jordan Lee", avatarUrl: undefined },
      timestamp: new Date(2025, 3, 30, 11, 20),
      answersCount: 5,
      voteCount: 15
    }
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Questions & Answers</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Get help from the community or share your knowledge
          </p>
        </div>
        <Button className="mt-4 md:mt-0">
          <HelpCircle className="mr-2 h-4 w-4" />
          Ask a Question
        </Button>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search questions..."
            className="pl-10"
          />
        </div>
      </div>

      <div className="space-y-4">
        {questions.map((question) => (
          <QuestionCard
            key={question.id}
            title={question.title}
            content={question.content}
            author={question.author}
            timestamp={question.timestamp}
            answersCount={question.answersCount}
            voteCount={question.voteCount}
          />
        ))}
      </div>
    </div>
  );
};

export default QA;
