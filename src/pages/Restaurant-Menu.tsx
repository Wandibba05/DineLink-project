<TabsContent value="menu" className="space-y-4">
  <Card>
    <CardHeader>
      <div className="flex items-center justify-between">
        <div>
          <CardTitle>Menu Management</CardTitle>
          <CardDescription>Upload and manage your restaurant menu</CardDescription>
        </div>
        <Menu className="h-5 w-5 text-muted-foreground" />
      </div>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="menuDescription">Menu Description</Label>
        <Textarea
          id="menuDescription"
          placeholder="Describe your menu offerings..."
          rows={4}
        />
      </div>
      <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
        <Menu className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
        <p className="text-muted-foreground mb-4">
          Upload menu images or PDF
        </p>
        <Button>Upload Menu</Button>
      </div>
      <Button className="w-full">Save Menu</Button>
    </CardContent>
  </Card>
</TabsContent>