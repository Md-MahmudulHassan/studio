import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignupPage() {
  return (
    <div className="relative w-full h-screen">
       <Image
        src="https://placehold.co/1920x1080.png"
        alt="Background"
        fill
        className="object-cover"
        data-ai-hint="movie collage"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <Card className="mx-auto max-w-sm bg-black/75 text-white border-black/50">
          <CardHeader>
            <CardTitle className="text-xl">Sign Up</CardTitle>
            <CardDescription>
              Enter your information to create an account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">Full name</Label>
                <Input id="first-name" placeholder="Max" required className="bg-gray-700 border-gray-600 placeholder:text-gray-400"/>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="bg-gray-700 border-gray-600 placeholder:text-gray-400"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" className="bg-gray-700 border-gray-600" />
              </div>
              <Button type="submit" className="w-full">
                Create an account
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="underline text-primary/90 hover:text-primary">
                Login
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
