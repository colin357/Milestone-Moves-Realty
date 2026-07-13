import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Aging in Place Services | Milestone Moves Realty Group",
  description:
    "Stay home safely and confidently. We help older adults in the Triangle, NC evaluate safety, accessibility, and support systems so aging in place stays a real option.",
};

const evaluate = [
  { icon: "🛟", title: "Safety Concerns", desc: "A clear-eyed look at what's working and what could become a risk as needs change." },
  { icon: "♿", title: "Accessibility Needs", desc: "Doorways, bathrooms, and everyday tasks — where small changes make a big difference." },
  { icon: "🏠", title: "Home Functionality", desc: "Whether the layout still supports comfortable, independent daily living." },
  { icon: "🤝", title: "Support Systems", desc: "The people and services that help someone stay home confidently over time." },
  { icon: "📈", title: "Long-Term Sustainability", desc: "An honest view of whether the home fits not just today, but the years ahead." },
];

const focusAreas = [
  "Fall prevention",
  "Home accessibility",
  "First-floor living options",
  "Lighting and safety improvements",
  "Maintenance concerns",
  "Community support resources",
];

const resources = [
  "Certified Aging in Place Specialists (CAPS)",
  "Occupational therapists",
  "Accessibility contractors",
  "Home care providers",
  "Senior support services",
];

export default function AgingInPlace() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#123A5E] py-24 px-4 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/hero-bg.jpg" alt="" fill className="object-cover" sizes="100vw" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#123A5E] via-[#123A5E]/85 to-[#123A5E]/60" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <nav className="text-sm mb-4 opacity-70">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <span>Services</span>
            <span className="mx-2">/</span>
            <span>Aging in Place</span>
          </nav>
          <p className="text-white font-bold tracking-widest text-sm mb-4 uppercase">Aging in Place</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight max-w-3xl">Stay Home Safely and Confidently</h1>
          <p className="text-gray-200 text-lg max-w-2xl leading-relaxed mb-8">
            For many older adults, home means independence, comfort, and community. Remaining there may absolutely be the
            right choice — the key is planning ahead.
          </p>
          <Link href="/about/contact-us" className="inline-block bg-white hover:bg-gray-100 text-[#123A5E] font-bold px-8 py-4 rounded-full transition-colors text-sm tracking-wider">
            EXPLORE AGING IN PLACE OPTIONS
          </Link>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#123A5E] font-bold tracking-widest text-sm mb-3 uppercase">A Thoughtful Approach</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#123A5E] mb-6">Aging in Place Isn&apos;t About Standing Still</h2>
          <p className="text-[#3d3d3d] leading-relaxed text-lg">
            Successful aging in place takes thoughtful preparation. Our goal is never to pressure anyone into moving —
            it&apos;s to help you create a safe, practical, and sustainable living environment that supports the life you
            want, for as long as possible. Sometimes the best decision is staying exactly where you are, with the right
            support in place.
          </p>
        </div>
      </section>

      {/* What we evaluate */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#123A5E] font-bold tracking-widest text-sm mb-3 uppercase">What We Help Evaluate</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#123A5E]">A Home That Fits the Years Ahead</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {evaluate.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-7 shadow-sm">
                <div className="text-3xl mb-4" aria-hidden="true">{item.icon}</div>
                <h3 className="font-bold text-[#123A5E] text-lg mb-2">{item.title}</h3>
                <p className="text-[#3d3d3d] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus areas + resources */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-[#123A5E] font-bold tracking-widest text-sm mb-3 uppercase">Areas of Focus</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#123A5E] mb-6">Where We Concentrate</h2>
            <ul className="space-y-3">
              {focusAreas.map((f) => (
                <li key={f} className="flex gap-3 items-start bg-gray-50 rounded-xl p-4">
                  <span className="w-6 h-6 bg-[#123A5E] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-[#3d3d3d]">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[#123A5E] font-bold tracking-widest text-sm mb-3 uppercase">Trusted Resources</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#123A5E] mb-6">The Right People, When You Need Them</h2>
            <p className="text-[#3d3d3d] leading-relaxed mb-6">
              When appropriate, we connect you with professionals who specialize in helping people stay home safely:
            </p>
            <ul className="space-y-2">
              {resources.map((r) => (
                <li key={r} className="flex gap-3 items-start text-[#3d3d3d]">
                  <span className="text-[#123A5E] mt-0.5 flex-shrink-0" aria-hidden="true">›</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#123A5E] text-center mb-8">Related Services</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: "Senior Living Transitions", desc: "If staying home is no longer the best fit, we'll help you explore what's next.", href: "/services/senior-living-transitions" },
              { title: "Caregiver Support", desc: "Guidance and coordination for the family members doing the heavy lifting.", href: "/services/caregiver-support" },
              { title: "Downsizing Tips", desc: "Practical, compassionate help lightening the load — whether you move or not.", href: "/55-plus-options/downsizing-tips-for-seniors" },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-md border border-transparent hover:border-[#123A5E] transition-all">
                <h3 className="font-bold text-[#123A5E] text-lg mb-2 group-hover:text-[#123A5E] transition-colors">{s.title}</h3>
                <p className="text-[#3d3d3d] text-sm leading-relaxed">{s.desc}</p>
                <span className="inline-block mt-4 text-[#123A5E] text-sm font-bold">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#123A5E] py-16 px-4 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Planning Ahead Protects Independence</h2>
          <p className="text-lg text-gray-200 mb-8">
            Let&apos;s talk about what it would take to stay home safely and comfortably — no pressure, just a clear look at your options.
          </p>
          <Link href="/about/contact-us" className="inline-block bg-white hover:bg-gray-100 text-[#123A5E] font-bold px-10 py-4 rounded-full transition-colors text-sm tracking-wider">
            SCHEDULE A CONVERSATION
          </Link>
        </div>
      </section>
    </div>
  );
}
