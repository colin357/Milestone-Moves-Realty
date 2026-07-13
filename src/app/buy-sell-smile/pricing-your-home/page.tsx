import PageLayout from "@/components/PageLayout";
import Link from "next/link";

export const metadata = {
  title: "Pricing Your Home | Milestone Moves Realty Group",
  description: "Learn how to price your home strategically to attract the right buyers and maximize your sale.",
};

export default function PricingYourHome() {
  return (
    <PageLayout
      title="Pricing Your Home"
      subtitle="The right price attracts buyers. The wrong price costs you time and money."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Buy-Sell-Smile", href: "/buy-sell-smile/is-now-the-best-time-to-sell" }]}
    >
      <p className="text-[#3d3d3d] leading-relaxed mb-10">
        Pricing is one of the most consequential decisions in any home sale. Price too high and the home sits —
        accumulating days on market and raising buyer suspicion. Price too low and you leave money on the table.
        Here&apos;s how we approach it strategically.
      </p>

      <h2 className="text-2xl font-bold text-[#123A5E] mb-4">The Comparative Market Analysis (CMA)</h2>
      <p className="text-[#3d3d3d] leading-relaxed mb-4">
        The foundation of smart pricing is a detailed CMA — an analysis of homes that have recently sold in your area
        that are similar in size, age, condition, and location. This gives us a data-driven range for where your home
        should be priced to compete effectively.
      </p>
      <p className="text-[#3d3d3d] leading-relaxed mb-10">
        We prepare a complimentary CMA for every seller client, and we walk you through it line by line so you
        understand exactly how we arrived at our recommendation.
      </p>

      <h2 className="text-2xl font-bold text-[#123A5E] mb-6">Pricing Strategies Explained</h2>
      <div className="grid sm:grid-cols-3 gap-5 mb-10">
        {[
          {
            strategy: "At Market",
            icon: "🎯",
            desc: "Priced in line with comparable sales. Attracts serious buyers, typically sells within a predictable timeframe. Our most common recommendation.",
            ideal: "Most market conditions",
            color: "border-[#123A5E]",
          },
          {
            strategy: "Slightly Below Market",
            icon: "🔥",
            desc: "Intentionally priced just under comparable homes to generate urgency and competition. Can result in multiple offers that push the final price above asking.",
            ideal: "Low-inventory, high-demand markets",
            color: "border-[#123A5E]",
          },
          {
            strategy: "Above Market",
            icon: "⚠️",
            desc: "Often driven by emotional attachment to the home. Leads to longer days on market, price reductions, and ultimately lower net proceeds than strategic pricing.",
            ideal: "Rarely recommended",
            color: "border-gray-300",
          },
        ].map((s) => (
          <div key={s.strategy} className={`border-t-4 ${s.color} bg-white rounded-xl p-5 shadow-sm`}>
            <div className="text-3xl mb-3">{s.icon}</div>
            <h3 className="font-bold text-[#123A5E] text-lg mb-2">{s.strategy}</h3>
            <p className="text-[#3d3d3d] text-sm leading-relaxed mb-4">{s.desc}</p>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Best for: {s.ideal}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-[#123A5E] mb-4">The Cost of Overpricing</h2>
      <div className="bg-gray-50 rounded-xl p-6 mb-10">
        <div className="grid sm:grid-cols-3 gap-5 text-center">
          {[
            { label: "Week 1–2", effect: "Buyers dismiss the listing as overpriced before even scheduling a tour." },
            { label: "Week 3–4", effect: "Price reduction required. Buyers wonder what's wrong with it." },
            { label: "Week 5+", effect: "Extended days on market signal desperation. Final price often lower than if priced correctly from the start." },
          ].map((w) => (
            <div key={w.label}>
              <p className="font-bold text-[#123A5E] mb-2">{w.label}</p>
              <p className="text-[#3d3d3d] text-sm leading-relaxed">{w.effect}</p>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[#123A5E] mb-4">What We Consider When Pricing Your Home</h2>
      <ul className="space-y-3 mb-10">
        {[
          "Recent comparable sales (typically last 3–6 months)",
          "Active competition — what buyers will compare yours against",
          "Expired and withdrawn listings (what didn't sell and why)",
          "Your home's condition, updates, and unique features",
          "Neighborhood trends and micro-market dynamics",
          "Your timeline — faster sale vs. maximum price",
        ].map((item) => (
          <li key={item} className="flex gap-3 items-start">
            <span className="w-5 h-5 bg-[#123A5E] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-[#3d3d3d]">{item}</span>
          </li>
        ))}
      </ul>

      <div className="bg-[#123A5E] text-white rounded-2xl p-8 text-center">
        <h3 className="text-xl font-bold mb-3">Get a Free Pricing Consultation</h3>
        <p className="text-gray-200 mb-6">
          We&apos;ll walk you through the data and give you our honest recommendation — no pressure, no obligation.
        </p>
        <Link
          href="/about/contact-us"
          className="inline-block bg-white hover:bg-gray-100 text-[#123A5E] font-bold px-8 py-3 rounded-full transition-colors text-sm tracking-wider"
        >
          SCHEDULE A CONSULTATION
        </Link>
      </div>
    </PageLayout>
  );
}
