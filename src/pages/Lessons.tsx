
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { DollarSign, FileVideo, BookOpen } from "lucide-react";

interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  category: 'basics' | 'advanced' | 'strategies';
  duration: string;
}

const Lessons = () => {
  const [activeCategory, setActiveCategory] = useState<string>("basics");
  
  const videos: VideoItem[] = [
    {
      id: "1",
      title: "Small Business Cash Flow Basics",
      description: "Learn the fundamentals of managing cash flow for your small business",
      thumbnailUrl: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?auto=format&fit=crop&q=80&w=600&h=400",
      videoUrl: "https://example.com/video1",
      category: "basics",
      duration: "12:45"
    },
    {
      id: "2",
      title: "Setting Up Your Business Budget",
      description: "A step-by-step guide to creating an effective business budget",
      thumbnailUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21ed6c?auto=format&fit=crop&q=80&w=600&h=400",
      videoUrl: "https://example.com/video2",
      category: "basics",
      duration: "15:20"
    },
    {
      id: "3",
      title: "Tax Planning for Small Businesses",
      description: "Essential tax strategies to minimize liabilities for small business owners",
      thumbnailUrl: "https://images.unsplash.com/photo-1586486855514-8c631ae88ee8?auto=format&fit=crop&q=80&w=600&h=400",
      videoUrl: "https://example.com/video3",
      category: "basics",
      duration: "18:10"
    },
    {
      id: "4",
      title: "Investment Strategies for Business Growth",
      description: "Learn how to reinvest profits for sustainable business growth",
      thumbnailUrl: "https://images.unsplash.com/photo-1589666564459-93cdd3ab856c?auto=format&fit=crop&q=80&w=600&h=400",
      videoUrl: "https://example.com/video4",
      category: "advanced",
      duration: "22:35"
    },
    {
      id: "5",
      title: "Managing Business Credit",
      description: "How to build and leverage business credit effectively",
      thumbnailUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=600&h=400",
      videoUrl: "https://example.com/video5",
      category: "advanced",
      duration: "14:55"
    },
    {
      id: "6",
      title: "Financial Risk Management",
      description: "Identifying and mitigating financial risks in your small business",
      thumbnailUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=400",
      videoUrl: "https://example.com/video6",
      category: "advanced",
      duration: "20:15"
    },
    {
      id: "7",
      title: "Profit First Methodology",
      description: "Implementing the Profit First system in your business finances",
      thumbnailUrl: "https://images.unsplash.com/photo-1607863680198-23b434e6d8b4?auto=format&fit=crop&q=80&w=600&h=400",
      videoUrl: "https://example.com/video7",
      category: "strategies",
      duration: "25:30"
    },
    {
      id: "8",
      title: "Financial Forecasting for Small Businesses",
      description: "How to create realistic financial projections for your business",
      thumbnailUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=400",
      videoUrl: "https://example.com/video8",
      category: "strategies",
      duration: "19:45"
    },
    {
      id: "9",
      title: "Building Financial Resilience",
      description: "Strategies to strengthen your business against economic downturns",
      thumbnailUrl: "https://images.unsplash.com/photo-1664575599736-c5197c684128?auto=format&fit=crop&q=80&w=600&h=400",
      videoUrl: "https://example.com/video9",
      category: "strategies",
      duration: "17:20"
    }
  ];
  
  // Filter videos based on active category
  const filteredVideos = videos.filter(video => video.category === activeCategory);

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Money Management Lessons</h1>
          <p className="text-muted-foreground">Video tutorials to help your small business thrive financially</p>
        </div>

        <Tabs defaultValue="basics" onValueChange={setActiveCategory} className="space-y-4">
          <TabsList>
            <TabsTrigger value="basics">
              <DollarSign className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Financial Basics</span>
              <span className="sm:hidden">Basics</span>
            </TabsTrigger>
            <TabsTrigger value="advanced">
              <BookOpen className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Advanced Topics</span>
              <span className="sm:hidden">Advanced</span>
            </TabsTrigger>
            <TabsTrigger value="strategies">
              <FileVideo className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Strategic Planning</span>
              <span className="sm:hidden">Strategy</span>
            </TabsTrigger>
          </TabsList>

          {["basics", "advanced", "strategies"].map((category) => (
            <TabsContent key={category} value={category} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVideos.map((video) => (
                  <Card key={video.id} className="overflow-hidden transition-all hover:shadow-lg">
                    <div className="relative">
                      <img 
                        src={video.thumbnailUrl}
                        alt={video.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{video.title}</CardTitle>
                      <CardDescription>{video.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full">
                        <FileVideo className="mr-2 h-4 w-4" />
                        Watch Video
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Lessons;
