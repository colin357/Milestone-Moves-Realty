import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Senior Living Transition Services | Milestone Moves Realty Group",
  description:
    "Compassionate guidance through senior living decisions in the Triangle, NC — understanding independent living, assisted living, memory care, and CCRCs, and coordinating the whole move.",
};

const communities = [
  { title: "Independent Living", desc: "Maintenance-free living with amenities and social connection, for those who want simplicity without giving up independence." },
  { title: "Assisted Living", desc: "Support with daily activities like meals, medication, and personal care, while keeping as much independence as possible." },
  { title: "Memory Care", desc: "Specialized, secure environments designed for those living with Alzheimer's or other forms of dementia." },
  { title: "Continuing Care (CCRCs)", desc: "One community, multiple levels of care — so future changes don't require another move." },
];

const emotions = ["Relief", "Fear", "Uncertainty", "Guilt", "Overwhelm", "Excitement about a simpler lifestyle"];

const planning = [
  "Discussing timing and options",
  "Coordinating downsizing",
  "Preparing the home for sale",
  "Determining what furnishings will fit",
  "Move coordination",
  "Connecting with trusted resources",
];

export default function SeniorLivingTransitions() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#123A5E] py-24 px-4 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/communities.jpg" alt="" fill className="object-cover" sizes="100vw" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#123A5E] via-[#123A5E]/85 to-[#123A5E]/60" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <nav className="text-sm mb-4 opacity-70">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <span>Services</span>
            <span className="mx-2">/</span>
            <span>Senior Living Transitions</span>
          </nav>
          <p className="text-[#2BB8D3] font-bold tracking-widest text-sm mb-4 uppercase">Senior Living Transitions</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight max-w-3xl">Guidance Through Major Housing Decisions</h1>
          <p className="text-gray-200 text-lg max-w-2xl leading-relaxed mb-8">
            Moving into a senior living community can feel overwhelming and emotional. We help families understand the
            options and navigate every moving piece with clarity and support.
          </p>
          <Link href="/about/contact-us" className="inline-block bg-[#0A7387] hover:bg-[#086475] text-white font-bold px-8 py-4 rounded-full transition-colors text-sm tracking-wider">
            SCHEDULE A PLANNING CONSULTATION
          </Link>
        </div>
      </section>

      {/* The questions */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#0A7387] font-bold tracking-widest text-sm mb-3 uppercase">You&apos;re Not Alone in This</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#123A5E] mb-6">The Questions Families Wrestle With</h2>
          <p className="text-[#3d3d3d] leading-relaxed text-lg mb-8">
            &ldquo;Is it time?&rdquo; &nbsp;&ldquo;Which option is right?&rdquo; &nbsp;&ldquo;How do we begin?&rdquo;
            &nbsp;&ldquo;What should we bring?&rdquo; &nbsp;&ldquo;How do we prepare emotionally?&rdquo;
          </p>
          <p className="text-[#3d3d3d] leading-relaxed">
            These decisions come wrapped in mixed emotions — often all at once:
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {emotions.map((e) => (
              <span key={e} className="bg-[#f0fafd] text-[#0A7387] font-semibold text-sm px-4 py-2 rounded-full">{e}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Communities we help you understand */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#0A7387] font-bold tracking-widest text-sm mb-3 uppercase">Know Your Options</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#123A5E]">Communities We Help You Understand</h2>
            <p className="text-[#3d3d3d] mt-4 max-w-2xl mx-auto">
              Every option serves a different need. We help you compare them clearly — based on the individual, not a sales pitch.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {communities.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl p-7 shadow-sm border-l-4 border-[#0A7387]">
                <h3 className="font-bold text-[#123A5E] text-xl mb-2">{c.title}</h3>
                <p className="text-[#3d3d3d] text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transition planning support */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#0A7387] font-bold tracking-widest text-sm mb-3 uppercase">Every Moving Piece</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#123A5E] mb-6 leading-tight">We Coordinate the Whole Transition</h2>
            <p className="text-[#3d3d3d] leading-relaxed">
              A senior living move involves far more than choosing a community. We help you manage the many pieces so the
              process feels supported instead of scattered — at a pace that feels respectful.
            </p>
          </div>
          <ul className="space-y-3">
            {planning.map((p) => (
              <li key={p} className="flex gap-3 items-start bg-gray-50 rounded-xl p-4">
                <span className="w-6 h-6 bg-[#0A7387] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-[#3d3d3d]">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related services */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#123A5E] text-center mb-8">Related Services</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: "Aging in Place", desc: "Not sure a move is needed yet? We'll help you weigh staying home safely.", href: "/services/aging-in-place" },
              { title: "Caregiver Support", desc: "Support for the adult children and families coordinating the move.", href: "/services/caregiver-support" },
              { title: "55+ Communities", desc: "Explore active adult and simplified living communities across the Triangle.", href: "/55-plus-options/simplified-living-communities" },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-md border border-transparent hover:border-[#0A7387] transition-all">
                <h3 className="font-bold text-[#123A5E] text-lg mb-2 group-hover:text-[#0A7387] transition-colors">{s.title}</h3>
                <p className="text-[#3d3d3d] text-sm leading-relaxed">{s.desc}</p>
                <span className="inline-block mt-4 text-[#0A7387] text-sm font-bold">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#123A5E] py-16 px-4 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Navigate This Together</h2>
          <p className="text-lg text-gray-200 mb-8">
            These decisions are emotional, not just practical. We&apos;ll help you move forward at a pace that feels manageable and respectful.
          </p>
          <Link href="/about/contact-us" className="inline-block bg-[#0A7387] hover:bg-[#086475] text-white font-bold px-10 py-4 rounded-full transition-colors text-sm tracking-wider">
            SCHEDULE A CONVERSATION
          </Link>
        </div>
      </section>
    </div>
  );
}
