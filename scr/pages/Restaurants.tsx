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




