import PageLayout from "@/components/PageLayout";
import Link from "next/link";

export const metadata = {
  title: "Offer Is Accepted — What Happens Next? | Milestone Moves Realty Group",
  description: "Your offer was accepted! Here's a clear walkthrough of every step from contract to closing.",
};

const steps = [
  {
    day: "Day 1–3",
    title: "Earnest Money Deposit",
    desc: "You'll submit an earnest money deposit — typically 1–2% of the purchase price — to an escrow account. This shows good faith and is applied toward your closing costs or down payment.",
    tip: "Make sure your funds are liquid and accessible. Delays here can jeopardize the contract.",
  },
  {
    day: "Day 1–10",
    title: "Home Inspection",
    desc: "A licensed inspector evaluates the property's condition — structure, systems, roof, plumbing, electrical, and more. This is your opportunity to understand exactly what you're buying.",
    tip: "We strongly recommend attending the inspection in person. The inspector's verbal explanation is often more valuable than the written report.",
  },
  {
    day: "Day 3–7",
    title: "Loan Application & Appraisal Ordered",
    desc: "Your lender formally processes your application and orders an independent appraisal to verify the home's value supports the purchase price.",
    tip: "Respond quickly to any document requests from your lender. Delays here push the closing date back.",
  },
  {
    day: "Day 10–14",
    title: "Inspection Negotiations",
    desc: "If the inspection reveals issues, you can request repairs, a price reduction, or a credit at closing. We'll help you prioritize what's worth negotiating and what to let go.",
    tip: "Not every item on an inspection report is a dealbreaker. Focus on safety issues and major systems.",
  },
  {
    day: "Day 14–21",
    title: "Appraisal Completed",
    desc: "The lender receives the appraisal. If the home appraises at or above the purchase price, you move forward. If it comes in low, we'll need to negotiate a solution.",
    tip: "In a competitive market, some buyers waive the appraisal contingency. We'll advise you on whether that makes sense in your situation.",
  },
  {
    day: "Day 21–28",
    title: "Clear to Close",
    desc: "Your lender issues a \"clear to close\" — meaning all conditions have been met and the loan is approved. You'll receive a Closing Disclosure at least 3 business days before closing.",
    tip: "Review the Closing Disclosure carefully and compare it to your Loan Estimate. Ask us about anything that looks different.",
  },
  {
    day: "Day 28–35",
    title: "Final Walk-Through",
    desc: "The day before (or morning of) closing, you'll do a final walk-through to confirm the home is in the agreed-upon condition and any negotiated repairs were completed.",
    tip: "Bring your inspection report and repair requests so you can check each item off.",
  },
  {
    day: "Closing Day",
    title: "Sign, Fund & Get Your Keys",
    desc: "You'll sign documents, the lender funds the loan, and the deed transfers to your name. Congratulations — you're a homeowner!",
    tip: "Bring a valid photo ID and any required certified funds. Wire transfers must be sent in advance. Closing typically takes 60–90 minutes.",
  },
];

export default function OfferIsAccepted() {
  return (
    <PageLayout
      title="Your Offer Is Accepted — Now What?"
      subtitle="A clear, step-by-step guide from contract to closing day."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Buy-Sell-Smile", href: "/buy-sell-smile/is-now-the-best-time-to-sell" }]}
    >
      <p className="text-[#3d3d3d] leading-relaxed mb-4">
        Hearing &ldquo;your offer was accepted&rdquo; is exciting — but the journey isn&apos;t over. The period between
        contract and closing involves a series of deadlines, decisions, and details that can feel overwhelming if
        you&apos;re not prepared.
      </p>
      <p className="text-[#3d3d3d] leading-relaxed mb-10">
        We&apos;re with you through every one of them. Here&apos;s what to expect.
      </p>

      <div className="space-y-5 mb-10">
        {steps.map((step, i) => (
          <div key={step.title} className="flex gap-5">
            {/* Timeline marker */}
            <div className="flex flex-col items-center flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-[#2BB8D3] text-white font-bold flex items-center justify-center text-sm flex-shrink-0">
                {i + 1}
              </div>
              {i < steps.length - 1 && <div className="w-0.5 bg-[#2BB8D3]/30 flex-1 mt-1" />}
            </div>
            {/* Content */}
            <div className="pb-6 flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <h3 className="font-bold text-[#1C2B5E] text-lg">{step.title}</h3>
                <span className="text-xs bg-[#1C2B5E] text-white px-2 py-0.5 rounded-full">{step.day}</span>
              </div>
              <p className="text-[#3d3d3d] leading-relaxed text-sm mb-3">{step.desc}</p>
              <div className="flex gap-2 items-start bg-[#f0fafd] rounded-lg p-3">
                <span className="text-[#2BB8D3] font-bold text-xs flex-shrink-0">PRO TIP:</span>
                <p className="text-[#3d3d3d] text-xs leading-relaxed">{step.tip}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#1C2B5E] text-white rounded-2xl p-8 text-center">
        <h3 className="text-xl font-bold mb-3">Questions About Your Contract?</h3>
        <p className="text-gray-200 mb-6">
          We&apos;re here to explain every line and walk you through every step. No question is too small.
        </p>
        <Link
          href="/about/contact-us"
          className="inline-block bg-[#2BB8D3] hover:bg-[#1fa3bd] text-white font-bold px-8 py-3 rounded-full transition-colors text-sm tracking-wider"
        >
          TALK TO US
        </Link>
      </div>
    </PageLayout>
  );
}
