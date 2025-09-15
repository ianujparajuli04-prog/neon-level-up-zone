import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Gamepad2, 
  Monitor, 
  Coffee, 
  Trophy, 
  Tv, 
  Clock,
  Users,
  Zap,
  Headphones,
  Wifi
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Gamepad2,
      title: "PlayStation 5 Gaming",
      description: "Experience next-gen gaming with the latest PS5 consoles featuring 4K resolution, ray tracing, and lightning-fast SSD loading times.",
      features: ["Latest PS5 Exclusives", "4K HDR Gaming", "DualSense Controllers", "Multiplayer Support"],
      price: "Starting from NPR 200/hour",
      color: "neon-purple",
      popular: true
    },
    {
      icon: Monitor,
      title: "PC Gaming Stations",
      description: "High-performance gaming rigs equipped with RTX 4080 graphics cards, 144Hz monitors, and premium mechanical keyboards.",
      features: ["RTX 4080 Graphics", "144Hz Displays", "Mechanical Keyboards", "Gaming Mice"],
      price: "Starting from NPR 300/hour",
      color: "neon-blue"
    },
    {
      icon: Tv,
      title: "Netflix & Streaming",
      description: "Relax in our comfort zone with large 4K displays, comfortable seating, and access to Netflix and other streaming platforms.",
      features: ["4K Streaming", "Comfortable Seating", "Multiple Platforms", "Private Booths"],
      price: "Starting from NPR 150/hour",
      color: "neon-pink"
    },
    {
      icon: Trophy,
      title: "Tournament Gaming",
      description: "Participate in organized tournaments and esports events with professional-grade equipment and live streaming setup.",
      features: ["Professional Setup", "Live Streaming", "Prize Pools", "Team Events"],
      price: "Entry fees vary",
      color: "neon-green"
    },
    {
      icon: Coffee,
      title: "Gaming Café",
      description: "Fuel your gaming sessions with our selection of snacks, beverages, energy drinks, and quick meals.",
      features: ["Energy Drinks", "Gaming Snacks", "Quick Meals", "Healthy Options"],
      price: "Starting from NPR 50",
      color: "neon-cyan"
    }
  ];

  const amenities = [
    { icon: Wifi, text: "High-Speed Internet" },
    { icon: Headphones, text: "Premium Audio Equipment" },
    { icon: Users, text: "Group Gaming Areas" },
    { icon: Clock, text: "Flexible Hours" },
    { icon: Zap, text: "Backup Power" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-gaming text-4xl md:text-6xl font-bold text-neon mb-6 animate-slide-up">
            Gaming Services
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up">
            Explore our comprehensive range of gaming services designed to provide the ultimate gaming experience
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card 
                key={index}
                className={`card-glow bg-card/50 backdrop-blur-sm border-${service.color}/20 hover:border-${service.color}/40 transition-all duration-300 group relative overflow-hidden`}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-neon-pink text-background px-3 py-1 rounded-full text-sm font-gaming font-semibold">
                    Most Popular
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className={`inline-flex p-3 rounded-lg bg-${service.color}/10 border border-${service.color}/20 group-hover:bg-${service.color}/20 transition-all duration-300`}>
                      <service.icon className={`h-8 w-8 text-${service.color}`} />
                    </div>
                  </div>
                  <CardTitle className="font-gaming text-2xl text-foreground">
                    {service.title}
                  </CardTitle>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="font-gaming font-semibold text-foreground">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-muted-foreground">
                          <div className={`w-2 h-2 bg-${service.color} rounded-full`} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <span className="text-sm text-muted-foreground">Pricing</span>
                      <p className={`font-gaming font-semibold text-${service.color}`}>
                        {service.price}
                      </p>
                    </div>
                    <Button 
                      asChild
                      className={`btn-neon bg-${service.color}/10 text-${service.color} border-${service.color} hover:bg-${service.color} hover:text-background font-rajdhani font-semibold`}
                    >
                      <Link to="/contact">Book Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Amenities Section */}
          <div className="text-center mb-16">
            <h2 className="font-gaming text-3xl md:text-4xl font-bold text-neon-blue mb-8">
              Premium Amenities
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {amenities.map((amenity, index) => (
                <Card 
                  key={index}
                  className="card-glow bg-card/50 backdrop-blur-sm border-neon-purple/20 hover:border-neon-blue/40 transition-all duration-300"
                >
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="inline-flex p-3 rounded-lg bg-neon-blue/10 border border-neon-blue/20">
                      <amenity.icon className="h-6 w-6 text-neon-blue" />
                    </div>
                    <p className="text-sm font-rajdhani font-medium text-foreground">
                      {amenity.text}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Special Packages */}
          <Card className="max-w-4xl mx-auto bg-gradient-neon p-1 rounded-2xl card-glow">
            <div className="bg-background rounded-xl p-8 text-center space-y-6">
              <h2 className="font-gaming text-3xl font-bold text-neon-pink">
                Special Gaming Packages
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="space-y-2">
                  <h3 className="font-gaming text-xl font-semibold text-neon-purple">Student Pack</h3>
                  <p className="text-2xl font-bold text-foreground">NPR 500</p>
                  <p className="text-sm text-muted-foreground">3 hours gaming + snacks</p>
                </div>
                
                <div className="space-y-2 border-x border-neon-blue/20 px-6">
                  <h3 className="font-gaming text-xl font-semibold text-neon-blue">Weekend Warrior</h3>
                  <p className="text-2xl font-bold text-foreground">NPR 1200</p>
                  <p className="text-sm text-muted-foreground">8 hours + meals + drinks</p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-gaming text-xl font-semibold text-neon-green">Group Gaming</h3>
                  <p className="text-2xl font-bold text-foreground">NPR 2000</p>
                  <p className="text-sm text-muted-foreground">5 people, 4 hours + party pack</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button 
                  asChild
                  size="lg"
                  className="btn-neon bg-neon-pink text-background hover:bg-neon-pink/80 font-rajdhani font-semibold"
                >
                  <Link to="/contact">Book Package</Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="btn-neon border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background font-rajdhani font-semibold"
                >
                  <Link to="/offers">View All Offers</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Services;