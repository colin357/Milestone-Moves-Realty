import PageLayout from "@/components/PageLayout";
import Link from "next/link";

export const metadata = {
  title: "Moving Playbook | Milestone Moves Realty Group",
  description: "Your step-by-step guide to a smooth and stress-free move in the Triangle, NC.",
};

export default function MovingPlaybook() {
  return (
    <PageLayout
      title="The Moving Playbook"
      subtitle="Your step-by-step guide to a smooth, confident transition."
      breadcrumbs={[{ label: "Home", href: "/" }]}
    >
      <p className="text-[#3d3d3d] leading-relaxed mb-6">
        Moving — especially later in life — involves much more than packing boxes. It&apos;s about making thoughtful
        decisions at the right time, with the right support. Our Moving Playbook is designed to walk you through every
        stage of the process so nothing comes as a surprise.
      </p>

      <h2 className="text-2xl font-bold text-[#1C2B5E] mb-4">Step 1: Start with a Vision</h2>
      <p className="text-[#3d3d3d] leading-relaxed mb-6">
        Before looking at listings or contacting movers, take time to define what your next chapter looks like. Ask
        yourself: What lifestyle do I want? What amenities matter most? How close do I need to be to family, medical
        care, or favorite activities?
      </p>

      <h2 className="text-2xl font-bold text-[#1C2B5E] mb-4">Step 2: Understand Your Finances</h2>
      <p className="text-[#3d3d3d] leading-relaxed mb-6">
        Work with a financial advisor to understand your budget, equity position, and any tax implications. Knowing
        your numbers early removes stress and keeps decisions clear.
      </p>

      <h2 className="text-2xl font-bold text-[#1C2B5E] mb-4">Step 3: Prepare Your Home</h2>
      <p className="text-[#3d3d3d] leading-relaxed mb-4">
        Getting your current home ready for sale is a process. Our team will help you prioritize what updates matter,
        connect you with trusted vendors, and stage your home to attract the right buyer.
      </p>
      <ul className="list-disc list-inside text-[#3d3d3d] mb-6 space-y-2 ml-2">
        <li>Declutter and donate (we&apos;ll point you to local donation centers)</li>
        <li>Make targeted repairs and improvements</li>
        <li>Stage for your ideal buyer</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1C2B5E] mb-4">Step 4: Explore Your Options</h2>
      <p className="text-[#3d3d3d] leading-relaxed mb-6">
        From 55+ communities to independent living to right-sizing in your favorite neighborhood, we&apos;ll help you
        explore all possibilities so you can choose with confidence.
      </p>

      <h2 className="text-2xl font-bold text-[#1C2B5E] mb-4">Step 5: Make Your Move</h2>
      <p className="text-[#3d3d3d] leading-relaxed mb-8">
        When it&apos;s time to buy, sell, or both — we&apos;re right beside you. From offer to close, we handle the
        details so you can focus on what&apos;s ahead.
      </p>

      <div className="bg-[#f0fafd] border border-[#2BB8D3] rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold text-[#1C2B5E] mb-3">Ready to Build Your Plan?</h3>
        <p className="text-[#3d3d3d] mb-6">Schedule a free consultation with our team today.</p>
        <Link
          href="/about/contact-us"
          className="inline-block bg-[#2BB8D3] hover:bg-[#1fa3bd] text-white font-bold px-8 py-3 rounded-full transition-colors text-sm tracking-wider"
        >
          CONTACT US
        </Link>
      </div>
    </PageLayout>
  );
}
