import PageLayout from "@/components/PageLayout";

export const metadata = {
  title: "Referral Partners | Milestone Moves Realty Group",
  description: "Trusted referral partners serving the 55+ community across the Triangle, NC.",
};

export default function ReferralPartners() {
  const partnerCategories = [
    {
      category: "Financial & Legal",
      partners: ["Estate Planning Attorneys", "Elder Law Attorneys", "Financial Advisors", "Reverse Mortgage Specialists", "CPA / Tax Advisors"],
    },
    {
      category: "Moving & Home Services",
      partners: ["Senior Move Managers", "Professional Movers", "Estate Sale Companies", "Home Stagers", "Handyman & Repair Services"],
    },
    {
      category: "Senior Care",
      partners: ["Assisted Living Consultants", "Home Health Agencies", "Geriatric Care Managers", "Social Workers"],
    },
    {
      category: "Home Prep & Improvements",
      partners: ["Contractors & Renovators", "Landscaping & Curb Appeal", "Cleaning Services", "Junk Removal"],
    },
  ];

  return (
    <PageLayout
      title="Referral Partners"
      subtitle="A trusted network of professionals ready to support every aspect of your transition."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about/meet-the-team" }]}
    >
      <p className="text-[#3d3d3d] leading-relaxed mb-8">
        A successful move involves more than finding the right home. It often requires legal guidance, financial planning,
        professional movers, and senior care coordination. Our referral network connects you with trusted professionals we
        know and recommend personally.
      </p>

      <div className="grid sm:grid-cols-2 gap-6 mb-10">
        {partnerCategories.map((cat) => (
          <div key={cat.category} className="border border-gray-200 rounded-xl p-5 shadow-sm">
            <h3 className="font-bold text-[#123A5E] text-lg mb-3 border-b border-[#0A7387] pb-2">{cat.category}</h3>
            <ul className="space-y-2">
              {cat.partners.map((p) => (
                <li key={p} className="flex items-center gap-2 text-[#3d3d3d] text-sm">
                  <span className="w-2 h-2 bg-[#0A7387] rounded-full flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-[#123A5E] text-white rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold mb-3">Are You a Professional Serving Seniors?</h3>
        <p className="text-gray-200 mb-6">
          We&apos;re always looking to expand our network with mission-aligned professionals. Let&apos;s connect.
        </p>
        <a href="/about/contact-us" className="inline-block bg-[#0A7387] hover:bg-[#086475] text-white font-bold px-8 py-3 rounded-full transition-colors text-sm tracking-wider">
          GET IN TOUCH
        </a>
      </div>
    </PageLayout>
  );
}
