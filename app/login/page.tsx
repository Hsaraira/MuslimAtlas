import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <h1 className="text-2xl font-bold text-stone-900 text-center">
            Welcome Back
          </h1>
          <p className="text-stone-600 text-center mt-2">
            Sign in to manage your listings
          </p>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              required
            />
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              required
            />

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-stone-700">Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-green-700 hover:text-green-800">
                Forgot password?
              </Link>
            </div>

            <Button type="submit" className="w-full">
              Sign In
            </Button>

            <p className="text-center text-sm text-stone-600">
              Don't have an account?{" "}
              <Link href="/signup" className="text-green-700 hover:text-green-800 font-medium">
                Sign up
              </Link>
            </p>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-stone-500">
              Authentication coming soon
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
