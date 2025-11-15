import { Link, useLocation } from "react-router-dom";
import { UtensilsCrossed, Calendar } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-to-br from-primary to-accent p-2 rounded-lg group-hover:scale-105 transition-transform">
              <UtensilsCrossed className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              DineLink
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/restaurants"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/restaurants") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Restaurants
            </Link>
            <Link to="/bookings">
              <Button 
                variant={isActive("/bookings") ? "default" : "outline"} 
                size="sm"
                className="gap-2"
              >
                <Calendar className="h-4 w-4" />
                My Bookings
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
