import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Gamepad2, 
  Monitor, 
  Coffee, 
  Trophy, 
  Tv, 
  ArrowRight,
  Star,
  Zap,
  Users,
  Clock
} from "lucide-react";
import heroImage from "@/assets/hero-gaming.jpg";

const Index = () => {
  const services = [
    {
      icon: Gamepad2,
      title: "PS5 Gaming",
      description: "Latest PlayStation 5 consoles with 4K gaming experience",
      color: "neon-purple"
    },
    {
      icon: Monitor,
      title: "PC Gaming",
      description: "High-end gaming rigs with RTX graphics and 144Hz displays",
      color: "neon-blue"
    },
    {
      icon: Coffee,
      title: "Gaming Café",
      description: "Delicious snacks and beverages to fuel your gaming sessions",
      color: "neon-green"
    },
    {
      icon: Tv,
      title: "Netflix Escape",
      description: "Relax and stream your favorite shows in our comfort zone",
      color: "neon-pink"
    },
    {
      icon: Trophy,
      title: "Tournaments",
      description: "Compete in exciting tournaments and win amazing prizes",
      color: "neon-cyan"
    }
  ];

  const features = [
    { icon: Star, text: "Premium Gaming Experience" },
    { icon: Zap, text: "Latest Hardware & Technology" },
    { icon: Users, text: "Community & Friends" },
    { icon: Clock, text: "Open 24/7" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-background/90" />
          <div className="absolute inset-0 grid-pattern" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center space-y-8 px-4 max-w-4xl mx-auto">
          <div className="space-y-4 animate-slide-up">
            <h1 className="font-gaming text-4xl md:text-7xl font-bold text-neon text-glow animate-glow">
              Level Up Gaming Lounge
            </h1>
            <p className="text-xl md:text-3xl font-rajdhani font-medium text-foreground/90">
              The New Generation of Gaming is Here
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button 
              asChild
              size="lg"
              className="btn-neon bg-neon-purple text-background hover:bg-neon-purple/80 font-rajdhani font-semibold text-lg px-8 py-6"
            >
              <Link to="/contact">Book Now</Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="btn-neon border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background font-rajdhani font-semibold text-lg px-8 py-6"
            >
              <Link to="/tournaments">
                View Tournaments
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 animate-slide-up">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex flex-col items-center space-y-2 p-4 bg-card/20 backdrop-blur-sm rounded-lg border border-neon-purple/20"
              >
                <feature.icon className="h-6 w-6 text-neon-purple" />
                <span className="text-sm text-center font-rajdhani">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-neon-purple/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neon-purple rounded-full mt-2 animate-pulse-neon"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-gaming">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-gaming text-3xl md:text-5xl font-bold text-neon-blue mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience gaming like never before with our premium services and state-of-the-art equipment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="card-glow bg-card/50 backdrop-blur-sm border-neon-purple/20 hover:border-neon-blue/40 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`inline-flex p-3 rounded-lg bg-${service.color}/10 border border-${service.color}/20 group-hover:bg-${service.color}/20 transition-all duration-300`}>
                    <service.icon className={`h-8 w-8 text-${service.color}`} />
                  </div>
                  <h3 className="font-gaming text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-gradient-neon p-1 rounded-2xl card-glow">
            <div className="bg-background rounded-xl p-8 md:p-12 text-center">
              <h2 className="font-gaming text-3xl md:text-4xl font-bold text-neon-pink mb-4 animate-glow">
                🎮 SPECIAL OFFER 🎮
              </h2>
              <p className="text-2xl md:text-3xl font-rajdhani font-bold text-foreground mb-6">
                Play 1 Hour, Get 1 Hour FREE!
              </p>
              <p className="text-muted-foreground mb-8 text-lg">
                Limited time offer for new customers. Book your gaming session now and double the fun!
              </p>
              <Button 
                asChild
                size="lg"
                className="btn-neon bg-neon-pink text-background hover:bg-neon-pink/80 font-rajdhani font-semibold text-xl px-10 py-6"
              >
                <Link to="/offers">Claim Offer Now</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-gaming text-3xl md:text-4xl font-bold text-neon mb-6">
            Ready to Level Up Your Gaming?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of gamers who have experienced the future of gaming at Level Up Gaming Lounge
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="btn-neon bg-neon-blue text-background hover:bg-neon-blue/80 font-rajdhani font-semibold text-lg px-8 py-6"
            >
              <Link to="/contact">Get Directions</Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="btn-neon border-neon-green text-neon-green hover:bg-neon-green hover:text-background font-rajdhani font-semibold text-lg px-8 py-6"
            >
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;