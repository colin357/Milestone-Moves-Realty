import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Caregiver Support Services | Milestone Moves Realty Group",
  description:
    "Support for adult children and caregivers helping aging parents in the Triangle, NC — planning, resource coordination, housing guidance, and a calm voice when everything feels like too much.",
};

const juggling = [
  "Medical concerns",
  "Housing decisions",
  "Family communication",
  "Financial questions",
  "Emotional stress",
  "Daily logistics",
];

const help = [
  { icon: "🗺️", title: "Planning Support", desc: "A realistic, step-by-step plan so the whole situation stops feeling like chaos." },
  { icon: "🔗", title: "Resource Coordination", desc: "Trusted professionals for every piece — so you're not vetting strangers alone." },
  { icon: "🏠", title: "Housing Guidance", desc: "Clear-eyed help weighing staying home, downsizing, or senior living." },
  { icon: "🧭", title: "Transition Strategies", desc: "A calm path through decisions that feel overwhelming in the moment." },
  { icon: "📚", title: "Education & Referrals", desc: "Understanding your options — and who to call — before decisions turn urgent." },
];

const challenges = [
  "Safety concerns",
  "Downsizing decisions",
  "Aging in place questions",
  "Senior living transitions",
  "Long-distance caregiving",
];

const guilt = [
  "Guilt for living far away",
  "Guilt for not doing enough",
  "Guilt for feeling overwhelmed",
  "Guilt for needing help",
  "Guilt for bringing up hard conversations",
];

export default function CaregiverSupport() {
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
            <span>Services</span>
            <span className="mx-2">/</span>
            <span>Caregiver Support</span>
          </nav>
          <p className="text-white font-bold tracking-widest text-sm mb-4 uppercase">Caregiver Support</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight max-w-3xl">Support for the People Doing the Heavy Lifting</h1>
          <p className="text-gray-200 text-lg max-w-2xl leading-relaxed mb-8">
            If you&apos;re helping aging parents navigate housing, caregiving, and major life transitions, you&apos;re
            carrying more than most people realize. You don&apos;t have to carry it alone.
          </p>
          <Link href="/about/contact-us" className="inline-block bg-white hover:bg-gray-100 text-[#123A5E] font-bold px-8 py-4 rounded-full transition-colors text-sm tracking-wider">
            SCHEDULE A CAREGIVER CONSULTATION
          </Link>
        </div>
      </section>

      {/* What you're juggling */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#123A5E] font-bold tracking-widest text-sm mb-3 uppercase">We See You</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#123A5E] mb-6">All of This, All at Once</h2>
          <p className="text-[#3d3d3d] leading-relaxed text-lg mb-8">
            Caregiving often begins gradually and becomes overwhelming before families even realize how much they&apos;re
            carrying — usually on top of careers, marriages, and children of their own.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {juggling.map((j) => (
              <span key={j} className="bg-[#f3f4f6] text-[#123A5E] font-semibold text-sm px-4 py-2 rounded-full">{j}</span>
            ))}
          </div>
        </div>
      </section>

      {/* How we help */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#123A5E] font-bold tracking-widest text-sm mb-3 uppercase">You Don&apos;t Have to Do It Alone</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#123A5E]">How We Help Caregivers</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {help.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-7 shadow-sm">
                <div className="text-3xl mb-4" aria-hidden="true">{item.icon}</div>
                <h3 className="font-bold text-[#123A5E] text-lg mb-2">{item.title}</h3>
                <p className="text-[#3d3d3d] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The emotional balancing act */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#123A5E] font-bold tracking-widest text-sm mb-3 uppercase">The Hardest Part</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#123A5E] mb-6 leading-tight">The Emotional Balancing Act</h2>
            <p className="text-[#3d3d3d] leading-relaxed mb-4">
              Most adult children are trying to hold two goals at once: <strong>protecting their parents</strong> and{" "}
              <strong>preserving their parents&apos; independence</strong>. That isn&apos;t easy — and it often comes with a heavy dose of guilt.
            </p>
            <p className="text-[#3d3d3d] leading-relaxed">
              We understand all of it. Our role is to lift some of the weight — with a roadmap, a calm voice, and a place to begin.
            </p>
          </div>
          <ul className="space-y-3">
            {guilt.map((g) => (
              <li key={g} className="flex gap-3 items-start bg-[#f3f4f6] border-l-4 border-[#123A5E] rounded-r-xl p-4">
                <span className="text-[#3d3d3d]">{g}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Common challenges */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#123A5E] font-bold tracking-widest text-sm mb-3 uppercase">What We Help Navigate</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#123A5E] mb-8">Common Caregiver Challenges</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {challenges.map((c) => (
              <Link
                key={c}
                href="/about/contact-us"
                className="bg-white text-[#123A5E] font-semibold text-sm px-5 py-3 rounded-full shadow-sm hover:shadow-md hover:text-[#123A5E] transition-all"
              >
                {c}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#123A5E] py-16 px-4 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Sometimes You Just Need a Starting Point</h2>
          <p className="text-lg text-gray-200 mb-8">
            A roadmap. A calm voice. Someone who understands both the emotional and practical side of what you&apos;re
            carrying. Let&apos;s talk.
          </p>
          <Link href="/about/contact-us" className="inline-block bg-white hover:bg-gray-100 text-[#123A5E] font-bold px-10 py-4 rounded-full transition-colors text-sm tracking-wider">
            SCHEDULE A CAREGIVER CONSULTATION
          </Link>
        </div>
      </section>
    </div>
  );
}
