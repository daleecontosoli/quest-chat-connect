
import React from 'react';
import UserCard from '@/components/UserCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface User {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatarUrl?: string;
  skills: string[];
}

const Circle = () => {
  // Mock data for users
  const users: User[] = [
    {
      id: '1',
      name: 'Alex Chen',
      role: 'General Handyman',
      bio: 'A skilled general handyman providing reliable repair, maintenance, and installation services for homes and businesses.',
      avatarUrl: undefined,
      skills: ['Painting', 'Planting', 'General Handyman']
    },
    {
      id: '2',
      name: 'Taylor Johnson',
      role: 'Plumber',
      bio: 'Experienced plumber specializing in residential and commercial plumbing installations, repairs, and maintenance to ensure efficient and reliable water systems.',
      avatarUrl: undefined,
      skills: ['Sinks', 'Bathrooms', 'Water Heaters']
    },
    {
      id: '3',
      name: 'Samir Patel',
      role: 'Rickshaw Driver Extraordinaire',
      bio: 'I move people.',
      avatarUrl: undefined,
      skills: ['Bajaj Auto', 'Piaggio', 'Mahindra']
    },
    {
      id: '4',
      name: 'Professor Potato',
      role: 'Circle Lead',
      bio: 'Your friendly AI who will coach you on your journey.',
      avatarUrl: 'https://i.postimg.cc/tJpVNCjD/Chat-GPT-Image-Apr-30-2025-06-34-21-PM.png',
      skills: ['Finance', 'Discussion Lead', 'Sprouting']
    },
    {
      id: '5',
      name: 'Jamie Rodriguez',
      role: 'Kitchen Engineer',
      bio: 'Doing more than cooking.',
      avatarUrl: undefined,
      skills: ['Sink', 'Remodeling', 'Cabinets']
    },
    {
      id: '6',
      name: 'Morgan Lee',
      role: 'Roofer',
      bio: 'Experienced roofer specializing in the installation, repair, and maintenance of residential and commercial roofing systems to ensure durability and weather resistance.',
      avatarUrl: undefined,
      skills: ['Metal Roofs', 'Solar Install', 'Roof Repair']
    }
  ];

  return (
    <div className="flex flex-col h-screen">
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold">Your Circle</h1>
      </div>

      <div className="p-4">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="all">All Members</TabsTrigger>
            <TabsTrigger value="team">Learners</TabsTrigger>
            <TabsTrigger value="mentors">Mentors</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {users.map((user) => (
                <UserCard key={user.id} user={user} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="team" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {users.filter(user => user.id !== '4').map((user) => (
                <UserCard key={user.id} user={user} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="mentors" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {users.filter(user => user.id === '4').map((user) => (
                <UserCard key={user.id} user={user} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Circle;
