// app/blogs/page.js
import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "Fundamental Rights", icon: "/FR.jpg" },
  { name: "Police & FIR", icon: "/PR.jpg" },
  { name: "Property & Tenancy", icon: "/tenancy.jpg" },
  { name: "Cyber Law", icon: "/cyber.jpg" },
];

const fundamentalRights = [
  {
    title: "Fundamental rights in India",
    description:
        "The Fundamental Rights in India enshrined in part III (Article 12–35) of the Constitution of India guarantee civil liberties such that all Indians can lead their lives in peace and harmony as citizens of India.[1] These rights are known as fundamental as they are the most essential for all-round development i.e., material, intellectual, moral and spiritual and protected by fundamental law of the land i.e. constitution.",
    image: "/FR/fr1.jpg",
    mybutton: "Read More",
},
{
    title: "Articles 12-35: A Comprehensive Guide",
    description:
        "Articles 12-35 of the Indian Constitution are the all about fundamental rights which are essential human rights granted to every citizen of India. The fundamental rights in the Indian Constitution prevent discrimination based on race, religion, gender, and more. The Fundamental Rights in Indian constitution include important rights like the Right to Equality, Right to Freedom, Right to Education, and Freedom of Religion.",
    image: "/FR/fr2.jpg",
    mybutton: "Read More",
},
{
    title: "Cultural And Educational Rights",
    description:
        "In the case of T.M.A.Pai Foundation v. State of Karnataka (2002), the court affirmed that minority institutions had autonomy regarding administration, subjected to appropriate regulations. Thousands of schools and colleges across India managed by Christian, Muslim, Sikh, and linguistic minority communities reflect such provisions being practically applied to preserving identity and access to education.",
    image: "/FR/fr3.jpg",
    mybutton: "Read More",
},
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

];
const tenancy = [
  {
    title: "Rent Control Act",
    description:
    "A central Rent Control Act was passed by the legislature in 1948. It regulates the rules of letting out a property and ensures that neither the landlords nor the tenants’ rights are exploited by the other. It should also be noted that currently, each state has its own Rent Control Act, though largely similar to each other, they carry some minor differences.",
    image: "/tenancy/tenancy1.jpg",
    mybutton: "Read More",
},
{
    title: "Lease and Licenses- A comparative analysis",
    description:
        "Section 105 of the TOPA, 1882 (hereinafter referred to as TOPA, 1882)1 defines Lease as follows: A lease of immovable property is a transfer of a right to enjoy such property, made for a certain time, express or implied, or in perpetuity, in consideration of a price paid or promised, or of money, a share of crops, service or any other thing of value, to be rendered periodically or on a specified occasions to transferor by the transferee, who accept the transfer of such terms.",
    image: "/tenancy/tenancy2.jpg",
    mybutton: "Read More",
},
{
    title: "Rights of statutory tenant, lessee and licensee",
    description:
        "Letting out premises is a sensitive issue. Both landlords and tenants turn hawkish in any discussion on this. The battle of owners versus occupiers would turn less hostile if each understood their limits, claiming only that which is rightfully theirs. There can be roughly three kinds of occupation – statutory tenant, lessee and licensee. Described below are the rights of each of them.",
    image: "/tenancy/tenancy3.jpg",
    mybutton: "Read More",
},
]
export default function BlogPage() {
  return (
    <div className="p-6 md:p-10">
      <div className="">
      <h1 className="text-4xl font-bold mb-2">Blog</h1>
      <p className="text-gray-600 mb-10 max-w-2xl">
        Here is the information about your legal rights and responsibilities. Wondering how to file an FIR? What to do if you're harassed at work? We simplify the law for you—one article at a time.
      </p>
      </div>
      <section className="mb-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Top Categories</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
  {categories.map((cat, i) => (
    <div
      key={i}
      className="bg-white rounded-xl shadow p-4 flex flex-col items-center text-center"
    >
      <div className="w-full h-32 relative">
        <Image
          src={cat.icon}
          alt={cat.name}
          fill
          className="object-contain"
        />
      </div>
      <p className="font-semibold mt-2">{cat.name}</p>
    </div>
  ))}
</div>
      </section>

      <section className="my-4">
                <div className="flex items-center text-black justify-between mb-6">
                    <h2 className="text-2xl font-semibold">Fundamental Rights</h2>
                    <Link href="/fundamental"><span>See More</span></Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {fundamentalRights.map((fundamentalRights, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl shadow overflow-hidden"
                        >
                            <Image
                                src={fundamentalRights.image}
                                alt={fundamentalRights.title}
                                width={400}
                                height={200}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <p className="text-xs text-blue-600 mb-1">{fundamentalRights.category}</p>
                                <h3 className="font-semibold text-lg mb-2">
                                    {fundamentalRights.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    {fundamentalRights.description}
                                </p>
                                <p className="text-xs text-[#f0c040] font-bold">
                                    {fundamentalRights.mybutton}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
      <section>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-semibold">Cyber Laws</h2>
                    <Link href="/cyberlaws"><span>See More</span></Link>
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
      <section>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-semibold">Property & Tenancy</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {tenancy.map((tenancy, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl shadow overflow-hidden"
                        >
                            <Image
                                src={tenancy.image}
                                alt={tenancy.title}
                                width={400}
                                height={200}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="font-bold text-black text-lg mb-2">
                                    {tenancy.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    {tenancy.description}
                                </p>
                                <p className="text-xs text-[#f0c040] font-bold">
                                    {tenancy.mybutton}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
    </div>
  );
}
