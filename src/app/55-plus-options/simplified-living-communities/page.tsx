import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Simplified Living Communities | Milestone Moves Realty Group",
  description: "Explore 55+ active adult and simplified living communities across the Triangle, NC.",
};

const communityTypes = [
  {
    type: "Active Adult (55+)",
    icon: "🏌️",
    desc: "Age-restricted communities (80% of residents must be 55+) with resort-style amenities, low maintenance, and vibrant social programs.",
    amenities: ["Clubhouse & fitness center", "Pool & walking trails", "Pickleball & tennis courts", "On-site activities & clubs", "Lawn maintenance included"],
    bestFor: "Active adults seeking community life and freedom from yard work",
    priceRange: "$$$",
  },
  {
    type: "Age-Targeted Neighborhoods",
    icon: "🏘️",
    desc: "Not legally restricted to 55+, but designed and marketed to that demographic. Typically quiet neighborhoods with single-story floor plans.",
    amenities: ["Quieter neighborhood environment", "Low-maintenance lot sizes", "Single-story options", "Proximity to senior services", "Often HOA-managed"],
    bestFor: "Buyers who want a senior-friendly environment without legal restrictions",
    priceRange: "$$",
  },
  {
    type: "Condo & Townhome Communities",
    icon: "🏢",
    desc: "Lock-and-leave lifestyle with all exterior maintenance handled. Ideal for those who travel frequently or want zero yard responsibility.",
    amenities: ["Zero exterior maintenance", "Shared amenities", "Security features", "Often elevator-accessible", "Strong community association"],
    bestFor: "Those who want to travel freely or have a truly maintenance-free lifestyle",
    priceRange: "$$–$$$",
  },
  {
    type: "Continuing Care / Life Plan",
    icon: "🏥",
    desc: "Communities offering independent living now with a clear path to assisted living or memory care as needs change — all on one campus.",
    amenities: ["Independent living units", "On-site dining & healthcare", "Transition to higher care guaranteed", "Rich programming", "Peace of mind for families"],
    bestFor: "Those who want to make one move that covers all future needs",
    priceRange: "$$$$",
  },
];

const triangleCommunities = [
  { area: "Apex / Cary", note: "Several established 55+ neighborhoods with clubhouses and strong HOAs. High demand — move fast." },
  { area: "Raleigh", note: "Diverse options from urban condos to suburban communities. Wide price range." },
  { area: "Wake Forest", note: "New construction 55+ communities with modern amenities. Growing rapidly." },
  { area: "Durham", note: "Mix of established and newer communities. Close to Duke Medical." },
  { area: "Chapel Hill", note: "Premium market. University-adjacent communities with cultural richness." },
  { area: "Garner & Clayton", note: "More affordable options with improving amenities. Great for value-conscious buyers." },
];

const communityQuestions = [
  "What is the HOA fee and exactly what does it cover?",
  "What percentage of residents are full-time vs. part-time?",
  "What age restrictions apply, and what happens if a spouse is under 55?",
  "What are the community's rules around rentals, pets, and modifications?",
  "What is the financial health of the HOA? Have fees increased recently?",
  "What activities and clubs are most active right now?",
  "What is the typical resale timeline for homes in this community?",
  "What healthcare facilities are nearby, and how accessible are they?",
];

export default function SimplifiedLivingCommunities() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden">
        <Image src="/images/communities.jpg" alt="Beautiful 55+ community" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C2B5E]/90 to-[#1C2B5E]/50" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
          <p className="text-[#2BB8D3] font-bold tracking-widest text-sm mb-4 uppercase">55+ Options</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 max-w-2xl leading-tight">
            Simplified Living.<br />Maximum Joy.
          </h1>
          <p className="text-gray-200 text-lg max-w-lg leading-relaxed mb-8">
            Today&apos;s 55+ communities are active, vibrant, and beautifully designed — built for people who want
            to live more and worry less.
          </p>
          <Link href="/about/contact-us" className="inline-block bg-[#2BB8D3] hover:bg-[#1fa3bd] text-white font-bold px-8 py-4 rounded-full transition-colors text-sm tracking-wider">
            FIND YOUR COMMUNITY
          </Link>
        </div>
      </section>

      {/* What's changed */}
      <section className="bg-white py-16 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#2BB8D3] font-bold tracking-widest text-sm mb-3 uppercase">Not Your Parents&apos; Retirement</p>
          <h2 className="text-3xl font-bold text-[#1C2B5E] mb-6">Today&apos;s Communities Are Different</h2>
          <p className="text-[#3d3d3d] leading-relaxed max-w-3xl mx-auto text-lg">
            Modern 55+ communities are nothing like the retirement communities of the past. They&apos;re resort-style
            neighborhoods where residents enjoy maintenance-free living, rich social lives, and amenities tailored to
            their passions — from pickleball courts to art studios to woodworking shops.
          </p>
        </div>
        <div className="max-w-5xl mx-auto mt-10 grid sm:grid-cols-4 gap-5">
          {[
            { old: "Passive retirement", new: "Active lifestyle" },
            { old: "Institutional feel", new: "Resort-style design" },
            { old: "Isolated", new: "Connected community" },
            { old: "One size fits all", new: "Wide variety of options" },
          ].map((item) => (
            <div key={item.new} className="text-center">
              <p className="text-gray-400 text-sm line-through mb-1">{item.old}</p>
              <div className="text-[#2BB8D3] text-xl my-1">↓</div>
              <p className="text-[#1C2B5E] font-bold">{item.new}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Community Types */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#2BB8D3] font-bold tracking-widest text-sm mb-3 uppercase">Know Your Options</p>
            <h2 className="text-3xl font-bold text-[#1C2B5E]">Types of 55+ Communities</h2>
            <p className="text-[#3d3d3d] mt-4 max-w-xl mx-auto">
              Not all 55+ communities are the same. Here&apos;s a clear breakdown to help you identify what fits your lifestyle and budget.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {communityTypes.map((ct) => (
              <div key={ct.type} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="bg-[#1C2B5E] text-white p-5 flex items-center gap-4">
                  <span className="text-3xl">{ct.icon}</span>
                  <div>
                    <h3 className="font-bold text-lg">{ct.type}</h3>
                    <p className="text-[#2BB8D3] text-xs font-bold">{ct.priceRange} price range</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[#3d3d3d] text-sm leading-relaxed mb-4">{ct.desc}</p>
                  <p className="font-bold text-[#1C2B5E] text-xs uppercase tracking-wider mb-2">Typical Amenities</p>
                  <ul className="space-y-1 mb-4">
                    {ct.amenities.map((a) => (
                      <li key={a} className="text-[#3d3d3d] text-sm flex gap-2">
                        <span className="text-[#2BB8D3]">›</span> {a}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-[#f0fafd] rounded-xl p-3">
                    <p className="text-xs text-[#1C2B5E]"><strong>Best for:</strong> {ct.bestFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Triangle communities */}
      <section className="py-20 px-4 bg-[#1C2B5E] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#2BB8D3] font-bold tracking-widest text-sm mb-3 uppercase">Where to Look</p>
            <h2 className="text-3xl font-bold">55+ Communities Across the Triangle</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {triangleCommunities.map((c) => (
              <div key={c.area} className="bg-white/10 border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-colors">
                <h3 className="font-bold text-[#2BB8D3] text-xl mb-2">{c.area}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{c.note}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-8">Contact us for specific community recommendations tailored to your budget and lifestyle.</p>
        </div>
      </section>

      {/* Questions to ask */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#2BB8D3] font-bold tracking-widest text-sm mb-3 uppercase">Before You Decide</p>
            <h2 className="text-3xl font-bold text-[#1C2B5E]">8 Questions to Ask Any Community</h2>
            <p className="text-[#3d3d3d] mt-4">We help you ask the right questions — and understand the answers — before you commit to anything.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {communityQuestions.map((q, i) => (
              <div key={q} className="flex gap-4 items-start bg-gray-50 rounded-xl p-4">
                <span className="w-8 h-8 bg-[#2BB8D3] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {i + 1}
                </span>
                <p className="text-[#3d3d3d] text-sm leading-relaxed">{q}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2BB8D3] py-16 px-4 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Let Us Find the Right Community for You</h2>
          <p className="text-lg opacity-90 mb-8">We know the Triangle&apos;s 55+ communities inside and out — and we&apos;ll match you with the one that truly fits.</p>
          <Link href="/about/contact-us" className="inline-block bg-[#1C2B5E] hover:bg-[#152047] text-white font-bold px-10 py-4 rounded-full transition-colors text-sm tracking-wider">
            SCHEDULE A COMMUNITY TOUR
          </Link>
        </div>
      </section>
    </div>
  );
}
