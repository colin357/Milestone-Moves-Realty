import PageLayout from "@/components/PageLayout";
import Link from "next/link";

export const metadata = {
  title: "Empowered Aging | Milestone Moves Realty Group",
  description: "Resources and guidance for aging in place and making confident housing decisions in your golden years.",
};

export default function EmpoweredAging() {
  return (
    <PageLayout
      title="Empowered Aging"
      subtitle="Living your best life — wherever that may be."
      breadcrumbs={[{ label: "Home", href: "/" }]}
    >
      <p className="text-[#3d3d3d] leading-relaxed mb-6">
        Aging empowered means making intentional choices about where you live, how you live, and who supports you along
        the way. At Milestone Moves, we believe that knowledge is the foundation of confidence — and confidence makes all
        the difference.
      </p>

      <h2 className="text-2xl font-bold text-[#1C2B5E] mb-4">What Does Empowered Aging Look Like?</h2>
      <ul className="list-disc list-inside text-[#3d3d3d] mb-6 space-y-3 ml-2">
        <li>Choosing a home and community that supports your health and lifestyle goals</li>
        <li>Understanding your full range of housing options before making decisions</li>
        <li>Having conversations with family members early and openly</li>
        <li>Connecting with trusted professionals in real estate, finance, and senior care</li>
        <li>Feeling in control of your timeline — not rushed by circumstances</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1C2B5E] mb-4">Our Commitment to You</h2>
      <p className="text-[#3d3d3d] leading-relaxed mb-6">
        We provide educational workshops, one-on-one consultations, and curated resources that help you understand every
        option — from aging in place with modifications, to right-sizing into a maintenance-free community, to exploring
        the vibrant 55+ communities across the Triangle.
      </p>

      <h2 className="text-2xl font-bold text-[#1C2B5E] mb-4">Topics We Cover</h2>
      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        {[
          "Understanding 55+ Communities",
          "When Is the Right Time to Move?",
          "Aging in Place Modifications",
          "Financial Planning for Seniors",
          "Navigating Independent vs. Assisted Living",
          "Downsizing with Dignity",
          "Family Conversations About Housing",
          "Local Senior Resources in the Triangle",
        ].map((topic) => (
          <div key={topic} className="bg-[#f0fafd] border-l-4 border-[#2BB8D3] p-4 rounded-r-lg">
            <p className="text-[#1C2B5E] font-semibold text-sm">{topic}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#1C2B5E] rounded-xl p-8 text-center text-white">
        <h3 className="text-xl font-bold mb-3">Join Our Next Workshop</h3>
        <p className="text-gray-200 mb-6">Contact us to learn about upcoming educational events in your area.</p>
        <Link
          href="/about/contact-us"
          className="inline-block bg-[#2BB8D3] hover:bg-[#1fa3bd] text-white font-bold px-8 py-3 rounded-full transition-colors text-sm tracking-wider"
        >
          LEARN MORE
        </Link>
      </div>
    </PageLayout>
  );
}
