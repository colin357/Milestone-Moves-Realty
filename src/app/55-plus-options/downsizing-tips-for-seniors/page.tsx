import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Downsizing Tips for Seniors | Milestone Moves Realty Group",
  description:
    "Practical, compassionate tips for downsizing your home — when to start, how to sort, mistakes to avoid, and where to turn for help in the Triangle, NC.",
};

const tips = [
  {
    icon: "⏳",
    number: "01",
    title: "Start Early — Before You Have To",
    body: "The best time to downsize is before life forces your hand. Starting early gives you control over the pace, the destination, and every decision along the way.",
  },
  {
    icon: "🗂️",
    number: "02",
    title: "Sort by Category, Not by Room",
    body: "Go through clothing, books, kitchenware, and memorabilia as categories rather than tackling room by room. It prevents duplicate effort and helps you see the full picture.",
  },
  {
    icon: "👨‍👩‍👧",
    number: "03",
    title: "Involve Family — Thoughtfully",
    body: "Heirlooms mean different things to different people. Have honest conversations about what each family member truly wants before you assume — or give anything away.",
  },
  {
    icon: "📸",
    number: "04",
    title: "Photograph What You Can't Keep",
    body: "You don't have to keep every item to preserve the memory. A well-organized photo album of beloved belongings lets you let go with peace instead of guilt.",
  },
  {
    icon: "📐",
    number: "05",
    title: "Measure Your New Space First",
    body: "Before moving a single piece of furniture, measure the rooms in your new home. It saves costly moves and heartbreaking decisions on moving day.",
  },
  {
    icon: "🎁",
    number: "06",
    title: "Donate, Don't Just Discard",
    body: "Knowing your belongings will help someone else makes releasing them much easier. We keep a current list of local donation centers for exactly this reason.",
  },
];

const signs = [
  "Rooms you rarely enter or use anymore",
  "Stairs, maintenance, or a yard that's become a burden",
  "Paying to heat, cool, and insure space you don't need",
  "Wanting to be closer to family, healthcare, or community",
  "A home that no longer fits how you want to live",
];

const mistakes = [
  {
    title: "Trying to do it all at once",
    body: "A single marathon weekend leads to burnout and rushed decisions. Small, steady sessions almost always produce better outcomes.",
  },
  {
    title: "Starting with sentimental items",
    body: "Photos and keepsakes are the hardest calls. Begin with easy, low-emotion categories to build momentum first.",
  },
  {
    title: "Assuming family wants it all",
    body: "Tastes and space have changed. Ask before boxing things up 'for the kids' — it saves everyone a difficult conversation later.",
  },
  {
    title: "Waiting for a health event",
    body: "Downsizing under pressure removes your choices. Planning ahead keeps you in the driver's seat of your next chapter.",
  },
];

const helpLinks = [
  {
    title: "Decluttering Made Easy",
    desc: "A simple, room-by-room system for clearing your space without the stress.",
    href: "/55-plus-options/decluttering-made-easy",
  },
  {
    title: "Donation Locations",
    desc: "Where to give your belongings a second life across the Triangle.",
    href: "/55-plus-options/donation-locations",
  },
  {
    title: "Referral Partners",
    desc: "Trusted move managers, estate-sale companies, and organizers we can connect you with.",
    href: "/about/referral-partners",
  },
];

export default function DownsizingTips() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#123A5E] py-24 px-4 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/empowered-aging.jpg" alt="" fill className="object-cover" sizes="100vw" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#123A5E] via-[#123A5E]/85 to-[#123A5E]/60" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <nav className="text-sm mb-4 opacity-70">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/55-plus-options/simplified-living-communities" className="hover:underline">55+ Options</Link>
            <span className="mx-2">/</span>
            <span>Downsizing Tips for Seniors</span>
          </nav>
          <p className="text-[#2BB8D3] font-bold tracking-widest text-sm mb-4 uppercase">Downsizing With Confidence</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight max-w-3xl">Downsizing Tips for Seniors</h1>
          <p className="text-gray-200 text-lg max-w-2xl leading-relaxed mb-8">
            Downsizing is one of the most emotionally complex parts of a move — but with the right mindset and a
            practical plan, it can feel genuinely liberating. Here&apos;s how we guide 55+ clients through it.
          </p>
          <Link
            href="/about/contact-us"
            className="inline-block bg-[#0A7387] hover:bg-[#086475] text-white font-bold px-8 py-4 rounded-full transition-colors text-sm tracking-wider"
          >
            TALK TO US ABOUT DOWNSIZING
          </Link>
        </div>
      </section>

      {/* Reassurance strip */}
      <section className="bg-[#0A7387] py-8 px-4 text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            { stat: "At Your Pace", label: "No rushing, ever" },
            { stat: "Room by Room", label: "A clear, manageable plan" },
            { stat: "Fully Supported", label: "Trusted help every step" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-2xl font-bold">{item.stat}</p>
              <p className="text-sm font-semibold opacity-90 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Top tips */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#0A7387] font-bold tracking-widest text-sm mb-3 uppercase">Where to Begin</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#123A5E]">Our Top Downsizing Tips</h2>
            <p className="text-[#3d3d3d] mt-4 max-w-2xl mx-auto">
              Six principles, refined over years of helping Triangle families move forward with less stuff and more peace of mind.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tips.map((tip) => (
              <div key={tip.number} className="bg-gray-50 rounded-2xl p-7 shadow-sm flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl" aria-hidden="true">{tip.icon}</span>
                  <span className="text-[#0A7387]/40 font-black text-3xl leading-none">{tip.number}</span>
                </div>
                <h3 className="font-bold text-[#123A5E] text-lg mb-2">{tip.title}</h3>
                <p className="text-[#3d3d3d] text-sm leading-relaxed">{tip.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to start */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#0A7387] font-bold tracking-widest text-sm mb-3 uppercase">Is It Time?</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#123A5E] mb-6 leading-tight">
              Signs It May Be Time to Downsize
            </h2>
            <p className="text-[#3d3d3d] leading-relaxed">
              There&apos;s no single right moment — but a few signs tend to show up together. If several of these feel
              familiar, it may be worth starting the conversation early, while every option is still on the table.
            </p>
          </div>
          <ul className="space-y-3">
            {signs.map((sign) => (
              <li key={sign} className="flex gap-3 items-start bg-white rounded-xl p-4 shadow-sm">
                <span className="w-6 h-6 bg-[#0A7387] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-[#3d3d3d]">{sign}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mistakes to avoid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#0A7387] font-bold tracking-widest text-sm mb-3 uppercase">Learn From Others</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#123A5E]">Common Mistakes to Avoid</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {mistakes.map((m) => (
              <div key={m.title} className="bg-[#f0fafd] border-l-4 border-[#0A7387] rounded-r-2xl p-6">
                <h3 className="font-bold text-[#123A5E] text-lg mb-2">{m.title}</h3>
                <p className="text-[#3d3d3d] text-sm leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* You don't have to do it alone */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#0A7387] font-bold tracking-widest text-sm mb-3 uppercase">Keep Going</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#123A5E]">You Don&apos;t Have to Do It Alone</h2>
            <p className="text-[#3d3d3d] mt-4 max-w-2xl mx-auto">
              Downsizing touches on decluttering, donating, and moving all at once. Here&apos;s where to turn next.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-md border border-transparent hover:border-[#0A7387] transition-all flex flex-col"
              >
                <h3 className="font-bold text-[#123A5E] text-lg mb-2 group-hover:text-[#0A7387] transition-colors">{link.title}</h3>
                <p className="text-[#3d3d3d] text-sm leading-relaxed flex-1">{link.desc}</p>
                <span className="inline-block mt-4 text-[#0A7387] text-sm font-bold">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#123A5E] py-16 px-4 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Need a Plan Tailored to Your Situation?</h2>
          <p className="text-lg text-gray-200 mb-8">
            We offer personalized downsizing consultations — no pressure, no rush, just a clear path forward at a pace that feels right for you.
          </p>
          <Link
            href="/about/contact-us"
            className="inline-block bg-[#0A7387] hover:bg-[#086475] text-white font-bold px-10 py-4 rounded-full transition-colors text-sm tracking-wider"
          >
            SCHEDULE A FREE CONSULTATION
          </Link>
        </div>
      </section>
    </div>
  );
}
