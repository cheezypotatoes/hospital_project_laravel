import { useState } from "react";
import { Card, CardContent } from "../Components/Card.jsx";
import { Button } from "../Components/Button.jsx";
import { Input } from "../Components/Input.jsx";
import { Label } from "../Components/Label.jsx";
import { Eye, EyeOff } from "lucide-react";
import Logo from "../Images/Logo.svg";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": document
            .querySelector('meta[name="csrf-token"]')
            .getAttribute("content"),
        },
        body: JSON.stringify({
          name,
          email,
          password,
          password_confirmation: passwordConfirmation,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        window.location.href = data.redirect || "/dashboard";
      } else {
        setError(data.message || "Registration failed.");
      }
    } catch (err) {
      console.error("Registration error:", err);
      setError("An unexpected error occurred.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-700 p-6">
      <Card className="w-full max-w-3xl shadow-2xl rounded-2xl bg-white">
        <CardContent className="p-0 flex">
          {/* Left Side - Logo */}
          <div className="hidden md:flex items-center justify-center rounded-l-2xl w-1/2 p-6">
            <img src={Logo} alt="Logo" className="h-24 w-auto" />
          </div>

          {/* Right Side - Register Form */}
          <div className="w-full md:w-2/3 p-6">
            <h1 className="text-2xl md:text-3xl font-extrabold mb-4 text-center text-gray-800">
              Register
            </h1>

            {error && <p className="text-red-600 text-center mb-4">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div className="space-y-1">
                <Label htmlFor="name" className="text-gray-700 font-medium">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-lg py-1.5 px-3"
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
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
                  className="w-full border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-lg py-1.5 px-3"
                />
              </div>

              {/* Password */}
              <div className="space-y-1 relative">
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
                  className="w-full border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-lg pr-10 py-1.5 px-3"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {/* Confirm Password */}
              <div className="space-y-1 relative">
                <Label
                  htmlFor="passwordConfirmation"
                  className="text-gray-700 font-medium"
                >
                  Confirm Password
                </Label>
                <Input
                  id="passwordConfirmation"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  required
                  className="w-full border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-lg pr-10 py-1.5 px-3"
                />
                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
              >
                Register
              </Button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-4">
              Already have an account?{" "}
              <a href="/login" className="text-blue-600 hover:underline">
                Login
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
