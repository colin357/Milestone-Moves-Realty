import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Meet the Team | Milestone Moves Realty Group",
  description: "Meet the Milestone Moves Realty Group team — Freda Hamlett (CSHP), Robin Bodwin, and Heather Walz — your dedicated partners for 55+ real estate in the Triangle, NC.",
};

const credentials = [
  { label: "Designation", value: "Certified Senior Housing Professional (CSHP)" },
  { label: "Specialty", value: "55+ Housing Transitions & Active Adult Communities" },
  { label: "Service Area", value: "Triangle, NC — Apex, Cary, Raleigh, Durham & Beyond" },
  { label: "Office", value: "1483 Beaver Creek Commons Dr, Apex, NC 27502" },
  { label: "Approach", value: "Education-First. No Rush. No Pressure." },
];

// Photos to be supplied — cards fall back to an initial monogram until then.
const team = [
  {
    name: "Freda Hamlett",
    title: "Founder & Lead Agent · CSHP",
    email: "freda@milestonemoves.com",
    phone: "919-810-9551",
    photo: "/images/freda-about.jpg",
  },
  {
    name: "Robin Bodwin",
    title: "Realtor",
    email: "robin@milestonemoves.com",
    phone: "919-746-3604",
    photo: "/images/Robin-bodwin-headshot.jpg",
  },
  {
    name: "Heather Walz",
    title: "Realtor",
    email: "heather@milestonemoves.com",
    phone: "919-655-5424",
    photo: null,
  },
];

const values = [
  { icon: "🎓", title: "Education First", desc: "Freda believes informed clients make the best decisions. Every consultation begins with listening and teaching — never selling." },
  { icon: "⏳", title: "Your Timeline", desc: "There's no rush here. Freda works at your pace and never pressures a decision before you're ready." },
  { icon: "🤝", title: "True Partnership", desc: "Clients aren't transactions. Freda stays in touch long after closing because relationships matter more than commissions." },
  { icon: "💡", title: "Deep Expertise", desc: "Specialized knowledge of the Triangle's 55+ communities, market trends, and senior housing resources sets Milestone Moves apart." },
];

const serviceHighlights = [
  "55+ and active adult community search & evaluation",
  "Home buying and selling for adults 55 and better",
  "Downsizing consultation and home preparation guidance",
  "Referral network: move managers, estate sale companies, attorneys",
  "Family coordination and multi-party communication",
  "Educational workshops for seniors and their families",
  "Market analysis and property value assessments",
  "CSHP-certified guidance on senior housing decisions",
];

export default function MeetTheTeam() {
  return (
    <div>
      {/* Hero — full editorial style */}
      <section className="bg-[#123A5E] py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-2xl max-w-md mx-auto">
              <Image src="/images/freda-about.jpg" alt="Freda Hamlett — Milestone Moves Realty Group" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 50vw" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-[#123A5E]/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-bold text-2xl">Freda Hamlett</p>
                <p className="text-[#2BB8D3] font-semibold">Founder &amp; Lead Agent</p>
              </div>
            </div>
            {/* Floating CSHP badge */}
            <div className="absolute -bottom-4 -right-4 bg-[#0A7387] text-white rounded-2xl px-5 py-3 shadow-xl text-center hidden sm:block">
              <p className="font-black text-xl">CSHP</p>
              <p className="text-xs font-semibold opacity-90">Certified</p>
            </div>
          </div>

          {/* Bio intro */}
          <div className="text-white">
            <p className="text-[#2BB8D3] font-bold tracking-widest text-sm mb-4 uppercase">The Person Behind the Mission</p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Your Dedicated<br />Partner for<br />What Comes Next
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Freda Hamlett founded Milestone Moves Realty Group out of a deep and personal commitment to the 55+
              community. After witnessing firsthand the challenges families face during major housing transitions,
              she made it her mission to make those transitions smoother, more informed, and more empowering.
            </p>
            <blockquote className="border-l-4 border-[#2BB8D3] pl-5 text-gray-200 italic text-xl leading-relaxed">
              &ldquo;Your next chapter deserves the right partner. I am committed to being that partner for you.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* Credentials table */}
      <section className="bg-[#0A7387] py-10 px-4">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {credentials.map((c) => (
            <div key={c.label} className="text-white">
              <p className="text-xs font-bold opacity-70 uppercase tracking-wider mb-1">{c.label}</p>
              <p className="font-bold text-sm">{c.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet the team grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#0A7387] font-bold tracking-widest text-sm mb-3 uppercase">Your Local Team</p>
            <h2 className="text-3xl font-bold text-[#123A5E]">Meet the Milestone Moves Team</h2>
            <p className="text-[#3d3d3d] mt-4 max-w-2xl mx-auto">
              A dedicated group of Triangle real estate professionals — here to guide you with care, clarity, and confidence.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl p-8 text-center shadow-sm">
                {/* Photo or initial monogram */}
                {member.photo ? (
                  <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden shadow-md mb-5">
                    <Image src={member.photo} alt={member.name} fill className="object-cover object-top" sizes="112px" />
                  </div>
                ) : (
                  <div
                    className="w-28 h-28 mx-auto rounded-full bg-[#123A5E] flex items-center justify-center shadow-md mb-5"
                    aria-hidden="true"
                  >
                    <span className="text-white font-bold text-4xl">{member.name.charAt(0)}</span>
                  </div>
                )}
                <h3 className="font-bold text-[#123A5E] text-xl">{member.name}</h3>
                <p className="text-[#0A7387] font-semibold text-sm mb-4">{member.title}</p>
                <div className="space-y-2 text-sm">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center gap-2 text-[#0A7387] font-semibold hover:underline break-all"
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {member.email}
                  </a>
                  <a
                    href={`tel:+1${member.phone.replace(/\D/g, "")}`}
                    className="flex items-center justify-center gap-2 text-[#3d3d3d] font-semibold hover:text-[#0A7387]"
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {member.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full bio */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#0A7387] font-bold tracking-widest text-sm mb-3 uppercase">The Full Story</p>
          <h2 className="text-3xl font-bold text-[#123A5E] mb-8">About Freda</h2>
          <div className="space-y-5 text-[#3d3d3d] leading-relaxed text-lg">
            <p>
              Freda Hamlett is more than a real estate agent — she&apos;s an advocate, an educator, and a trusted
              advisor for adults 55 and better navigating one of life&apos;s most significant transitions.
            </p>
            <p>
              As a <strong>Certified Senior Housing Professional (CSHP)</strong>, Freda has completed specialized
              training focused on the unique physical, emotional, and financial needs of older adults. She brings
              this expertise to every client conversation — ensuring each person she serves feels heard, informed,
              and supported throughout the entire process.
            </p>
            <p>
              Based in Apex, NC, Freda has deep roots in the Triangle community and extensive knowledge of its
              neighborhoods, 55+ communities, and senior resources. She serves clients across Wake, Durham, and
              Orange counties — from Raleigh to Chapel Hill, Wake Forest to Zebulon.
            </p>
            <p>
              Freda&apos;s approach is fundamentally different from a traditional real estate agent. She doesn&apos;t
              just help people buy and sell homes — she helps them plan meaningful transitions. She coordinates with
              families, financial advisors, elder law attorneys, and senior care professionals to ensure every aspect
              of the move is handled with care and competence.
            </p>
            <p>
              Most importantly, Freda listens. She understands that for many of her clients, this move carries deep
              emotional weight — decades of memories, family history, and identity tied up in a home. She honors
              that weight while helping clients look forward with clarity and confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#0A7387] font-bold tracking-widest text-sm mb-3 uppercase">How Freda Works</p>
            <h2 className="text-3xl font-bold text-[#123A5E]">The Values Behind Every Interaction</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-7 shadow-sm text-center">
                <div className="text-5xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-[#123A5E] text-xl mb-3">{v.title}</h3>
                <p className="text-[#3d3d3d] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 px-4 bg-[#123A5E] text-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#2BB8D3] font-bold tracking-widest text-sm mb-3 uppercase">What Freda Does For You</p>
              <h2 className="text-3xl font-bold mb-6">Full-Service, From First Question to Final Close</h2>
              <p className="text-gray-300 leading-relaxed">
                Freda&apos;s services go well beyond writing contracts and scheduling showings. She brings a holistic
                approach to every client relationship — because a successful move involves more than finding the right
                home.
              </p>
              <Link href="/about/contact-us" className="inline-block mt-8 bg-[#0A7387] hover:bg-[#086475] text-white font-bold px-8 py-4 rounded-full transition-colors text-sm tracking-wider">
                SCHEDULE A CONSULTATION
              </Link>
            </div>
            <ul className="space-y-3">
              {serviceHighlights.map((s) => (
                <li key={s} className="flex gap-3 items-start">
                  <span className="w-5 h-5 bg-[#0A7387] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span className="text-gray-200 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A7387] py-16 px-4 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Work with Freda?</h2>
          <p className="text-lg opacity-90 mb-8">Start with a free, no-pressure consultation — and see why so many Triangle families trust Milestone Moves.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about/contact-us" className="inline-block bg-[#123A5E] hover:bg-[#0D2942] text-white font-bold px-8 py-4 rounded-full transition-colors text-sm tracking-wider">
              CONTACT FREDA
            </Link>
            <Link href="/about/what-is-a-cshp" className="inline-block border-2 border-white hover:bg-white hover:text-[#0A7387] text-white font-bold px-8 py-4 rounded-full transition-colors text-sm tracking-wider">
              WHAT IS A CSHP?
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
