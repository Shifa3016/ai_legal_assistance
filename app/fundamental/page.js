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
    {
        title: "Right To Constitutional Remedies",
        description:
            "In the historic Kesavananda Bharati v. State of Kerala (1973), the Apex Court reiterated Article 32 as part of the basic structure of the Constitution and cannot be abrogated. The sheer number of writ petitions concerning differing petitions relating to issues like violation of fundamental rights, unlawful detention, and censorship by state functions is indicative of the importance of this right.",
            image: "/FR/fr4.jpg",
        mybutton: "Read More",
    },
    {
        title: "Human Rights in the Indian Constitution",
        description:
            "Human rights are the basic entitlements inherent to every individual by virtue of being human. They encompass the principles of equality, dignity, freedom and justice. In India, these rights are not merely abstract ideals; they are enshrined in the Constitution and have evolved over centuries through a complex interplay of ancient philosophies, historical developments and modern judicial interpretations.",
        image: "/FR/fr5.jpg",
        mybutton: "Read More",
    },
    {
        title: "Common to Most Important Rights",
        description:
            "They are common to most important rights  of an individual such as equality before law, freedom of speech and freedom of expression, religious and culture freedom, freedom of  peaceful assembly, freedom of religion or freedom to practice religion, right to constitutional remedies for the protection of civil rights. These rights apply universally to all citizens, without seeing race, birthplace, religion, caste or gender of an individual",
        image: "/FR/fr6.jpg",
        mybutton: "Read More",
    },
];

export default function FundamentalRights() {
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

            <section className="text-black">
                <div className="flex items-center text-black justify-between mb-6">
                    <h2 className="text-2xl font-semibold">Fundamental Rights</h2>
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
        </div>
    );
}