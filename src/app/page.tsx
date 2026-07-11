import Link from "next/link";
import Image from "next/image";

const cities = [
  { name: "Apex", slug: "apex", image: "/images/cities/apex.jpg" },
  { name: "Cary", slug: "cary", image: "/images/cities/cary.jpg" },
  { name: "Chapel Hill", slug: "chapel-hill", image: "/images/cities/chapel-hill.jpg" },
  { name: "Clayton", slug: "clayton", image: "/images/cities/clayton.jpg" },
  { name: "Durham", slug: "durham", image: "/images/cities/durham.jpg" },
  { name: "Garner", slug: "garner", image: "/images/cities/garner.jpg" },
  { name: "Hillsborough", slug: "hillsborough", image: "/images/cities/hillsborough.jpg" },
  { name: "Raleigh", slug: "raleigh", image: "/images/cities/raleigh.jpg" },
  { name: "Wake Forest", slug: "wake-forest", image: "/images/cities/wake-forest.jpg" },
  { name: "Zebulon", slug: "zebulon", image: "/images/cities/zebulon.jpg" },
];

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "55+ Communities",
    description: "Explore active adult and simplified living communities across the Triangle tailored to your lifestyle.",
    href: "/55-plus-options/simplified-living-communities",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Moving Playbook",
    description: "Our step-by-step guide walks you through every stage of your move — no surprises, no stress.",
    href: "/moving-playbook",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Buy & Sell",
    description: "Expert representation whether you're buying your next home, selling your current one, or doing both.",
    href: "/buy-sell-smile/buying-a-home",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Empowered Aging",
    description: "Education-first resources to help you live confidently and make informed decisions about your future.",
    href: "/empowered-aging",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Downsizing Support",
    description: "Practical guidance on decluttering, rightsizing, and donating so your transition feels liberating.",
    href: "/55-plus-options/downsizing-tips-for-seniors",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Referral Network",
    description: "Trusted connections to senior move managers, attorneys, financial advisors, and care professionals.",
    href: "/about/referral-partners",
  },
];

const steps = [
  {
    number: "01",
    title: "Free Consultation",
    description: "We start by listening — to your goals, timeline, concerns, and vision for your next chapter. No pressure, just conversation.",
  },
  {
    number: "02",
    title: "Education & Planning",
    description: "We walk you through all your options and create a personalized plan that fits your goals, budget, and timeline.",
  },
  {
    number: "03",
    title: "Prepare & List",
    description: "We help you prepare your home for sale, connect you with trusted vendors, and handle every marketing detail.",
  },
  {
    number: "04",
    title: "Find Your Next Home",
    description: "We search with you, tour communities and homes, and negotiate confidently to get you the best outcome.",
  },
  {
    number: "05",
    title: "Close & Celebrate",
    description: "From contract to keys, we manage every detail so closing day feels like the new beginning it truly is.",
  },
];

const testimonials = [
  {
    quote: "Freda was a true partner through the entire process. She never rushed us, answered every question, and helped us find a community we absolutely love. We couldn't have done it without her.",
    name: "Margaret & Jim T.",
    location: "Moved from Raleigh to Apex",
  },
  {
    quote: "As the adult child coordinating my mother's move, I was overwhelmed. Freda stepped in and handled everything with such compassion and expertise. She made an incredibly stressful situation manageable.",
    name: "Susan R.",
    location: "Durham, NC",
  },
  {
    quote: "We interviewed three agents before choosing Freda. Her knowledge of 55+ communities in the Triangle is unmatched. She found us the perfect home in a community we didn't even know existed.",
    name: "Robert & Carol M.",
    location: "Moved to Cary",
  },
];

const blogPosts = [
  {
    title: "When Is the Right Time to Downsize?",
    excerpt: "There's no universal answer — but there are clear signs your current home may no longer be serving your best life.",
    date: "April 15, 2025",
    tag: "Downsizing",
    href: "/about/blog",
  },
  {
    title: "Top 55+ Communities in the Triangle, NC",
    excerpt: "From vibrant clubhouses to scenic trails, the Triangle offers some of the best active adult communities in the Southeast.",
    date: "March 28, 2025",
    tag: "Communities",
    href: "/about/blog",
  },
  {
    title: "What Is a CSHP and Why Does It Matter?",
    excerpt: "A Certified Senior Housing Professional brings specialized knowledge that can make a real difference in your transition.",
    date: "March 10, 2025",
    tag: "Education",
    href: "/about/blog",
  },
];

export default function Home() {
  return (
    <div>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-white overflow-hidden">
        {/* Background photo */}
        <Image
          src="/images/hero-bg.jpg"
          alt="Beautiful neighborhood home"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#123A5E]/90 via-[#123A5E]/75 to-[#123A5E]/60" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center py-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Serving the 55+ Community<br />
            with <span className="text-[#2BB8D3]">Care, Clarity &amp; Confidence</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-10">
            Specializing in helping adults 55 and better navigate life&apos;s most important housing
            transitions — with expertise, compassion, and an education-first approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about/contact-us"
              className="bg-[#0A7387] hover:bg-[#086475] text-white font-bold px-10 py-4 rounded-full transition-colors text-sm tracking-wider shadow-lg"
            >
              GET IN TOUCH
            </Link>
            <Link
              href="/moving-playbook"
              className="border-2 border-white hover:bg-white hover:text-[#123A5E] text-white font-bold px-10 py-4 rounded-full transition-colors text-sm tracking-wider"
            >
              THE MOVING PLAYBOOK
            </Link>
          </div>
        </div>
      </section>

      {/* ── STAT STRIP ───────────────────────────────────────────── */}
      <section className="bg-[#0A7387] text-white py-8 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { stat: "55+", label: "Specialized Market" },
            { stat: "10+", label: "Triangle Communities" },
            { stat: "CSHP", label: "Certified Designation" },
            { stat: "100%", label: "Education-First Approach" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-3xl sm:text-4xl font-bold">{item.stat}</p>
              <p className="text-sm font-semibold opacity-90 mt-1 tracking-wide">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── INTRO / ABOUT ────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#0A7387] font-bold tracking-widest text-sm mb-3 uppercase">Welcome to Milestone Moves</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#123A5E] mb-6 leading-tight">
              More Than a Move —<br />It&apos;s a New Beginning
            </h2>
            <p className="text-[#3d3d3d] leading-relaxed mb-5">
              At <strong>Milestone Moves Realty Group</strong>, we specialize in helping adults 55 and better navigate
              one of life&apos;s most important transitions. We understand that this move is about far more than real
              estate — it&apos;s about lifestyle, comfort, health, financial peace of mind, and staying connected to
              the people and activities you love.
            </p>
            <p className="text-[#3d3d3d] leading-relaxed mb-8">
              That&apos;s why our approach begins with <strong>education</strong>. We take the time to listen, answer
              questions, explain options, and create a personalized plan that fits your goals, your timeline, and your
              future. We don&apos;t rush decisions and we don&apos;t treat clients like transactions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/about/meet-the-team"
                className="inline-block bg-[#123A5E] hover:bg-[#0D2942] text-white font-bold px-7 py-3 rounded-full transition-colors text-sm tracking-wider text-center"
              >
                MEET THE TEAM
              </Link>
              <Link
                href="/empowered-aging"
                className="inline-block border-2 border-[#0A7387] text-[#0A7387] hover:bg-[#0A7387] hover:text-white font-bold px-7 py-3 rounded-full transition-colors text-sm tracking-wider text-center"
              >
                EMPOWERED AGING
              </Link>
            </div>
          </div>

          {/* Feature callouts */}
          <div className="grid grid-cols-1 gap-4">
            {[
              { icon: "🎓", title: "Education First", desc: "We inform before we act — because confident clients make the best decisions." },
              { icon: "🤝", title: "Compassionate Guidance", desc: "We walk beside you through every step, at your pace, on your timeline." },
              { icon: "🏘️", title: "Community Expertise", desc: "Deep knowledge of 55+ and active adult communities across the Triangle." },
              { icon: "🔗", title: "Trusted Network", desc: "Connections to senior care, legal, financial, and moving professionals." },
            ].map((f) => (
              <div key={f.title} className="flex gap-4 items-start bg-gray-50 rounded-xl p-5">
                <span className="text-3xl flex-shrink-0">{f.icon}</span>
                <div>
                  <h3 className="font-bold text-[#123A5E] mb-1">{f.title}</h3>
                  <p className="text-[#3d3d3d] text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#0A7387] font-bold tracking-widest text-sm mb-3 uppercase">What We Offer</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#123A5E]">How We Can Help You</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-md border border-transparent hover:border-[#0A7387] transition-all"
              >
                <div className="w-14 h-14 bg-[#f0fafd] text-[#0A7387] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#0A7387] group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-bold text-[#123A5E] text-lg mb-2">{service.title}</h3>
                <p className="text-[#3d3d3d] text-sm leading-relaxed">{service.description}</p>
                <span className="inline-block mt-4 text-[#0A7387] text-sm font-bold group-hover:underline">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#123A5E] text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#2BB8D3] font-bold tracking-widest text-sm mb-3 uppercase">The Process</p>
            <h2 className="text-3xl sm:text-4xl font-bold">How It Works</h2>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              We&apos;ve refined a proven process that removes the uncertainty and stress from your transition — one step at a time.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-[#2BB8D3]/30" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {steps.map((step, i) => (
                <div key={step.number} className="relative flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[#0A7387] flex items-center justify-center text-white font-bold text-lg mb-4 z-10 flex-shrink-0 shadow-lg">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-white text-base mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-xs leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/moving-playbook"
              className="inline-block bg-[#0A7387] hover:bg-[#086475] text-white font-bold px-10 py-4 rounded-full transition-colors text-sm tracking-wider"
            >
              READ THE FULL PLAYBOOK
            </Link>
          </div>
        </div>
      </section>

      {/* ── MEET FREDA ───────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-xl">
            <Image
              src="/images/freda-about.jpg"
              alt="Freda Hamlett — Milestone Moves Realty Group"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#123A5E]/90 to-transparent p-6">
              <p className="text-white font-bold text-xl">Freda Hamlett</p>
              <p className="text-[#2BB8D3] text-sm font-semibold">Founder &amp; Lead Agent | CSHP</p>
            </div>
          </div>

          {/* Bio */}
          <div>
            <p className="text-[#0A7387] font-bold tracking-widest text-sm mb-3 uppercase">Meet Your Partner</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#123A5E] mb-6 leading-tight">
              Dedicated to Your<br />Next Chapter
            </h2>
            <p className="text-[#3d3d3d] leading-relaxed mb-5">
              Freda Hamlett founded Milestone Moves Realty Group out of a deep passion for serving the 55+ community.
              After witnessing firsthand how challenging and emotional housing transitions can be for older adults and
              their families, she dedicated her career to making those transitions smoother, more informed, and more
              empowering.
            </p>
            <p className="text-[#3d3d3d] leading-relaxed mb-6">
              As a <strong>Certified Senior Housing Professional (CSHP)</strong>, Freda brings specialized knowledge and
              compassionate care to every client relationship. She takes the time to truly listen — to understand not just
              what you need in a home, but what you need for your life.
            </p>

            <blockquote className="border-l-4 border-[#0A7387] pl-5 mb-8">
              <p className="text-[#123A5E] italic text-lg leading-relaxed">
                &ldquo;Your next chapter deserves the right partner. I am committed to being that partner for you.&rdquo;
              </p>
            </blockquote>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/about/meet-the-team"
                className="inline-block bg-[#123A5E] hover:bg-[#0D2942] text-white font-bold px-7 py-3 rounded-full transition-colors text-sm tracking-wider text-center"
              >
                LEARN MORE ABOUT FREDA
              </Link>
              <Link
                href="/about/what-is-a-cshp"
                className="inline-block border-2 border-[#123A5E] text-[#123A5E] hover:bg-[#123A5E] hover:text-white font-bold px-7 py-3 rounded-full transition-colors text-sm tracking-wider text-center"
              >
                WHAT IS A CSHP?
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#0A7387] font-bold tracking-widest text-sm mb-3 uppercase">Client Stories</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#123A5E]">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-7 shadow-sm flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#0A7387]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#3d3d3d] leading-relaxed italic flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-5 pt-5 border-t border-gray-100">
                  <p className="font-bold text-[#123A5E]">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPLORE THE TRIANGLE ─────────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#0A7387] font-bold tracking-widest text-sm mb-3 uppercase">Where We Work</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#123A5E]">Explore the Triangle</h2>
            <p className="text-[#3d3d3d] mt-4 max-w-xl mx-auto">
              We serve communities across the greater Raleigh-Durham-Chapel Hill area. Click any city to learn more.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/areas/${city.slug}`}
                className="relative rounded-xl h-36 overflow-hidden group"
              >
                <Image
                  src={city.image}
                  alt={city.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover scale-100 group-hover:scale-105 transition-transform duration-500 blur-[1px] group-hover:blur-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/20 group-hover:from-[#123A5E]/80 group-hover:via-[#123A5E]/50 group-hover:to-[#2BB8D3]/20 transition-colors duration-300" />
                <span className="absolute bottom-0 left-0 right-0 p-4 text-white font-bold text-base tracking-wide z-10 drop-shadow-lg">
                  {city.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG TEASERS ─────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-[#0A7387] font-bold tracking-widest text-sm mb-3 uppercase">Resources & Insights</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#123A5E]">From the Blog</h2>
            </div>
            <Link href="/about/blog" className="text-[#0A7387] font-bold text-sm hover:underline whitespace-nowrap">
              VIEW ALL POSTS →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.title}
                href={post.href}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-[#123A5E] h-3 group-hover:bg-[#0A7387] transition-colors" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-[#f0fafd] text-[#0A7387] text-xs font-bold px-3 py-1 rounded-full">{post.tag}</span>
                    <span className="text-gray-500 text-xs">{post.date}</span>
                  </div>
                  <h3 className="font-bold text-[#123A5E] text-lg mb-3 leading-snug group-hover:text-[#0A7387] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[#3d3d3d] text-sm leading-relaxed">{post.excerpt}</p>
                  <span className="inline-block mt-4 text-[#0A7387] text-sm font-bold">Read More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section className="relative py-24 px-4 text-white overflow-hidden">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#123A5E]/85" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-[#2BB8D3] font-bold tracking-widest text-sm mb-4 uppercase">Let&apos;s Get Started</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-5">
            Your Next Chapter Starts<br />with a Conversation
          </h2>
          <p className="text-lg text-gray-200 mb-10 max-w-xl mx-auto leading-relaxed">
            No pressure. No rush. Just an honest conversation about what&apos;s next and how we can help you get there.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about/contact-us"
              className="bg-[#0A7387] hover:bg-[#086475] text-white font-bold px-10 py-4 rounded-full transition-colors text-sm tracking-wider shadow-lg"
            >
              CONTACT US TODAY
            </Link>
            <Link
              href="/about/meet-the-team"
              className="border-2 border-white hover:bg-white hover:text-[#123A5E] text-white font-bold px-10 py-4 rounded-full transition-colors text-sm tracking-wider"
            >
              MEET THE TEAM
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
