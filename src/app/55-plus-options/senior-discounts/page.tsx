import PageLayout from "@/components/PageLayout";

export const metadata = {
  title: "Senior Discounts | Milestone Moves Realty Group",
  description: "A guide to senior discounts and savings available to 55+ adults in North Carolina.",
};

export default function SeniorDiscounts() {
  const discountCategories = [
    {
      category: "Restaurants",
      examples: ["IHOP (55+)", "Denny's (55+)", "Subway", "Applebee's", "Outback Steakhouse", "Many local restaurants — always ask!"],
    },
    {
      category: "Retail & Shopping",
      examples: ["Kohl's (60+, 15% off on select days)", "Michaels (55+, 10% off Tuesdays)", "TJ Maxx / Marshalls (ask in-store)", "Goodwill (select locations, Tuesdays)"],
    },
    {
      category: "Travel & Lodging",
      examples: ["AARP hotel discounts", "Marriott, Hilton, Hyatt senior rates", "Amtrak (10% off)", "Airlines — check senior fares"],
    },
    {
      category: "Entertainment",
      examples: ["Movie theaters (AMC, Regal)", "National Park Senior Pass (lifetime access, $80)", "Museums — many offer free or reduced senior admission", "NC State Parks (free for 62+)"],
    },
    {
      category: "Healthcare & Prescriptions",
      examples: ["Medicare Part D savings programs", "GoodRx for prescription savings", "Many dental offices offer senior rates", "Vision insurance discounts through AARP"],
    },
    {
      category: "NC-Specific Programs",
      examples: ["NC Homestead Exclusion (property tax relief for 65+)", "NC Property Tax Circuit Breaker", "Duke Energy and Dominion energy assistance programs", "Wake County Senior Services"],
    },
  ];

  return (
    <PageLayout
      title="Senior Discounts"
      subtitle="Smart savings available to 55+ adults — because you&apos;ve earned them."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "55+ Options", href: "/55-plus-options/simplified-living-communities" }]}
    >
      <p className="text-[#3d3d3d] leading-relaxed mb-4">
        One of the underrated perks of reaching 55+ is the wide array of discounts available to you. From restaurants
        to property taxes, knowing where to look can save you hundreds — even thousands — of dollars each year.
      </p>
      <p className="text-[#3d3d3d] leading-relaxed mb-8">
        <strong>Pro tip:</strong> Always ask. Many businesses offer senior discounts that aren&apos;t widely advertised.
        Simply saying &quot;Do you have a senior discount?&quot; is all it takes.
      </p>

      <div className="grid sm:grid-cols-2 gap-6 mb-8">
        {discountCategories.map((cat) => (
          <div key={cat.category} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <h3 className="font-bold text-[#1C2B5E] text-lg mb-3 border-b border-[#2BB8D3] pb-2">{cat.category}</h3>
            <ul className="space-y-1">
              {cat.examples.map((ex) => (
                <li key={ex} className="text-sm text-[#3d3d3d] flex items-start gap-2">
                  <span className="text-[#2BB8D3] mt-1">•</span>
                  {ex}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-[#f0fafd] border border-[#2BB8D3] rounded-xl p-6 text-center">
        <p className="text-[#3d3d3d] text-sm">
          Discount availability and eligibility may vary. We recommend verifying current offers directly with each
          business or program. This list is provided as a helpful starting point, not a guarantee.
        </p>
      </div>
    </PageLayout>
  );
}
