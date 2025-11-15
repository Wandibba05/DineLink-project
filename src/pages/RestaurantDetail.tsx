<TabsContent value="restaurant" className="space-y-4">
  <Card>
    <CardHeader>
      <div className="flex items-center justify-between">
        <div>
          <CardTitle>Add Restaurant</CardTitle>
          <CardDescription>Create a new restaurant listing</CardDescription>
        </div>
        <Plus className="h-5 w-5 text-muted-foreground" />
      </div>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Restaurant Name *</Label>
        <Input
          id="name"
          value={restaurantForm.name}
          onChange={(e) =>
            setRestaurantForm({ ...restaurantForm, name: e.target.value })
          }
          placeholder="e.g., La Bella Vita"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="cuisine">Cuisine *</Label>
        <Input
          id="cuisine"
          value={restaurantForm.cuisine}
          onChange={(e) =>
            setRestaurantForm({ ...restaurantForm, cuisine: e.target.value })
          }
          placeholder="e.g., Italian"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description *</Label>
        <Textarea
          id="description"
          value={restaurantForm.description}
          onChange={(e) =>
            setRestaurantForm({ ...restaurantForm, description: e.target.value })
          }
          placeholder="Describe your restaurant..."
          rows={3}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>
        <Input
          id="location"
          value={restaurantForm.location}
          onChange={(e) =>
            setRestaurantForm({ ...restaurantForm, location: e.target.value })
          }
          placeholder="e.g., Downtown, 123 Main St"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="priceRange">Price Range</Label>
        <Input
          id="priceRange"
          value={restaurantForm.priceRange}
          onChange={(e) =>
            setRestaurantForm({ ...restaurantForm, priceRange: e.target.value })
          }
          placeholder="e.g., $$"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="openingHours">Opening Hours</Label>
        <Input
          id="openingHours"
          value={restaurantForm.openingHours}
          onChange={(e) =>
            setRestaurantForm({ ...restaurantForm, openingHours: e.target.value })
          }
          placeholder="e.g., 11:00 AM - 10:00 PM"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="features">Features (comma separated)</Label>
        <Input
          id="features"
          value={restaurantForm.features}
          onChange={(e) =>
            setRestaurantForm({ ...restaurantForm, features: e.target.value })
          }
          placeholder="e.g., Outdoor Seating, Wine Bar"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="image">Image URL</Label>
        <Input
          id="image"
          value={restaurantForm.image}
          onChange={(e) =>
            setRestaurantForm({ ...restaurantForm, image: e.target.value })
          }
          placeholder="URL to restaurant image"
        />
      </div>
      <Button onClick={handleAddRestaurant} className="w-full">
        Add Restaurant
      </Button>
    </CardContent>
  </Card>
</TabsContent>