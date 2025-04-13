export default function Home() {
  return (
    <div className="">
      <div className="relative h-[90vh] overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/home.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <div className="relative z-10 h-[90vh] flex flex-col items-center justify-center text-center bg-black/40 text-white px-4 sm:px-8 md:px-16">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Welcome to LawSphere – Where Justice Meets Awareness
          </h1>
          <p className="text-lg sm:text-xl mt-4">
            Empowering Every Citizen with Legal Awareness and Support
          </p>
        </div>
      </div>

      {/* First Section */}
      <div className="flex flex-col sm:flex-row mx-2 sm:mx-4 my-6 sm:my-8">
        <div className="w-full sm:w-full flex flex-col items-center justify-center text-center px-4 sm:px-12">
          <h1 className="text-xl sm:text-2xl font-bold">
            Know Your Rights. Seek Justice. Take Action.
          </h1>
          <p className="text-base sm:text-lg mt-4">
            Navigating the legal world can be overwhelming — especially when you don’t know where to start. LawSphere is your one-stop platform for understanding your rights, exploring common laws, connecting with legal aid, and getting guidance through every step of your justice journey.
          </p>
        </div>
        <div className="w-full sm:w-1/2 flex justify-center mt-4 sm:mt-0">
          <img className="h-[40vh] rounded-xl w-full" src="home1.jpg" alt="home image" />
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col sm:flex-row mx-2 sm:mx-4 my-6 sm:my-8">
        <div className="w-full sm:w-1/2 flex justify-center mt-4 sm:mt-0">
          <img className="h-[40vh] rounded-xl w-full" src="blogs.jpg" alt="blogs" />
        </div>
        <div className="w-full sm:w-1/2 flex flex-col items-center justify-center text-center px-4 sm:px-12">
          <h1 className="text-xl sm:text-2xl font-bold">
            Learn About Laws
          </h1>
          <p className="text-base sm:text-lg mt-4">
            Visit our Blogs section to understand everyday laws that affect you — from consumer rights to cyber safety, women’s rights, tenant laws, and more. We simplify legal jargon into easy-to-understand language so that anyone, from any background, can become legally literate.
          </p>
        </div>
      </div>

      {/* Third Section */}
      <div className="flex flex-col sm:flex-row mx-2 sm:mx-4 my-6 sm:my-8">
        <div className="w-full sm:w-1/2 flex flex-col items-center justify-center text-center px-4 sm:px-12">
          <h1 className="text-xl sm:text-2xl font-bold">
            Talk to Our Chatbot
          </h1>
          <p className="text-base sm:text-lg mt-4">
            Got a legal doubt or don’t know where to begin? Ask LegalBot, your friendly AI chatbot trained on verified legal knowledge. Whether it's a query about FIR filing or understanding your rights at the workplace, NyayaBot is here 24/7.
          </p>
        </div>
        <div className="w-full sm:w-1/2 flex justify-center mt-4 sm:mt-0">
          <img className="h-[40vh] rounded-xl w-full" src="chatbot.jpg" alt="chatbot" />
        </div>
      </div>

      {/* Fourth Section */}
      <div className="flex flex-col sm:flex-row mx-2 sm:mx-4 my-6 sm:my-8">
        <div className="w-full sm:w-1/2 flex justify-center mt-4 sm:mt-0">
          <img className="h-[40vh] rounded-xl w-full" src="NGOs.jpg" alt="NGOs" />
        </div>
        <div className="w-full sm:w-1/2 flex flex-col items-center justify-center text-center px-4 sm:px-12">
          <h1 className="text-xl sm:text-2xl font-bold">
            Find NGOs Near You
          </h1>
          <p className="text-base sm:text-lg mt-4">
            Need real help? Use our NGO Finder to discover trusted NGOs and legal aid centers near you — offering free or affordable support. Because justice should never be out of reach.
          </p>
        </div>
      </div>
    </div>
  );
}
