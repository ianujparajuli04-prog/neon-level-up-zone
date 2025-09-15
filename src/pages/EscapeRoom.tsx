import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  Users, 
  Brain, 
  Key, 
  Trophy,
  Target,
  Zap,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";
import escapeRoomImage from "@/assets/escape-room.jpg";

const EscapeRoom = () => {
  const features = [
    {
      icon: Brain,
      title: "Mind-Bending Puzzles",
      description: "Challenge your intellect with complex puzzles and riddles"
    },
    {
      icon: Clock,
      title: "60-Minute Adventure",
      description: "Race against time in our immersive themed rooms"
    },
    {
      icon: Users,
      title: "Team Building",
      description: "Perfect for friends, family, and corporate team building"
    },
    {
      icon: Key,
      title: "Multiple Themes",
      description: "Different escape room themes for varied experiences"
    }
  ];

  const rooms = [
    {
      name: "Cyber Heist",
      difficulty: "Hard",
      players: "2-6 Players",
      time: "60 Minutes",
      description: "Break into a futuristic corporation and steal valuable data before security catches you",
      color: "neon-purple"
    },
    {
      name: "Space Station Alpha",
      difficulty: "Medium", 
      players: "3-8 Players",
      time: "60 Minutes",
      description: "Repair the damaged space station and escape before it crashes into Earth",
      color: "neon-blue"
    },
    {
      name: "Mystery Mansion",
      difficulty: "Easy",
      players: "2-5 Players", 
      time: "45 Minutes",
      description: "Uncover the secrets of the haunted mansion and find your way out",
      color: "neon-green"
    }
  ];

  const achievements = [
    { icon: Trophy, text: "500+ Successful Escapes" },
    { icon: Star, text: "4.8/5 Average Rating" },
    { icon: Target, text: "85% Success Rate" },
    { icon: Zap, text: "Tech-Enhanced Experience" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${escapeRoomImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-background" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-gaming text-4xl md:text-6xl font-bold text-neon mb-6 animate-slide-up">
            Escape Room Experience
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up">
            Immerse yourself in thrilling escape adventures with cutting-edge technology and mind-bending challenges
          </p>
          <Button 
            asChild
            size="lg"
            className="btn-neon bg-neon-purple text-background hover:bg-neon-purple/80 font-rajdhani font-semibold text-xl px-8 py-6 animate-slide-up"
          >
            <Link to="/contact">Book Escape Session</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-gaming">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-gaming text-3xl md:text-4xl font-bold text-neon-blue mb-6">
              Why Our Escape Rooms Are Different
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="card-glow bg-card/50 backdrop-blur-sm border-neon-purple/20 hover:border-neon-blue/40 transition-all duration-300 group text-center"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="inline-flex p-3 rounded-lg bg-neon-purple/10 border border-neon-purple/20 group-hover:bg-neon-purple/20 transition-all duration-300">
                    <feature.icon className="h-8 w-8 text-neon-purple" />
                  </div>
                  <h3 className="font-gaming text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Escape Rooms */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-gaming text-3xl md:text-4xl font-bold text-neon mb-6">
              Choose Your Adventure
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Each escape room offers a unique storyline and challenge level
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {rooms.map((room, index) => (
              <Card 
                key={index}
                className={`card-glow bg-card/50 backdrop-blur-sm border-${room.color}/20 hover:border-${room.color}/40 transition-all duration-300 group`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-gaming text-xl text-foreground">
                      {room.name}
                    </CardTitle>
                    <span className={`px-3 py-1 bg-${room.color}/10 text-${room.color} text-sm font-gaming rounded-full border border-${room.color}/20`}>
                      {room.difficulty}
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    {room.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Players:</span>
                    <span className="text-foreground font-semibold">{room.players}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="text-foreground font-semibold">{room.time}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Price:</span>
                    <span className="text-foreground font-semibold">NPR 1500/team</span>
                  </div>
                  
                  <Button 
                    asChild
                    className={`w-full btn-neon bg-${room.color}/10 text-${room.color} border-${room.color} hover:bg-${room.color} hover:text-background font-rajdhani font-semibold mt-4`}
                  >
                    <Link to="/contact">Book This Room</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <Card 
                key={index}
                className="card-glow bg-card/50 backdrop-blur-sm border-neon-green/20 text-center"
              >
                <CardContent className="p-6 space-y-3">
                  <div className="inline-flex p-3 rounded-lg bg-neon-green/10 border border-neon-green/20">
                    <achievement.icon className="h-6 w-6 text-neon-green" />
                  </div>
                  <p className="text-sm font-rajdhani font-medium text-foreground">
                    {achievement.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Rules & Guidelines */}
          <Card className="max-w-4xl mx-auto card-glow bg-card/50 backdrop-blur-sm border-neon-pink/20">
            <CardHeader>
              <CardTitle className="font-gaming text-2xl text-neon-pink text-center">
                Rules & Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-gaming font-semibold text-neon-blue">What to Expect:</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• Immersive themed environments</li>
                    <li>• High-tech puzzles and gadgets</li>
                    <li>• Live hint system via screens</li>
                    <li>• Professional game masters</li>
                    <li>• Team photo at the end</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-gaming font-semibold text-neon-green">Important Notes:</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• Minimum age: 12 years old</li>
                    <li>• Advance booking recommended</li>
                    <li>• No mobile phones during game</li>
                    <li>• Safety briefing provided</li>
                    <li>• Group discounts available</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-gaming text-3xl md:text-4xl font-bold text-neon mb-6">
            Ready for the Ultimate Challenge?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Book your escape room adventure today and test your problem-solving skills
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="btn-neon bg-neon-pink text-background hover:bg-neon-pink/80 font-rajdhani font-semibold text-lg px-8 py-6"
            >
              <Link to="/contact">Book Now</Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="btn-neon border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background font-rajdhani font-semibold text-lg px-8 py-6"
            >
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EscapeRoom;