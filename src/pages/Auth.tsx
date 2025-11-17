import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";

const Auth = () => {
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpName, setSignUpName] = useState("");
    const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign in:", signInEmail, signInPassword);
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign up:", signUpName, signUpEmail, signUpPassword);
  };
  return (
  <div className="min-h-screen bg-background flex items-center justify-center p-4">
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <Link to="/" className="inline-flex items-center gap-2 group">
          <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-lg group-hover:scale-105 transition-transform">
            <UtensilsCrossed className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            DineLink
          </span>
        </Link>
        <p className="text-muted-foreground mt-2">
          Book your next dining experience
        </p>
      </div>
      <Card>
  <CardHeader>
    <CardTitle>Welcome</CardTitle>
    <CardDescription>
      Sign in to your account or create a new one
    </CardDescription>
  </CardHeader>
  <CardContent>
    <Tabs defaultValue="signin" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="signin">Sign In</TabsTrigger>
        <TabsTrigger value="signup">Sign Up</TabsTrigger>
      </TabsList>
      <TabsContent value="signin">
  <form onSubmit={handleSignIn} className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="signin-email">Email</Label>
      <Input
        id="signin-email"
        type="email"
        placeholder="your@email.com"
        value={signInEmail}
        onChange={(e) => setSignInEmail(e.target.value)}
        required
      />
    </div>
    <div className="space-y-2">
      <Label htmlFor="signin-password">Password</Label>
      <Input
        id="signin-password"
        type="password"
        placeholder="••••••••"
        value={signInPassword}
        onChange={(e) => setSignInPassword(e.target.value)}
        required
      />
    </div>
    <Button type="submit" className="w-full">
      Sign In
    </Button>
  </form>
</TabsContent>
      <TabsContent value="signup">
  <form onSubmit={handleSignUp} className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="signup-name">Full Name</Label>
      <Input
        id="signup-name"
        type="text"
        placeholder="John Doe"
        value={signUpName}
        onChange={(e) => setSignUpName(e.target.value)}
        required
      />
    </div>
    <div className="space-y-2">
      <Label htmlFor="signup-email">Email</Label>
      <Input
        id="signup-email"
        type="email"
        placeholder="your@email.com"
        value={signUpEmail}
        onChange={(e) => setSignUpEmail(e.target.value)}
        required
      />
    </div>
    <div className="space-y-2">
      <Label htmlFor="signup-password">Password</Label>
      <Input
        id="signup-password"
        type="password"
        placeholder="••••••••"
        value={signUpPassword}
        onChange={(e) => setSignUpPassword(e.target.value)}
        required
      />
    </div>
    <Button type="submit" className="w-full">
      Sign Up
    </Button>
  </form>
</TabsContent>









