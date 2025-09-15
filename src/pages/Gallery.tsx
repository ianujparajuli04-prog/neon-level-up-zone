import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Image as ImageIcon, 
  Video, 
  Play,
  ExternalLink,
  Camera,
  Users,
  Trophy,
  Gamepad2
} from "lucide-react";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: "All", icon: ImageIcon },
    { id: "gaming", label: "Gaming Sessions", icon: Gamepad2 },
    { id: "tournaments", label: "Tournaments", icon: Trophy },
    { id: "events", label: "Events", icon: Users },
    { id: "setup", label: "Gaming Setup", icon: Camera }
  ];

  const galleryItems = [
    {
      id: 1,
      title: "PS5 Gaming Zone",
      category: "gaming",
      type: "image",
      description: "Our premium PS5 gaming stations with 4K displays",
      date: "Dec 2023"
    },
    {
      id: 2,
      title: "FIFA Championship Final",
      category: "tournaments", 
      type: "video",
      description: "Intense final match of our FIFA tournament",
      date: "Nov 2023"
    },
    {
      id: 3,
      title: "PC Gaming Arena",
      category: "setup",
      type: "image", 
      description: "High-end PC gaming rigs with RGB lighting",
      date: "Oct 2023"
    },
    {
      id: 4,
      title: "Escape Room Adventure",
      category: "gaming",
      type: "image",
      description: "Players solving puzzles in our cyber heist room", 
      date: "Oct 2023"
    },
    {
      id: 5,
      title: "Community Gaming Night",
      category: "events",
      type: "image",
      description: "Weekly community event with multiplayer games",
      date: "Sep 2023"
    },
    {
      id: 6,
      title: "Valorant Tournament Highlights",
      category: "tournaments",
      type: "video", 
      description: "Best moments from our Valorant championship",
      date: "Sep 2023"
    },
    {
      id: 7,
      title: "Gaming Lounge Interior",
      category: "setup",
      type: "image",
      description: "Neon-lit gaming environment with comfortable seating",
      date: "Aug 2023"
    },
    {
      id: 8,
      title: "Team Building Session", 
      category: "events",
      type: "image",
      description: "Corporate team building through gaming challenges",
      date: "Aug 2023"
    },
    {
      id: 9,
      title: "Café & Refreshment Area",
      category: "setup", 
      type: "image",
      description: "Gaming café with snacks and beverages",
      date: "Jul 2023"
    }
  ];

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const socialLinks = [
    {
      platform: "Instagram",
      handle: "@levelupgaminglou.nge", 
      url: "https://instagram.com/levelupgaminglou.nge",
      color: "neon-pink",
      description: "Follow us for daily gaming content and behind-the-scenes"
    },
    {
      platform: "Facebook", 
      handle: "Level Up Gaming Lounge",
      url: "https://facebook.com/Level-Up-Gaming-Lounge",
      color: "neon-blue", 
      description: "Join our community for events and announcements"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-gaming text-4xl md:text-6xl font-bold text-neon mb-6 animate-slide-up">
            Gaming Gallery
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up">
            Explore our gaming paradise through photos and videos from tournaments, events, and daily gaming sessions
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-gradient-gaming">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-rajdhani font-semibold transition-all duration-300 ${
                  activeFilter === category.id
                    ? "bg-neon-purple text-background"
                    : "bg-card/50 text-muted-foreground hover:text-neon-purple hover:bg-neon-purple/10 border border-neon-purple/20"
                }`}
              >
                <category.icon className="h-4 w-4" />
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredItems.map((item) => (
              <Card 
                key={item.id}
                className="card-glow bg-card/50 backdrop-blur-sm border-neon-purple/20 hover:border-neon-blue/40 transition-all duration-300 group overflow-hidden"
              >
                <CardContent className="p-0">
                  {/* Image/Video Placeholder */}
                  <div className="relative aspect-video bg-gradient-gaming flex items-center justify-center border-b border-neon-purple/20">
                    {item.type === "video" ? (
                      <div className="flex items-center justify-center space-x-2 text-neon-blue">
                        <Video className="h-8 w-8" />
                        <Play className="h-6 w-6" />
                      </div>
                    ) : (
                      <Camera className="h-8 w-8 text-neon-purple" />
                    )}
                    
                    {/* Badge for content type */}
                    <Badge 
                      className={`absolute top-3 right-3 ${
                        item.type === "video" 
                          ? "bg-neon-blue/10 text-neon-blue border-neon-blue/20"
                          : "bg-neon-purple/10 text-neon-purple border-neon-purple/20"
                      }`}
                    >
                      {item.type === "video" ? "Video" : "Photo"}
                    </Badge>
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-neon-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button 
                        size="sm" 
                        className="btn-neon bg-neon-blue text-background hover:bg-neon-blue/80"
                      >
                        View Full Size
                      </Button>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-gaming text-lg font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        {item.date}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Social Media Section */}
          <div className="text-center mb-12">
            <h2 className="font-gaming text-3xl md:text-4xl font-bold text-neon-blue mb-8">
              Follow Us for More
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {socialLinks.map((social, index) => (
                <Card 
                  key={index}
                  className={`card-glow bg-card/50 backdrop-blur-sm border-${social.color}/20 hover:border-${social.color}/40 transition-all duration-300 group`}
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className={`inline-flex p-3 rounded-lg bg-${social.color}/10 border border-${social.color}/20 group-hover:bg-${social.color}/20 transition-all duration-300`}>
                      <ExternalLink className={`h-6 w-6 text-${social.color}`} />
                    </div>
                    <div>
                      <h3 className="font-gaming text-xl font-semibold text-foreground mb-1">
                        {social.platform}
                      </h3>
                      <p className={`text-${social.color} font-rajdhani font-medium`}>
                        {social.handle}
                      </p>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {social.description}
                    </p>
                    <Button 
                      asChild
                      className={`btn-neon bg-${social.color}/10 text-${social.color} border-${social.color} hover:bg-${social.color} hover:text-background font-rajdhani font-semibold`}
                    >
                      <a href={social.url} target="_blank" rel="noopener noreferrer">
                        Follow Us
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Instagram/Facebook Embed Placeholder */}
          <Card className="max-w-4xl mx-auto card-glow bg-card/50 backdrop-blur-sm border-neon-pink/20">
            <CardContent className="p-8 text-center space-y-6">
              <h3 className="font-gaming text-2xl font-bold text-neon-pink">
                Latest Social Posts
              </h3>
              <p className="text-muted-foreground">
                Check out our latest Instagram Reels and Facebook posts for daily gaming content, 
                tournament highlights, and community events.
              </p>
              
              {/* Placeholder for social media feeds */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="aspect-square bg-gradient-gaming rounded-lg flex items-center justify-center border border-neon-pink/20">
                  <div className="text-center space-y-2">
                    <ImageIcon className="h-8 w-8 text-neon-pink mx-auto" />
                    <p className="text-sm text-muted-foreground">Instagram Feed</p>
                  </div>
                </div>
                <div className="aspect-square bg-gradient-gaming rounded-lg flex items-center justify-center border border-neon-blue/20">
                  <div className="text-center space-y-2">
                    <Video className="h-8 w-8 text-neon-blue mx-auto" />
                    <p className="text-sm text-muted-foreground">Facebook Posts</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button 
                  asChild
                  className="btn-neon bg-neon-pink text-background hover:bg-neon-pink/80 font-rajdhani font-semibold"
                >
                  <a href="https://instagram.com/levelupgaminglou.nge" target="_blank" rel="noopener noreferrer">
                    View Instagram
                  </a>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  className="btn-neon border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background font-rajdhani font-semibold"
                >
                  <a href="https://facebook.com/Level-Up-Gaming-Lounge" target="_blank" rel="noopener noreferrer">
                    View Facebook
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Gallery;