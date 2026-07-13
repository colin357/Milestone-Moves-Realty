import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Empowered Aging | Milestone Moves Realty Group",
  description: "Education, resources, and guidance for living and aging confidently in the Triangle, NC.",
};

const pillars = [
  {
    icon: "🏡",
    title: "Right-Sizing Your Home",
    desc: "Moving to a home that truly fits your current life — whether that means fewer stairs, a smaller yard, or proximity to people and places you love.",
    link: "/55-plus-options/simplified-living-communities",
    linkLabel: "Explore Communities",
  },
  {
    icon: "🏋️",
    title: "Active Living",
    desc: "Staying physically engaged through walkable neighborhoods, fitness centers, pickleball courts, and community programs that keep you moving.",
    link: "/areas/apex",
    linkLabel: "Explore Areas",
  },
  {
    icon: "🤝",
    title: "Social Connection",
    desc: "Living in a community where neighbors share your stage of life dramatically reduces isolation — one of the greatest health risks of later life.",
    link: "/55-plus-options/simplified-living-communities",
    linkLabel: "Find Your Community",
  },
  {
    icon: "💰",
    title: "Financial Stability",
    desc: "Making a strategic housing move can free up equity, reduce monthly expenses, and create financial flexibility for the years ahead.",
    link: "/buy-sell-smile/property-value",
    linkLabel: "Understand Your Equity",
  },
  {
    icon: "🏥",
    title: "Healthcare Access",
    desc: "Proximity to quality healthcare — including Duke, UNC, and WakeMed in the Triangle — is a critical factor for confident aging in place or in community.",
    link: "/about/contact-us",
    linkLabel: "Ask Us About Access",
  },
  {
    icon: "📚",
    title: "Education & Planning",
    desc: "Informed decisions lead to confident transitions. Our education-first approach means you understand every option before you make any move.",
    link: "/moving-playbook",
    linkLabel: "Read the Playbook",
  },
];

const questions = [
  { q: "Is my current home still serving my needs?", context: "Consider: accessibility, maintenance demands, utility costs, proximity to family and healthcare, and how often you use all the space." },
  { q: "What does my ideal daily life look like in 5 years?", context: "Your housing should support that vision — not limit it. If your home makes that life harder, it's worth exploring options." },
  { q: "Have I talked to my family about my housing preferences?", context: "Having this conversation early — before a health event forces it — gives everyone more time and better options." },
  { q: "Do I understand my housing and financial options?", context: "Most people explore only a fraction of the possibilities available to them. Our consultations are designed to expand that picture." },
  { q: "Am I making a decision — or waiting until a decision is made for me?", context: "Proactive transitions almost always result in better outcomes than reactive ones. You have more options when you plan ahead." },
];

const resources = [
  { title: "Downsizing Tips for Seniors", desc: "Practical, compassionate guidance for rightsizing your belongings and your home.", href: "/55-plus-options/downsizing-tips-for-seniors" },
  { title: "Decluttering Made Easy", desc: "A room-by-room system for clearing your space with intention.", href: "/55-plus-options/decluttering-made-easy" },
  { title: "55+ Communities Guide", desc: "Everything you need to know about active adult and simplified living communities.", href: "/55-plus-options/simplified-living-communities" },
  { title: "What Is a CSHP?", desc: "Why working with a Certified Senior Housing Professional matters.", href: "/about/what-is-a-cshp" },
  { title: "Donation Locations", desc: "Where to give your belongings a second life across the Triangle.", href: "/55-plus-options/donation-locations" },
  { title: "Real Estate Terms", desc: "Plain-language definitions so you always understand the conversation.", href: "/about/real-estate-terms" },
];

export default function EmpoweredAging() {
  return (
    <div>
      {/* Magazine-style hero */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden">
        <Image src="/images/empowered-aging.jpg" alt="Active seniors living their best life" fill className="object-cover object-top" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#123A5E] via-[#123A5E]/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-16 w-full">
          <p className="text-white font-bold tracking-widest text-sm mb-4 uppercase">A Philosophy of Living</p>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-6 max-w-3xl">
            Empowered<br />Aging
          </h1>
          <p className="text-gray-200 text-xl max-w-2xl leading-relaxed">
            Living confidently and intentionally — wherever that takes you.
          </p>
        </div>
      </section>

      {/* Pull quote */}
      <section className="bg-[#123A5E] py-14 px-4 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-2xl sm:text-3xl font-bold leading-relaxed italic">
            &ldquo;The goal isn&apos;t just a longer life. It&apos;s a fuller one.&rdquo;
          </p>
          <p className="mt-4 font-semibold opacity-80">— The Milestone Moves Philosophy</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#123A5E] font-bold tracking-widest text-sm mb-3 uppercase">What We Mean By It</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#123A5E] mb-6 leading-tight">
              Aging Empowered Means Living<br />On Your Terms
            </h2>
            <p className="text-[#3d3d3d] leading-relaxed mb-5">
              Empowered aging isn&apos;t a passive experience. It&apos;s a choice to engage fully with life — to make
              intentional decisions about where you live, how you spend your time, and who supports you along the way.
            </p>
            <p className="text-[#3d3d3d] leading-relaxed mb-5">
              At Milestone Moves, we believe housing is the foundation of that life. The right home — in the right
              community, at the right time — makes everything else easier: your health, your relationships, your
              finances, and your sense of purpose.
            </p>
            <p className="text-[#3d3d3d] leading-relaxed">
              That&apos;s why we bring an education-first approach to every client we serve. Knowledge isn&apos;t just
              power — it&apos;s peace of mind.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { label: "Housing supports your lifestyle", not: "Your lifestyle works around your housing" },
              { label: "You make decisions proactively", not: "Decisions are made for you by circumstance" },
              { label: "You understand all your options", not: "You're aware of only a few" },
              { label: "Your timeline is your own", not: "You're rushed by urgency or pressure" },
            ].map((item) => (
              <div key={item.label} className="bg-gray-50 rounded-xl p-5">
                <div className="flex gap-3 items-center mb-2">
                  <span className="w-6 h-6 bg-[#123A5E] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <p className="font-bold text-[#123A5E] text-sm">{item.label}</p>
                </div>
                <p className="text-gray-500 text-xs ml-9">Not: {item.not}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Six pillars */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#123A5E] font-bold tracking-widest text-sm mb-3 uppercase">The Foundation</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#123A5E]">Six Pillars of Empowered Aging</h2>
            <p className="text-[#3d3d3d] mt-4 max-w-xl mx-auto">The dimensions of life that your housing directly shapes — and that we help you optimize.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="font-bold text-[#123A5E] text-xl mb-3">{p.title}</h3>
                <p className="text-[#3d3d3d] text-sm leading-relaxed flex-1 mb-5">{p.desc}</p>
                <Link href={p.link} className="text-[#123A5E] font-bold text-sm hover:underline">
                  {p.linkLabel} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reflection questions — dark band */}
      <section className="py-20 px-4 bg-[#123A5E] text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-white font-bold tracking-widest text-sm mb-3 uppercase">A Moment to Reflect</p>
            <h2 className="text-3xl font-bold">Questions Worth Asking Yourself</h2>
            <p className="text-gray-300 mt-4 max-w-xl mx-auto">These aren&apos;t easy questions — but they&apos;re the ones that lead to the best decisions.</p>
          </div>
          <div className="space-y-5">
            {questions.map((item, i) => (
              <div key={item.q} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <div className="flex gap-4 items-start">
                  <span className="text-white font-black text-2xl flex-shrink-0 leading-none">{i + 1}.</span>
                  <div>
                    <p className="font-bold text-white text-lg mb-2">{item.q}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.context}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/about/contact-us" className="inline-block bg-white hover:bg-gray-100 text-[#123A5E] font-bold px-10 py-4 rounded-full transition-colors text-sm tracking-wider">
              LET&apos;S TALK THROUGH THEM TOGETHER
            </Link>
          </div>
        </div>
      </section>

      {/* Resources grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#123A5E] font-bold tracking-widest text-sm mb-3 uppercase">Go Deeper</p>
            <h2 className="text-3xl font-bold text-[#123A5E]">Resources for Your Journey</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {resources.map((r) => (
              <Link key={r.title} href={r.href} className="group bg-gray-50 hover:bg-[#f3f4f6] border border-gray-200 hover:border-[#123A5E] rounded-2xl p-6 transition-all">
                <h3 className="font-bold text-[#123A5E] text-lg mb-2 group-hover:text-[#123A5E] transition-colors">{r.title}</h3>
                <p className="text-[#3d3d3d] text-sm leading-relaxed mb-4">{r.desc}</p>
                <span className="text-[#123A5E] text-sm font-bold">Read More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#123A5E] py-16 px-4 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Live on Your Terms?</h2>
          <p className="text-lg opacity-90 mb-8">Start with a free, no-pressure conversation about what empowered aging looks like for you.</p>
          <Link href="/about/contact-us" className="inline-block bg-white hover:bg-gray-100 text-[#123A5E] font-bold px-10 py-4 rounded-full transition-colors text-sm tracking-wider">
            SCHEDULE A FREE CONSULTATION
          </Link>
        </div>
      </section>
    </div>
  );
}
