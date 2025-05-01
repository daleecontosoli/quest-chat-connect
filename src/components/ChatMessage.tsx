
import React from 'react';
import UserAvatar from './UserAvatar';
import { formatDistanceToNow } from 'date-fns';
import { Heart, ThumbsUp, Smile, Laugh, Frown } from 'lucide-react';
import { EmojiPicker } from './EmojiPicker';
import { cn } from '@/lib/utils';

export type EmojiReaction = {
  emoji: string;
  count: number;
  users: string[];
};

interface ChatMessageProps {
  id: number;
  content: string;
  sender: {
    name: string;
    avatarUrl?: string;
  };
  timestamp: Date;
  isCurrentUser?: boolean;
  imageUrl?: string;
  reactions?: EmojiReaction[];
  onAddReaction?: (messageId: number, emoji: string) => void;
  isSponsored?: boolean;
}

const ChatMessage = ({ 
  id,
  content, 
  sender, 
  timestamp, 
  isCurrentUser = false, 
  imageUrl,
  reactions = [],
  onAddReaction,
  isSponsored = false
}: ChatMessageProps) => {
  return (
    <div className={`flex gap-3 mb-4 ${isCurrentUser ? 'flex-row-reverse' : ''}`}>
      <div className="flex-shrink-0">
        <UserAvatar name={sender.name} src={sender.avatarUrl} size="sm" />
      </div>
      <div className={cn(
        "max-w-[75%] rounded-2xl p-3 relative group",
        isSponsored ? "bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800" : 
        isCurrentUser ? "bg-linkedin-500 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
      )}>
        <div className="flex items-center mb-1">
          {!isCurrentUser && (
            <>
              <span className="font-medium text-sm">{sender.name}</span>
              {isSponsored && (
                <span className="ml-2 text-xs bg-yellow-200 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200 px-1.5 py-0.5 rounded-full">
                  Ad
                </span>
              )}
            </>
          )}
          <span className={cn(
            "text-xs ml-2",
            isSponsored ? "text-yellow-700 dark:text-yellow-300" :
            isCurrentUser ? "text-linkedin-100" : "text-gray-500 dark:text-gray-400"
          )}>
            {formatDistanceToNow(timestamp, { addSuffix: true })}
          </span>
        </div>
        <p className={cn(
          "text-sm whitespace-pre-line",
          isSponsored ? "text-yellow-900 dark:text-yellow-100" : ""
        )}>
          {content}
        </p>
        {imageUrl && (
          <div className="mt-2 rounded-lg overflow-hidden">
            <img 
              src={imageUrl} 
              alt="Shared image" 
              className="w-full h-auto max-h-80 object-cover"
            />
          </div>
        )}
        
        {/* Reactions display */}
        {reactions.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {reactions.map((reaction, index) => (
              <button
                key={index}
                className={cn(
                  "flex items-center gap-1 px-2 py-0.5 rounded-full text-xs",
                  isCurrentUser 
                    ? "bg-linkedin-600 text-white hover:bg-linkedin-700" 
                    : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                )}
                onClick={() => onAddReaction?.(id, reaction.emoji)}
              >
                <span>{reaction.emoji}</span>
                <span>{reaction.count}</span>
              </button>
            ))}
          </div>
        )}
        
        {/* Emoji reaction picker */}
        {!isSponsored && (
          <div className={`absolute ${isCurrentUser ? 'left-2' : 'right-2'} -bottom-3 opacity-0 group-hover:opacity-100 transition-opacity`}>
            <EmojiPicker onEmojiSelect={(emoji) => onAddReaction?.(id, emoji)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
