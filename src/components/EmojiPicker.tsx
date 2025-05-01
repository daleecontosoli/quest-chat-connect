
import React from 'react';
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Smile, Heart, ThumbsUp, ThumbsDown, Laugh, Frown, Meh, CircleCheck, CircleX } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EmojiPickerProps {
  onEmojiSelect: (emoji: string) => void;
}

const emojis = [
  { icon: <Smile className="h-4 w-4" />, emoji: '😊' },
  { icon: <Heart className="h-4 w-4" />, emoji: '❤️' },
  { icon: <ThumbsUp className="h-4 w-4" />, emoji: '👍' },
  { icon: <ThumbsDown className="h-4 w-4" />, emoji: '👎' },
  { icon: <Laugh className="h-4 w-4" />, emoji: '😂' },
  { icon: <Frown className="h-4 w-4" />, emoji: '😔' },
  { icon: <Meh className="h-4 w-4" />, emoji: '😐' },
  { icon: <CircleCheck className="h-4 w-4" />, emoji: '✅' },
  { icon: <CircleX className="h-4 w-4" />, emoji: '❌' },
];

export function EmojiPicker({ onEmojiSelect }: EmojiPickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-white dark:bg-gray-800 shadow-sm">
          <Smile className="h-4 w-4" />
          <span className="sr-only">Add reaction</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-2" align="center" sideOffset={5}>
        <div className="flex gap-1">
          {emojis.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full hover:bg-accent"
              onClick={() => onEmojiSelect(item.emoji)}
            >
              {item.icon}
              <span className="sr-only">{item.emoji}</span>
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
