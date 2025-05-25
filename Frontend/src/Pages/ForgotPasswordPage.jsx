import { motion } from "framer-motion";
import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import Input from "../components/Input";
import { Loader, Mail } from "lucide-react";

import logo from "../assets/oyster logo.png";
import ImageSlider from "../components/ImageSlider";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { isLoading, forgotPassword } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await forgotPassword(email);
    setIsSubmitted(true);
  };

  return (
    <div className="flex h-full">
      <div className="w-3/4 bg-white">
        <ImageSlider />
      </div>
      <div className="w-1/4">
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-6 justify-center bg-clip-text">
            <img src={logo} />
          </h2>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
              <Input
                icon={Mail}
                type="email"
                placeholder="Email Address"
                value={email}
                style={{ color: "#3B82F6" }}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <motion.button
                className="mt-5 w-full py-3 px-4 bg-[#3b82f6] text-black
						font-bold rounded-lg shadow-lg hover:
					 transition duration-200"
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader className="size-6 animate-spin mx-auto" />
                ) : (
                  "Proceed"
                )}
              </motion.button>
            </form>
          ) : (
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="w-16 h-16 bg-[#3B82F6] rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Mail className="h-8 w-8 text-white" />
              </motion.div>
              <p className="mb-6">
                If an account exists for {email}, you will receive a password
                reset link shortly.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ForgotPasswordPage;
