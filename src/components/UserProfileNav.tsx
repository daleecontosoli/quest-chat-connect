
import React from 'react';
import { Settings } from 'lucide-react';
import UserAvatar from './UserAvatar';
import { Button } from './ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

interface UserProfileNavProps {
  name: string;
  avatarUrl?: string;
}

const UserProfileNav = ({ name, avatarUrl }: UserProfileNavProps) => {
  return (
    <div className="flex items-center justify-between gap-3 p-4 border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="flex items-center gap-3">
        <UserAvatar src={avatarUrl} name={name} size="sm" />
        <span className="font-medium truncate">{name}</span>
      </div>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Settings className="h-5 w-5" />
            <span className="sr-only">Settings</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Settings</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default UserProfileNav;
