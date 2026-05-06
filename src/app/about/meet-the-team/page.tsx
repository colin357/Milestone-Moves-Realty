import PageLayout from "@/components/PageLayout";

export const metadata = {
  title: "Meet the Team | Milestone Moves Realty Group",
  description: "Meet Freda Hamlett and the Milestone Moves Realty Group team.",
};

export default function MeetTheTeam() {
  return (
    <PageLayout
      title="Meet the Team"
      subtitle="The people dedicated to making your next chapter a great one."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about/meet-the-team" }]}
    >
      <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="bg-[#1C2B5E] rounded-2xl aspect-square flex items-center justify-center text-white text-6xl font-bold">
            FH
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-[#1C2B5E] mb-1">Freda Hamlett</h2>
          <p className="text-[#2BB8D3] font-semibold mb-4">Founder &amp; Lead Agent | Certified Senior Housing Professional (CSHP)</p>
          <p className="text-[#3d3d3d] leading-relaxed mb-4">
            Freda Hamlett founded Milestone Moves Realty Group out of a deep passion for serving the 55+ community. After
            witnessing firsthand how challenging and emotional housing transitions can be for older adults and their families,
            she dedicated her real estate career to making those transitions smoother, more informed, and more empowering.
          </p>
          <p className="text-[#3d3d3d] leading-relaxed mb-4">
            As a Certified Senior Housing Professional (CSHP), Freda brings specialized knowledge and compassionate care
            to every client relationship. She takes the time to truly listen — to understand not just what her clients
            need in a home, but what they need for their lives.
          </p>
          <p className="text-[#3d3d3d] leading-relaxed mb-4">
            Based in Apex, NC, Freda serves clients across the entire Triangle region, including Raleigh, Cary, Durham,
            Chapel Hill, Wake Forest, and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <a
              href="/about/contact-us"
              className="inline-block bg-[#2BB8D3] hover:bg-[#1fa3bd] text-white font-bold px-6 py-3 rounded-full transition-colors text-sm tracking-wider text-center"
            >
              CONTACT FREDA
            </a>
            <a
              href="/about/what-is-a-cshp"
              className="inline-block border-2 border-[#2BB8D3] text-[#2BB8D3] hover:bg-[#2BB8D3] hover:text-white font-bold px-6 py-3 rounded-full transition-colors text-sm tracking-wider text-center"
            >
              WHAT IS A CSHP?
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#f0fafd] border border-[#2BB8D3] rounded-xl p-6">
        <p className="text-[#3d3d3d] text-center italic">
          &quot;Your next chapter deserves the right partner. I am committed to being that partner for you.&quot;
        </p>
        <p className="text-center text-[#1C2B5E] font-bold mt-2">— Freda Hamlett</p>
      </div>
    </PageLayout>
  );
}
