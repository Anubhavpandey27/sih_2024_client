import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../config/firebase.config";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import Lottie from "lottie-react";
import AlumniAnimation from "../assets/Animations/AlumniAnimation.json";
import ReCAPTCHA from "react-google-recaptcha";
import SignupAnimation from "../assets/Animations/Animation - 1726648448935.json";
import { Link } from "react-router-dom";
export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const role = "academics";
  const [error, setError] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);
  const [RecaptchaMessage, setRecaptchaMessage] = useState(false);

  const signUpAction = async () => {
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCred.user;
      console.log(user);
      await sendEmailVerification(user);
      console.log("success");
    } catch (error) {
      setError(error.message);
      console.error("Error during sign-up:", error);
    }
  };

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = (e) => {
    e.preventDefault();
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
    setIsRecaptchaVerified(true); // Set to true when reCAPTCHA is completed
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!recaptchaToken) {
      setError("Please complete the reCAPTCHA.");
      setIsRecaptchaVerified(false); // Reset reCAPTCHA verification state
      setRecaptchaMessage(true);
      return;
    }
    // signUpAction();
    // Proceed with the form submission (e.g., send data to backend)
    console.log({ email, password, name, age, recaptchaToken });
    // Reset error state
    setError("");
    setRecaptchaMessage(false);
  };

  return (
    <div className="flex flex-row gap-2">
      <div className="flex min-h-full flex-1 flex-col justify-center lg:ml-40 py-12 mt-20 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#4a2c2a]">
            Sign up for an account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            // action="#"
            method="POST"
            className="space-y-4"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-row justify-center">
              <h2>Role : </h2>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="status"
                  value="alumni"
                  className="hidden peer"
                />
                <span className="w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center peer-checked:bg-blue-500 peer-checked:border-blue-500"></span>
                <span>Alumni</span>
              </label>

              <label className="flex items-center space-x-2 ml-4">
                <input
                  type="radio"
                  name="status"
                  value="student"
                  className="hidden peer"
                />
                <span className="w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center peer-checked:bg-blue-500 peer-checked:border-blue-500"></span>
                <span>Student</span>
              </label>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="block text-sm flex font-medium text-gray-900"
                style={{ outline: "none" }}
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="flex text-sm font-medium text-gray-900 outline-none"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="flex text-sm font-medium text-gray-900 outline-none"
              >
                College Name
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
                />
              </div>
            </div>



            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="block text-sm flex font-medium text-gray-900"
                style={{ outline: "none" }}
              >
                Password
              </label>
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="new-password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-semibold focus:ring-2 sm:text-sm sm:leading-6 pr-10"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#4a2c2a] hover:text-[#cd882a]"
                >
                  {showPassword ? (
                    <FaEyeSlash size={24} />
                  ) : (
                    <FaEye size={24} />
                  )}
                </button>
              </div>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="block text-sm flex font-medium text-gray-900"
                style={{ outline: "none" }}
              >
                Confirm Password
              </label>
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  autoComplete="new-password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                  className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-semibold focus:ring-2 sm:text-sm sm:leading-6 pr-10"
                />
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#4a2c2a] hover:text-[#cd882a] hover:text-gray-600"
                >
                  {showConfirmPassword ? (
                    <FaEyeSlash size={24} />
                  ) : (
                    <FaEye size={24} />
                  )}
                </button>
              </div>
            </div>

            <div className="w-full flex justify-center">
              <ReCAPTCHA
                sitekey="6Ld8OUcqAAAAAIPAq8cSVeA1QVzB826prjigIWMk"
                onChange={handleRecaptchaChange}
              />
            </div>
            <button
              type="submit"
              // onClick={handleSubmit}
              className="flex w-full justify-center rounded-md hover:bg-[#cd882a] bg-[#4a2c2a] hover:text-[#4a2c2a] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cb0100]"
            >
              Sign up
            </button>
            <div>
              {RecaptchaMessage && (
                <p className="text-red-500 text-sm mb-2">
                  Please complete the reCAPTCHA to enable the submit button.
                </p>
              )}

            </div>
            <div className="flex gap-2 text-sm mt-5 justify-center">
              <span>Have an account?</span>
              <Link to="/sign-in" className="text-blue-500 hover:underline">
                Sign In
              </Link>
            </div>
          </form>
          <button
              // type="submit"
              onClick={signUpAction}
              className="flex w-full justify-center rounded-md hover:bg-[#cd882a] bg-[#4a2c2a] hover:text-[#4a2c2a] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cb0100]"
            >
              Get Verification Link on Email
            </button>
        </div>
      </div>
      <div className="flex max-h-full mt-20 flex-1 flex-col justify-center ml-4 py-12  hidden md:block">
        <Lottie animationData={SignupAnimation} className="h-full w-full" />
      </div>
    </div>
  );
}
