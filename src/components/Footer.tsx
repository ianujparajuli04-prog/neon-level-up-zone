import { Link } from "react-router-dom";
import { Gamepad2, Phone, MapPin, Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-neon-purple/20 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Gamepad2 className="h-8 w-8 text-neon-purple" />
              <span className="font-gaming text-xl font-bold text-neon bg-gradient-neon bg-clip-text text-transparent">
                Level Up
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              The new generation of gaming is here. Experience the future at Level Up Gaming Lounge in Kathmandu.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-gaming text-neon-blue font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/services" className="block text-muted-foreground hover:text-neon-purple transition-colors text-sm">
                Gaming Services
              </Link>
              <Link to="/escape-room" className="block text-muted-foreground hover:text-neon-purple transition-colors text-sm">
                Escape Room
              </Link>
              <Link to="/tournaments" className="block text-muted-foreground hover:text-neon-purple transition-colors text-sm">
                Tournaments
              </Link>
              <Link to="/offers" className="block text-muted-foreground hover:text-neon-purple transition-colors text-sm">
                Special Offers
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-gaming text-neon-green font-semibold">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-neon-purple" />
                <a href="tel:9863314966" className="text-muted-foreground hover:text-neon-purple transition-colors">
                  9863314966
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-neon-purple" />
                <a href="tel:9841324580" className="text-muted-foreground hover:text-neon-purple transition-colors">
                  9841324580
                </a>
              </div>
              <div className="flex items-start space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-neon-purple mt-0.5" />
                <span className="text-muted-foreground">
                  Elite CA Building, New Baneshwor, Kathmandu, Nepal
                </span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-gaming text-neon-pink font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/levelupgaminglou.nge"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-neon-pink/10 border border-neon-pink rounded-lg hover:bg-neon-pink/20 transition-colors"
              >
                <Instagram className="h-5 w-5 text-neon-pink" />
              </a>
              <a 
                href="https://facebook.com/Level-Up-Gaming-Lounge"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-neon-blue/10 border border-neon-blue rounded-lg hover:bg-neon-blue/20 transition-colors"
              >
                <Facebook className="h-5 w-5 text-neon-blue" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neon-purple/20 pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Level Up Gaming Lounge. All rights reserved. | The New Generation of Gaming is Here.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;