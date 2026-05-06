import PageLayout from "@/components/PageLayout";
import Link from "next/link";

export const metadata = {
  title: "Buying a Home | Milestone Moves Realty Group",
  description: "Expert guidance for buying your next home in the Triangle, NC.",
};

export default function BuyingAHome() {
  return (
    <PageLayout
      title="Buying a Home"
      subtitle="Expert guidance every step of the way — so you can buy with confidence."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Buy-Sell-Smile", href: "/buy-sell-smile/buying-a-home" }]}
    >
      <p className="text-[#3d3d3d] leading-relaxed mb-6">
        Whether you&apos;re moving to the Triangle for the first time or right-sizing within the area, buying a home is
        one of the most significant decisions you&apos;ll make. We&apos;re here to make it clear, calm, and — yes — exciting.
      </p>

      <h2 className="text-2xl font-bold text-[#1C2B5E] mb-4">Our Buyer Process</h2>
      <div className="space-y-4 mb-8">
        {[
          { step: "1", title: "Discovery Consultation", desc: "We start by listening — to your needs, your timeline, and your vision." },
          { step: "2", title: "Education & Pre-Approval", desc: "We connect you with trusted lenders and help you understand your purchasing power." },
          { step: "3", title: "Home Search", desc: "We curate listings, schedule tours, and help you evaluate each property objectively." },
          { step: "4", title: "Making an Offer", desc: "We craft a competitive offer that protects your interests without overpaying." },
          { step: "5", title: "Inspection & Negotiation", desc: "We guide you through inspections and negotiate repairs or credits on your behalf." },
          { step: "6", title: "Closing Day", desc: "We handle the details so closing day is smooth, clear, and celebratory." },
        ].map((s) => (
          <div key={s.step} className="flex gap-4 items-start">
            <div className="w-10 h-10 bg-[#2BB8D3] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
              {s.step}
            </div>
            <div>
              <h3 className="font-bold text-[#1C2B5E]">{s.title}</h3>
              <p className="text-[#3d3d3d] text-sm leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#f0fafd] border border-[#2BB8D3] rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold text-[#1C2B5E] mb-3">Ready to Start Your Search?</h3>
        <Link href="/about/contact-us" className="inline-block bg-[#2BB8D3] hover:bg-[#1fa3bd] text-white font-bold px-8 py-3 rounded-full transition-colors text-sm tracking-wider">
          LET&apos;S TALK
        </Link>
      </div>
    </PageLayout>
  );
}
