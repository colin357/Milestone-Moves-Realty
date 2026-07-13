import PageLayout from "@/components/PageLayout";
import Link from "next/link";

export const metadata = {
  title: "What Are Closing Costs? | Milestone Moves Realty Group",
  description: "A plain-language breakdown of closing costs for buyers and sellers in North Carolina.",
};

const buyerCosts = [
  { item: "Loan Origination Fee", amount: "0.5–1% of loan", desc: "Charged by the lender for processing your mortgage application." },
  { item: "Appraisal Fee", amount: "$500–$800", desc: "Paid to a licensed appraiser to confirm the home's value for the lender." },
  { item: "Home Inspection", amount: "$400–$700", desc: "A thorough inspection of the home's condition — highly recommended and typically paid before closing." },
  { item: "Title Search & Title Insurance", amount: "$800–$1,500", desc: "Verifies the seller has clear ownership. Lender's title insurance is usually required; owner's title insurance is strongly recommended." },
  { item: "Attorney Fee (NC)", amount: "$600–$1,000", desc: "North Carolina requires an attorney to conduct the closing. This fee covers their services and document preparation." },
  { item: "Recording Fees", amount: "$50–$200", desc: "County fees for recording the new deed and mortgage documents in public records." },
  { item: "Prepaid Interest", amount: "Varies", desc: "Interest on your loan from closing date to the end of the month." },
  { item: "Homeowners Insurance (1 year)", amount: "$1,000–$2,500", desc: "Lenders require proof of insurance at closing. You'll prepay the first year's premium." },
  { item: "Property Tax Escrow", amount: "2–3 months", desc: "Lenders typically collect several months of property taxes upfront to fund your escrow account." },
];

const sellerCosts = [
  { item: "Real Estate Commission", amount: "Varies", desc: "Paid to the buyer's and seller's agents. Discuss specifics with us at your listing consultation." },
  { item: "Attorney Fee (NC)", amount: "$600–$1,000", desc: "NC requires attorney-conducted closings. The seller typically pays their own attorney fees." },
  { item: "Transfer Tax (NC)", amount: "$1 per $500 of price", desc: "North Carolina excise tax on real estate transfers, paid by the seller." },
  { item: "Unpaid Property Taxes", amount: "Prorated", desc: "Seller pays taxes through the closing date; buyer is responsible for the rest of the year." },
  { item: "HOA Fees / Transfer Fees", amount: "Varies", desc: "If applicable, sellers may owe prorated HOA dues or an HOA transfer fee." },
  { item: "Negotiated Repairs or Credits", amount: "Varies", desc: "Any agreed-upon repairs or buyer credits come off the seller's proceeds at closing." },
  { item: "Mortgage Payoff", amount: "Remaining balance", desc: "Your remaining mortgage is paid off from the sale proceeds at closing." },
];

export default function WhatAreClosingCosts() {
  return (
    <PageLayout
      title="What Are Closing Costs?"
      subtitle="A clear, no-jargon breakdown of what buyers and sellers pay at the closing table."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Buy-Sell-Smile", href: "/buy-sell-smile/is-now-the-best-time-to-sell" }]}
    >
      <p className="text-[#3d3d3d] leading-relaxed mb-4">
        Closing costs are the fees and expenses — beyond the home&apos;s purchase price — that both buyers and sellers
        pay to complete a real estate transaction. For buyers, they typically run <strong>2–5% of the loan amount</strong>.
        For sellers, the largest cost is usually the real estate commission, plus a few other items.
      </p>
      <p className="text-[#3d3d3d] leading-relaxed mb-10">
        Understanding what&apos;s coming helps you plan — and prevents unwelcome surprises on closing day.
      </p>

      {/* Buyer costs */}
      <h2 className="text-2xl font-bold text-[#123A5E] mb-2">Buyer Closing Costs</h2>
      <p className="text-[#3d3d3d] mb-5 text-sm">
        Buyers receive a <strong>Loan Estimate</strong> within 3 days of applying and a <strong>Closing Disclosure</strong> at
        least 3 days before closing — both itemize these costs so there are no surprises.
      </p>
      <div className="space-y-3 mb-12">
        {buyerCosts.map((c) => (
          <div key={c.item} className="flex flex-col sm:flex-row gap-2 sm:gap-4 bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <div className="sm:w-48 flex-shrink-0">
              <p className="font-bold text-[#123A5E] text-sm">{c.item}</p>
              <p className="text-[#123A5E] text-xs font-semibold">{c.amount}</p>
            </div>
            <p className="text-[#3d3d3d] text-sm leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>

      {/* Seller costs */}
      <h2 className="text-2xl font-bold text-[#123A5E] mb-2">Seller Closing Costs</h2>
      <p className="text-[#3d3d3d] mb-5 text-sm">
        Most seller costs come directly out of the sale proceeds, so there&apos;s rarely a need to bring cash to closing.
      </p>
      <div className="space-y-3 mb-12">
        {sellerCosts.map((c) => (
          <div key={c.item} className="flex flex-col sm:flex-row gap-2 sm:gap-4 bg-[#f3f4f6] border border-[#123A5E]/30 rounded-xl p-4">
            <div className="sm:w-48 flex-shrink-0">
              <p className="font-bold text-[#123A5E] text-sm">{c.item}</p>
              <p className="text-[#123A5E] text-xs font-semibold">{c.amount}</p>
            </div>
            <p className="text-[#3d3d3d] text-sm leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#f3f4f6] border border-[#123A5E] rounded-xl p-5 mb-8">
        <p className="font-bold text-[#123A5E] mb-2">💡 A Note on NC Closings</p>
        <p className="text-[#3d3d3d] text-sm leading-relaxed">
          North Carolina is an attorney-closing state, meaning a licensed real estate attorney must conduct the
          closing and prepare all closing documents. This is actually a consumer protection — your attorney reviews
          the title, ensures all liens are cleared, and certifies the transfer is valid.
        </p>
      </div>

      <div className="bg-[#123A5E] text-white rounded-2xl p-8 text-center">
        <h3 className="text-xl font-bold mb-3">Want a Custom Closing Cost Estimate?</h3>
        <p className="text-gray-200 mb-6">
          We&apos;ll prepare a detailed estimate based on your specific situation — buyer or seller, price range, and timeline.
        </p>
        <Link
          href="/about/contact-us"
          className="inline-block bg-white hover:bg-gray-100 text-[#123A5E] font-bold px-8 py-3 rounded-full transition-colors text-sm tracking-wider"
        >
          GET AN ESTIMATE
        </Link>
      </div>
    </PageLayout>
  );
}
