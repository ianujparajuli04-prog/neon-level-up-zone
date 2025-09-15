import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  MapPin, 
  Clock,
  Instagram,
  Facebook,
  Mail,
  Navigation,
  MessageCircle,
  Calendar
} from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const contactInfo = {
    phones: [
      { number: "9863314966", primary: true },
      { number: "9841324580", primary: false }
    ],
    address: "Elite CA Building, New Baneshwor, Kathmandu, Nepal",
    hours: "Open 24/7 (Call ahead for late night bookings)",
    social: {
      instagram: "https://instagram.com/levelupgaminglou.nge",
      facebook: "https://facebook.com/Level-Up-Gaming-Lounge"
    }
  };

  const quickContacts = [
    {
      icon: Phone,
      title: "Call Us Now",
      description: "Instant booking and inquiries",
      action: `tel:${contactInfo.phones[0].number}`,
      actionText: "Call Now",
      color: "neon-green"
    },
    {
      icon: MessageCircle, 
      title: "WhatsApp Booking",
      description: "Quick booking via WhatsApp",
      action: `https://wa.me/977${contactInfo.phones[0].number}`,
      actionText: "Chat on WhatsApp",
      color: "neon-blue"
    },
    {
      icon: Navigation,
      title: "Get Directions",
      description: "Navigate to our location",
      action: "https://maps.google.com/?q=Elite+CA+Building+New+Baneshwor+Kathmandu",
      actionText: "Open Maps",
      color: "neon-purple"
    },
    {
      icon: Calendar,
      title: "Book Online",
      description: "Reserve your gaming session",
      action: "/services",
      actionText: "Book Now",
      color: "neon-pink"
    }
  ];

  const operatingHours = [
    { day: "Monday - Thursday", hours: "2:00 PM - 12:00 AM" },
    { day: "Friday - Sunday", hours: "12:00 PM - 2:00 AM" },
    { day: "Late Night Gaming", hours: "Call for availability" },
    { day: "Tournament Days", hours: "Extended hours" }
  ];

  const services = [
    { name: "PS5 Gaming", phone: "Book via call" },
    { name: "PC Gaming", phone: "Book via call" }, 
    { name: "Escape Rooms", phone: "Advance booking required" },
    { name: "Tournaments", phone: "Registration via social media" },
    { name: "Group Events", phone: "Call for group rates" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-gaming text-4xl md:text-6xl font-bold text-neon mb-6 animate-slide-up">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up">
            Ready to level up your gaming experience? Get in touch with us for bookings, inquiries, and more!
          </p>
        </div>
      </section>

      {/* Quick Contact Actions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {quickContacts.map((contact, index) => (
              <Card 
                key={index}
                className={`card-glow bg-card/50 backdrop-blur-sm border-${contact.color}/20 hover:border-${contact.color}/40 transition-all duration-300 group text-center`}
              >
                <CardContent className="p-6 space-y-4">
                  <div className={`inline-flex p-3 rounded-lg bg-${contact.color}/10 border border-${contact.color}/20 group-hover:bg-${contact.color}/20 transition-all duration-300`}>
                    <contact.icon className={`h-6 w-6 text-${contact.color}`} />
                  </div>
                  <div>
                    <h3 className="font-gaming text-lg font-semibold text-foreground mb-1">
                      {contact.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {contact.description}
                    </p>
                  </div>
                  <Button 
                    asChild
                    className={`btn-neon bg-${contact.color}/10 text-${contact.color} border-${contact.color} hover:bg-${contact.color} hover:text-background font-rajdhani font-semibold`}
                  >
                    {contact.action.startsWith('http') || contact.action.startsWith('tel:') || contact.action.startsWith('https://wa.me') ? (
                      <a href={contact.action} target="_blank" rel="noopener noreferrer">
                        {contact.actionText}
                      </a>
                    ) : (
                      <Link to={contact.action}>
                        {contact.actionText}
                      </Link>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Contact Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <Card className="card-glow bg-card/50 backdrop-blur-sm border-neon-blue/20">
                <CardHeader>
                  <CardTitle className="font-gaming text-2xl text-neon-blue flex items-center space-x-2">
                    <Phone className="h-6 w-6" />
                    <span>Phone Numbers</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.phones.map((phone, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-neon-blue/5 rounded-lg border border-neon-blue/10">
                      <span className="text-foreground font-rajdhani font-semibold">
                        {phone.number}
                        {phone.primary && (
                          <span className="ml-2 text-neon-blue text-sm">(Primary)</span>
                        )}
                      </span>
                      <Button 
                        asChild
                        size="sm"
                        className="btn-neon bg-neon-green/10 text-neon-green border-neon-green hover:bg-neon-green hover:text-background"
                      >
                        <a href={`tel:${phone.number}`}>
                          <Phone className="h-4 w-4 mr-1" />
                          Call
                        </a>
                      </Button>
                    </div>
                  ))}
                  <p className="text-muted-foreground text-sm">
                    Available for bookings, inquiries, and customer support
                  </p>
                </CardContent>
              </Card>

              <Card className="card-glow bg-card/50 backdrop-blur-sm border-neon-purple/20">
                <CardHeader>
                  <CardTitle className="font-gaming text-2xl text-neon-purple flex items-center space-x-2">
                    <MapPin className="h-6 w-6" />
                    <span>Location</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 bg-neon-purple/5 rounded-lg border border-neon-purple/10">
                    <p className="text-foreground font-rajdhani font-medium">
                      {contactInfo.address}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-muted-foreground text-sm">
                      Located in the heart of New Baneshwor, easily accessible from all parts of Kathmandu.
                    </p>
                    <Button 
                      asChild
                      className="btn-neon bg-neon-purple/10 text-neon-purple border-neon-purple hover:bg-neon-purple hover:text-background font-rajdhani font-semibold"
                    >
                      <a 
                        href="https://maps.google.com/?q=Elite+CA+Building+New+Baneshwor+Kathmandu" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Navigation className="h-4 w-4 mr-2" />
                        Get Directions
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-glow bg-card/50 backdrop-blur-sm border-neon-green/20">
                <CardHeader>
                  <CardTitle className="font-gaming text-2xl text-neon-green flex items-center space-x-2">
                    <Clock className="h-6 w-6" />
                    <span>Operating Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {operatingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center p-2 bg-neon-green/5 rounded border border-neon-green/10">
                      <span className="text-foreground font-rajdhani">{schedule.day}</span>
                      <span className="text-neon-green font-semibold text-sm">{schedule.hours}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Services & Social Media */}
            <div className="space-y-8">
              <Card className="card-glow bg-card/50 backdrop-blur-sm border-neon-pink/20">
                <CardHeader>
                  <CardTitle className="font-gaming text-2xl text-neon-pink">
                    Quick Service Booking
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-neon-pink/5 rounded-lg border border-neon-pink/10">
                      <span className="text-foreground font-rajdhani font-medium">{service.name}</span>
                      <span className="text-muted-foreground text-sm">{service.phone}</span>
                    </div>
                  ))}
                  <div className="pt-4 border-t border-border">
                    <Button 
                      asChild
                      className="w-full btn-neon bg-neon-pink/10 text-neon-pink border-neon-pink hover:bg-neon-pink hover:text-background font-rajdhani font-semibold"
                    >
                      <a href={`tel:${contactInfo.phones[0].number}`}>
                        Call to Book Any Service
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-glow bg-card/50 backdrop-blur-sm border-neon-cyan/20">
                <CardHeader>
                  <CardTitle className="font-gaming text-2xl text-neon-cyan">
                    Follow Us Online
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 bg-neon-pink/5 rounded-lg border border-neon-pink/10">
                      <Instagram className="h-6 w-6 text-neon-pink" />
                      <div className="flex-1">
                        <p className="font-gaming font-semibold text-foreground">Instagram</p>
                        <p className="text-muted-foreground text-sm">@levelupgaminglou.nge</p>
                      </div>
                      <Button 
                        asChild
                        size="sm"
                        className="btn-neon bg-neon-pink/10 text-neon-pink border-neon-pink hover:bg-neon-pink hover:text-background"
                      >
                        <a href={contactInfo.social.instagram} target="_blank" rel="noopener noreferrer">
                          Follow
                        </a>
                      </Button>
                    </div>

                    <div className="flex items-center space-x-4 p-4 bg-neon-blue/5 rounded-lg border border-neon-blue/10">
                      <Facebook className="h-6 w-6 text-neon-blue" />
                      <div className="flex-1">
                        <p className="font-gaming font-semibold text-foreground">Facebook</p>
                        <p className="text-muted-foreground text-sm">Level Up Gaming Lounge</p>
                      </div>
                      <Button 
                        asChild
                        size="sm"
                        className="btn-neon bg-neon-blue/10 text-neon-blue border-neon-blue hover:bg-neon-blue hover:text-background"
                      >
                        <a href={contactInfo.social.facebook} target="_blank" rel="noopener noreferrer">
                          Like
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="text-center pt-4 border-t border-border">
                    <p className="text-muted-foreground text-sm mb-4">
                      Stay updated with our latest tournaments, events, and special offers
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button 
                        asChild
                        size="sm"
                        className="btn-neon bg-neon-pink/10 text-neon-pink border-neon-pink hover:bg-neon-pink hover:text-background font-rajdhani"
                      >
                        <a href={contactInfo.social.instagram} target="_blank" rel="noopener noreferrer">
                          Instagram
                        </a>
                      </Button>
                      <Button 
                        asChild
                        size="sm"
                        className="btn-neon bg-neon-blue/10 text-neon-blue border-neon-blue hover:bg-neon-blue hover:text-background font-rajdhani"
                      >
                        <a href={contactInfo.social.facebook} target="_blank" rel="noopener noreferrer">
                          Facebook
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Google Maps Placeholder */}
              <Card className="card-glow bg-card/50 backdrop-blur-sm border-neon-gold/20">
                <CardHeader>
                  <CardTitle className="font-gaming text-2xl text-neon-gold">
                    Find Us on Map
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gradient-gaming rounded-lg flex items-center justify-center border border-neon-gold/20 mb-4">
                    <div className="text-center space-y-2">
                      <MapPin className="h-8 w-8 text-neon-gold mx-auto" />
                      <p className="text-muted-foreground text-sm">Interactive Map</p>
                      <p className="text-xs text-muted-foreground">Elite CA Building, New Baneshwor</p>
                    </div>
                  </div>
                  <Button 
                    asChild
                    className="w-full btn-neon bg-neon-gold/10 text-neon-gold border-neon-gold hover:bg-neon-gold hover:text-background font-rajdhani font-semibold"
                  >
                    <a 
                      href="https://maps.google.com/?q=Elite+CA+Building+New+Baneshwor+Kathmandu" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Open in Google Maps
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-gaming text-3xl md:text-4xl font-bold text-neon mb-6">
            Visit Us Today!
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Experience the future of gaming at Level Up Gaming Lounge. Book your session now!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="btn-neon bg-neon-green text-background hover:bg-neon-green/80 font-rajdhani font-semibold text-lg px-8 py-6"
            >
              <a href={`tel:${contactInfo.phones[0].number}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call Now to Book
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="btn-neon border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background font-rajdhani font-semibold text-lg px-8 py-6"
            >
              <a 
                href="https://maps.google.com/?q=Elite+CA+Building+New+Baneshwor+Kathmandu" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Navigation className="mr-2 h-5 w-5" />
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;