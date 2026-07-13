import PageLayout from "@/components/PageLayout";

export const metadata = {
  title: "Donation Locations | Milestone Moves Realty Group",
  description: "Local donation centers in the Triangle, NC to help you give back while you declutter.",
};

export default function DonationLocations() {
  const locations = [
    {
      name: "Habitat for Humanity ReStore",
      areas: "Multiple Triangle locations",
      accepts: "Furniture, appliances, building materials, home décor",
      notes: "Pickup available for large items",
    },
    {
      name: "Salvation Army",
      areas: "Raleigh, Durham, Cary",
      accepts: "Clothing, furniture, housewares, electronics",
      notes: "Free pickup scheduling available",
    },
    {
      name: "Goodwill Industries",
      areas: "Triangle-wide drop-off locations",
      accepts: "Clothing, shoes, housewares, books, electronics",
      notes: "Drive-through donation drop-off at most locations",
    },
    {
      name: "TROSA (Triangle Residential Options for Substance Abusers)",
      areas: "Durham area",
      accepts: "Furniture, appliances, household goods",
      notes: "Moving & hauling services available (fee-based)",
    },
    {
      name: "InterFaith Food Shuttle",
      areas: "Raleigh / Triangle",
      accepts: "Non-perishable food items",
      notes: "Great for pantry cleanout before a move",
    },
    {
      name: "Second Chance",
      areas: "Durham",
      accepts: "Architectural materials, furniture, antiques",
      notes: "Great for unique older items",
    },
  ];

  return (
    <PageLayout
      title="Donation Locations"
      subtitle="Give your belongings a second life — and lighten your load before the move."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "55+ Options", href: "/55-plus-options/simplified-living-communities" }]}
    >
      <p className="text-[#3d3d3d] leading-relaxed mb-8">
        One of the most meaningful parts of downsizing is knowing your belongings will help others. The Triangle area
        has a wealth of donation centers that accept gently used furniture, household goods, clothing, and more. Many
        even offer free pickup for large items.
      </p>

      <div className="space-y-4 mb-10">
        {locations.map((loc) => (
          <div key={loc.name} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <h3 className="font-bold text-[#123A5E] text-lg mb-2">{loc.name}</h3>
            <div className="grid sm:grid-cols-3 gap-3 text-sm text-[#3d3d3d]">
              <div>
                <span className="font-semibold text-[#123A5E] block mb-1">Service Area</span>
                {loc.areas}
              </div>
              <div>
                <span className="font-semibold text-[#123A5E] block mb-1">Accepts</span>
                {loc.accepts}
              </div>
              <div>
                <span className="font-semibold text-[#123A5E] block mb-1">Notes</span>
                {loc.notes}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#123A5E] text-white rounded-xl p-6 text-center">
        <p className="mb-2 font-bold text-lg">Have questions about where to donate specific items?</p>
        <p className="text-gray-200 text-sm">
          Our team has helped hundreds of Triangle families find the right home for their belongings.
          We&apos;re happy to point you in the right direction.
        </p>
      </div>
    </PageLayout>
  );
}
