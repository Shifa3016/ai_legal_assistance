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
    description:
      "The Fundamental Rights in India enshrined in part III (Article 12–35) of the Constitution of India guarantee civil liberties such that all Indians can lead their lives in peace and harmony as citizens of India. These rights are known as fundamental as they are the most essential for all-round development i.e., material, intellectual, moral and spiritual and protected by the fundamental law of the land i.e. constitution.",
    image: "/FR/fr1.jpg",
    mybutton: "Read More",
    link: "https://en.wikipedia.org/wiki/Fundamental_rights_in_India",
  },
  {
    title: "Articles 12-35: A Comprehensive Guide",
    description:
      "Articles 12-35 of the Indian Constitution are about fundamental rights which are essential human rights granted to every citizen of India. The fundamental rights in the Indian Constitution prevent discrimination based on race, religion, gender, and more.",
    image: "/FR/fr2.jpg",
    mybutton: "Read More",
    link: "https://www.geeksforgeeks.org/fundamental-rights/",
  },
  {
    title: "Cultural And Educational Rights",
    description:
      "In the case of T.M.A.Pai Foundation v. State of Karnataka (2002), the court affirmed that minority institutions had autonomy regarding administration, subjected to appropriate regulations.",
    image: "/FR/fr3.jpg",
    mybutton: "Read More",
    link: "https://restthecase.com/knowledge-bank/fundamental-rights-in-india",
  },
  {
    title: "Right To Constitutional Remedies",
    description:
      "In the historic Kesavananda Bharati v. State of Kerala (1973), the Apex Court reiterated Article 32 as part of the basic structure of the Constitution and cannot be abrogated.",
    image: "/FR/fr4.jpg",
    mybutton: "Read More",
    link: "https://restthecase.com/knowledge-bank/fundamental-rights-in-india",
  },
  {
    title: "Human Rights in the Indian Constitution",
    description:
      "Human rights are the basic entitlements inherent to every individual by virtue of being human. They encompass the principles of equality, dignity, freedom and justice.",
    image: "/FR/fr5.jpg",
    mybutton: "Read More",
    link: "https://lawbhoomi.com/human-rights-in-the-indian-constitution/",
  },
  {
    title: "Common to Most Important Rights",
    description:
      "They are common to most important rights of an individual such as equality before law, freedom of speech and freedom of expression, religious and culture freedom, and freedom to practice religion.",
    image: "/FR/fr6.jpg",
    mybutton: "Read More",
    link: "https://legalaid.co.in/general-legal/our-fundamental-rights/",
  },
];

export default function FundamentalRights() {
  return (
    <div className="p-6 md:p-10">
      <div className="">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Blog</h1>
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
          <h2 className="text-2xl font-semibold">Fundamental Rights</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {fundamentalRights.map((item, i) => (
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
    </div>
  );
}
