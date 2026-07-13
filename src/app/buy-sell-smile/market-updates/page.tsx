import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Market Updates | Milestone Moves Realty Group",
  description: "Stay informed on Triangle, NC real estate trends — current conditions, neighborhood insights, and what it means for buyers and sellers.",
};

const whyTriangle = [
  { stat: "#1", label: "Fastest Growing Metro", detail: "Raleigh-Durham is consistently among the fastest-growing metro areas in the U.S." },
  { stat: "Top 5", label: "Best Places to Retire", detail: "Multiple national rankings cite the Triangle for quality of life, healthcare, and cost of living." },
  { stat: "3", label: "Major Research Universities", detail: "UNC, Duke, and NC State anchor a knowledge economy that drives sustained demand." },
  { stat: "60°F", label: "Average Annual Temp", detail: "Mild four-season climate with minimal extreme weather — a major draw for relocating retirees." },
];

const neighborhoods = [
  { area: "Apex", trend: "↑ Strong", detail: "High demand from families and retirees alike. Limited inventory keeps values rising.", tag: "Seller's Market" },
  { area: "Cary", trend: "↑ Strong", detail: "Premium suburban market. Well-maintained homes move quickly at or above list price.", tag: "Seller's Market" },
  { area: "Durham", trend: "→ Balanced", detail: "Diverse price points and growing creative/tech community. Good opportunities for buyers.", tag: "Balanced" },
  { area: "Wake Forest", trend: "↑ Rising", detail: "Rapidly developing area with new communities. Strong appreciation trajectory.", tag: "Seller's Market" },
  { area: "Chapel Hill", trend: "→ Stable", detail: "University-anchored market stays resilient. Luxury and mid-range both perform well.", tag: "Balanced" },
  { area: "Garner & Clayton", trend: "↑ Emerging", detail: "Affordability advantage driving strong buyer interest. Inventory is tightening.", tag: "Rising" },
];

const buyerTips = [
  "Get fully pre-approved before starting your search — not just pre-qualified",
  "Be prepared to move within 24–48 hours of finding the right home",
  "Work with an agent who knows the neighborhoods, not just the listings",
  "Build flexibility into your timeline in case of bidding competition",
  "Don't wait for the 'perfect market' — the best time to buy is when you're ready",
];

const sellerTips = [
  "Price correctly from day one — the first week drives the most buyer traffic",
  "Professional photography is non-negotiable in today's visual-first market",
  "Light pre-listing repairs and staging consistently raise final sale price",
  "Your first offer is often your best offer in an active market",
  "Review all offer terms, not just price — contingencies and closing dates matter",
];

export default function MarketUpdates() {
  return (
    <div>
      {/* Hero — data dashboard aesthetic */}
      <section className="relative overflow-hidden bg-[#123A5E] py-24 px-4">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/market-updates.jpg" alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-[#123A5E]/70" />
        <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
          <p className="text-white font-bold tracking-widest text-sm mb-4 uppercase">Triangle Real Estate</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Market Updates &amp; Insights</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Understanding the market is the first step to making a smart real estate decision.
            Here&apos;s what&apos;s happening across the Triangle — and what it means for you.
          </p>
          <Link href="/about/contact-us" className="inline-block bg-white hover:bg-gray-100 text-[#123A5E] font-bold px-8 py-4 rounded-full transition-colors text-sm tracking-wider">
            GET A PERSONALIZED MARKET REPORT
          </Link>
        </div>
      </section>

      {/* Current conditions banner */}
      <section className="bg-[#123A5E] py-6 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-6 text-white text-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🏠</span>
            <div>
              <p className="font-black text-lg">Low</p>
              <p className="text-xs font-semibold opacity-80">Active Inventory</p>
            </div>
          </div>
          <div className="w-px h-10 bg-white/30 hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="text-2xl">⏱️</span>
            <div>
              <p className="font-black text-lg">21–35 Days</p>
              <p className="text-xs font-semibold opacity-80">Avg. Days on Market</p>
            </div>
          </div>
          <div className="w-px h-10 bg-white/30 hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="text-2xl">📈</span>
            <div>
              <p className="font-black text-lg">Rising</p>
              <p className="text-xs font-semibold opacity-80">Median Home Values</p>
            </div>
          </div>
          <div className="w-px h-10 bg-white/30 hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="text-2xl">🧭</span>
            <div>
              <p className="font-black text-lg">Seller-Leaning</p>
              <p className="text-xs font-semibold opacity-80">Overall Market Conditions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Triangle */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#123A5E] font-bold tracking-widest text-sm mb-3 uppercase">Why the Triangle</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#123A5E] mb-6 leading-tight">
                One of America&apos;s Most Resilient Real Estate Markets
              </h2>
              <p className="text-[#3d3d3d] leading-relaxed mb-5">
                The Raleigh-Durham-Chapel Hill metro has outperformed most U.S. markets over the past decade —
                driven by strong job growth, top-tier universities, and a quality of life that continues to attract
                buyers from across the country.
              </p>
              <p className="text-[#3d3d3d] leading-relaxed">
                For 55+ buyers and sellers, the Triangle offers an especially compelling combination: diverse 55+
                community options, world-class healthcare (Duke, UNC, WakeMed), mild climate, and a supportive
                senior services ecosystem.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {whyTriangle.map((item) => (
                <div key={item.label} className="bg-[#123A5E] text-white rounded-2xl p-6">
                  <p className="text-4xl font-black text-white mb-1">{item.stat}</p>
                  <p className="font-bold mb-2">{item.label}</p>
                  <p className="text-gray-300 text-xs leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood snapshots */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#123A5E] font-bold tracking-widest text-sm mb-3 uppercase">Area by Area</p>
            <h2 className="text-3xl font-bold text-[#123A5E]">Neighborhood Market Snapshots</h2>
            <p className="text-[#3d3d3d] mt-4 max-w-xl mx-auto text-sm">
              Conditions vary significantly from one area to the next. Here&apos;s a high-level view of key Triangle markets.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {neighborhoods.map((n) => (
              <div key={n.area} className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-[#123A5E]">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-[#123A5E] text-xl">{n.area}</h3>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                    n.tag === "Seller's Market" ? "bg-[#123A5E] text-white" :
                    n.tag === "Rising" ? "bg-[#123A5E] text-white" :
                    "bg-gray-100 text-gray-600"
                  }`}>{n.tag}</span>
                </div>
                <p className="text-[#123A5E] font-bold text-lg mb-2">{n.trend}</p>
                <p className="text-[#3d3d3d] text-sm leading-relaxed">{n.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-xs mt-6">Market conditions as of Q2 2025 and subject to change. Contact us for current data on your specific area.</p>
        </div>
      </section>

      {/* Buyer / Seller tips side by side */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#123A5E] font-bold tracking-widest text-sm mb-3 uppercase">What This Means For You</p>
            <h2 className="text-3xl font-bold text-[#123A5E]">How to Navigate Today&apos;s Market</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#f3f4f6] border border-[#123A5E] rounded-2xl p-8">
              <h3 className="font-bold text-[#123A5E] text-xl mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-[#123A5E] text-white rounded-full flex items-center justify-center text-lg">🔍</span>
                If You&apos;re Buying
              </h3>
              <ul className="space-y-3">
                {buyerTips.map((tip) => (
                  <li key={tip} className="flex gap-3 items-start text-sm text-[#3d3d3d]">
                    <span className="w-5 h-5 bg-[#123A5E] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">✓</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#123A5E] rounded-2xl p-8">
              <h3 className="font-bold text-white text-xl mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-white text-[#123A5E] rounded-full flex items-center justify-center text-lg">🏷️</span>
                If You&apos;re Selling
              </h3>
              <ul className="space-y-3">
                {sellerTips.map((tip) => (
                  <li key={tip} className="flex gap-3 items-start text-sm text-gray-300">
                    <span className="w-5 h-5 bg-white text-[#123A5E] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">✓</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Report CTA */}
      <section className="relative py-20 px-4 bg-[#123A5E] text-white text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/market-updates.jpg" alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Get a Custom Market Report for Your Area</h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            We&apos;ll pull the latest sales data, active competition, and pricing trends for your specific neighborhood —
            and walk you through what it means in plain language.
          </p>
          <Link href="/about/contact-us" className="inline-block bg-white hover:bg-gray-100 text-[#123A5E] font-bold px-10 py-4 rounded-full transition-colors text-sm tracking-wider">
            REQUEST MY REPORT
          </Link>
        </div>
      </section>
    </div>
  );
}
