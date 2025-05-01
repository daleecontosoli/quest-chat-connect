
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Award, MessageSquare, HelpCircle, Users, LinkIcon, Video, UserRound } from 'lucide-react';
import { cn } from '@/lib/utils';
import UserProfileNav from './UserProfileNav';

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    {
      title: 'Your Circle',
      path: '/circle',
      icon: <UserRound className="h-5 w-5" />
    },
    {
      title: 'Lessons',
      path: '/lessons',
      icon: <Video className="h-5 w-5" />
    },
    {
      title: 'Quizzes',
      path: '/challenges',
      icon: <Award className="h-5 w-5" />
    },
    {
      title: 'Daily Challenge',
      path: '/chat',
      icon: <MessageSquare className="h-5 w-5" />
    },
    {
      title: 'Social',
      path: '/social',
      icon: <Users className="h-5 w-5" />
    },
    {
      title: 'Resources',
      path: '/resources',
      icon: <LinkIcon className="h-5 w-5" />
    },
    {
      title: 'Q&A',
      path: '/qa',
      icon: <HelpCircle className="h-5 w-5" />
    }
  ];

  // Mock user data - in a real application, this would come from authentication
  const currentUser = {
    name: "Samir Patel",
    avatarUrl: undefined
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 md:relative md:bottom-auto md:left-auto md:right-auto bg-white dark:bg-gray-900 shadow-lg md:shadow-none border-t md:border-t-0 md:border-r border-gray-200 dark:border-gray-800">
      <div className="flex md:flex-col md:h-screen md:w-64 md:py-8 md:px-4">
        <div className="hidden md:flex items-center gap-3 px-4 mb-8">
          <img src="https://i.postimg.cc/PqnZ5MRB/Chat-GPT-Image-Apr-30-2025-07-23-14-PM.png"></img>
        </div>
        
        <div className="flex justify-around md:flex-col w-full md:space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "nav-item",
                location.pathname === item.path && "active"
              )}
            >
              {item.icon}
              <span className="hidden md:block">{item.title}</span>
            </Link>
          ))}
        </div>
        
        {/* User profile component - only visible on desktop */}
        <div className="hidden md:block mt-auto">
          <UserProfileNav name={currentUser.name} avatarUrl={currentUser.avatarUrl} />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
