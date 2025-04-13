"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const allFilled = Object.values(formData).every((val) => val.trim() !== "");

    if (!allFilled) {
      setError("Please fill in both email and password.");
      return;
    }

    setError("");
    // Login logic here
    router.push("/");
  };

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row bg-white text-black justify-center mx-auto h-auto md:h-[85vh] rounded-[40px]">
        {/* Sign-In Form Section */}
        <div className="right-signup w-full md:w-[50%] flex flex-col items-center justify-center text-center py-6 px-4 md:px-[48px]">
          <h2 className="font-bold text-3xl mb-4">Sign In</h2>

          <div className="form-container sign-up flex flex-col justify-center w-full">
            {error && <p className="text-red-600 text-sm mb-2">{error}</p>}

            <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
              <Input
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <Input
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />

              <div className="text-[13px] mb-[20px]">Forgot Password</div>

              <button
                type="submit"
                className="px-12 py-2 mx-1 border border-black text-black hover:text-[#f0c040] hover:bg-black hover:border-[#f0c040] hover:font-bold transition"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>

        {/* Sign-Up Section */}
        <div className="left-signup bg-[#f0c040] w-full md:w-[50%] flex flex-col items-center justify-center text-center rounded-tl-[150px] rounded-bl-[150px] rounded-tr-[40px] rounded-br-[40px] py-6 px-4 md:px-[100px] hidden md:block">
          <h1 className="text-[30px] md:text-[40px] font-bold">Hello Friend!</h1>
          <p className="text-[14px] md:text-[16px] my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vitae obcaecati
          </p>
          <Link href="/signup">
            <button className="px-12 py-2 mx-1 border border-black text-black hover:text-[#f0c040] hover:bg-black hover:border-[#f0c040] hover:font-bold transition">
              SIGN UP
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

// ✅ Reusable Input Component
function Input({ label, type = "text", name, value, onChange }) {
  return (
    <div className="w-full my-2">
      <label className="block text-left text-sm font-semibold text-[#5e4437] mb-1">{label}</label>
      <input
        className="w-full bg-[#eee] py-[10px] px-[15px] border border-black"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
