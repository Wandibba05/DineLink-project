import { useState, useEffect } from "react";
import { Booking } from "@/types/restaurant";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, Users, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import ReviewDialog from "@/components/ReviewDialog";

const Bookings = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [showReviewDialog, setShowReviewDialog] = useState(false);

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    
    const updatedBookings = storedBookings.map((booking: Booking) => {
      const bookingDate = new Date(booking.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (bookingDate < today && booking.status === "upcoming") {
        return { ...booking, status: "completed" };
      }
      return booking;
    });
    
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
    setBookings(updatedBookings);
  }, []);

  const upcomingBookings = bookings.filter((b) => b.status === "upcoming");
  const completedBookings = bookings.filter((b) => b.status === "completed");

  const handleCancelBooking = (id: string) => {
    const updatedBookings = bookings.filter((b) => b.id !== id);
    setBookings(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
    toast.success("Booking cancelled");
  };

const handleReviewClick = (booking: Booking) => {
    setSelectedBooking(booking);
    setShowReviewDialog(true);
  };

  const BookingCard = ({ booking, showActions }: { booking: Booking; showActions: boolean }) => (
    <Card className="p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold mb-1">{booking.restaurantName}</h3>
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
            booking.status === "upcoming" 
              ? "bg-primary/10 text-primary" 
              : "bg-secondary text-secondary-foreground"
          }`}>
            {booking.status === "upcoming" ? "Upcoming" : "Completed"}
          </span>
        </div>
      </div>

 <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>{new Date(booking.date).toLocaleDateString("en-US", { 
            weekday: "long", 
            year: "numeric", 
            month: "long", 
            day: "numeric" 
          })}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{booking.time}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Users className="h-4 w-4" />
          <span>{booking.guests} {booking.guests === 1 ? "Guest" : "Guests"}</span>
        </div>
      </div>


 {showActions && (
        <div className="flex gap-2">
          {booking.status === "upcoming" ? (
            <Button
              variant="destructive"
              className="w-full"
              onClick={() => handleCancelBooking(booking.id)}
            >
              Cancel Booking
            </Button>
          ) : (
            <Button
              variant="outline"
              className="w-full gap-2"
              onClick={() => handleReviewClick(booking)}
            >
              <MessageSquare className="h-4 w-4" />
              Leave Review
            </Button>
          )}
        </div>
      )}
    </Card>
  );
