import { useState } from "react";
import RestaurantCard from "@/components/RestaurantCard";
import { useRestaurants } from "@/hooks/use-restaurants";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Restaurants = () => {
  const { restaurants } = useRestaurants();
  const [searchTerm, setSearchTerm] = useState("");
  const [cuisineFilter, setCuisineFilter] = useState("all");

  const cuisines = ["all", ...new Set(restaurants.map((r) => r.cuisine))];

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesSearch =
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.description.toLowerCase().includes(searchTerm.toLowerCase());

          const matchesCuisine =
      cuisineFilter === "all" || restaurant.cuisine === cuisineFilter;

    return matchesSearch && matchesCuisine;
  });
return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            All Restaurants
          </h1>
          <p className="text-lg text-muted-foreground">
            Find your perfect dining experience
          </p>
        </div>
   <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
                placeholder="Search restaurants, cuisines..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
            />
        </div>
            <Select value={cuisineFilter} onValueChange={setCuisineFilter}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="All Cuisines" />
            </SelectTrigger>
            <SelectContent>
              {cuisines.map((cuisine) => (
                <SelectItem key={cuisine} value={cuisine}>
                  {cuisine === "all" ? "All Cuisines" : cuisine}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {filteredRestaurants.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">
              No restaurants found matching your criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Restaurants;




