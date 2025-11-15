import { useState, useEffect } from "react";
import { Booking } from "@/types/restaurant";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, Users, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import ReviewDialog from "@/components/ReviewDialog";
