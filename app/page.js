
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
  <div className="relative z-10 h-[90vh] flex flex-col items-center justify-center text-center bg-black/40 text-white">
    <h1 className="text-4xl font-bold">
      Welcome to LawSphere – Where Justice Meets Awareness
    </h1>
    <p className="text-lg mt-4">
      Empowering Every Citizen with Legal Awareness and Support
    </p>
  </div>
</div>

      {/* <div className="h-[70vh] flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold">
          Welcome to LawSphere – Where Justice Meets Awareness
        </h1>
        <p className="text-lg mt-4">
          Empowering Every Citizen with Legal Awareness and Support
        </p>
      </div> */}
      <div className="flex mx-[40px] my-[30px] h-[40vh]">
        <div className="w-[50%]  flex flex-col items-center justify-center text-center px-[100px]"><h1 className="text-[20px] font-bold">
        Know Your Rights. Seek Justice. Take Action.
        </h1>
        <p className="text-[16px] mt-4">
        Navigating the legal world can be overwhelming — especially when you don’t know where to start. LawSphere is your one-stop platform for understanding your rights, exploring common laws, connecting with legal aid, and getting guidance through every step of your justice journey.


        </p></div>
        <div className=" w-[50%] flex justify-center"><img className="h-[40vh] rounded-xl" src="home1.jpg" alt="" /></div>
      </div>
      <div className="flex mx-[40px] my-[30px] h-[40vh]">
      <div className=" w-[50%] flex justify-center"><img className="h-[40vh] rounded-xl" src="blogs.jpg" alt="" /></div>
        <div className="w-[50%] flex flex-col items-center justify-center text-center px-[100px]"><h1 className="text-[20px] font-bold">
        Learn About Laws
        </h1>
        <p className="text-[16px] mt-4">
        Visit our Blogs section to understand everyday laws that affect you — from consumer rights to cyber safety, women’s rights, tenant laws, and more. We simplify legal jargon into easy-to-understand language so that anyone, from any background, can become legally literate.
        </p></div>
      </div>
      <div className="flex mx-[40px] my-[30px] h-[40vh]">
        <div className="w-[50%]  flex flex-col items-center justify-center text-center px-[100px]"><h1 className="text-[20px] font-bold">
        Talk to Our Chatbot
        </h1>
        <p className="text-[16px] mt-4">
        Got a legal doubt or don’t know where to begin? Ask LegalBot, your friendly AI chatbot trained on verified legal knowledge. Whether it's a query about FIR filing or understanding your rights at the workplace, NyayaBot is here 24/7.


        </p></div>
        <div className=" w-[50%] flex justify-center"><img className="h-[40vh] rounded-xl" src="chatbot.jpg" alt="" /></div>
      </div>
      <div className="flex mx-[40px] my-[30px] h-[40vh]">
      <div className=" w-[50%] flex justify-center"><img className="h-[40vh] rounded-xl" src="NGOs.jpg" alt="" /></div>
        <div className="w-[50%] flex flex-col items-center justify-center text-center px-[100px]"><h1 className="text-[20px] font-bold">
        Find NGOs Near You
        </h1>
        <p className="text-[16px] mt-4">
        Need real help? Use our NGO Finder to discover trusted NGOs and legal aid centers near you — offering free or affordable support. Because justice should never be out of reach.
        </p></div>
      </div>
      


      {/* <div className=" bg-no-repeat bg-center border border-red h-[70vh] my-[20px]">
        <div className=" font-bold text-white items-center flex">Welcome to LawSphere - Where Justice Meets Awareness</div>
        
      </div> */}

    </div>
  );
}
