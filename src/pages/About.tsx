import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Trophy, Coffee, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const features = [
    {
      icon: Users,
      title: "Gaming Community",
      description: "Connect with like-minded gamers and build lasting friendships in our vibrant community"
    },
    {
      icon: Trophy,
      title: "Tournament Ready",
      description: "Participate in regular tournaments and esports events with amazing prizes"
    },
    {
      icon: Coffee,
      title: "Café Experience",
      description: "Enjoy delicious snacks and beverages while gaming in our comfort zone"
    },
    {
      icon: Clock,
      title: "24/7 Gaming",
      description: "Game whenever you want with our flexible hours and extended gaming sessions"
    },
    {
      icon: Star,
      title: "Premium Equipment",
      description: "Latest gaming hardware including PS5, high-end PCs, and 4K displays"
    },
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Easily accessible location in the heart of New Baneshwor, Kathmandu"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-gaming text-4xl md:text-6xl font-bold text-neon mb-6 animate-slide-up">
              About Level Up Gaming Lounge
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-slide-up">
              Where Gaming Dreams Come to Life
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="font-gaming text-3xl md:text-4xl font-bold text-neon-blue">
                The Future of Gaming Has Arrived
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Level Up Gaming Lounge represents the new generation of gaming entertainment in Nepal. 
                Located in the prestigious Elite CA Building in New Baneshwor, Kathmandu, we've created 
                a futuristic gaming paradise where technology meets comfort.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our state-of-the-art facility features the latest PlayStation 5 consoles, high-end gaming PCs 
                with RTX graphics, immersive escape rooms, and a cozy café area. Whether you're a casual gamer 
                or a competitive esports enthusiast, we provide the perfect environment to level up your gaming experience.
              </p>
            </div>
            
            <Card className="card-glow bg-card/50 backdrop-blur-sm border-neon-purple/20">
              <CardContent className="p-8 space-y-6">
                <h3 className="font-gaming text-2xl font-bold text-neon-pink">Our Mission</h3>
                <p className="text-muted-foreground">
                  To revolutionize the gaming culture in Nepal by providing world-class gaming facilities, 
                  fostering a vibrant gaming community, and creating unforgettable experiences for every visitor.
                </p>
                
                <h3 className="font-gaming text-2xl font-bold text-neon-green">Our Vision</h3>
                <p className="text-muted-foreground">
                  To become Nepal's premier gaming destination and the go-to place for gamers seeking 
                  cutting-edge technology, competitive tournaments, and social connections.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Location Section */}
          <div className="text-center mb-16">
            <h2 className="font-gaming text-3xl md:text-4xl font-bold text-neon mb-6">
              Prime Location in Kathmandu
            </h2>
            <Card className="max-w-3xl mx-auto card-glow bg-card/50 backdrop-blur-sm border-neon-blue/20">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-8 w-8 text-neon-blue mt-1" />
                  <div className="text-left">
                    <h3 className="font-gaming text-xl font-semibold text-neon-blue mb-2">
                      Elite CA Building, New Baneshwor
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Strategically located in one of Kathmandu's most accessible areas, our gaming lounge 
                      is easily reachable from all parts of the city. The Elite CA Building provides a 
                      modern and professional environment that matches our high-tech gaming facilities.
                    </p>
                    <Button 
                      asChild
                      className="btn-neon bg-neon-blue/10 text-neon-blue border-neon-blue hover:bg-neon-blue hover:text-background"
                    >
                      <Link to="/contact">Get Directions</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-16">
            <h2 className="font-gaming text-3xl md:text-4xl font-bold text-neon text-center mb-12">
              Why Choose Level Up Gaming Lounge?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card 
                  key={index}
                  className="card-glow bg-card/50 backdrop-blur-sm border-neon-purple/20 hover:border-neon-blue/40 transition-all duration-300 group"
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="inline-flex p-3 rounded-lg bg-neon-purple/10 border border-neon-purple/20 group-hover:bg-neon-purple/20 transition-all duration-300">
                      <feature.icon className="h-6 w-6 text-neon-purple" />
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

          {/* CTA Section */}
          <Card className="max-w-4xl mx-auto bg-gradient-neon p-1 rounded-2xl card-glow">
            <div className="bg-background rounded-xl p-8 text-center">
              <h2 className="font-gaming text-2xl md:text-3xl font-bold text-neon-pink mb-4">
                Experience the Difference
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Join our gaming community and discover why we're Nepal's most talked-about gaming destination
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  size="lg"
                  className="btn-neon bg-neon-pink text-background hover:bg-neon-pink/80 font-rajdhani font-semibold"
                >
                  <Link to="/contact">Visit Us Today</Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="btn-neon border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background font-rajdhani font-semibold"
                >
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;