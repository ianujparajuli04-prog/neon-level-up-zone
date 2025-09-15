import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Escape Room", path: "/escape-room" },
    { name: "Tournaments", path: "/tournaments" },
    { name: "Gallery", path: "/gallery" },
    { name: "Offers", path: "/offers" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-neon-purple/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Gamepad2 className="h-8 w-8 text-neon-purple group-hover:text-neon-pink transition-colors" />
            <span className="font-gaming text-xl font-bold text-neon bg-gradient-neon bg-clip-text text-transparent">
              Level Up
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? "text-neon-purple"
                    : "text-foreground hover:text-neon-blue"
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-neon-purple shadow-neon" />
                )}
              </Link>
            ))}
          </div>

          {/* Book Now Button */}
          <div className="hidden md:block">
            <Button className="btn-neon bg-neon-purple/10 text-neon-purple border-neon-purple hover:bg-neon-purple hover:text-background font-rajdhani font-semibold">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-neon-purple transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 bg-card/95 backdrop-blur-md border border-neon-purple/20 rounded-lg mt-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? "text-neon-purple bg-neon-purple/5"
                    : "text-foreground hover:text-neon-blue hover:bg-neon-blue/5"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Button className="w-full btn-neon bg-neon-purple/10 text-neon-purple border-neon-purple hover:bg-neon-purple hover:text-background font-rajdhani font-semibold">
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;