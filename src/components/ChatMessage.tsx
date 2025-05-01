
import React from 'react';
import UserAvatar from './UserAvatar';
import { formatDistanceToNow } from 'date-fns';

interface ChatMessageProps {
  content: string;
  sender: {
    name: string;
    avatarUrl?: string;
  };
  timestamp: Date;
  isCurrentUser?: boolean;
  imageUrl?: string;
}

const ChatMessage = ({ content, sender, timestamp, isCurrentUser = false, imageUrl }: ChatMessageProps) => {
  return (
    <div className={`flex gap-3 mb-4 ${isCurrentUser ? 'flex-row-reverse' : ''}`}>
      <div className="flex-shrink-0">
        <UserAvatar name={sender.name} src={sender.avatarUrl} size="sm" />
      </div>
      <div className={`max-w-[75%] ${isCurrentUser ? 'bg-purple-500 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200'} rounded-2xl p-3`}>
        <div className="flex items-center mb-1">
          {!isCurrentUser && <span className="font-medium text-sm">{sender.name}</span>}
          <span className={`text-xs ${isCurrentUser ? 'text-purple-200' : 'text-gray-500 dark:text-gray-400'} ml-2`}>
            {formatDistanceToNow(timestamp, { addSuffix: true })}
          </span>
        </div>
        <p className="text-sm whitespace-pre-line">{content}</p>
        {imageUrl && (
          <div className="mt-2 rounded-lg overflow-hidden">
            <img 
              src={imageUrl} 
              alt="Shared image" 
              className="w-full h-auto max-h-80 object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
