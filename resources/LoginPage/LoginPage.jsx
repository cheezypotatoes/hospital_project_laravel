import { useState } from "react";
import { useNavigate } from "react-router-dom";   // ✅ import here
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react"; // 👁️ icons
import "../css/app.css";
import Logo from "../images/Logo.svg"; // adjust path based on your project

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 👁️ state
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login with:", { email, password });

    // 👉 Redirect to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-700 p-6">
      <Card className="w-full max-w-3xl shadow-2xl rounded-2xl bg-white">
        <CardContent className="p-0 flex">
          {/* Left Side - Logo */}
          <div className="hidden md:flex items-center justify-center rounded-l-2xl w-1/2 p-6">
            <img src={Logo} alt="JMC Logo" className="h-75 w-auto" />
          </div>

          {/* Right Side - Login Form */}
          <div className="w-full md:w-2/3 p-8">
            <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
              Login
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-lg"
                />
              </div>

              {/* Password with toggle */}
              <div className="space-y-2 relative">
                <Label htmlFor="password" className="text-gray-700 font-medium">
                  Password
                </Label>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"} // toggle type
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-lg pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-[42px] text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
              >
                Sign In
              </Button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-6">
              Don’t have an account?{" "}
              <a href="/register" className="text-blue-600 hover:underline">
                Register
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
