import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Loader } from "lucide-react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import { useAuthStore } from "../store/authStore";
import logo from "../assets/oyster logo.png";
import { useNavigate } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { login, isLoading, error } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
    navigate("/dashboard");
  };

  return (
    <div className="flex h-[90%]">
      <div className="w-3/4 flex justify-center text-6xl bg-white">
        <ImageSlider />
      </div>
      <div
        className="w-1/4  bg-opacity-80 bg-[#F9FAFB]
overflow-hidden"
      >
        <div className="p-8">
          <div className="flex justify-center items-center mb-2">
            <img src={logo} />
          </div>

          <form onSubmit={handleLogin}>
            <Input
              icon={Mail}
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              icon={Lock}
              type="password"
              placeholder="Password"
              value={password}
              className="text-primaryColor"
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="flex items-center mb-6">
              <Link
                to="/forgot-password"
                className="text-md text-black hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            {error && (
              <p className="text-red-500 font-semibold mb-2">{error}</p>
            )}

            <motion.button
              className="mt-5 w-full py-3 px-4 bg-[#3B82F6]
font-bold rounded-lg shadow-lg hover:
transition duration-200"
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader className="w-6 h-6 animate-spin mx-auto" />
              ) : (
                "Login"
              )}
            </motion.button>
          </form>
        </div>
        <div className="px-8 py-4 bg-#F9FAFB flex justify-center">
          <p className="text-lg text-black">
            Already have an account?
            <Link
              to={"/signup"}
              className="text-black font-extrabold hover:underline text-lg"
              style={{ color: "#3B82F6" }}
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
