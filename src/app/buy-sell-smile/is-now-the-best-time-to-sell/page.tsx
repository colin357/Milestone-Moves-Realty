import PageLayout from "@/components/PageLayout";
import Link from "next/link";

export const metadata = {
  title: "Is Now the Best Time to Sell? | Milestone Moves Realty Group",
  description: "Wondering if it's the right time to sell your home? Here's how to think through the decision with confidence.",
};

const signals = [
  {
    icon: "📈",
    title: "Home Values Are Strong",
    good: true,
    desc: "When your neighborhood is seeing strong sale prices and low days-on-market, sellers are in an advantaged position. We can pull a Comparative Market Analysis to show you exactly where your home stands today.",
  },
  {
    icon: "🏠",
    title: "Inventory Is Low",
    good: true,
    desc: "Fewer homes for sale means less competition and more buyer urgency. In a low-inventory market, well-priced homes often receive multiple offers.",
  },
  {
    icon: "💰",
    title: "You Have Significant Equity",
    good: true,
    desc: "If you've owned your home for many years, rising values may have built substantial equity — giving you real financial leverage for your next move.",
  },
  {
    icon: "📅",
    title: "Your Timeline Aligns",
    good: true,
    desc: "The best time to sell is when it makes sense for your life. If you're ready to move — whether to a 55+ community, closer to family, or into a simpler home — the market doesn't have to be perfect.",
  },
  {
    icon: "📊",
    title: "Interest Rates Are Rising",
    good: false,
    desc: "Higher rates can reduce buyer purchasing power and slow demand. But motivated buyers are always in the market — good pricing and presentation still drive results.",
  },
  {
    icon: "❄️",
    title: "Seasonal Slowdowns",
    good: false,
    desc: "Spring and early fall tend to be peak seasons. However, serious buyers shop year-round, and less competition from other sellers in winter can work in your favor.",
  },
];

export default function IsNowTheBestTimeToSell() {
  return (
    <PageLayout
      title="Is Now the Best Time to Sell?"
      subtitle="The short answer: it depends on your life, not just the market."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Buy-Sell-Smile", href: "/buy-sell-smile/is-now-the-best-time-to-sell" }]}
    >
      <p className="text-[#3d3d3d] leading-relaxed mb-4">
        Everyone wants to sell at the &ldquo;perfect&rdquo; time — but the truth is, there&apos;s no universal answer.
        The right time to sell depends on a combination of market conditions, your personal circumstances, and your
        goals for what comes next. Here&apos;s how to think through it.
      </p>
      <p className="text-[#3d3d3d] leading-relaxed mb-10">
        At Milestone Moves, we help 55+ homeowners evaluate these factors honestly and without pressure — so you can
        make the decision that&apos;s truly right for you.
      </p>

      <h2 className="text-2xl font-bold text-[#1C2B5E] mb-6">Signals to Consider</h2>
      <div className="grid sm:grid-cols-2 gap-5 mb-12">
        {signals.map((s) => (
          <div key={s.title} className={`rounded-xl p-5 border-l-4 ${s.good ? "border-[#2BB8D3] bg-[#f0fafd]" : "border-gray-300 bg-gray-50"}`}>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{s.icon}</span>
              <h3 className={`font-bold text-base ${s.good ? "text-[#1C2B5E]" : "text-gray-600"}`}>{s.title}</h3>
              <span className={`ml-auto text-xs font-bold px-2 py-0.5 rounded-full ${s.good ? "bg-[#2BB8D3] text-white" : "bg-gray-200 text-gray-500"}`}>
                {s.good ? "FAVORABLE" : "CONSIDER"}
              </span>
            </div>
            <p className="text-[#3d3d3d] text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#1C2B5E] text-white rounded-2xl p-8 mb-8">
        <h3 className="text-xl font-bold mb-3">The Most Important Factor: Your Readiness</h3>
        <p className="text-gray-200 leading-relaxed mb-4">
          For most 55+ homeowners, the decision to sell isn&apos;t purely financial — it&apos;s about life. If your
          current home no longer fits your needs, requires more maintenance than you want, or keeps you far from the
          people and activities you love, waiting for a &ldquo;perfect&rdquo; market may cost you more than it saves.
        </p>
        <p className="text-gray-200 leading-relaxed">
          Our job is to help you understand the market clearly and make a decision that serves your whole life — not
          just your bottom line.
        </p>
      </div>

      <div className="bg-[#f0fafd] border border-[#2BB8D3] rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold text-[#1C2B5E] mb-3">Get a Free Market Assessment</h3>
        <p className="text-[#3d3d3d] mb-6">
          We&apos;ll pull the latest data for your neighborhood and give you an honest, no-pressure picture of what
          selling looks like for you right now.
        </p>
        <Link
          href="/about/contact-us"
          className="inline-block bg-[#2BB8D3] hover:bg-[#1fa3bd] text-white font-bold px-8 py-3 rounded-full transition-colors text-sm tracking-wider"
        >
          REQUEST AN ASSESSMENT
        </Link>
      </div>
    </PageLayout>
  );
}
