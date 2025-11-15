<TabsContent value="hours" className="space-y-4">
  <Card>
    <CardHeader>
      <div className="flex items-center justify-between">
        <div>
          <CardTitle>Working Hours</CardTitle>
          <CardDescription>Set your restaurant's operating hours</CardDescription>
        </div>
        <Clock className="h-5 w-5 text-muted-foreground" />
      </div>
    </CardHeader>
    <CardContent className="space-y-4">
      {Object.entries(workingHours).map(([day, hours]) => (
        <div key={day} className="flex items-center gap-4">
          <Label className="w-24 capitalize">{day}</Label>
          <div className="flex items-center gap-2">
            <Input
              type="time"
              value={hours.open}
              onChange={(e) =>
                setWorkingHours({
                  ...workingHours,
                  [day]: { ...hours, open: e.target.value },
                })
              }
              className="w-32"
            />
            <span>to</span>
            <Input
              type="time"
              value={hours.close}
              onChange={(e) =>
                setWorkingHours({
                  ...workingHours,
                  [day]: { ...hours, close: e.target.value },
                })
              }
              className="w-32"
            />
          </div>
        </div>
      ))}
      <Button className="w-full">Save Working Hours</Button>
    </CardContent>
  </Card>
</TabsContent>