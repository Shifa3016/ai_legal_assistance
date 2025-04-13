import Image from "next/image";
import Link from "next/link";

const categories = [
    { name: "Fundamental Rights", icon: "/fundamentals.jpg", href: "/fundamental" },
    { name: "Police & FIR", icon: "/PR.jpg", href: "/police" },
    { name: "Property & Tenancy", icon: "/tenancy.jpg", href: "/tenancy" },
    { name: "Cyber Law", icon: "/cyber.jpg", href: "/cyberlaws" },
  ];

const cyberlaws = [
    {
        title: "Cyber Laws of India",
        description:
        "In Simple way we can say that cyber crime is unlawful acts wherein the computer is either a tool or a target or both. Cyber crimes can involve criminal activities that are traditional in nature, such as theft, fraud, forgery, defamation and mischief, all of which are subject to the Indian Penal Code. The abuse of computers has also given birth to a gamut of new age crimes that are addressed by the Information Technology Act, 2000.",
        image: "/Cyber/cyber3.jpg",
        mybutton: "Read More",
    },
    {
        title: "International Cyber Law",
        description:
            "Cyber law, cybercrime, and the regulation of cyber-related activities have also been addressed internationally through various means, including treaties, conventions, agreements, and collaborative efforts among countries and international organizations.",
        image: "/Cyber/cyber1.jpg",
        category: "Police & FIR",
        mybutton: "Read More",
    },
    {
        title: "Cyber Crimes and Challenges Faced by Judicial System",
        description:
            "Digital technology is encompassing in all walks of life, all over the world and has brought the real meaning of globalization. At the one end cyber system provides opportunities to communicate and at the other end some individuals or community exploit its power for criminal purposes. Criminals exploit the Internet and other network communications which are international in scope.",
        image: "/Cyber/cyber2.jpg",
        mybutton: "Read More",
    },
    
    {
        title: "Concept of Privacy and Threat to Privacy on Internet",
        description:
            "Privacy can entail either  personally identifying  information (PII) or (non-PII) information such as a site visitor’s behavior on a website. PII refers to any information that can be used to identify an individual. For example, age and physical address alone could identify who an individual is without explicitly disclosing their name, as these two factors are unique enough to typically identify a specific person.",
        image: "/Cyber/cyber4.jpg",
        mybutton: "Read More",
    },
    {
        title: "Right Of Interception Under IT Act 2000",
        description:
            "As per section 69, of IT Act, 2000, the central and state government have been empowered to intercept, monitor or decryption of any information through any computer resources. Here the government can do the same only in these under mentioned grounds.",
        image: "/Cyber/cyber5.jpg",
        mybutton: "Read More",
    },
    {
        title: "Identity Theft: An Overall Review",
        description:
            "Identity theft is a crime in which an imposter obtains essential pieces of personally identifiable information (PII) in order to impersonate another individual. This can be used to obtain or gain credit, merchandise and service in the name of victim. Identity theft can be classified in two ways: true name and account takeover.",
        image: "/Cyber/cyber6.jpg",
        mybutton: "Read More",
    },
];

export default function CyberLaws() {
    return (
        <div className="p-6 md:p-10">
            <div className="">
                <h1 className="text-4xl font-bold mb-2">Blog</h1>
                <p className="text-gray-300 mb-10 max-w-2xl">
                    Here is the information about your legal rights and responsibilities. Wondering how to file an FIR? What to do if you're harassed at work? We simplify the law for you—one article at a time.
                </p>
            </div>
            <section className="mb-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Top Categories</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <Link key={i} href={cat.href}>
              <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center text-center cursor-pointer hover:shadow-md transition">
                <div className="w-full h-32 relative">
                  <Image
                    src={cat.icon}
                    alt={cat.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="font-semibold mt-2 text-black">{cat.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
            <section>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-semibold">Cyber Laws</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cyberlaws.map((cyberlaws, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl shadow overflow-hidden"
                        >
                            <Image
                                src={cyberlaws.image}
                                alt={cyberlaws.title}
                                width={400}
                                height={200}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="font-bold text-black text-lg mb-2">
                                    {cyberlaws.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    {cyberlaws.description}
                                </p>
                                <p className="text-xs text-[#f0c040] font-bold">
                                    {cyberlaws.mybutton}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
