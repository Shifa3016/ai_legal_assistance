import Link from "next/link";
export default function Button({ label}) {
    return (
        <div>
      <button
        className="px-12 py-2 mx-1 border border-white text-white hover:bg-[#f0c040] hover:text-black hover:border-[#f0c040] hover:font-bold transition"
      >
        {label}
      </button>
      </div>
    );
  }
  