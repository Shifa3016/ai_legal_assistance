import Image from "next/image";
import Link from "next/link";

const categories = [
    { name: "Fundamental Rights", icon: "/FR.jpg" },
    { name: "Police & FIR", icon: "/PR.jpg" },
    { name: "Property & Tenancy", icon: "/tenancy.jpg" },
    { name: "Cyber Law", icon: "/cyber.jpg" },
];

const police = [
    {
        title: "Everything you need to know about FIR",
        description:
        "An First Information Report (FIR) is a crucial document since it sets the law in motion. The police begin their investigation of the crime only when the FIR has been filed at the police station. The term FIR is not defined in the Indian Penal Code (IPC), Code of Criminal Procedure (CrPC), 1973, or any other law, however information filed under Section 154 of the CrPC is referred to as a First Information Report in police regulations or guidelines (FIR).",
        image: "/tenancy/tenancy1.jpg",
        mybutton: "Read More",
    },
    {
        title: "Role of Police and its Power to Investigate",
        description:
            "The police, upon receiving information about the commission of a cognizable offence (serious and heinous crime) are required to register a First Information Report (FIR). Under Section 154 of the CrPC (FIR filing in India), FIR is registered regarding the cognizable offence. This Section states that “Every information relating to the commission of a cognizable offence, if given orally to an officer in charge of a police station, shall be reduced to writing by him or under his direction, and be read over to the informant; and every such information, whether given in writing or reduced to writing as aforesaid, shall be signed by the person giving it, and the substance thereof shall be entered in a book to be kept by such officer in such form as the State Government may prescribe…” It marks the beginning of the formal investigation process. ",
        image: "/tenancy/tenancy2.jpg",
        mybutton: "Read More",
    },
    {
        title: "Police Reforms in India: Challenges, Insights, and the Path Forward",
        description:
            "It is a functionary of the criminal justice system in India and plays an important role in maintaining peace and enforcing law and order within its territorial jurisdiction. Primary Duty of Police: To safeguard the lives and property of the people and protect them against violence, intimidation, oppression, and disorder.",
        image: "/tenancy/tenancy3.jpg",
        mybutton: "Read More",
    },
    
    {
        title: "Laws mandated by the Housing and Urban Affairs Ministry",
        description:
            "The landlord and the tenant need to sign a written agreement. This can safeguard the interest of both parties. Keep in mind that it would not be legally bound if you enter an oral agreement only. If the other party offers a better deal, do not settle for anything less than a proper and appropriate rent deed.",
        image: "/tenancy/tenancy4.jpg",
        mybutton: "Read More",
    },
    {
        title: "Difference Between Lease and Licence",
        description:
            "When it comes to managing property, whether for residential, commercial, or other uses and making the most out of it, two common contractual arrangements often come into play: licences and leases. Both terms often appear in legal documents and conversations related to property rental, but they serve different purposes and come with distinct legal implications.",
        image: "/tenancy/tenancy5.jpg",
        mybutton: "Read More",
    },
    {
        title: "Transfer of Property Act, 1882 (TPA) ",
        description:
            "It states that a lease of immoveable property is a transfer of a right to enjoy such property, made for a certain time, express or implied, or in perpetuity, in consideration of a price paid or promised, or of money, a share of crops, service or any other thing of value, to be rendered periodically or on specified occasions to the transferor by the transferee, who accepts the transfer on such terms.",
        image: "/tenancy/tenancy6.jpg",
        mybutton: "Read More",
    },
];

export default function POLICE() {
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
            <section>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-semibold">POLICE & FIR</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {police.map((police, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl shadow overflow-hidden"
                        >
                            <Image
                                src={police.image}
                                alt={police.title}
                                width={400}
                                height={200}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="font-bold text-black text-lg mb-2">
                                    {police.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    {police.description}
                                </p>
                                <p className="text-xs text-[#f0c040] font-bold">
                                    {police.mybutton}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}