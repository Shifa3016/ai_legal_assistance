import Image from "next/image";
import Link from "next/link";

const categories = [
    { name: "Fundamental Rights", icon: "/fundamentals.jpg", href: "/fundamental" },
    { name: "Police & FIR", icon: "/PR.jpg", href: "/police" },
    { name: "Property & Tenancy", icon: "/tenancy.jpg", href: "/tenancy" },
    { name: "Cyber Law", icon: "/cyber.jpg", href: "/cyberlaws" },
  ];

const police = [
    {
        title: "Everything you need to know about FIR",
        description:
            "A First Information Report (FIR) is a crucial document since it sets the law in motion. The police begin their investigation of the crime only when the FIR has been filed at the police station. The term FIR is not defined in the Indian Penal Code (IPC), Code of Criminal Procedure (CrPC), 1973, or any other law, however information filed under Section 154 of the CrPC is referred to as a First Information Report in police regulations or guidelines (FIR).",
        image: "/police/police1.jpg",
        mybutton: "Read More",
        link: "https://www.legalserviceindia.com/legal/article-8663-everything-you-need-to-know-about-fir.html", 
    },
    {
        title: "Role of Police and its Power to Investigate",
        description:
            "The police, upon receiving information about the commission of a cognizable offence (serious and heinous crime) are required to register a First Information Report (FIR). Under Section 154 of the CrPC (FIR filing in India), FIR is registered regarding the cognizable offence. This Section states that “Every information relating to the commission of a cognizable offence, if given orally to an officer in charge of a police station, shall be reduced to writing by him or under his direction, and be read over to the informant; and every such information, whether given in writing or reduced to writing as aforesaid, shall be signed by the person giving it, and the substance thereof shall be entered in a book to be kept by such officer in such form as the State Government may prescribe…” It marks the beginning of the formal investigation process. ",
        image: "/police/police2.jpg",
        mybutton: "Read More",
        link: "https://www.freelaw.in/legalarticles/Role-of-Police-and-its-Power-to-Investigate",
    },
    {
        title: "Police Reforms in India: Challenges, Insights, and the Path Forward",
        description:
            "The Status of Policing in India Report (SPIR) is a series of comprehensive studies that assesses the performance and perceptions of policing across Indian states. It has been published periodically since 2018. Each edition provides a detailed analysis of various aspects of policing in India, including performance, public perception, and operational challenges. These reports evaluate the conditions under which police operate and gather perceptions from both citizens and police personnel.",
        image: "/police/police3.jpg",
        mybutton: "Read More",
        link: "https://pwonlyias.com/current-affairs/indian-police-reforms/",
    },
    
    {
        title: "Indian Police Service",
        description:
            "The Indian Police Service (abbr. IPS) is a civil service under the All India Services. It replaced the Indian Imperial Police in 1948, a year after India became independent from the British Empire. Along with the Indian Administrative Service (IAS) and the Indian Forest Service (IFS), the IPS is part of the All India Services[3] – its officers are employed by both the Union Government and by individual states.",
        image: "/police/police4.jpg",
        mybutton: "Read More",
        link: "https://en.wikipedia.org/wiki/Indian_Police_Service",
    },
    {
        title: "How to file a Police FIR/complaint online",
        description:
            "FIR in simple words is First Information Report. An FIR is a written document which is prepared by the police in India. It is prepared when the police receive information about the commission of a cognizable offence. In simple words, it is a complaint lodged with the police by the victim of a cognizable offence or by someone on his or her behalf, but anyone can make such a report either orally or in writing to the police. People can also lodge an FIR through online medium.",
        image: "/police/police5.jpg",
        mybutton: "Read More",
        link: "https://ncsc.nic.in/pages/display/135-how-to-file-a-police-fir-complaint-online",
    },
    {
        title: "Legal Accountability Of Police In India",
        description:
            "Given the reported failure of the state and central government to fully implement the directions of the Supreme Court in Prakash Singh v. Union of India, in this paper we explore the option of whether a judicial remedy in the form of a cause of action against police officers in their individual capacity for violations of constitutional rights might enhance oversightconducted by the Police Complaint Authorities. ",
        image: "/police/police6.jpg",
        mybutton: "Read More",
        link: "https://clpr.org.in/wp-content/uploads/2018/09/Police-Accountability-CLPR.pdf",

    },
];

export default function POLICE() {
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
                <h2 className="text-2xl font-semibold">POLICE & FIR</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {police.map((item, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-xl shadow overflow-hidden"
                    >
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={400}
                            height={200}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="font-bold text-black text-lg mb-2">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-4">
                                {item.description}
                            </p>
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-[#f0c040] font-bold hover:underline"
                            >
                                {item.mybutton}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        </div>
    );
}