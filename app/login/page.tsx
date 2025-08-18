"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Heart, Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const res = await fetch(`https://mind-matters-mn7b.onrender.com/login`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        alert(data.detail || "Login failed")
        return
      }

      localStorage.setItem("token", data.token)
      localStorage.setItem("user", JSON.stringify(data.user))

      if (data.user.role === "admin") {
        router.push("/dashboard/admin")
      } else {
        router.push("/dashboard/user/")
      }
    } catch (err) {
      alert("Error occurred. Please try again")
    }
  }

  return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center text-2xl font-bold text-slate-900 mb-2">
              <Heart className="h-8 w-8 text-blue-600 mr-2" />
              Mind Matters
            </Link>
            <p className="text-slate-600">Welcome back to your wellness journey</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Sign In</CardTitle>
              <CardDescription>Enter your credentials to access your account</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Doctor Test Account Details */}
              <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm text-slate-700">
                <p className="font-semibold text-slate-900">Test Doctor Login</p>
                <p>Email: <span className="font-mono">dr.jane.doctor@gmail.com</span></p>
                <p>Password: <span className="font-mono">qwerty</span></p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                          <EyeOff className="h-4 w-4 text-slate-400" />
                      ) : (
                          <Eye className="h-4 w-4 text-slate-400" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Link href="#" className="text-sm text-blue-600 hover:underline">
                    Forgot password?
                  </Link>
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Sign In
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-slate-600">
                  {"Don't have an account? "}
                  <Link href="/register" className="text-blue-600 hover:underline">
                    Sign up here
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
  )
}
