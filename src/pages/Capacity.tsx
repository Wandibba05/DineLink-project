<TabsContent value="capacity" className="space-y-4">
  <Card>
    <CardHeader>
      <div className="flex items-center justify-between">
        <div>
          <CardTitle>Restaurant Capacity</CardTitle>
          <CardDescription>Set maximum guest capacity</CardDescription>
        </div>
        <Users className="h-5 w-5 text-muted-foreground" />
      </div>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="maxGuests">Maximum Total Guests</Label>
        <Input
          id="maxGuests"
          type="number"
          placeholder="e.g., 50"
          value={capacity.maxGuests}
          onChange={(e) =>
            setCapacity({ ...capacity, maxGuests: e.target.value })
          }
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="biggestTable">Biggest Table Capacity</Label>
        <Input
          id="biggestTable"
          type="number"
          placeholder="e.g., 8"
          value={capacity.biggestTable}
          onChange={(e) =>
            setCapacity({ ...capacity, biggestTable: e.target.value })
          }
        />
      </div>
      <Button className="w-full">Save Capacity Settings</Button>
    </CardContent>
  </Card>
</TabsContent>