import Button from "../components/Button";

export default function Contact() {
  return (
    <div className="flex flex-col md:flex-row my-3 px-4 md:px-[100px]">
      {/* Left Column - Text Content */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center md:text-left">
        <h1 className="text-3xl md:text-5xl text-[#f0c040] font-bold">
          Contact Us
        </h1>
        <h2 className="text-xl my-2">We Are Here to Assist You</h2>
        <p className="text-sm md:text-[16px] my-4">
          If you have any inquiries, require legal information, or wish to provide feedback regarding our platform, please do not hesitate to reach out. Kindly fill out the contact form below, and a member of our team will respond to you at the earliest convenience.
        </p>
        <p className="text-sm md:text-[16px] my-4">
          For urgent assistance or legal aid, we encourage you to explore our Find NGOs Near You page to connect with verified organizations that offer support.
        </p>
        <p className="text-sm md:text-[16px] my-4">
          You may also contact us through the following channels:
        </p>
        <div className="text-sm md:text-[16px] my-4">
          <ul>
            <li>Email: support@lawsphere.org</li>
            <li>Phone: +91-12345-67890</li>
            <li>Office Hours: Monday to Friday, 10:00 AM – 6:00 PM (IST)</li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row gap-4 my-4">
          <Button label="Call Us" />
          <Button label="Email" />
        </div>
      </div>

      {/* Right Column - Image */}
      <div className="w-full md:w-1/2 mt-4 md:mt-0">
        <img src="home1.jpg" alt="Contact Us" className="w-full h-auto rounded-lg" />
      </div>
    </div>
  );
}
