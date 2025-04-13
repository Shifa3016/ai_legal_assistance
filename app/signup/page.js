"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignupPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (email.trim() === "" || password.trim() === "") {
      setError("Please fill in all fields.");
      return;
    }

    // Everything filled, proceed
    setError("");
    // TODO: Add real signup logic here (e.g., API call)
    router.push("/");
  };

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row bg-white text-black justify-center mx-auto h-auto md:h-[85vh] rounded-[40px]">
        
        {/* Yellow Section (left-signup) */}
        <div className="left-signup bg-[#f0c040] w-full md:w-[50%] flex flex-col items-center justify-center text-center rounded-[40px] md:rounded-tl-[40px] md:rounded-bl-[40px] md:rounded-tr-[150px] md:rounded-br-[150px] py-6 px-4 md:px-[100px]">
          <h1 className="text-[30px] md:text-[40px] font-bold">Welcome Back!</h1>
          <p className="text-[14px] md:text-[16px] my-4">
            You're an existing user — sign in here to continue your journey.
          </p>
          <button
            onClick={() => router.push("/signin")}
            className="px-12 py-2 mx-1 border border-black text-black hover:text-[#f0c040] hover:bg-black hover:border-[#f0c040] hover:font-bold transition"
          >
            SIGN IN
          </button>
        </div>

        {/* Sign-Up Form Section (right-signup) */}
        <div className="right-signup w-full md:w-[50%] flex flex-col items-center justify-center text-center py-6 px-4 md:px-[48px]">
          <h2 className="font-bold text-3xl mb-4">Create Account</h2>
          <div className="form-container sign-up flex flex-col justify-center w-full">
            <form onSubmit={handleSubmit}>
              {error && <p className="text-red-600 mb-2">{error}</p>}

              <input
                className="my-2 bg-[#eee] py-[10px] px-[15px] border-none w-full"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
                autoComplete="off"
              />
              <input
                className="my-2 bg-[#eee] py-[10px] px-[15px] border-none mb-[20px] w-full"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
                autoComplete="off"
              />
              <button
                type="submit"
                className="px-12 py-2 mx-1 border border-black text-black hover:text-[#f0c040] hover:bg-black hover:border-[#f0c040] hover:font-bold transition"
              >
                SUBMIT
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-[13px] my-4">If you're an NGO, please click below.</h3>
            <Link href="/ngo-form">
              <button className="px-12 py-2 mx-1 border border-black text-black hover:text-[#f0c040] hover:bg-black hover:border-[#f0c040] hover:font-bold transition">
                For NGOs
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

