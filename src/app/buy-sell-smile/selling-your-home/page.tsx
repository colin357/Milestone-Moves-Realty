import PageLayout from "@/components/PageLayout";
import Link from "next/link";

export const metadata = {
  title: "Selling Your Home | Milestone Moves Realty Group",
  description: "Sell your home with confidence and the right strategy in the Triangle, NC.",
};

export default function SellingYourHome() {
  return (
    <PageLayout
      title="Selling Your Home"
      subtitle="Maximize your sale with smart preparation, expert pricing, and proven marketing."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Buy-Sell-Smile", href: "/buy-sell-smile/buying-a-home" }]}
    >
      <p className="text-[#3d3d3d] leading-relaxed mb-6">
        Selling a home you&apos;ve lived in for years — maybe decades — is an emotional and logistical journey. We
        approach it with both the strategy to get you the best outcome and the sensitivity to honor what this home has
        meant to you.
      </p>

      <h2 className="text-2xl font-bold text-[#1C2B5E] mb-4">Our Seller Strategy</h2>
      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        {[
          { icon: "🏠", title: "Home Preparation", desc: "We help you prioritize the right updates that maximize value without overspending." },
          { icon: "📸", title: "Professional Photography", desc: "First impressions are everything. We use professional photos and virtual tours." },
          { icon: "💰", title: "Strategic Pricing", desc: "Data-driven pricing that positions your home to attract serious buyers fast." },
          { icon: "📣", title: "Marketing & Exposure", desc: "MLS, social media, email campaigns, and our personal network work together." },
          { icon: "🤝", title: "Offer Management", desc: "We review every offer carefully and negotiate firmly on your behalf." },
          { icon: "✅", title: "Smooth Closing", desc: "We coordinate every detail from contract to closing table." },
        ].map((item) => (
          <div key={item.title} className="border border-gray-200 rounded-xl p-5 shadow-sm">
            <div className="text-2xl mb-2">{item.icon}</div>
            <h3 className="font-bold text-[#1C2B5E] mb-1">{item.title}</h3>
            <p className="text-[#3d3d3d] text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#1C2B5E] text-white rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold mb-3">Request a Free Home Value Assessment</h3>
        <p className="text-gray-200 mb-6">Find out what your home is worth in today&apos;s market — no obligation.</p>
        <Link href="/about/contact-us" className="inline-block bg-[#2BB8D3] hover:bg-[#1fa3bd] text-white font-bold px-8 py-3 rounded-full transition-colors text-sm tracking-wider">
          GET MY HOME VALUE
        </Link>
      </div>
    </PageLayout>
  );
}
