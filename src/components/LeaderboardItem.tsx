
import React from 'react';
import UserAvatar from './UserAvatar';

interface LeaderboardItemProps {
  name: string;
  rank: number;
  score: number;
  avatarUrl?: string;
}

const LeaderboardItem = ({ name, rank, score, avatarUrl }: LeaderboardItemProps) => {
  return (
    <div className="flex items-center p-3 border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all">
      <div className="w-8 text-center font-medium text-gray-500">
        {rank}
      </div>
      <div className="flex items-center flex-1 ml-3">
        <UserAvatar name={name} src={avatarUrl} size="sm" />
        <span className="ml-3 font-medium">{name}</span>
      </div>
      <div className="font-semibold text-purple-600 dark:text-purple-400">
        {score} points
      </div>
    </div>
  );
};

export default LeaderboardItem;
