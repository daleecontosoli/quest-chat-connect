
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Award, MessageSquare, HelpCircle, Users, LinkIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    {
      title: 'Challenges',
      path: '/challenges',
      icon: <Award className="h-5 w-5" />
    },
    {
      title: 'Daily Challenge Chat',
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

  return (
    <nav className="fixed bottom-0 left-0 right-0 md:relative md:bottom-auto md:left-auto md:right-auto bg-white dark:bg-gray-900 shadow-lg md:shadow-none border-t md:border-t-0 md:border-r border-gray-200 dark:border-gray-800">
      <div className="flex md:flex-col md:h-screen md:w-64 md:py-8 md:px-4">
        <div className="hidden md:flex items-center gap-3 px-4 mb-8">
          <div className="w-8 h-8 bg-linkedin-500 rounded-md flex items-center justify-center text-white font-bold">LLC</div>
          <h1 className="font-bold text-lg">LinkedIn AI Learning Circle</h1>
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
      </div>
    </nav>
  );
};

export default Navigation;
