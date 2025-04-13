import Link from "next/link";
export default function Button2({ label, onClick}) {
    return (
        <div>
      <button
      onClick={onClick}
        className="px-12 py-2 mx-1 border border-black text-black hover:text-[#f0c040] hover:bg-black hover:border-black hover:font-bold transition"
      >
        {label}
      </button>
      </div>
    );
  }
  