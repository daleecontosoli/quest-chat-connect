
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import UserAvatar from './UserAvatar';

interface User {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatarUrl?: string;
  skills: string[];
}

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex items-center space-x-4">
          <UserAvatar src={user.avatarUrl} name={user.name} size="lg" />
          <div>
            <h3 className="font-semibold text-lg">{user.name}</h3>
            <p className="text-sm text-muted-foreground">{user.role}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{user.bio}</p>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-1 pt-0">
        {user.skills && user.skills.map((skill, index) => (
          <Badge key={index} variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-200">
            {skill}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
};

export default UserCard;
