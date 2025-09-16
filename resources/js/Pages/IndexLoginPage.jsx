import { useState } from "react";
import { Card, CardContent } from "../Components/Card.jsx";
import { Button } from "../Components/Button.jsx";
import { Input } from "../Components/Input.jsx";
import { Label } from "../Components/Label.jsx";
import { Eye, EyeOff } from "lucide-react";
import Logo from "../Images/Logo.svg"; 

export default function IndexLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // reset previous errors

    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": document
            .querySelector('meta[name="csrf-token"]')
            .getAttribute("content"),
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Laravel usually redirects after login
        window.location.href = data.redirect || "/dashboard";
      } else {
        setError(data.message || "Login failed. Check credentials.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("An unexpected error occurred.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-700 p-6">
      <Card className="w-full max-w-3xl shadow-2xl rounded-2xl bg-white">
        <CardContent className="p-0 flex">
          {/* Left Side - Logo */}
          <div className="hidden md:flex items-center justify-center rounded-l-2xl w-1/2 p-6">
            <img src={Logo} alt="Logo" className="h-75 w-auto" />
          </div>

          {/* Right Side - Login Form */}
          <div className="w-full md:w-2/3 p-8">
            <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
              Login
            </h1>

            {error && (
              <p className="text-red-600 text-center mb-4">{error}</p>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
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

              <div className="space-y-2 relative">
                <Label htmlFor="password" className="text-gray-700 font-medium">
                  Password
                </Label>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
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
