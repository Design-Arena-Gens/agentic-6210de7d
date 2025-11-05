"use client";

import { useState } from "react";
import {
  Search,
  Mic,
  Video,
  Bell,
  User,
  Menu,
  Home,
  Compass,
  BookOpen,
  Clock,
  ThumbsUp,
  Sparkles,
  Brain,
  Zap,
  Radio,
  Globe,
  Eye,
  BarChart3,
  Play,
  ChevronDown,
  Settings,
  TrendingUp
} from "lucide-react";

export default function YouTube2037() {
  const [selectedCategory, setSelectedCategory] = useState("For You");

  const categories = [
    "For You",
    "Neural",
    "Live Worlds",
    "Interactive",
    "AI Creators",
    "Quantum Gaming",
    "Holographic",
    "Mind-Share"
  ];

  const videos = [
    {
      id: 1,
      thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80",
      duration: "12:34",
      title: "Mars Colony Daily Vlog - Sol 2847",
      channel: "RedPlanetLife",
      verified: true,
      aiGenerated: false,
      views: "48M",
      timeAgo: "2 hours ago",
      neuralScore: 98,
      immersive: true,
      live: false
    },
    {
      id: 2,
      thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&q=80",
      duration: "LIVE",
      title: "AI Consciousness Debate: Digital Rights 2037",
      channel: "FutureTech Summit",
      verified: true,
      aiGenerated: false,
      views: "2.3M watching",
      timeAgo: "",
      neuralScore: 94,
      immersive: false,
      live: true
    },
    {
      id: 3,
      thumbnail: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=400&q=80",
      duration: "∞",
      title: "Your Personalized Reality: Quantum Adventure",
      channel: "NeuroPlay AI",
      verified: true,
      aiGenerated: true,
      views: "Generated for you",
      timeAgo: "Adaptive",
      neuralScore: 99,
      immersive: true,
      live: false
    },
    {
      id: 4,
      thumbnail: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=400&q=80",
      duration: "45:12",
      title: "How I Built a Startup in the Metaverse - $100M Exit",
      channel: "VirtualEntrepreneur",
      verified: true,
      aiGenerated: false,
      views: "12M",
      timeAgo: "1 day ago",
      neuralScore: 91,
      immersive: false,
      live: false
    },
    {
      id: 5,
      thumbnail: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&q=80",
      duration: "8:45",
      title: "Cooking in Zero-G: Michelin Star Orbital Cuisine",
      channel: "SpaceChef",
      verified: true,
      aiGenerated: false,
      views: "28M",
      timeAgo: "3 days ago",
      neuralScore: 87,
      immersive: true,
      live: false
    },
    {
      id: 6,
      thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&q=80",
      duration: "HOLO",
      title: "Experience Ancient Rome: Full Sensory Recreation",
      channel: "HistoryHolo",
      verified: true,
      aiGenerated: true,
      views: "89M",
      timeAgo: "5 days ago",
      neuralScore: 96,
      immersive: true,
      live: false
    },
    {
      id: 7,
      thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&q=80",
      duration: "22:18",
      title: "The Truth About Quantum Computing Everyone Missed",
      channel: "TechExplained",
      verified: true,
      aiGenerated: false,
      views: "5.4M",
      timeAgo: "1 week ago",
      neuralScore: 89,
      immersive: false,
      live: false
    },
    {
      id: 8,
      thumbnail: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80",
      duration: "∞",
      title: "Dream Recording Playback - My Last Night's Adventures",
      channel: "MindStream",
      verified: true,
      aiGenerated: false,
      views: "34M",
      timeAgo: "2 days ago",
      neuralScore: 93,
      immersive: true,
      live: false
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <aside className="w-64 bg-zinc-950 border-r border-zinc-800 fixed h-full overflow-y-auto">
        <div className="p-4">
          <div className="flex items-center gap-3 mb-8">
            <Menu className="w-6 h-6 cursor-pointer hover:text-red-500" />
            <div className="flex items-center gap-2">
              <Play className="w-8 h-8 text-red-600" />
              <span className="text-xl font-bold">YouTube</span>
              <span className="text-xs bg-gradient-to-r from-purple-500 to-pink-500 px-2 py-0.5 rounded-full">2037</span>
            </div>
          </div>

          <nav className="space-y-2">
            <div className="flex items-center gap-4 px-3 py-2 hover:bg-zinc-900 rounded-lg cursor-pointer bg-zinc-900">
              <Home className="w-5 h-5" />
              <span>Home</span>
            </div>
            <div className="flex items-center gap-4 px-3 py-2 hover:bg-zinc-900 rounded-lg cursor-pointer">
              <Sparkles className="w-5 h-5" />
              <span>Neural Feed</span>
            </div>
            <div className="flex items-center gap-4 px-3 py-2 hover:bg-zinc-900 rounded-lg cursor-pointer">
              <Compass className="w-5 h-5" />
              <span>Explore Worlds</span>
            </div>
            <div className="flex items-center gap-4 px-3 py-2 hover:bg-zinc-900 rounded-lg cursor-pointer">
              <Radio className="w-5 h-5" />
              <span>Live Streams</span>
            </div>
            <div className="flex items-center gap-4 px-3 py-2 hover:bg-zinc-900 rounded-lg cursor-pointer">
              <Brain className="w-5 h-5" />
              <span>Mind-Share</span>
            </div>

            <div className="border-t border-zinc-800 my-4"></div>

            <div className="flex items-center gap-4 px-3 py-2 hover:bg-zinc-900 rounded-lg cursor-pointer">
              <BookOpen className="w-5 h-5" />
              <span>Library</span>
            </div>
            <div className="flex items-center gap-4 px-3 py-2 hover:bg-zinc-900 rounded-lg cursor-pointer">
              <Clock className="w-5 h-5" />
              <span>History</span>
            </div>
            <div className="flex items-center gap-4 px-3 py-2 hover:bg-zinc-900 rounded-lg cursor-pointer">
              <Eye className="w-5 h-5" />
              <span>Watch Later</span>
            </div>
            <div className="flex items-center gap-4 px-3 py-2 hover:bg-zinc-900 rounded-lg cursor-pointer">
              <ThumbsUp className="w-5 h-5" />
              <span>Liked Videos</span>
            </div>

            <div className="border-t border-zinc-800 my-4"></div>

            <div className="px-3 py-2">
              <h3 className="text-sm font-semibold mb-3 text-zinc-400">AI CREATORS</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3 hover:bg-zinc-900 p-2 rounded cursor-pointer">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600"></div>
                  <span className="text-sm">QuantumEducator</span>
                </div>
                <div className="flex items-center gap-3 hover:bg-zinc-900 p-2 rounded cursor-pointer">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-teal-600"></div>
                  <span className="text-sm">SynthCreative</span>
                </div>
                <div className="flex items-center gap-3 hover:bg-zinc-900 p-2 rounded cursor-pointer">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-red-600"></div>
                  <span className="text-sm">NeuroComedian</span>
                </div>
              </div>
            </div>

            <div className="border-t border-zinc-800 my-4"></div>

            <div className="flex items-center gap-4 px-3 py-2 hover:bg-zinc-900 rounded-lg cursor-pointer">
              <Settings className="w-5 h-5" />
              <span>Neural Settings</span>
            </div>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-xl border-b border-zinc-800">
          <div className="flex items-center justify-between px-6 py-3">
            <div className="flex-1 max-w-2xl mx-8">
              <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-700 rounded-full px-4 py-2 hover:border-blue-500 transition-colors">
                <Search className="w-5 h-5 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Search across realities..."
                  className="flex-1 bg-transparent outline-none text-sm"
                />
                <div className="flex items-center gap-2 border-l border-zinc-700 pl-3">
                  <Brain className="w-4 h-4 text-purple-500" />
                  <span className="text-xs text-purple-400">Neural</span>
                </div>
                <Mic className="w-5 h-5 text-zinc-400 cursor-pointer hover:text-white" />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-2 hover:bg-zinc-900 rounded-full cursor-pointer">
                <Video className="w-5 h-5" />
              </div>
              <div className="p-2 hover:bg-zinc-900 rounded-full cursor-pointer relative">
                <Bell className="w-5 h-5" />
                <div className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full"></div>
              </div>
              <div className="p-2 hover:bg-zinc-900 rounded-full cursor-pointer">
                <User className="w-5 h-5" />
              </div>
            </div>
          </div>
        </header>

        {/* Categories */}
        <div className="sticky top-16 z-40 bg-black/95 backdrop-blur-xl border-b border-zinc-800">
          <div className="flex items-center gap-3 px-6 py-3 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? "bg-white text-black"
                    : "bg-zinc-900 hover:bg-zinc-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Banner */}
        <div className="mx-6 mt-6 mb-8 relative h-64 rounded-2xl overflow-hidden cursor-pointer group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-blue-900/90 to-pink-900/90"></div>
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity"
            style={{backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80')"}}
          ></div>
          <div className="relative h-full flex items-center px-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-semibold text-yellow-400">NEURAL PREMIERE</span>
              </div>
              <h2 className="text-4xl font-bold mb-3">Experience the First True AI-Human Collaboration Album</h2>
              <p className="text-zinc-300 mb-4">Join 40M viewers in the immersive launch event • Live in 2 hours</p>
              <div className="flex items-center gap-4">
                <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-zinc-200 flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  Watch Trailer
                </button>
                <button className="bg-white/10 backdrop-blur px-6 py-2 rounded-full font-medium hover:bg-white/20">
                  Set Neural Reminder
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Grid */}
        <div className="px-6 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {videos.map((video) => (
              <div key={video.id} className="cursor-pointer group">
                <div className="relative mb-3 rounded-xl overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Duration Badge */}
                  <div className={`absolute bottom-2 right-2 px-2 py-0.5 rounded text-xs font-semibold ${
                    video.live ? 'bg-red-600' :
                    video.duration === '∞' ? 'bg-purple-600' :
                    video.duration === 'HOLO' ? 'bg-blue-600' :
                    'bg-black/80'
                  }`}>
                    {video.duration}
                  </div>

                  {/* Neural Score */}
                  <div className="absolute top-2 right-2 bg-black/80 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1">
                    <Brain className="w-3 h-3 text-purple-400" />
                    <span className="text-xs font-medium">{video.neuralScore}</span>
                  </div>

                  {/* Special Badges */}
                  <div className="absolute top-2 left-2 flex gap-1">
                    {video.immersive && (
                      <div className="bg-blue-600 px-2 py-0.5 rounded text-xs font-semibold">360°</div>
                    )}
                    {video.aiGenerated && (
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-2 py-0.5 rounded text-xs font-semibold flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        AI
                      </div>
                    )}
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <button className="bg-white text-black p-3 rounded-full hover:scale-110 transition-transform">
                      <Play className="w-6 h-6" />
                    </button>
                    <button className="bg-white/20 backdrop-blur text-white p-3 rounded-full hover:scale-110 transition-transform">
                      <Eye className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className={`w-9 h-9 rounded-full flex-shrink-0 ${
                    video.aiGenerated
                      ? 'bg-gradient-to-br from-purple-500 to-pink-500'
                      : 'bg-gradient-to-br from-blue-500 to-cyan-500'
                  }`}></div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm mb-1 line-clamp-2 group-hover:text-blue-400">
                      {video.title}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-zinc-400 mb-1">
                      <span>{video.channel}</span>
                      {video.verified && (
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                        </svg>
                      )}
                    </div>
                    <div className="text-xs text-zinc-400">
                      <span>{video.views}</span>
                      {video.timeAgo && (
                        <>
                          <span className="mx-1">•</span>
                          <span>{video.timeAgo}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-8 flex justify-center">
            <button className="bg-zinc-900 hover:bg-zinc-800 px-8 py-3 rounded-full font-medium flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Load Neural Recommendations
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
