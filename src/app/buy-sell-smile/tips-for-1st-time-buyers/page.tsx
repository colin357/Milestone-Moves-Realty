import PageLayout from "@/components/PageLayout";
import Link from "next/link";

export const metadata = {
  title: "Tips for 1st Time Buyers | Milestone Moves Realty Group",
  description: "Essential guidance for first-time homebuyers navigating the Triangle, NC real estate market.",
};

const tips = [
  {
    number: "01",
    title: "Get Pre-Approved Before You Shop",
    body: "A pre-approval letter from a lender tells you exactly how much you can borrow — and signals to sellers that you're a serious, qualified buyer. In a competitive market, sellers often won't even consider an offer without one.",
    action: "Contact a lender early. We can recommend trusted mortgage professionals in the Triangle.",
  },
  {
    number: "02",
    title: "Understand the Difference Between Pre-Qualification and Pre-Approval",
    body: "Pre-qualification is an informal estimate based on self-reported info. Pre-approval involves a full credit check and documentation review — and carries real weight with sellers.",
    action: "Always pursue full pre-approval, not just pre-qualification.",
  },
  {
    number: "03",
    title: "Budget Beyond the Purchase Price",
    body: "Closing costs typically run 2–5% of the loan amount. Add to that home inspection fees, moving costs, immediate repairs, and reserves for unexpected issues. Budget for the full picture.",
    action: "Ask us for a realistic cost estimate based on your target price range.",
  },
  {
    number: "04",
    title: "Don't Skip the Home Inspection",
    body: "An inspection is your best opportunity to understand what you're buying. Even new construction can have issues. A few hundred dollars upfront can save you thousands in surprises after closing.",
    action: "We'll connect you with trusted, thorough inspectors in the Triangle.",
  },
  {
    number: "05",
    title: "Think About Resale — Even If You Plan to Stay Forever",
    body: "Life changes. A home in a strong school district, on a quiet street, and in a growing area will always be easier to sell. Think about what future buyers will want, not just what you want today.",
    action: "We'll help you evaluate neighborhoods with strong long-term value.",
  },
  {
    number: "06",
    title: "Don't Make Major Financial Changes During the Process",
    body: "After pre-approval and before closing, avoid changing jobs, taking on new debt, making large deposits, or making big purchases. Any of these can affect your loan approval.",
    action: "When in doubt, ask your lender before making any financial moves.",
  },
  {
    number: "07",
    title: "Make Your Offer Strong — Not Just High",
    body: "Price matters, but so does your earnest money, flexibility on closing date, and pre-approval strength. A well-structured offer at asking price can beat a higher offer with weak terms.",
    action: "We'll craft a competitive offer strategy tailored to each property.",
  },
  {
    number: "08",
    title: "Lean on Your Agent — That's What We're Here For",
    body: "You don't have to know everything about real estate. That's our job. Ask every question, voice every concern, and let us guide you. The best outcomes happen when clients and agents work as a team.",
    action: "Schedule a free buyer consultation with us to get started.",
  },
];

export default function TipsFor1stTimeBuyers() {
  return (
    <PageLayout
      title="Tips for 1st Time Buyers"
      subtitle="Everything we wish every first-time buyer knew before starting the process."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Buy-Sell-Smile", href: "/buy-sell-smile/is-now-the-best-time-to-sell" }]}
    >
      <p className="text-[#3d3d3d] leading-relaxed mb-4">
        Buying your first home is one of the biggest financial decisions you&apos;ll ever make — and it should feel
        exciting, not overwhelming. The best way to feel confident through the process is to understand it before you
        start. Here are the tips we share with every first-time buyer we work with.
      </p>
      <p className="text-[#3d3d3d] leading-relaxed mb-10">
        Whether you&apos;re buying for yourself or helping a family member navigate their first purchase, these
        fundamentals apply.
      </p>

      <div className="space-y-6 mb-10">
        {tips.map((tip) => (
          <div key={tip.number} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-[#2BB8D3] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                {tip.number}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#1C2B5E] text-lg mb-2">{tip.title}</h3>
                <p className="text-[#3d3d3d] leading-relaxed text-sm mb-3">{tip.body}</p>
                <div className="flex gap-2 items-start bg-[#f0fafd] rounded-lg p-3">
                  <span className="text-[#2BB8D3] font-bold text-xs flex-shrink-0">ACTION:</span>
                  <p className="text-[#3d3d3d] text-xs leading-relaxed">{tip.action}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#1C2B5E] text-white rounded-2xl p-8 text-center">
        <h3 className="text-xl font-bold mb-3">Ready to Start Your Search?</h3>
        <p className="text-gray-200 mb-6">
          Schedule a free buyer consultation and let&apos;s map out your path to homeownership — step by step.
        </p>
        <Link
          href="/about/contact-us"
          className="inline-block bg-[#2BB8D3] hover:bg-[#1fa3bd] text-white font-bold px-8 py-3 rounded-full transition-colors text-sm tracking-wider"
        >
          SCHEDULE A CONSULTATION
        </Link>
      </div>
    </PageLayout>
  );
}
