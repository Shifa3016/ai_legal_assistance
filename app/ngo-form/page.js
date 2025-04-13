"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NgoForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    ngoName: "",
    ownerNumber: "",
    staffNumber: "",
    pincode: "",
    location: "",
    city: "",
    state: "",
    latitude: "",
    longitude: "",
    email: "",
    address: "",
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

    // Only require fields except latitude and longitude
    const requiredFields = { ...formData };
    delete requiredFields.latitude;
    delete requiredFields.longitude;

    const allRequiredFilled = Object.values(requiredFields).every(
      (val) => val.trim() !== ""
    );

    if (!allRequiredFilled) {
      setError("Please fill out all required fields.");
      return;
    }

    setError("");
    // Submit logic here (e.g., API call)
    router.push("/");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-12 bg-black">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-90"
      >
        <source src="/two.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Form Container */}
      <div className="w-full max-w-lg bg-white/90 backdrop-blur-md border border-white/20 shadow-xl rounded-xl p-6 md:p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-[#5e4437]">
          🏛 NGO Registration Form
        </h1>

        {error && <p className="text-red-600 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Input label="Name of NGO" name="ngoName" value={formData.ngoName} onChange={handleChange} />
          <Input label="Owner Number" name="ownerNumber" value={formData.ownerNumber} onChange={handleChange} type="tel" />
          <Input label="Staff Number" name="staffNumber" value={formData.staffNumber} onChange={handleChange} type="number" />
          <Input label="Pincode" name="pincode" value={formData.pincode} onChange={handleChange} />
          <Input label="Location" name="location" value={formData.location} onChange={handleChange} />
          <Input label="City" name="city" value={formData.city} onChange={handleChange} />
          <Input label="State" name="state" value={formData.state} onChange={handleChange} />
          <Input label="Latitude" name="latitude" value={formData.latitude} onChange={handleChange} />
          <Input label="Longitude" name="longitude" value={formData.longitude} onChange={handleChange} />

          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-[#5e4437]">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input-field w-full border border-black p-2"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-[#5e4437]">Address</label>
            <textarea
              rows="3"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="input-field w-full border border-black p-2"
            ></textarea>
          </div>

          <div className="sm:col-span-2 flex justify-center">
            <button
              type="submit"
              className="px-8 py-2 mx-1 border border-black text-black hover:text-[#f0c040] hover:bg-black hover:border-[#f0c040] hover:font-bold transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ✅ Reusable Input Component
function Input({ label, name, value, onChange, type = "text" }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-[#5e4437]">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="input-field text-black border border-black p-2 w-full"
      />
    </div>
  );
}
