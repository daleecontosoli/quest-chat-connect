
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Lessons from "./pages/Lessons";
import Challenges from "./pages/Challenges";
import Chat from "./pages/Chat";
import Social from "./pages/Social";
import Resources from "./pages/Resources";
import QA from "./pages/QA";
import Navigation from "./components/Navigation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col md:flex-row min-h-screen">
          <Navigation />
          <main className="flex-1 md:ml-64 pb-16 md:pb-0">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/lessons" element={<Lessons />} />
              <Route path="/challenges" element={<Challenges />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/social" element={<Social />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/qa" element={<QA />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
