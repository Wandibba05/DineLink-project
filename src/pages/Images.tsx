<TabsContent value="images" className="space-y-4">
  <Card>
    <CardHeader>
      <div className="flex items-center justify-between">
        <div>
          <CardTitle>Restaurant Images</CardTitle>
          <CardDescription>Upload photos of your restaurant</CardDescription>
        </div>
        <Image className="h-5 w-5 text-muted-foreground" />
      </div>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="border-2 border-dashed border-border rounded-lg p-12 text-center">
        <Image className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
        <p className="text-muted-foreground mb-4">
          Drag and drop images here, or click to select
        </p>
        <Button>Upload Images</Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {/* Placeholder for uploaded images */}
      </div>
    </CardContent>
  </Card>
</TabsContent>