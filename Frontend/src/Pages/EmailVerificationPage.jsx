import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import toast from "react-hot-toast";
import backgroundimg from "../assets/Background SVG 1.png";
import logo from "../assets/oyster logo.png";
import { Loader } from "lucide-react";

const EmailVerificationPage = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const { error, isLoading, verifyEmail } = useAuthStore();

  const handleChange = (index, value) => {
    const newCode = [...code];

    // Handle pasted content
    if (value.length > 1) {
      const pastedCode = value.slice(0, 6).split("");
      for (let i = 0; i < 6; i++) {
        newCode[i] = pastedCode[i] || "";
      }
      setCode(newCode);

      // *Focus on the last non-empty input or the first empty one
      const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
      const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
      inputRefs.current[focusIndex].focus();
    } else {
      newCode[index] = value;
      setCode(newCode);

      // *Move focus to the next input field if value is entered
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const verificationCode = code.join("");
    try {
      await verifyEmail(verificationCode);
      navigate("/login");
      toast.success("Email verified successfully");
    } catch (error) {
      console.log(error);
    }
  };

  // *Auto submit when all fields are filled
  useEffect(() => {
    if (code.every((digit) => digit !== "")) {
      handleSubmit(new Event("submit"));
    }
  }, [code]);

  return (
    <div className="flex w-full h-full  mt-0 flex-1">
      <div className="w-2/3 flex justify-center items-center bg-white">
        <img
          src={backgroundimg}
          alt="Background image"
          aria-label="Background image"
          className="object-contain h-full w-full justify-center align-center"
        />
      </div>
      <div className="w-1/3 bg- backdrop-filter backdrop-blur-xl  rounded-2xl shadow-xl overflow-hidden">
        <div
          className="w-full h-screen flex flex-col justify-center bg-white bg-opacity-80
    	overflow-hidden mb-10"
        >
          <div className="flex justify-center items-center mb-2">
            <img src={logo} />
          </div>
          <p className="text-center text-black mb-6">
            Enter the 6-digit code sent to your email address.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-between w-8/9">
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength="6"
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-12 text-center text-2xl font-bold bg-white text-#3B82F6 border-2 border-black rounded-lg focus:border-#3B82F6 focus:outline-none"
                />
              ))}
            </div>
            {error && (
              <p className="text-red-500 font-semibold mt-2">{error}</p>
            )}

            <motion.button
              className="mt-5 w-full py-3 px-4 bg-[#3B82F6]   text-black
						font-bold rounded-lg shadow-lg hover:
					 transition duration-200"
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader
                  className="text-[#3B82F6] font-extrabold hover:underline text-lg"
                  size={24}
                />
              ) : (
                "Sign Up"
              )}
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationPage;
