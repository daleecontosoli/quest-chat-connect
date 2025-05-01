
import React from 'react';
import ChallengeCard from '@/components/ChallengeCard';
import LeaderboardItem from '@/components/LeaderboardItem';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const Challenges = () => {
  // Mock data for challenges
  const challenges = [
    { 
      id: 1, 
      title: "Electrical Fundamentals", 
      description: "Test your knowledge of Electrical basics including wiring and building code requirements.", 
      points: 100, 
      difficulty: "easy" as const
    },
    { 
      id: 2, 
      title: "React Component Design", 
      description: "Create efficient and reusable React components following best practices and patterns.", 
      points: 200, 
      difficulty: "medium" as const 
    },
    { 
      id: 3, 
      title: "Advanced Algorithms", 
      description: "Solve complex algorithmic challenges focusing on optimization and efficiency.", 
      points: 350, 
      difficulty: "hard" as const
    },
    { 
      id: 4, 
      title: "API Integration", 
      description: "Build a small application that connects to external APIs and processes data.", 
      points: 250, 
      difficulty: "medium" as const
    },
  ];

  // Mock data for leaderboard
  const leaderboard = [
    { id: 1, name: "Sarah Johnson", rank: 1, score: 1250, avatarUrl: undefined },
    { id: 2, name: "Michael Chen", rank: 2, score: 1120, avatarUrl: undefined },
    { id: 3, name: "Jessica Williams", rank: 3, score: 980, avatarUrl: undefined },
    { id: 4, name: "David Rodriguez", rank: 4, score: 840, avatarUrl: undefined },
    { id: 5, name: "Emily Parker", rank: 5, score: 760, avatarUrl: undefined },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Learning Challenges</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Complete challenges to earn points and improve your skills
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Available Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {challenges.map((challenge) => (
              <ChallengeCard
                key={challenge.id}
                title={challenge.title}
                description={challenge.description}
                points={challenge.points}
                difficulty={challenge.difficulty}
              />
            ))}
          </div>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Leaderboard</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {leaderboard.map((user) => (
                  <LeaderboardItem
                    key={user.id}
                    name={user.name}
                    rank={user.rank}
                    score={user.score}
                    avatarUrl={user.avatarUrl}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
