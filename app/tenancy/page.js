import Image from "next/image";
import Link from "next/link";

const categories = [
    { name: "Fundamental Rights", icon: "/fundamentals.jpg", href: "/fundamental" },
    { name: "Police & FIR", icon: "/PR.jpg", href: "/police" },
    { name: "Property & Tenancy", icon: "/tenancy.jpg", href: "/tenancy" },
    { name: "Cyber Law", icon: "/cyber.jpg", href: "/cyberlaws" },
];

const tenancy = [
    {
        title: "Rent Control Act",
        description:
        "A central Rent Control Act was passed by the legislature in 1948. It regulates the rules of letting out a property and ensures that neither the landlords nor the tenants’ rights are exploited by the other. It should also be noted that currently, each state has its own Rent Control Act, though largely similar to each other, they carry some minor differences.",
        image: "/tenancy/tenancy1.jpg",
        mybutton: "Read More",
        link: "https://cleartax.in/s/rent-control-act",
    },
    {
        title: "Lease and Licenses- A comparative analysis",
        description:
            "Section 105 of the TOPA, 1882 (hereinafter referred to as TOPA, 1882)1 defines Lease as follows: A lease of immovable property is a transfer of a right to enjoy such property, made for a certain time, express or implied, or in perpetuity, in consideration of a price paid or promised, or of money, a share of crops, service or any other thing of value, to be rendered periodically or on a specified occasions to transferor by the transferee, who accept the transfer of such terms.",
        image: "/tenancy/tenancy2.jpg",
        mybutton: "Read More",
        link: "https://articles.manupatra.com/article-details/Lease-and-Licenses-A-comparative-analysis",
    },
    {
        title: "Rights of statutory tenant, lessee and licensee",
        description:
            "Letting out premises is a sensitive issue. Both landlords and tenants turn hawkish in any discussion on this. The battle of owners versus occupiers would turn less hostile if each understood their limits, claiming only that which is rightfully theirs. There can be roughly three kinds of occupation – statutory tenant, lessee and licensee. Described below are the rights of each of them.",
        image: "/tenancy/tenancy3.jpg",
        mybutton: "Read More",
        link: "https://www.moneylife.in/article/3-kinds-of-tenants-and-their-rights/38233/69714.html",
    },
    {
        title: "Laws mandated by the Housing and Urban Affairs Ministry",
        description:
            "The landlord and the tenant need to sign a written agreement. This can safeguard the interest of both parties. Keep in mind that it would not be legally bound if you enter an oral agreement only. If the other party offers a better deal, do not settle for anything less than a proper and appropriate rent deed.",
        image: "/tenancy/tenancy4.jpg",
        mybutton: "Read More",
        link: "https://www.hdfcergo.com/blogs/home-insurance/rent-laws-every-tenant-and-owner-should-know",
    },
    {
        title: "Difference Between Lease and Licence",
        description:
            "When it comes to managing property, whether for residential, commercial, or other uses and making the most out of it, two common contractual arrangements often come into play: licences and leases. Both terms often appear in legal documents and conversations related to property rental, but they serve different purposes and come with distinct legal implications.",
        image: "/tenancy/tenancy5.jpg",
        mybutton: "Read More",
        link: "https://www.freelaw.in/legalarticles/Difference-Between-Lease-and-Licence-",
    },
    {
        title: "Transfer of Property Act, 1882 (TPA) ",
        description:
            "It states that a lease of immoveable property is a transfer of a right to enjoy such property, made for a certain time, express or implied, or in perpetuity, in consideration of a price paid or promised, or of money, a share of crops, service or any other thing of value, to be rendered periodically or on specified occasions to the transferor by the transferee, who accepts the transfer on such terms.",
        image: "/tenancy/tenancy6.jpg",
        mybutton: "Read More",
        link: "https://www.drishtijudiciary.com/to-the-point/ttp-transfer-of-property-act/lease-and-license",
    },
];

export default function Tenancy() {
    return (
        <div className="p-6 md:p-10">
            <div>
                <h1 className="text-4xl font-bold mb-2">Blog</h1>
                <p className="text-gray-300 mb-10 max-w-2xl">
                    Here is the information about your legal rights and responsibilities. Wondering how to file an FIR? What to do if you're harassed at work? We simplify the law for you—one article at a time.
                </p>
            </div>
            
            {/* Categories Section */}
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

            {/* Tenancy Section */}
            <section>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-semibold">Property & Tenancy</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {tenancy.map((item, i) => (
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
