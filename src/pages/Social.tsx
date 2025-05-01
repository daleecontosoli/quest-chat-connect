
import React, { useState } from 'react';
import ChatMessage, { EmojiReaction } from '@/components/ChatMessage';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send, Image } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: number;
  content: string;
  sender: { name: string; avatarUrl?: string };
  timestamp: Date;
  isCurrentUser: boolean;
  imageUrl?: string;
  reactions: EmojiReaction[];
  isSponsored?: boolean;
}

const Social = () => {
  const [message, setMessage] = useState('');
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const { toast } = useToast();
  
  // Mock data for messages
  const initialMessages: Message[] = [
    {
      id: 1,
      content: "Welcome to the Social chat! This is where we can discuss anything not related to challenges.",
      sender: { name: "Professor Potato", avatarUrl: "https://i.postimg.cc/tJpVNCjD/Chat-GPT-Image-Apr-30-2025-06-34-21-PM.png" },
      timestamp: new Date(2025, 4, 1, 8, 30),
      isCurrentUser: false,
      reactions: [
        { emoji: '👋', count: 5, users: ['User1', 'User2', 'User3', 'User4', 'User5'] },
        { emoji: '❤️', count: 3, users: ['User1', 'User2', 'User3'] }
      ]
    },
    {
      id: 2,
      content: "Hello everyone! I need a new portable generator.  At least 8kW.",
      sender: { name: "Alex Chen", avatarUrl: undefined },
      timestamp: new Date(2025, 4, 1, 8, 35),
      isCurrentUser: false,
      reactions: [
        { emoji: '👋', count: 2, users: ['User1', 'User2'] },
        { emoji: '🎉', count: 1, users: ['User3'] }
      ]
    },
    {
      id: 3,
      content: "Hey Alex! I got a Generac GP a few months ago and am pretty happy with it.",
      sender: { name: "Taylor Johnson", avatarUrl: undefined },
      timestamp: new Date(2025, 4, 1, 8, 40),
      isCurrentUser: false,
      reactions: []
    },
    {
      id: 4,
      content: "I tried to use my F150 lightning instead but it didn't hold a big enough charge.",
      sender: { name: "Samir Patel", avatarUrl: "https://i.postimg.cc/Fzxm0hry/samir.jpg" },
      timestamp: new Date(2025, 4, 1, 9, 15),
      isCurrentUser: true,
      reactions: [
        { emoji: '👍', count: 3, users: ['User1', 'User2', 'User3'] },
        { emoji: '🔥', count: 2, users: ['User4', 'User5'] }
      ]
    },
    {
      id: 5,
      content: "Looking for reliable power during outages? The Generac GP8000E portable generator delivers 8,000 starting watts and 6,500 running watts - perfect for home backup! Features include: electric start, 7.9-gallon fuel tank for 11 hours of run time, and low-oil shutdown. Available now at authorized dealers.",
      sender: { name: "Sponsored", avatarUrl: "https://i.postimg.cc/J0gL1jHv/generac-logo.png" },
      timestamp: new Date(2025, 4, 1, 10, 0),
      isCurrentUser: false,
      reactions: [],
      isSponsored: true
    }
  ];

  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const validImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
      
      if (!validImageTypes.includes(file.type)) {
        toast({
          title: "Invalid file type",
          description: "Please select an image file (JPEG, PNG, GIF, WEBP)",
          variant: "destructive",
        });
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Image must be less than 5MB",
          variant: "destructive",
        });
        return;
      }

      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCancelImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() || selectedImage) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          content: message.trim(),
          sender: { name: "You", avatarUrl: undefined },
          timestamp: new Date(),
          isCurrentUser: true,
          imageUrl: imagePreview || undefined,
          reactions: []
        }
      ]);
      setMessage('');
      setSelectedImage(null);
      setImagePreview(null);
    }
  };

  const handleAddReaction = (messageId: number, emoji: string) => {
    setMessages(prevMessages => 
      prevMessages.map(msg => {
        if (msg.id === messageId) {
          // Check if this emoji reaction already exists
          const existingReactionIndex = msg.reactions.findIndex(r => r.emoji === emoji);
          
          if (existingReactionIndex > -1) {
            // If the reaction exists and the current user has already reacted, remove their reaction
            const existingUsers = msg.reactions[existingReactionIndex].users;
            const currentUser = "You"; // In a real app, this would be the actual user ID
            
            if (existingUsers.includes(currentUser)) {
              // User already reacted with this emoji, so remove their reaction
              const updatedUsers = existingUsers.filter(user => user !== currentUser);
              
              // If there are no more users for this reaction, remove it entirely
              if (updatedUsers.length === 0) {
                return {
                  ...msg,
                  reactions: msg.reactions.filter(r => r.emoji !== emoji)
                };
              }
              
              // Otherwise update the users and count
              return {
                ...msg,
                reactions: msg.reactions.map(r => 
                  r.emoji === emoji ? { ...r, users: updatedUsers, count: updatedUsers.length } : r
                )
              };
            } else {
              // User hasn't reacted with this emoji, so add their reaction
              return {
                ...msg,
                reactions: msg.reactions.map(r => 
                  r.emoji === emoji 
                    ? { ...r, users: [...r.users, currentUser], count: r.count + 1 } 
                    : r
                )
              };
            }
          } else {
            // This emoji reaction doesn't exist yet, so add it
            return {
              ...msg,
              reactions: [
                ...msg.reactions,
                { emoji, count: 1, users: ["You"] }
              ]
            };
          }
        }
        return msg;
      })
    );
    
    toast({
      description: "Reaction added",
    });
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold">Social</h1>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-3xl mx-auto">
          {messages.map((msg) => (
            <ChatMessage
              key={msg.id}
              id={msg.id}
              content={msg.content}
              sender={msg.sender}
              timestamp={msg.timestamp}
              isCurrentUser={msg.isCurrentUser}
              imageUrl={msg.imageUrl}
              reactions={msg.reactions}
              onAddReaction={handleAddReaction}
              isSponsored={msg.isSponsored}
            />
          ))}
        </div>
      </div>
      <div className="p-4 border-t bg-white dark:bg-gray-900">
        {imagePreview && (
          <div className="max-w-3xl mx-auto mb-2 relative">
            <div className="relative inline-block">
              <img 
                src={imagePreview} 
                alt="Preview" 
                className="h-20 w-auto rounded-md object-cover border border-gray-300"
              />
              <button 
                onClick={handleCancelImage}
                className="absolute -top-2 -right-2 bg-gray-900 text-white rounded-full w-5 h-5 flex items-center justify-center"
              >
                ×
              </button>
            </div>
          </div>
        )}
        <form onSubmit={handleSendMessage} className="max-w-3xl mx-auto flex gap-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
          />
          <div className="relative">
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              onChange={handleImageSelect}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              aria-label="Upload image"
            />
            <Button type="button" variant="outline" size="icon" className="relative">
              <Image className="h-4 w-4" />
            </Button>
          </div>
          <Button type="submit" size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Social;
