import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Decluttering Made Easy | Milestone Moves Realty Group",
  description:
    "Simple, stress-free decluttering strategies for your next move — the three-box method, a room-by-room plan, a sustainable pace, and what to do with what you let go.",
};

const boxes = [
  { label: "KEEP", icon: "💙", color: "#123A5E", desc: "Items you love, use, and will bring into your new home." },
  { label: "DONATE / GIVE", icon: "🎁", color: "#123A5E", desc: "Items still useful to others — family, friends, or local charities." },
  { label: "LET GO", icon: "♻️", color: "#6b7280", desc: "Items that are worn, expired, or no longer serve a purpose." },
];

const rooms = [
  {
    icon: "🍳",
    room: "Kitchen",
    items: ["Duplicate cookware", "Rarely-used appliances", "Expired pantry items", "Mismatched storage containers"],
  },
  {
    icon: "🛏️",
    room: "Bedroom & Closets",
    items: ["Clothing not worn in 2+ years", "Extra bedding sets", "Shoes in poor condition", "Jewelry you no longer wear"],
  },
  {
    icon: "🛋️",
    room: "Living & Dining",
    items: ["Excess furniture (measure first!)", "Books and magazines", "Decorative items", "Extra electronics or cords"],
  },
  {
    icon: "🧰",
    room: "Garage & Storage",
    items: ["Seasonal items", "Old tools", "Unused sports equipment", "Holiday decorations (keep favorites)"],
  },
];

const schedule = [
  { when: "Weeks 1–2", focus: "Easy wins", detail: "Start with low-emotion categories — pantry, cleaning supplies, duplicate kitchen items — to build momentum." },
  { when: "Weeks 3–4", focus: "Everyday spaces", detail: "Work through closets, the bathroom, and shared living areas. Try things on; be honest about what you actually use." },
  { when: "Weeks 5–6", focus: "Storage zones", detail: "Tackle the garage, attic, and basement — the places clutter quietly accumulates for years." },
  { when: "Final week", focus: "Sentimental items", detail: "Save keepsakes for last, when your decision-making muscle is strong. Photograph what you can't keep." },
];

const letGoOptions = [
  { icon: "🤝", title: "Donate", desc: "Give usable items a second life. We keep a current list of Triangle donation centers and pickup services.", href: "/55-plus-options/donation-locations", cta: "See Donation Locations" },
  { icon: "💵", title: "Sell", desc: "Estate sales and consignment can turn furniture and collectibles into cash. We can connect you with trusted pros.", href: "/about/referral-partners", cta: "Meet Our Partners" },
  { icon: "👨‍👩‍👧‍👦", title: "Pass Down", desc: "Offer heirlooms to family now, while you can share the story behind them — often the most meaningful option.", href: null, cta: null },
  { icon: "♻️", title: "Recycle", desc: "Responsibly retire worn, broken, or expired items so nothing useful ends up needlessly in a landfill.", href: null, cta: null },
];

export default function DeclutteringMadeEasy() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#123A5E] py-24 px-4 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/moving-playbook.jpg" alt="" fill className="object-cover" sizes="100vw" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#123A5E] via-[#123A5E]/85 to-[#123A5E]/60" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <nav className="text-sm mb-4 opacity-70">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/55-plus-options/simplified-living-communities" className="hover:underline">55+ Options</Link>
            <span className="mx-2">/</span>
            <span>Decluttering Made Easy</span>
          </nav>
          <p className="text-white font-bold tracking-widest text-sm mb-4 uppercase">One Step at a Time</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight max-w-3xl">Decluttering Made Easy</h1>
          <p className="text-gray-200 text-lg max-w-2xl leading-relaxed mb-8">
            Decades of living fill a home with memories — and a lot of stuff. The good news: decluttering doesn&apos;t
            have to be stressful, and it doesn&apos;t have to happen all at once.
          </p>
          <Link
            href="/about/contact-us"
            className="inline-block bg-white hover:bg-gray-100 text-[#123A5E] font-bold px-8 py-4 rounded-full transition-colors text-sm tracking-wider"
          >
            GET GUIDANCE ON YOUR MOVE
          </Link>
        </div>
      </section>

      {/* Three-box method */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#123A5E] font-bold tracking-widest text-sm mb-3 uppercase">Start Simple</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#123A5E]">The Three-Box Method</h2>
            <p className="text-[#3d3d3d] mt-4 max-w-2xl mx-auto">
              For every room, grab three boxes and give each item a home. No overthinking — just three clear choices.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {boxes.map((box) => (
              <div key={box.label} className="rounded-2xl p-8 text-white text-center shadow-md" style={{ backgroundColor: box.color }}>
                <div className="text-4xl mb-3" aria-hidden="true">{box.icon}</div>
                <p className="font-black text-xl mb-2 tracking-wide">{box.label}</p>
                <p className="text-sm opacity-90 leading-relaxed">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room by room */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#123A5E] font-bold tracking-widest text-sm mb-3 uppercase">A Clear Plan</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#123A5E]">Room-by-Room Checklist</h2>
            <p className="text-[#3d3d3d] mt-4 max-w-2xl mx-auto">
              Not sure where to begin in each space? These are the usual suspects worth a second look.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {rooms.map((section) => (
              <div key={section.room} className="bg-white rounded-2xl p-7 shadow-sm border-t-4 border-[#123A5E]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl" aria-hidden="true">{section.icon}</span>
                  <h3 className="font-bold text-[#123A5E] text-xl">{section.room}</h3>
                </div>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3 items-start text-[#3d3d3d] text-sm">
                      <span className="text-[#123A5E] mt-0.5 flex-shrink-0" aria-hidden="true">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable pace */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#123A5E] font-bold tracking-widest text-sm mb-3 uppercase">Pace Yourself</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#123A5E]">A Six-Week Decluttering Rhythm</h2>
            <p className="text-[#3d3d3d] mt-4 max-w-2xl mx-auto">
              Plan for 1–2 focused hours a day over several weeks rather than one overwhelming weekend. Slow and steady
              leads to better decisions and far less regret.
            </p>
          </div>
          <div className="space-y-4">
            {schedule.map((step, i) => (
              <div key={step.when} className="flex gap-5 items-start bg-gray-50 rounded-2xl p-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#123A5E] rounded-full flex items-center justify-center text-white font-bold">
                  {i + 1}
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                    <h3 className="font-bold text-[#123A5E] text-lg">{step.focus}</h3>
                    <span className="text-[#123A5E] text-sm font-semibold">{step.when}</span>
                  </div>
                  <p className="text-[#3d3d3d] text-sm leading-relaxed">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to do with what you let go */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#123A5E] font-bold tracking-widest text-sm mb-3 uppercase">Let It Go With Purpose</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#123A5E]">What to Do With What You Release</h2>
            <p className="text-[#3d3d3d] mt-4 max-w-2xl mx-auto">
              Letting go feels a lot easier when your belongings go somewhere they&apos;ll be valued.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {letGoOptions.map((opt) => (
              <div key={opt.title} className="bg-white rounded-2xl p-7 shadow-sm flex flex-col text-center">
                <div className="text-4xl mb-4" aria-hidden="true">{opt.icon}</div>
                <h3 className="font-bold text-[#123A5E] text-lg mb-2">{opt.title}</h3>
                <p className="text-[#3d3d3d] text-sm leading-relaxed flex-1">{opt.desc}</p>
                {opt.href && opt.cta && (
                  <Link href={opt.href} className="inline-block mt-4 text-[#123A5E] text-sm font-bold hover:underline">
                    {opt.cta} →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tip + CTA */}
      <section className="bg-[#123A5E] py-16 px-4 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white font-bold tracking-widest text-sm mb-3 uppercase">Ready When You Are</p>
          <h2 className="text-3xl font-bold mb-4">Decluttering Is the First Step of a Bigger Journey</h2>
          <p className="text-lg text-gray-200 mb-8">
            When you&apos;re ready to think about what comes next, we&apos;re here to help you plan the whole move —
            patiently, and at your pace. Explore our{" "}
            <Link href="/55-plus-options/downsizing-tips-for-seniors" className="text-white font-semibold hover:underline">
              downsizing tips
            </Link>{" "}
            or reach out anytime.
          </p>
          <Link
            href="/about/contact-us"
            className="inline-block bg-white hover:bg-gray-100 text-[#123A5E] font-bold px-10 py-4 rounded-full transition-colors text-sm tracking-wider"
          >
            TALK TO MILESTONE MOVES
          </Link>
        </div>
      </section>
    </div>
  );
}
