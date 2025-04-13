import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "Fundamental Rights", icon: "/fundamentals.jpg", href: "/fundamental" },
  { name: "Police & FIR", icon: "/PR.jpg", href: "/police" },
  { name: "Property & Tenancy", icon: "/tenancy.jpg", href: "/tenancy" },
  { name: "Cyber Law", icon: "/cyber.jpg", href: "/cyberlaws" },
];

const fundamentalRights = [
  {
    title: "Fundamental rights in India",
    description: "The Fundamental Rights in India enshrined in part III (Article 12–35) of the Constitution of India guarantee civil liberties such that all Indians can lead their lives in peace and harmony as citizens of India.",
    image: "/FR/fr1.jpg",
    mybutton: "Read More",
    link: "https://en.wikipedia.org/wiki/Fundamental_rights_in_India",
  },
  {
    title: "Articles 12-35: A Comprehensive Guide",
    description: "Articles 12-35 of the Indian Constitution are all about fundamental rights which are essential human rights granted to every citizen of India.",
    image: "/FR/fr2.jpg",
    mybutton: "Read More",
    link: "https://www.geeksforgeeks.org/fundamental-rights/",
  },
  {
    title: "Cultural And Educational Rights",
    description: "In the case of T.M.A.Pai Foundation v. State of Karnataka (2002), the court affirmed that minority institutions had autonomy regarding administration, subjected to appropriate regulations.",
    image: "/FR/fr3.jpg",
    mybutton: "Read More",
    link: "https://restthecase.com/knowledge-bank/fundamental-rights-in-india",
  },
];

const police = [
  {
    title: "Everything you need to know about FIR",
    description: "A First Information Report (FIR) is a crucial document since it sets the law in motion. The police begin their investigation of the crime only when the FIR has been filed.",
    image: "/police/police1.jpg",
    mybutton: "Read More",
    link: "https://www.legalserviceindia.com/legal/article-8663-everything-you-need-to-know-about-fir.html",
  },
  {
    title: "Role of Police and its Power to Investigate",
    description: "The police, upon receiving information about the commission of a cognizable offence, are required to register a First Information Report (FIR).",
    image: "/police/police2.jpg",
    mybutton: "Read More",
    link: "https://www.freelaw.in/legalarticles/Role-of-Police-and-its-Power-to-Investigate",
  },
  {
    title: "Police Reforms in India: Challenges, Insights, and the Path Forward",
    description: "The Status of Policing in India Report assesses the performance and perceptions of policing across Indian states.",
    image: "/police/police3.jpg",
    mybutton: "Read More",
    link: "https://pwonlyias.com/current-affairs/indian-police-reforms/",
  },
];

const tenancy = [
  {
    title: "Rent Control Act",
    description: "A central Rent Control Act was passed by the legislature in 1948. It regulates the rules of letting out a property and ensures that neither the landlords nor the tenants’ rights are exploited.",
    image: "/tenancy/tenancy1.jpg",
    mybutton: "Read More",
    link: "https://cleartax.in/s/rent-control-act",
  },
  {
    title: "Lease and Licenses- A comparative analysis",
    description: "Section 105 of the TOPA, 1882 defines Lease as a transfer of a right to enjoy immovable property, in consideration of a price paid or promised.",
    image: "/tenancy/tenancy2.jpg",
    mybutton: "Read More",
    link: "https://articles.manupatra.com/article-details/Lease-and-Licenses-A-comparative-analysis",
  },
  {
    title: "Rights of statutory tenant, lessee and licensee",
    description: "Letting out premises is a sensitive issue. Both landlords and tenants turn hawkish in any discussion on this. There can be roughly three kinds of occupation – statutory tenant, lessee and licensee.",
    image: "/tenancy/tenancy3.jpg",
    mybutton: "Read More",
    link: "https://www.moneylife.in/article/3-kinds-of-tenants-and-their-rights/38233/69714.html",
  },
];

const cyberlaws = [
  {
    title: "Cyber Laws of India",
    description: "Cyber crimes involve criminal activities that are traditional in nature, such as theft, fraud, forgery, and others. The abuse of computers also gave birth to new crimes addressed by the Information Technology Act, 2000.",
    image: "/Cyber/cyber3.jpg",
    mybutton: "Read More",
    link: "https://infosecawareness.in/cyber-laws-of-india",
  },
  {
    title: "International Cyber Law",
    description: "Cyber law, cybercrime, and the regulation of cyber-related activities have also been addressed internationally through treaties and conventions.",
    image: "/Cyber/cyber1.jpg",
    mybutton: "Read More",
    link: "https://www.axiomlaw.com/guides/cyber-law",
  },
  {
    title: "Cyber Crimes and Challenges Faced by Judicial System",
    description: "Criminals exploit the Internet and other network communications which are international in scope. The judicial system faces challenges in addressing these cyber crimes.",
    image: "/Cyber/cyber2.jpg",
    mybutton: "Read More",
    link: "https://lawbhoomi.com/an-introduction-to-various-cybercrimes/",
  },
];

export default function BlogPage() {
  return (
    <div className="p-6 md:p-10">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-2">Blog</h1>
        <p className="text-gray-300 mb-10 max-w-2xl">
          Here is the information about your legal rights and responsibilities. Wondering how to file an FIR? What to do if you're harassed at work? We simplify the law for you—one article at a time.
        </p>
      </div>
      
      <section className="mb-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Top Categories</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <Link key={i} href={cat.href}>
              <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center text-center cursor-pointer hover:shadow-md transition">
                <div className="w-full h-32 relative">
                  <Image
                    src={cat.icon}
                    alt={cat.name}
                    layout="fill"
                    className="object-contain"
                  />
                </div>
                <p className="font-semibold mt-2 text-black">{cat.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Category Sections (Fundamental Rights, Police & FIR, etc.) */}
      {[fundamentalRights, police, tenancy, cyberlaws].map((categoryData, idx) => {
        const titles = ["Fundamental Rights", "POLICE & FIR", "Property & Tenancy", "Cyber Laws"];
        const categoryName = titles[idx];

        return (
          <section key={categoryName} className="my-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">{categoryName}</h2>
              <Link href={`/${categoryName.toLowerCase().replace(/ /g, "")}`}><span>See More</span></Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {categoryData.map((item, i) => (
                <div key={i} className="bg-white rounded-xl shadow overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-black text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{item.description}</p>
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
        );
      })}
    </div>
  );
}
