import PageLayout from "@/components/PageLayout";
import Link from "next/link";

export const metadata = {
  title: "Property Value | Milestone Moves Realty Group",
  description: "Understand what determines your home's value and how to maximize it before selling.",
};

const factors = [
  { label: "Location", weight: "Very High", desc: "Proximity to schools, amenities, employment centers, and neighborhood desirability are the single biggest driver of value." },
  { label: "Size & Layout", weight: "High", desc: "Square footage matters, but so does how it's used. Open floor plans, bedroom count, and usable space all influence buyers." },
  { label: "Condition & Updates", weight: "High", desc: "Move-in-ready homes command a premium. Updated kitchens, bathrooms, and mechanical systems reduce buyer hesitation." },
  { label: "Comparable Sales", weight: "High", desc: "What similar homes in your area have sold for recently is the most objective indicator of your home's current market value." },
  { label: "Curb Appeal", weight: "Medium", desc: "First impressions drive buyer interest — even before they step inside. Landscaping, paint, and the front entry matter." },
  { label: "Market Conditions", weight: "Medium", desc: "A seller's market (low inventory, high demand) pushes values up. A buyer's market has the opposite effect." },
  { label: "Interest Rates", weight: "Medium", desc: "Rates affect how much buyers can afford. Lower rates mean more buying power — and often higher prices." },
  { label: "Age of Systems", weight: "Lower", desc: "Roof, HVAC, plumbing, and electrical age affect appraisals and buyer negotiations. Recent replacements add value." },
];

export default function PropertyValue() {
  return (
    <PageLayout
      title="Property Value"
      subtitle="What is your home worth — and what can you do to maximize it?"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Buy-Sell-Smile", href: "/buy-sell-smile/is-now-the-best-time-to-sell" }]}
    >
      <p className="text-[#3d3d3d] leading-relaxed mb-4">
        Understanding your home&apos;s value is the essential first step in any selling decision. But &ldquo;value&rdquo;
        isn&apos;t just a number — it&apos;s a combination of market data, property-specific factors, and buyer
        perception. Here&apos;s what drives it and how we help you make the most of it.
      </p>
      <p className="text-[#3d3d3d] leading-relaxed mb-10">
        As part of our process, we prepare a detailed <strong>Comparative Market Analysis (CMA)</strong> for every
        client — a data-driven look at recent comparable sales to give you a clear, honest picture of your home&apos;s
        position in the current market.
      </p>

      <h2 className="text-2xl font-bold text-[#123A5E] mb-6">What Determines Your Home&apos;s Value</h2>
      <div className="space-y-3 mb-12">
        {factors.map((f) => (
          <div key={f.label} className="flex gap-4 items-start bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <div className="flex-shrink-0">
              <span className={`text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap ${
                f.weight === "Very High" ? "bg-[#123A5E] text-white" :
                f.weight === "High" ? "bg-[#0A7387] text-white" :
                f.weight === "Medium" ? "bg-[#f0fafd] text-[#0A7387] border border-[#0A7387]" :
                "bg-gray-100 text-gray-500"
              }`}>
                {f.weight}
              </span>
            </div>
            <div>
              <h3 className="font-bold text-[#123A5E] mb-1">{f.label}</h3>
              <p className="text-[#3d3d3d] text-sm leading-relaxed">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-[#123A5E] mb-4">How to Maximize Your Value Before Selling</h2>
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {[
          { tip: "Deep clean and declutter", detail: "Buyers perceive clean homes as better-maintained — and more valuable." },
          { tip: "Fresh neutral paint", detail: "One of the highest-ROI updates. Neutral tones appeal to the widest range of buyers." },
          { tip: "Tend to curb appeal", detail: "Mulch, trim hedges, power wash, and paint the front door. It sets the tone before buyers enter." },
          { tip: "Fix obvious deferred maintenance", detail: "Dripping faucets, broken fixtures, and worn caulk signal neglect. Address them before listing." },
          { tip: "Stage key rooms", detail: "Living room, primary bedroom, and kitchen staging have the highest impact on buyer impression." },
          { tip: "Get a pre-listing inspection", detail: "Knowing issues in advance lets you fix or disclose them — reducing buyer negotiation leverage." },
        ].map((item) => (
          <div key={item.tip} className="flex gap-3 items-start bg-[#f0fafd] rounded-xl p-4">
            <span className="w-5 h-5 bg-[#0A7387] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <div>
              <p className="font-bold text-[#123A5E] text-sm">{item.tip}</p>
              <p className="text-[#3d3d3d] text-xs leading-relaxed mt-0.5">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#123A5E] text-white rounded-2xl p-8 text-center">
        <h3 className="text-xl font-bold mb-3">Find Out What Your Home Is Worth Today</h3>
        <p className="text-gray-200 mb-6">
          We&apos;ll prepare a complimentary, no-obligation Comparative Market Analysis for your home.
        </p>
        <Link
          href="/about/contact-us"
          className="inline-block bg-[#0A7387] hover:bg-[#086475] text-white font-bold px-8 py-3 rounded-full transition-colors text-sm tracking-wider"
        >
          GET MY HOME VALUE
        </Link>
      </div>
    </PageLayout>
  );
}
