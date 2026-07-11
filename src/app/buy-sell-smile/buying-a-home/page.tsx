import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Buying a Home | Milestone Moves Realty Group",
  description: "Expert buyer representation in the Triangle, NC — from first search to closing day.",
};

const steps = [
  { n: "01", title: "Discovery Call", desc: "We start with a conversation — about your lifestyle, timeline, must-haves, and the emotional side of this move. No forms, no pressure." },
  { n: "02", title: "Pre-Approval", desc: "We connect you with a trusted lender and guide you through getting fully pre-approved — giving you real clarity on your budget and leverage with sellers." },
  { n: "03", title: "Neighborhood Education", desc: "Before we show a single listing, we walk you through neighborhoods, HOAs, commute patterns, and community amenities that match your life." },
  { n: "04", title: "Curated Home Tours", desc: "We hand-select properties that match your criteria — saving you from wading through listings that don't fit — and tour them with you in person." },
  { n: "05", title: "Strategic Offer", desc: "When you find the one, we move fast and smart. We craft an offer based on market data, seller motivation, and competitive positioning." },
  { n: "06", title: "Inspection & Due Diligence", desc: "We coordinate inspections, review results, and negotiate repairs or credits. We help you understand what's a dealbreaker and what isn't." },
  { n: "07", title: "Clear to Close", desc: "We track every lender milestone, coordinate with the closing attorney, and keep you informed so nothing falls through the cracks." },
  { n: "08", title: "Keys in Hand", desc: "Closing day is our favorite day. We'll be there with you — and we'll celebrate the start of your next chapter." },
];

const faqs = [
  { q: "How much do I need for a down payment?", a: "It depends on your loan type. Conventional loans typically require 3–20% down. FHA loans can be as low as 3.5%. VA and USDA loans may require 0% down for eligible buyers. We'll connect you with a lender who can walk through every option." },
  { q: "Do I need to sell my current home first?", a: "Not necessarily. Some buyers can qualify to purchase before selling — especially with strong equity in their current home. We'll help you evaluate bridge loan options, contingent offers, and the right sequencing for your situation." },
  { q: "How long does the buying process take?", a: "From first conversation to closing, most buyers are in their new home within 60–90 days — though the timeline can vary. The biggest variables are how quickly you find the right home and how responsive your lender is." },
  { q: "What does buyer representation cost me?", a: "Our buyer representation fee is a conversation we have upfront, openly and honestly. We'll explain exactly how agent compensation works in today's market before we begin." },
  { q: "What if the home doesn't appraise?", a: "If the appraisal comes in below the purchase price, you have options — negotiate with the seller, pay the difference in cash, or walk away (if you have an appraisal contingency). We'll guide you through every scenario." },
  { q: "Should I buy in this market?", a: "The best time to buy is when it's right for your life, not just the market. We'll give you an honest picture of current conditions and help you make a decision that serves your whole situation — not just today's headlines." },
];

export default function BuyingAHome() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <Image src="/images/buying-home.jpg" alt="Finding your next home" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-[#123A5E]/95 via-[#123A5E]/80 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
          <p className="text-[#2BB8D3] font-bold tracking-widest text-sm mb-4 uppercase">Buy-Sell-Smile</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 max-w-xl leading-tight">
            Find the Home Your Next Chapter Deserves
          </h1>
          <p className="text-gray-200 text-lg max-w-lg leading-relaxed mb-8">
            Expert buyer representation — from first conversation to keys in hand — with an agent who puts your life first.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/about/contact-us" className="bg-[#0A7387] hover:bg-[#086475] text-white font-bold px-8 py-4 rounded-full transition-colors text-sm tracking-wider">
              START YOUR SEARCH
            </Link>
            <Link href="/55-plus-options/simplified-living-communities" className="border-2 border-white hover:bg-white hover:text-[#123A5E] text-white font-bold px-8 py-4 rounded-full transition-colors text-sm tracking-wider">
              EXPLORE 55+ COMMUNITIES
            </Link>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-[#0A7387] py-8 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-white">
          {[
            { stat: "8", label: "Steps to Closing" },
            { stat: "30–45", label: "Avg. Days to Close" },
            { stat: "55+", label: "Our Specialty" },
            { stat: "Zero", label: "Pressure. Ever." },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold">{s.stat}</p>
              <p className="text-sm font-semibold opacity-90 mt-1 tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#0A7387] font-bold tracking-widest text-sm mb-3 uppercase">Our Buyer Process</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#123A5E]">Eight Steps. Zero Surprises.</h2>
            <p className="text-[#3d3d3d] mt-4 max-w-2xl mx-auto">
              Every step is designed to keep you informed, protected, and confident — from your first search to the day you get your keys.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {steps.map((step) => (
              <div key={step.n} className="flex gap-5 items-start bg-gray-50 rounded-2xl p-6 hover:bg-[#f0fafd] transition-colors group">
                <span className="text-4xl font-black text-[#0A7387]/20 group-hover:text-[#0A7387]/40 transition-colors leading-none flex-shrink-0 w-12">
                  {step.n}
                </span>
                <div>
                  <h3 className="font-bold text-[#123A5E] text-lg mb-1">{step.title}</h3>
                  <p className="text-[#3d3d3d] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Are you ready? checklist */}
      <section className="py-20 px-4 bg-[#123A5E] text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#2BB8D3] font-bold tracking-widest text-sm mb-3 uppercase">Buyer Readiness</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Are You Ready to Buy?</h2>
            <p className="text-gray-300 mt-4 max-w-xl mx-auto">
              Check off where you stand. If any of these are missing, we&apos;ll help you get there.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { ready: true,  item: "I have a clear sense of what I need in a home" },
              { ready: true,  item: "I understand my target price range" },
              { ready: true,  item: "My credit score is healthy (680+ preferred)" },
              { ready: true,  item: "I have funds available for a down payment" },
              { ready: false, item: "I haven't started the pre-approval process yet" },
              { ready: false, item: "I haven't met with a real estate agent yet" },
              { ready: false, item: "I'm unsure which neighborhoods fit my lifestyle" },
              { ready: false, item: "I don't know exactly what closing costs I'll need" },
            ].map((c) => (
              <div key={c.item} className={`flex gap-3 items-center rounded-xl p-4 ${c.ready ? "bg-white/10" : "bg-white/5 border border-white/10"}`}>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${c.ready ? "bg-[#0A7387]" : "border-2 border-white/30"}`}>
                  {c.ready && (
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <p className={`text-sm ${c.ready ? "text-white" : "text-gray-400"}`}>{c.item}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-300 mt-8 text-sm">
            Missing a few checkmarks? That&apos;s exactly what we&apos;re here for.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#0A7387] font-bold tracking-widest text-sm mb-3 uppercase">Common Questions</p>
            <h2 className="text-3xl font-bold text-[#123A5E]">Buyer FAQ</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="flex gap-4 p-6">
                  <div className="w-8 h-8 bg-[#0A7387] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">Q</div>
                  <div>
                    <p className="font-bold text-[#123A5E] mb-2">{faq.q}</p>
                    <p className="text-[#3d3d3d] text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A7387] py-16 px-4 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Next Home?</h2>
          <p className="text-lg opacity-90 mb-8">Let&apos;s start with a conversation — no pressure, no commitment.</p>
          <Link href="/about/contact-us" className="inline-block bg-[#123A5E] hover:bg-[#0D2942] text-white font-bold px-10 py-4 rounded-full transition-colors text-sm tracking-wider">
            SCHEDULE A FREE CONSULTATION
          </Link>
        </div>
      </section>
    </div>
  );
}
