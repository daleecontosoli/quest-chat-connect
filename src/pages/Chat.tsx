
import React, { useState } from 'react';
import ChatMessage from '@/components/ChatMessage';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

const Chat = () => {
  const [message, setMessage] = useState('');
  
  // Mock data for messages
  const initialMessages = [
    {
      id: 1,
      content: "Hey everyone! Has anyone completed the React Component Design challenge?",
      sender: { name: "Alex Thompson", avatarUrl: undefined },
      timestamp: new Date(2025, 4, 1, 9, 15),
      isCurrentUser: false
    },
    {
      id: 2,
      content: "I finished it yesterday. The key was to focus on component composition rather than inheritance.",
      sender: { name: "Jamie Rodriguez", avatarUrl: undefined },
      timestamp: new Date(2025, 4, 1, 9, 18),
      isCurrentUser: false
    },
    {
      id: 3,
      content: "Thanks for the tip! I was struggling with that part.",
      sender: { name: "Alex Thompson", avatarUrl: undefined },
      timestamp: new Date(2025, 4, 1, 9, 20),
      isCurrentUser: false
    },
    {
      id: 4, 
      content: "I'm working on it right now. Anyone have suggestions for handling component state management?",
      sender: { name: "You", avatarUrl: undefined },
      timestamp: new Date(2025, 4, 1, 9, 22),
      isCurrentUser: true
    },
    {
      id: 5,
      content: "I'd recommend using React hooks for simpler components and context for more complex state sharing. Also, don't forget to memoize components that don't need to re-render frequently!",
      sender: { name: "Taylor Kim", avatarUrl: undefined },
      timestamp: new Date(2025, 4, 1, 9, 25),
      isCurrentUser: false
    }
  ];

  const [messages, setMessages] = useState(initialMessages);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          content: message,
          sender: { name: "You", avatarUrl: undefined },
          timestamp: new Date(),
          isCurrentUser: true
        }
      ]);
      setMessage('');
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold">Community Chat</h1>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-3xl mx-auto">
          {messages.map((msg) => (
            <ChatMessage
              key={msg.id}
              content={msg.content}
              sender={msg.sender}
              timestamp={msg.timestamp}
              isCurrentUser={msg.isCurrentUser}
            />
          ))}
        </div>
      </div>
      <div className="p-4 border-t bg-white dark:bg-gray-900">
        <form onSubmit={handleSendMessage} className="max-w-3xl mx-auto flex gap-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button type="submit" size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
