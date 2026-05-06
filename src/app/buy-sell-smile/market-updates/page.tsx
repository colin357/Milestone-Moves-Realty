import PageLayout from "@/components/PageLayout";

export const metadata = {
  title: "Market Updates | Milestone Moves Realty Group",
  description: "Stay informed with the latest Triangle, NC real estate market insights.",
};

export default function MarketUpdates() {
  return (
    <PageLayout
      title="Market Updates"
      subtitle="Stay informed about real estate trends across the Triangle."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Buy-Sell-Smile", href: "/buy-sell-smile/buying-a-home" }]}
    >
      <p className="text-[#3d3d3d] leading-relaxed mb-8">
        Whether you&apos;re planning to buy, sell, or simply stay informed, understanding current market conditions is
        essential to making smart decisions. Our team monitors the Triangle market closely and shares regular updates to
        keep you in the know.
      </p>

      <div className="bg-[#f0fafd] border border-[#2BB8D3] rounded-xl p-8 text-center mb-8">
        <h2 className="text-xl font-bold text-[#1C2B5E] mb-4">Triangle Market Snapshot</h2>
        <p className="text-[#3d3d3d] mb-6">
          Contact us for the latest market report customized to your specific neighborhood or area of interest.
        </p>
        <a href="/about/contact-us" className="inline-block bg-[#2BB8D3] hover:bg-[#1fa3bd] text-white font-bold px-8 py-3 rounded-full transition-colors text-sm tracking-wider">
          REQUEST A MARKET REPORT
        </a>
      </div>

      <h2 className="text-2xl font-bold text-[#1C2B5E] mb-4">Why the Triangle?</h2>
      <p className="text-[#3d3d3d] leading-relaxed mb-4">
        The Raleigh-Durham-Chapel Hill area consistently ranks among the top real estate markets in the country, driven by:
      </p>
      <ul className="list-disc list-inside text-[#3d3d3d] space-y-2 ml-2">
        <li>Strong job growth and economic diversity</li>
        <li>World-class universities and healthcare systems</li>
        <li>A mild climate and outdoor lifestyle</li>
        <li>Growing 55+ and active adult community options</li>
        <li>Relative affordability compared to other major metros</li>
      </ul>
    </PageLayout>
  );
}
