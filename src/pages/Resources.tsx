
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LinkIcon, Plus, Edit, Pencil } from "lucide-react";

interface ResourceLink {
  id: string;
  title: string;
  url: string;
  description: string;
}

const Resources = () => {
  const { toast } = useToast();
  const [links, setLinks] = useState<ResourceLink[]>([
    {
      id: '1',
      title: 'Small Business Administration: Financial Management',
      url: 'https://www.sba.gov/business-guide/manage-your-business/manage-your-finances',
      description: 'Official SBA guide to financial management for small businesses.'
    },
    {
      id: '2',
      title: 'QuickBooks Small Business Resource Center',
      url: 'https://quickbooks.intuit.com/r/financial-management/',
      description: 'Financial management articles, tips and tools for small business owners.'
    },
    {
      id: '3',
      title: 'SCORE: Small Business Financial Management',
      url: 'https://www.score.org/resource/financial-management-small-business',
      description: 'Free resources, templates and workshops on financial management.'
    },
    {
      id: '4',
      title: 'NerdWallet: Small Business Resources',
      url: 'https://www.nerdwallet.com/small-business',
      description: 'Comparison tools for business credit cards, loans and financial products.'
    },
    {
      id: '5',
      title: 'Financial Management for Small Business: A Free Course',
      url: 'https://www.coursera.org/learn/financial-management-small-businesses',
      description: 'Free online course on financial management fundamentals for entrepreneurs.'
    }
  ]);
  
  const [editingLink, setEditingLink] = useState<ResourceLink | null>(null);
  const [newLink, setNewLink] = useState<Partial<ResourceLink>>({
    title: '',
    url: '',
    description: ''
  });
  const [isAddingNew, setIsAddingNew] = useState(false);

  const handleEditLink = (link: ResourceLink) => {
    setEditingLink(link);
    setNewLink({
      title: link.title,
      url: link.url,
      description: link.description
    });
    setIsAddingNew(false);
  };

  const handleAddNew = () => {
    setEditingLink(null);
    setNewLink({
      title: '',
      url: '',
      description: ''
    });
    setIsAddingNew(true);
  };

  const handleSave = () => {
    if (!newLink.title || !newLink.url) {
      toast({
        title: "Missing information",
        description: "Please provide both a title and URL for the resource.",
        variant: "destructive"
      });
      return;
    }

    if (editingLink) {
      // Edit existing link
      setLinks(links.map(link => 
        link.id === editingLink.id 
          ? { ...link, title: newLink.title || '', url: newLink.url || '', description: newLink.description || '' }
          : link
      ));
      toast({
        title: "Resource updated",
        description: "The resource has been successfully updated."
      });
    } else {
      // Add new link
      const newId = Date.now().toString();
      setLinks([...links, {
        id: newId,
        title: newLink.title || '',
        url: newLink.url || '',
        description: newLink.description || ''
      }]);
      toast({
        title: "Resource added",
        description: "The new resource has been added to your list."
      });
    }

    setEditingLink(null);
    setIsAddingNew(false);
    setNewLink({
      title: '',
      url: '',
      description: ''
    });
  };

  const handleDelete = (id: string) => {
    setLinks(links.filter(link => link.id !== id));
    toast({
      title: "Resource removed",
      description: "The resource has been removed from your list."
    });
    
    if (editingLink?.id === id) {
      setEditingLink(null);
      setIsAddingNew(false);
    }
  };

  const handleCancel = () => {
    setEditingLink(null);
    setIsAddingNew(false);
    setNewLink({
      title: '',
      url: '',
      description: ''
    });
  };

  return (
    <div className="container py-6 space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-1">Resources</h1>
          <p className="text-muted-foreground">
            Curated resources for small business financial management
          </p>
        </div>
        <Button onClick={handleAddNew} className="flex items-center gap-2">
          <Plus size={16} />
          Add Resource
        </Button>
      </div>

      {(isAddingNew || editingLink) && (
        <Card className="animate-fade-in">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium mb-1">Title</label>
                <Input 
                  id="title"
                  placeholder="Resource title" 
                  value={newLink.title} 
                  onChange={(e) => setNewLink({...newLink, title: e.target.value})}
                />
              </div>
              
              <div>
                <label htmlFor="url" className="block text-sm font-medium mb-1">URL</label>
                <Input 
                  id="url"
                  placeholder="https://example.com" 
                  value={newLink.url} 
                  onChange={(e) => setNewLink({...newLink, url: e.target.value})}
                />
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-1">Description</label>
                <Input 
                  id="description"
                  placeholder="Brief description of the resource" 
                  value={newLink.description} 
                  onChange={(e) => setNewLink({...newLink, description: e.target.value})}
                />
              </div>
              
              <div className="flex justify-end gap-2 pt-2">
                <Button variant="outline" onClick={handleCancel}>Cancel</Button>
                <Button onClick={handleSave}>{editingLink ? "Update" : "Add"} Resource</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <ScrollArea className="h-[calc(100vh-250px)]">
        <div className="space-y-4">
          {links.length > 0 ? (
            links.map((link) => (
              <Card key={link.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2">
                        <LinkIcon className="h-4 w-4 text-muted-foreground" />
                        <h3 className="font-medium">{link.title}</h3>
                      </div>
                      <a 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm break-all"
                      >
                        {link.url}
                      </a>
                      <p className="text-muted-foreground text-sm">{link.description}</p>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => handleEditLink(link)}
                      >
                        <Pencil size={14} />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleDelete(link.id)}
                      >
                        <span className="sr-only">Delete</span>
                        ×
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <p>No resources added yet. Click "Add Resource" to get started.</p>
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Resources;
