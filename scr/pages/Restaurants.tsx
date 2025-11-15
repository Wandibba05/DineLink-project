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


