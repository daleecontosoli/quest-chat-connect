
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
      role: 'Frontend Developer',
      bio: 'Passionate about UI/UX and creating responsive designs. Currently learning about accessibility.',
      avatarUrl: undefined,
      skills: ['React', 'TypeScript', 'Tailwind CSS']
    },
    {
      id: '2',
      name: 'Taylor Johnson',
      role: 'Backend Engineer',
      bio: 'Building scalable APIs and database solutions. Open source contributor.',
      avatarUrl: undefined,
      skills: ['Node.js', 'PostgreSQL', 'GraphQL']
    },
    {
      id: '3',
      name: 'Samir Patel',
      role: 'Full Stack Developer',
      bio: 'Experienced in building complete web applications. Love to experiment with new technologies.',
      avatarUrl: undefined,
      skills: ['React', 'Express', 'MongoDB']
    },
    {
      id: '4',
      name: 'Professor Potato',
      role: 'Technical Lead',
      bio: 'Guiding teams to build great products. Focused on architecture and best practices.',
      avatarUrl: 'https://i.postimg.cc/tJpVNCjD/Chat-GPT-Image-Apr-30-2025-06-34-21-PM.png',
      skills: ['System Design', 'Team Leadership', 'Cloud Architecture']
    },
    {
      id: '5',
      name: 'Jamie Rodriguez',
      role: 'DevOps Engineer',
      bio: 'Automating everything that can be automated. CI/CD pipeline expert.',
      avatarUrl: undefined,
      skills: ['Docker', 'Kubernetes', 'Terraform']
    },
    {
      id: '6',
      name: 'Morgan Lee',
      role: 'UX Designer',
      bio: 'Creating intuitive and delightful user experiences. User research enthusiast.',
      avatarUrl: undefined,
      skills: ['Figma', 'User Testing', 'Wireframing']
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
            <TabsTrigger value="team">Team</TabsTrigger>
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
              {users.filter(user => ['Frontend Developer', 'Backend Engineer', 'Full Stack Developer'].includes(user.role)).map((user) => (
                <UserCard key={user.id} user={user} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="mentors" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {users.filter(user => ['Technical Lead', 'UX Designer'].includes(user.role)).map((user) => (
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
