import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Gift, 
  Clock, 
  Users, 
  Gamepad2,
  Coffee,
  Trophy,
  Star,
  Zap,
  Crown,
  Heart,
  Calendar,
  Timer
} from "lucide-react";
import { Link } from "react-router-dom";

const Offers = () => {
  const featuredOffer = {
    title: "Play 1 Hour, Get 1 Hour FREE!",
    description: "Double your gaming time with our most popular offer",
    validity: "Valid until Jan 31, 2024",
    terms: ["Available for new customers", "Valid on all gaming services", "Cannot be combined with other offers"],
    color: "neon-pink"
  };

  const activeOffers = [
    {
      icon: Gamepad2,
      title: "Student Gaming Package",
      description: "Special rates for students with valid ID",
      discount: "25% OFF",
      price: "NPR 375/hour instead of NPR 500", 
      validity: "Ongoing",
      color: "neon-blue",
      popular: true
    },
    {
      icon: Users,
      title: "Group Gaming Deal",
      description: "Book 5+ stations and save big",
      discount: "30% OFF", 
      price: "Starting from NPR 350/hour",
      validity: "Valid on weekdays",
      color: "neon-green"
    },
    {
      icon: Clock,
      title: "Night Owl Special",
      description: "Gaming sessions after 10 PM get extra time",
      discount: "+2 Hours FREE",
      price: "Book 4 hours, play 6 hours",
      validity: "10 PM - 6 AM",
      color: "neon-purple"
    },
    {
      icon: Coffee,
      title: "Café Combo",
      description: "Gaming + meal combo deal",
      discount: "15% OFF", 
      price: "Gaming + food starting NPR 650",
      validity: "All day",
      color: "neon-cyan"
    },
    {
      icon: Trophy,
      title: "Tournament Entry Discount",
      description: "Reduced entry fees for regular customers",
      discount: "50% OFF",
      price: "Entry fees starting NPR 250", 
      validity: "For loyalty members",
      color: "neon-gold"
    }
  ];

  const weeklySpecials = [
    {
      day: "Monday",
      offer: "Mellow Monday",
      description: "20% off all gaming services",
      icon: Star,
      color: "neon-blue"
    },
    {
      day: "Tuesday", 
      offer: "Team Tuesday",
      description: "Group bookings get extra 2 hours free",
      icon: Users,
      color: "neon-green"
    },
    {
      day: "Wednesday",
      offer: "Win Wednesday", 
      description: "Free tournament entry with 3+ hour booking",
      icon: Trophy,
      color: "neon-purple"
    },
    {
      day: "Thursday",
      offer: "Throwback Thursday",
      description: "Classic games night with retro gaming setup",
      icon: Gamepad2, 
      color: "neon-pink"
    },
    {
      day: "Friday",
      offer: "Free-Play Friday",
      description: "Buy 2 hours, get 1 hour free",
      icon: Gift,
      color: "neon-cyan"
    },
    {
      day: "Weekend",
      offer: "Weekend Warrior",
      description: "Extended gaming packages with meals included", 
      icon: Crown,
      color: "neon-gold"
    }
  ];

  const loyaltyBenefits = [
    {
      level: "Bronze Member",
      requirement: "10+ visits",
      benefits: ["5% discount on all services", "Priority booking", "Birthday bonus hour"],
      color: "neon-gold"
    },
    {
      level: "Silver Member", 
      requirement: "25+ visits",
      benefits: ["10% discount", "Free tournament entries", "Monthly gaming voucher", "Friend referral bonus"],
      color: "neon-blue"
    },
    {
      level: "Gold Member",
      requirement: "50+ visits", 
      benefits: ["15% discount", "VIP gaming stations", "Free escape room sessions", "Exclusive events access"],
      color: "neon-purple"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-gaming text-4xl md:text-6xl font-bold text-neon mb-6 animate-slide-up">
            Special Offers
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up">
            Amazing deals and discounts to make your gaming experience even more exciting and affordable!
          </p>
        </div>
      </section>

      {/* Featured Offer */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-gradient-neon p-1 rounded-2xl card-glow mb-16">
            <div className="bg-background rounded-xl p-8 md:p-12 text-center space-y-6">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Gift className="h-8 w-8 text-neon-pink" />
                <Badge className="bg-neon-pink text-background font-gaming text-lg px-4 py-2">
                  FEATURED OFFER
                </Badge>
              </div>
              
              <h2 className="font-gaming text-3xl md:text-5xl font-bold text-neon-pink animate-glow">
                {featuredOffer.title}
              </h2>
              
              <p className="text-xl text-muted-foreground">
                {featuredOffer.description}
              </p>

              <div className="flex items-center justify-center space-x-2 text-neon-blue">
                <Timer className="h-5 w-5" />
                <span className="font-rajdhani font-semibold">{featuredOffer.validity}</span>
              </div>

              <div className="bg-card/50 rounded-lg p-4 space-y-2">
                <h4 className="font-gaming text-sm font-semibold text-neon-green">Terms & Conditions:</h4>
                <ul className="text-muted-foreground text-sm space-y-1">
                  {featuredOffer.terms.map((term, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-neon-green rounded-full" />
                      <span>{term}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                asChild
                size="lg"
                className="btn-neon bg-neon-pink text-background hover:bg-neon-pink/80 font-rajdhani font-semibold text-xl px-10 py-6"
              >
                <Link to="/contact">Claim This Offer</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Active Offers */}
      <section className="py-20 bg-gradient-gaming">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-gaming text-3xl md:text-4xl font-bold text-neon-blue mb-6">
              Current Gaming Deals
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeOffers.map((offer, index) => (
              <Card 
                key={index}
                className={`card-glow bg-card/50 backdrop-blur-sm border-${offer.color}/20 hover:border-${offer.color}/40 transition-all duration-300 group relative`}
              >
                {offer.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-neon-pink text-background font-gaming text-sm px-3 py-1">
                      POPULAR
                    </Badge>
                  </div>
                )}

                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className={`p-2 rounded-lg bg-${offer.color}/10 border border-${offer.color}/20`}>
                      <offer.icon className={`h-6 w-6 text-${offer.color}`} />
                    </div>
                    <Badge className={`bg-${offer.color}/10 text-${offer.color} border-${offer.color}/20 font-gaming`}>
                      {offer.discount}
                    </Badge>
                  </div>
                  <CardTitle className="font-gaming text-xl text-foreground">
                    {offer.title}
                  </CardTitle>
                  <p className="text-muted-foreground">
                    {offer.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Special Price:</span>
                      <span className={`text-${offer.color} font-semibold`}>{offer.price}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Valid:</span>
                      <span className="text-foreground">{offer.validity}</span>
                    </div>
                  </div>

                  <Button 
                    asChild
                    className={`w-full btn-neon bg-${offer.color}/10 text-${offer.color} border-${offer.color} hover:bg-${offer.color} hover:text-background font-rajdhani font-semibold`}
                  >
                    <Link to="/contact">Get This Deal</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Specials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-gaming text-3xl md:text-4xl font-bold text-neon mb-6">
              Weekly Specials
            </h2>
            <p className="text-muted-foreground text-lg">
              Different exciting offers every day of the week!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weeklySpecials.map((special, index) => (
              <Card 
                key={index}
                className={`card-glow bg-card/50 backdrop-blur-sm border-${special.color}/20 hover:border-${special.color}/40 transition-all duration-300`}
              >
                <CardContent className="p-6 text-center space-y-3">
                  <div className={`inline-flex p-3 rounded-lg bg-${special.color}/10 border border-${special.color}/20`}>
                    <special.icon className={`h-6 w-6 text-${special.color}`} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{special.day}</p>
                    <h3 className={`font-gaming text-lg font-semibold text-${special.color}`}>
                      {special.offer}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {special.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Loyalty Program */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-gaming text-3xl md:text-4xl font-bold text-neon mb-6">
              Loyalty Rewards Program
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The more you play, the more you save! Join our loyalty program and unlock exclusive benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {loyaltyBenefits.map((tier, index) => (
              <Card 
                key={index}
                className={`card-glow bg-card/50 backdrop-blur-sm border-${tier.color}/20 hover:border-${tier.color}/40 transition-all duration-300`}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`inline-flex p-4 rounded-full bg-${tier.color}/10 border border-${tier.color}/20 mb-4`}>
                    <Heart className={`h-8 w-8 text-${tier.color}`} />
                  </div>
                  <CardTitle className={`font-gaming text-xl text-${tier.color}`}>
                    {tier.level}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">
                    {tier.requirement}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-gaming text-sm font-semibold text-foreground">Benefits:</h4>
                    <ul className="space-y-1">
                      {tier.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2 text-muted-foreground text-sm">
                          <div className={`w-1.5 h-1.5 bg-${tier.color} rounded-full`} />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              asChild
              size="lg"
              className="btn-neon bg-neon-purple text-background hover:bg-neon-purple/80 font-rajdhani font-semibold text-lg px-8 py-6"
            >
              <Link to="/contact">Join Loyalty Program</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-gaming text-3xl md:text-4xl font-bold text-neon mb-6">
            Don't Miss Out on These Amazing Deals!
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Visit us today and take advantage of our special offers. Limited time deals won't last forever!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="btn-neon bg-neon-gold text-background hover:bg-neon-gold/80 font-rajdhani font-semibold text-lg px-8 py-6"
            >
              <Link to="/contact">Visit Now</Link>
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

export default Offers;