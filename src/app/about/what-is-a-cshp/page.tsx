import PageLayout from "@/components/PageLayout";
import Link from "next/link";

export const metadata = {
  title: "What Is a CSHP? | Milestone Moves Realty Group",
  description: "Learn what a Certified Senior Housing Professional is and why it matters when choosing a real estate agent.",
};

export default function WhatIsACshp() {
  return (
    <PageLayout
      title="What Is a CSHP?"
      subtitle="Understanding the Certified Senior Housing Professional designation."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about/meet-the-team" }]}
    >
      <p className="text-[#3d3d3d] leading-relaxed mb-6">
        CSHP stands for <strong>Certified Senior Housing Professional</strong>. It is a specialized designation earned by
        real estate agents who have completed advanced training focused specifically on the unique needs of adults 55 and
        better.
      </p>

      <h2 className="text-2xl font-bold text-[#123A5E] mb-4">What a CSHP Learns</h2>
      <p className="text-[#3d3d3d] leading-relaxed mb-4">
        To earn the CSHP designation, a real estate professional must study and demonstrate competency in:
      </p>
      <ul className="list-disc list-inside text-[#3d3d3d] mb-8 space-y-2 ml-2">
        <li>The physical, social, and emotional needs of aging adults</li>
        <li>55+ and active adult community types and regulations</li>
        <li>Financial considerations unique to seniors (retirement income, reverse mortgages, estate planning)</li>
        <li>Coordinating with families, caregivers, and other professionals</li>
        <li>Fair housing laws as they apply to age-restricted communities</li>
        <li>Compassionate communication and patience-centered service</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#123A5E] mb-4">Why It Matters for You</h2>
      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        {[
          { title: "Specialized Knowledge", desc: "A CSHP understands the full landscape of senior housing options — not just what's on the MLS." },
          { title: "Compassionate Approach", desc: "Trained to work at your pace, with sensitivity to the emotional weight of major life transitions." },
          { title: "Trusted Network", desc: "Connected to senior care professionals, move managers, attorneys, and financial advisors." },
          { title: "No Pressure", desc: "A CSHP is trained to educate first and facilitate decisions — not rush them." },
        ].map((item) => (
          <div key={item.title} className="bg-[#f3f4f6] border-l-4 border-[#123A5E] p-5 rounded-r-xl">
            <h3 className="font-bold text-[#123A5E] mb-2">{item.title}</h3>
            <p className="text-[#3d3d3d] text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#123A5E] text-white rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold mb-3">Work With a CSHP Today</h3>
        <p className="text-gray-200 mb-6">
          Freda Hamlett is a proud Certified Senior Housing Professional serving the Triangle, NC area.
        </p>
        <Link href="/about/contact-us" className="inline-block bg-white hover:bg-gray-100 text-[#123A5E] font-bold px-8 py-3 rounded-full transition-colors text-sm tracking-wider">
          CONTACT FREDA
        </Link>
      </div>
    </PageLayout>
  );
}
