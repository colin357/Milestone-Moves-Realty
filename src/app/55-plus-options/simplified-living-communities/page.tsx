import PageLayout from "@/components/PageLayout";
import Link from "next/link";

export const metadata = {
  title: "Simplified Living Communities | Milestone Moves Realty Group",
  description: "Explore 55+ and simplified living communities across the Triangle, NC.",
};

export default function SimplifiedLivingCommunities() {
  return (
    <PageLayout
      title="Simplified Living Communities"
      subtitle="Discover the community that fits your lifestyle — maintenance-free, connected, and vibrant."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "55+ Options", href: "/55-plus-options/simplified-living-communities" }]}
    >
      <p className="text-[#3d3d3d] leading-relaxed mb-6">
        Today&apos;s 55+ communities are nothing like the retirement communities of the past. They are active, engaged,
        beautifully designed neighborhoods where residents enjoy freedom from maintenance, rich social lives, and
        amenities tailored to their interests.
      </p>

      <h2 className="text-2xl font-bold text-[#1C2B5E] mb-4">What to Expect in a 55+ Community</h2>
      <ul className="list-disc list-inside text-[#3d3d3d] mb-6 space-y-2 ml-2">
        <li>Lawn care, exterior maintenance, and snow removal handled for you</li>
        <li>Clubhouses, fitness centers, pools, and activity rooms</li>
        <li>Walking trails, pickleball courts, and social clubs</li>
        <li>Like-minded neighbors who share your stage of life</li>
        <li>Single-story or low-maintenance home designs</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1C2B5E] mb-4">Communities We Serve in the Triangle</h2>
      <p className="text-[#3d3d3d] leading-relaxed mb-4">
        The Triangle area of North Carolina is home to a growing number of excellent 55+ communities in areas including:
      </p>
      <div className="grid sm:grid-cols-2 gap-3 mb-8">
        {["Apex", "Cary", "Chapel Hill", "Durham", "Raleigh", "Wake Forest", "Garner", "Clayton"].map((city) => (
          <div key={city} className="bg-[#1C2B5E] text-white rounded-lg p-4 text-center font-bold">
            {city}
          </div>
        ))}
      </div>

      <div className="bg-[#f0fafd] border border-[#2BB8D3] rounded-xl p-8">
        <h3 className="text-xl font-bold text-[#1C2B5E] mb-3">Let Us Help You Find the Right Community</h3>
        <p className="text-[#3d3d3d] mb-6">
          We&apos;ll take the time to understand your lifestyle preferences and match you with communities that truly fit.
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
