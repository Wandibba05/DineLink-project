import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";
import { toast } from "sonner";
import { Booking } from "@/types/restaurant";

interface ReviewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  booking: Booking;
}

const ReviewDialog = ({ open, onOpenChange, booking }: ReviewDialogProps) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    if (rating === 0) {
      toast.error("Please select a rating");
      return;
    }

    const reviews = JSON.parse(localStorage.getItem("reviews") || "[]");
    const newReview = {
      id: Date.now().toString(),
      bookingId: booking.id,
      restaurantId: booking.restaurantId,
      rating,
      comment,
      userName: "Guest User",
      createdAt: new Date().toISOString(),
    };

    reviews.push(newReview);
    localStorage.setItem("reviews", JSON.stringify(reviews));
    
    toast.success("Thank you for your review!");
    onOpenChange(false);
    setRating(0);
    setComment("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Leave a Review</DialogTitle>
          <DialogDescription>
            How was your experience at {booking.restaurantName}?
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="flex items-center justify-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="transition-transform hover:scale-110"
              >
                <Star
                  className={`h-8 w-8 ${
                    star <= (hoveredRating || rating)
                      ? "fill-primary text-primary"
                      : "text-muted-foreground"
                  }`}
                />
              </button>
            ))}
          </div>

          <div>
            <Textarea
              placeholder="Share your experience... (optional)"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={4}
              className="resize-none"
            />
          </div>

          <Button onClick={handleSubmit} className="w-full">
            Submit Review
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReviewDialog;
