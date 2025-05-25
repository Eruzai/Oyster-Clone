import React from "react";
import { motion } from "framer-motion";
import Input from "../components/Input";
import { Loader, Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
import { useAuthStore } from "../store/authStore";
import logo from "../assets/oyster logo.png";
import ImageSlider from "../components/ImageSlider";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { signup, err, isLoading } = useAuthStore();
  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await signup(email, password, name);
      navigate("/verify-email");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex  h-screen">
      <div className="w-3/4 flex justify-center text-6xl bg-white">
        <ImageSlider />
      </div>
      <div
        className="w-1/4 bg-[#F9FAFB] bg-opacity-80
    	overflow-hidden"
      >
        <div className="p-8">
          <h2
            style={{ color: "#3B82F6" }}
            className="text-3xl font-bold mb-6 text-center"
          >
            Start your Career with Us!
          </h2>
          <div className="flex justify-center items-center mb-7">
            <img src={logo} />
          </div>
          <form
            onSubmit={handleSignUp}
            className="bg-white"
            style={{ color: "#3B82F6" }}
          >
            <Input
              icon={User}
              type="text"
              placeholder="Full Name"
              value={name}
              className="bg-white"
              onChange={(e) => setName(e.target.value)}
            />
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
              onChange={(e) => setPassword(e.target.value)}
            />
            {err && <p className=" bg-[#3B82F6] font-semibold mt-2">{err}</p>}
            <PasswordStrengthMeter
              password={password}
              className="text-[#3B82F6]"
            />
            <motion.button
              className="mt-5 w-full py-3 px-4 bg-[#3B82F6] text-black
						font-bold rounded-lg shadow-lg hover:
					 transition duration-200"
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader className=" animate-spin mx-auto" size={24} />
              ) : (
                "Sign Up"
              )}
            </motion.button>
          </form>
        </div>
        <div className="px-8 py-4 bg-white  flex justify-center">
          <p className="text-md text-black  text-2xl">
            Already have an account?
            <Link
              style={{ color: "#3B82F6" }}
              to={"/login"}
              className="text-black font-extrabold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
