import { Restaurant } from "@/types/restaurant";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Star, MapPin, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-card/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
          <Star className="h-4 w-4 fill-primary text-primary" />
          <span className="text-sm font-semibold">{restaurant.rating}</span>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-1">
              {restaurant.name}
            </h3>
            <p className="text-sm text-muted-foreground">{restaurant.cuisine}</p>
          </div>
          <div className="flex items-center text-muted-foreground">
            <DollarSign className="h-4 w-4" />
            <span className="text-sm font-medium">{restaurant.priceRange}</span>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {restaurant.description}
        </p>
        
        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
          <MapPin className="h-4 w-4" />
          <span>{restaurant.location}</span>
        </div>
        
        <Link to={`/restaurant/${restaurant.id}`}>
          <Button className="w-full">Book Now</Button>
        </Link>
      </div>
    </Card>
  );
};

export default RestaurantCard;
