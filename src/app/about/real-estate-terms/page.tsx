import PageLayout from "@/components/PageLayout";

export const metadata = {
  title: "Real Estate Terms | Milestone Moves Realty Group",
  description: "A plain-language guide to common real estate terms for buyers and sellers.",
};

const terms = [
  { term: "Active Adult Community", def: "A residential community designed for adults 55+ that offers amenities and activities tailored to active lifestyles. May be age-restricted or age-targeted." },
  { term: "Age-Restricted Community", def: "A community legally designated for residents 55 and older under the Housing for Older Persons Act (HOPA). At least 80% of units must be occupied by at least one person 55+." },
  { term: "Appraisal", def: "A professional estimate of a property's market value conducted by a licensed appraiser, typically required by lenders before approving a mortgage." },
  { term: "As-Is Sale", def: "A property sold in its current condition without the seller making repairs or improvements. Buyers typically still have the right to inspect." },
  { term: "Bridge Loan", def: "Short-term financing that allows you to buy a new home before selling your current one, using your existing home's equity as collateral." },
  { term: "Buyer's Agent", def: "A real estate agent who represents the buyer's interests in a transaction." },
  { term: "Closing Costs", def: "Fees and expenses paid at the closing of a real estate transaction, including lender fees, title insurance, taxes, and prepaid items. Typically 2–5% of the loan amount." },
  { term: "Comparative Market Analysis (CMA)", def: "A report prepared by a real estate agent comparing recent sales of similar properties to help determine a home's market value." },
  { term: "Contingency", def: "A condition that must be met for a real estate contract to become binding. Common contingencies include home inspection, financing, and appraisal." },
  { term: "Deed", def: "The legal document that transfers ownership of property from one party to another." },
  { term: "Earnest Money", def: "A deposit made by the buyer to show good faith in a real estate transaction. Typically applied toward closing costs or returned if contingencies aren't met." },
  { term: "Equity", def: "The difference between a home's market value and the remaining mortgage balance. This is your financial stake in the property." },
  { term: "Escrow", def: "An account held by a neutral third party that holds funds or documents during a transaction until all conditions are met." },
  { term: "HOA (Homeowners Association)", def: "An organization that manages a community's shared spaces and enforces community rules. Members pay dues that fund maintenance and amenities." },
  { term: "Listing Agreement", def: "A contract between a seller and a real estate agent authorizing the agent to market and sell the property." },
  { term: "MLS (Multiple Listing Service)", def: "A shared database used by real estate agents to share property listings with each other and buyers." },
  { term: "Offer", def: "A formal proposal to purchase a property at a specified price and terms, which becomes a contract when accepted by the seller." },
  { term: "Pre-Approval", def: "A lender's written commitment to provide a mortgage up to a specified amount, based on a review of the borrower's finances." },
  { term: "Title", def: "Legal documentation of a property's ownership history. A clear title means no disputes or claims exist against the property." },
  { term: "Title Insurance", def: "Insurance that protects against financial loss from defects in a property's title. Required by most lenders and strongly recommended for buyers." },
];

export default function RealEstateTerms() {
  return (
    <PageLayout
      title="Real Estate Terms"
      subtitle="Plain-language definitions so you always know exactly what's happening."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about/meet-the-team" }]}
    >
      <p className="text-[#3d3d3d] leading-relaxed mb-8">
        Real estate has its own language — and we believe you should always understand exactly what&apos;s being said.
        Here&apos;s a plain-language guide to the most common terms you&apos;ll encounter.
      </p>

      <div className="space-y-4">
        {terms.map((item) => (
          <div key={item.term} className="border-b border-gray-100 pb-4">
            <h3 className="font-bold text-[#123A5E] mb-1">{item.term}</h3>
            <p className="text-[#3d3d3d] text-sm leading-relaxed">{item.def}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-[#f3f4f6] border border-[#123A5E] rounded-xl p-6 text-center">
        <p className="text-[#3d3d3d] mb-4">Have a term you don&apos;t see here? Just ask us.</p>
        <a href="/about/contact-us" className="inline-block bg-white hover:bg-gray-100 text-[#123A5E] font-bold px-8 py-3 rounded-full transition-colors text-sm tracking-wider">
          ASK A QUESTION
        </a>
      </div>
    </PageLayout>
  );
}
