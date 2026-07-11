import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "The Moving Playbook | Milestone Moves Realty Group",
  description: "A comprehensive step-by-step guide to planning and executing your move — designed for adults 55+ in the Triangle, NC.",
};

const chapters = [
  {
    id: "01",
    color: "bg-[#0A7387]",
    title: "Vision & Motivation",
    subtitle: "Start with the why, not the what",
    content: "Before you look at a single listing or call a mover, get clear on why you're making this move and what your next chapter should look like. This isn't just practical — it's deeply personal, and it shapes every decision that follows.",
    checklist: [
      "Write down your top 3 reasons for moving",
      "Define your ideal lifestyle in your next home",
      "Discuss plans with family members who need to know",
      "Identify your non-negotiables vs. nice-to-haves",
      "Set a rough timeline goal (1 month? 6 months? 1 year?)",
    ],
  },
  {
    id: "02",
    color: "bg-[#123A5E]",
    title: "Financial Clarity",
    subtitle: "Know your numbers before you start",
    content: "Understanding your financial position removes uncertainty and gives you confidence throughout the entire process. This chapter is about getting a complete, honest picture — what your current home is worth, what you can afford next, and how the two transactions fit together.",
    checklist: [
      "Request a Comparative Market Analysis on your current home",
      "Meet with a financial advisor about proceeds and taxes",
      "Get pre-approved for a mortgage (if purchasing)",
      "Understand your equity position",
      "Explore bridge loan options if buying before selling",
      "Calculate your estimated net proceeds from the sale",
    ],
  },
  {
    id: "03",
    color: "bg-[#0A7387]",
    title: "Declutter & Prepare",
    subtitle: "Lighten your load before the move",
    content: "Decades of living fill a home with things — some treasured, some forgotten. This is your chance to carefully choose what comes with you into your next chapter. Done right, this process feels liberating rather than overwhelming.",
    checklist: [
      "Go room by room with Keep / Donate / Let Go categories",
      "Photograph sentimental items you can't keep",
      "Identify family heirlooms to pass on now",
      "Schedule donation pickups (see our Donation Locations page)",
      "Arrange an estate sale if needed",
      "Clear attic, garage, and basement storage",
    ],
  },
  {
    id: "04",
    color: "bg-[#123A5E]",
    title: "Home Preparation",
    subtitle: "Present your home at its absolute best",
    content: "A well-prepared home sells faster and for more money. We'll help you identify the targeted updates and repairs that deliver the best return — and connect you with trusted vendors who work efficiently and fairly.",
    checklist: [
      "Conduct a pre-listing walkthrough with your agent",
      "Prioritize repairs: safety issues first, then cosmetic",
      "Schedule fresh neutral paint (highest ROI update)",
      "Deep clean every room — including windows and baseboards",
      "Boost curb appeal: mulch, trim, power wash, paint door",
      "Stage key rooms with guidance from your agent",
      "Schedule professional photography",
    ],
  },
  {
    id: "05",
    color: "bg-[#0A7387]",
    title: "Your Home Search",
    subtitle: "Find the place that fits your next chapter",
    content: "Whether you're searching for a 55+ community, a maintenance-free condo, or a smaller single-family home close to family — your search should be informed, intentional, and at your pace.",
    checklist: [
      "Explore different community types with your agent",
      "Visit shortlisted neighborhoods at different times of day",
      "Ask about HOA rules, fees, and community culture",
      "Check proximity to healthcare, shopping, and family",
      "Review age-restriction rules for 55+ communities",
      "Attend open houses or community events when available",
      "Don't rush — the right home is worth waiting for",
    ],
  },
  {
    id: "06",
    color: "bg-[#123A5E]",
    title: "Offers & Contracts",
    subtitle: "Negotiate with confidence",
    content: "This is where having an experienced agent truly matters. We'll craft a competitive offer, guide you through counteroffers, and ensure every contingency is in place to protect you.",
    checklist: [
      "Review Comparative Market Analysis before offering",
      "Include appropriate contingencies (inspection, financing)",
      "Submit earnest money promptly once under contract",
      "Schedule home inspection within the contingency window",
      "Review inspection report with your agent",
      "Negotiate repairs, credits, or price adjustments",
      "Track all deadlines in your contract calendar",
    ],
  },
  {
    id: "07",
    color: "bg-[#0A7387]",
    title: "The Move Itself",
    subtitle: "Logistics, moving day, and settling in",
    content: "The moving day itself is just one moment in a longer transition. Planning it well means the day goes smoothly — and you arrive in your new home ready to begin the next chapter, not exhausted by it.",
    checklist: [
      "Get 3 quotes from licensed movers",
      "Ask about senior move management services",
      "Create a room-by-room inventory of what moves",
      "Pack an 'essentials box' for day-one access",
      "Arrange utilities transfer and update your address",
      "Notify Medicare, Social Security, financial accounts",
      "Plan your first night in the new home",
    ],
  },
];

export default function MovingPlaybook() {
  return (
    <div>
      {/* Hero — notebook/workbook aesthetic */}
      <section className="relative overflow-hidden">
        <div className="grid md:grid-cols-2 min-h-[65vh]">
          <div className="relative">
            <Image src="/images/moving-playbook.jpg" alt="The Moving Playbook" fill className="object-cover" sizes="50vw" priority />
            <div className="absolute inset-0 bg-[#123A5E]/60" />
            <div className="relative z-10 flex items-end p-10 h-full">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-white">
                <p className="text-[#2BB8D3] font-bold text-sm tracking-wider mb-1">7 CHAPTERS</p>
                <p className="text-2xl font-bold">From Decision to New Beginning</p>
              </div>
            </div>
          </div>
          <div className="bg-[#123A5E] flex items-center px-10 py-20 text-white">
            <div>
              <p className="text-[#2BB8D3] font-bold tracking-widest text-sm mb-4 uppercase">Your Complete Guide</p>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                The Milestone Moves<br />
                <span className="text-[#2BB8D3]">Moving Playbook</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Moving later in life involves more than packing boxes. It&apos;s a meaningful life transition that
                deserves a thoughtful, step-by-step plan. This playbook gives you exactly that — seven chapters,
                actionable checklists, and the clarity to move forward with confidence.
              </p>
              <Link href="/about/contact-us" className="inline-block bg-[#0A7387] hover:bg-[#086475] text-white font-bold px-8 py-4 rounded-full transition-colors text-sm tracking-wider">
                TALK TO US ABOUT YOUR MOVE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter nav pills */}
      <section className="bg-white border-b border-gray-100 py-4 px-4 sticky top-20 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto flex gap-2 overflow-x-auto pb-1">
          {chapters.map((ch) => (
            <a
              key={ch.id}
              href={`#chapter-${ch.id}`}
              className="flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold tracking-wider border-2 border-[#0A7387] text-[#123A5E] hover:bg-[#0A7387] hover:text-white transition-colors"
            >
              {ch.id}. {ch.title}
            </a>
          ))}
        </div>
      </section>

      {/* Chapters */}
      <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">
        {chapters.map((ch, i) => (
          <section key={ch.id} id={`chapter-${ch.id}`} className="scroll-mt-36">
            <div className={`grid md:grid-cols-[1fr_2fr] gap-8 items-start`}>
              {/* Chapter label */}
              <div className={`${ch.color} text-white rounded-2xl p-8 text-center`}>
                <p className="text-6xl font-black opacity-30 mb-2">{ch.id}</p>
                <h2 className="text-2xl font-bold mb-1">{ch.title}</h2>
                <p className="text-sm opacity-80 italic">{ch.subtitle}</p>
              </div>
              {/* Content + checklist */}
              <div>
                <p className="text-[#3d3d3d] leading-relaxed mb-6 text-lg">{ch.content}</p>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <p className="font-bold text-[#123A5E] text-sm tracking-wider mb-4 uppercase">Chapter {ch.id} Checklist</p>
                  <ul className="space-y-3">
                    {ch.checklist.map((item) => (
                      <li key={item} className="flex gap-3 items-start">
                        <span className="w-5 h-5 border-2 border-[#0A7387] rounded flex-shrink-0 mt-0.5" />
                        <span className="text-[#3d3d3d] text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {i < chapters.length - 1 && <div className="border-b border-dashed border-gray-200 mt-16" />}
          </section>
        ))}
      </div>

      {/* Closing CTA */}
      <section className="bg-[#0A7387] py-20 px-4 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Playbook?</h2>
          <p className="text-lg opacity-90 mb-8">
            We walk every client through this process — personally, patiently, and at your pace.
            Let&apos;s begin with a free consultation.
          </p>
          <Link href="/about/contact-us" className="inline-block bg-[#123A5E] hover:bg-[#0D2942] text-white font-bold px-10 py-4 rounded-full transition-colors text-sm tracking-wider">
            SCHEDULE YOUR FREE CONSULTATION
          </Link>
        </div>
      </section>
    </div>
  );
}
