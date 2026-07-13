import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Who We Help | Milestone Moves Realty Group",
  description:
    "Milestone Moves Realty Group supports older adults, adult children, caregivers, downsizers, and families across the Triangle, NC navigating life's biggest transitions.",
};

const audiences = [
  {
    icon: "🌅",
    title: "Older Adults Planning the Next Chapter",
    desc: "Whether you're ready to move now or simply planning ahead, we help you explore options and make informed decisions that fit your lifestyle, finances, health, and long-term goals.",
    href: "/services/aging-in-place",
    cta: "Explore Aging in Place",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Families Helping Aging Parents",
    desc: "Adult children are often thrown into coordinating caregiving, safety, housing, finances, and emotional conversations all at once. We help you slow it down and create a plan.",
    href: "/services/caregiver-support",
    cta: "See Caregiver Support",
  },
  {
    icon: "🤝",
    title: "Caregivers",
    desc: "For those balancing careers, families, and caregiving, we provide resources, guidance, and a calm voice to reduce the feeling of doing it all alone.",
    href: "/services/caregiver-support",
    cta: "See Caregiver Support",
  },
  {
    icon: "📦",
    title: "Longtime Homeowners Preparing to Downsize",
    desc: "Leaving a home filled with decades of memories is never just a financial decision. We provide practical, compassionate support at a pace that feels manageable.",
    href: "/55-plus-options/downsizing-tips-for-seniors",
    cta: "Downsizing Tips",
  },
  {
    icon: "🏘️",
    title: "Seniors Considering Senior Living",
    desc: "Independent living, assisted living, memory care, or a continuing care community — we help you understand the options and coordinate the many moving pieces.",
    href: "/services/senior-living-transitions",
    cta: "Senior Living Transitions",
  },
  {
    icon: "💜",
    title: "Widows, Widowers & Those Facing Change",
    desc: "After the loss of a spouse or a sudden health change, housing decisions can feel especially heavy. We bring patience, dignity, and steady guidance to the process.",
    href: "/about/contact-us",
    cta: "Let's Talk",
  },
];

export default function WhoWeHelp() {
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
            <span>Who We Help</span>
          </nav>
          <p className="text-[#2BB8D3] font-bold tracking-widest text-sm mb-4 uppercase">Specialized Support</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight max-w-3xl">Support for Life&apos;s Major Transitions</h1>
          <p className="text-gray-200 text-lg max-w-2xl leading-relaxed mb-8">
            Every client&apos;s story is different, but many come to us feeling overwhelmed or unsure where to begin. Our
            role is to provide guidance, education, and a step-by-step plan that makes the process feel manageable again.
          </p>
          <Link href="/about/contact-us" className="inline-block bg-[#0A7387] hover:bg-[#086475] text-white font-bold px-8 py-4 rounded-full transition-colors text-sm tracking-wider">
            FIND YOUR PATH FORWARD
          </Link>
        </div>
      </section>

      {/* Audience cards */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#0A7387] font-bold tracking-widest text-sm mb-3 uppercase">Who We Serve</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#123A5E]">You&apos;ll Recognize Yourself Here</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {audiences.map((a) => (
              <div key={a.title} className="bg-gray-50 rounded-2xl p-7 shadow-sm flex flex-col">
                <div className="text-4xl mb-4" aria-hidden="true">{a.icon}</div>
                <h3 className="font-bold text-[#123A5E] text-lg mb-2">{a.title}</h3>
                <p className="text-[#3d3d3d] text-sm leading-relaxed flex-1">{a.desc}</p>
                <Link href={a.href} className="inline-block mt-4 text-[#0A7387] text-sm font-bold hover:underline">
                  {a.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professionals band */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#0A7387] font-bold tracking-widest text-sm mb-3 uppercase">We Also Collaborate With</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#123A5E] mb-6">Professionals Serving Older Adults</h2>
          <p className="text-[#3d3d3d] leading-relaxed mb-6">
            We work closely with estate attorneys, financial advisors, senior living communities, care managers, home
            care agencies, organizers, and contractors — because the best outcomes happen when trusted professionals work together.
          </p>
          <Link href="/about/referral-partners" className="inline-block text-[#0A7387] font-bold hover:underline">
            Meet Our Referral Partners →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#123A5E] py-16 px-4 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Wherever You Are in the Process</h2>
          <p className="text-lg text-gray-200 mb-8">
            Planning ahead, responding to a crisis, downsizing, caregiving, or simply gathering information — our goal is
            always the same: clarity, trusted guidance, and compassionate support at every stage.
          </p>
          <Link href="/about/contact-us" className="inline-block bg-[#0A7387] hover:bg-[#086475] text-white font-bold px-10 py-4 rounded-full transition-colors text-sm tracking-wider">
            SCHEDULE A CONVERSATION
          </Link>
        </div>
      </section>
    </div>
  );
}
