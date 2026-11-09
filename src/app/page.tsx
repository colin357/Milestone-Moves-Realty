import Link from "next/link";
import Image from "next/image";

// Distinct Pexels lifestyle photographs, used under the Pexels License.
// Stock subjects are illustrative and are not presented as Milestone Moves clients.
// https://www.pexels.com/license/
const lifestylePhotos = {
  hero: "https://images.pexels.com/photos/8806089/pexels-photo-8806089.jpeg",
  welcome: "https://images.pexels.com/photos/7232037/pexels-photo-7232037.jpeg",
  communities: "https://images.pexels.com/photos/20210675/pexels-photo-20210675.jpeg",
  planning: "https://images.pexels.com/photos/8815837/pexels-photo-8815837.jpeg",
  family: "https://images.pexels.com/photos/6148866/pexels-photo-6148866.jpeg",
  journey: "https://images.pexels.com/photos/32842395/pexels-photo-32842395.jpeg",
  community: "https://images.pexels.com/photos/36838819/pexels-photo-36838819.jpeg",
  closing: "https://images.pexels.com/photos/8139243/pexels-photo-8139243.jpeg",
};

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
    description: "We listen to your goals, concerns, and timeline. No pressure, just a conversation about what matters to you.",
  },
  {
    number: "02",
    title: "Explore Options & Plan",
    description: "We help you understand your housing choices and build a personalized plan for your next chapter.",
  },
  {
    number: "03",
    title: "Find & Move",
    description: "We help you find the right next home and coordinate your move first, whenever your circumstances allow.",
  },
  {
    number: "04",
    title: "Prepare & Sell",
    description: "Once you've moved, we coordinate the remaining cleanout, repairs, and preparation, then market and sell your former home.",
  },
  {
    number: "05",
    title: "Settle Into Your Next Chapter",
    description: "We help wrap up the remaining details so you can focus on making your new place feel like home.",
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
          src={lifestylePhotos.hero}
          alt="Older couple enjoying time together outside their home"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#123A5E]/90 via-[#123A5E]/75 to-[#123A5E]/60" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center py-24">
          <h1 className="font-bold mb-6 leading-tight">
            <span className="block text-lg sm:text-2xl md:text-3xl font-semibold tracking-wide mb-3">
              Serving the 55+ Community with
            </span>
            <span className="block whitespace-nowrap text-[clamp(1.4rem,5.9vw,3.75rem)] tracking-tight text-[#00A8F0]">
              Care, Clarity &amp; Confidence
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-10">
            Helping older adults and their families plan meaningful moves,
            find the right next home, and enjoy what comes next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about/contact-us"
              className="bg-[#006F9C] hover:bg-[#005578] text-white font-bold px-10 py-4 rounded-full transition-colors text-sm tracking-wider shadow-lg"
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
      <section className="bg-[#F1F3F5] text-[#123A5E] py-8 px-4">
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
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-[#006F9C] font-bold tracking-widest text-sm mb-3 uppercase">Welcome to Milestone Moves</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#123A5E] mb-6 leading-tight">
              More Than a Move.<br />It&apos;s a New Beginning.
            </h2>
            <p className="text-[#3d3d3d] text-lg leading-relaxed mb-5">
              A later-in-life move is about more than a house. It&apos;s about the people you love,
              the life you want, and feeling confident about what&apos;s next.
            </p>
            <p className="text-[#3d3d3d] leading-relaxed mb-8">
              We help you explore your options, create a plan, and coordinate the details at your pace.
              Whenever possible, we help you move first, then prepare and sell your former home.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/about/meet-the-team" className="inline-block bg-[#006F9C] hover:bg-[#005578] text-white font-bold px-7 py-3 rounded-full transition-colors text-sm tracking-wider text-center">
                MEET THE TEAM
              </Link>
              <Link href="/empowered-aging" className="inline-block border-2 border-[#006F9C] text-[#006F9C] hover:bg-[#006F9C] hover:text-white font-bold px-7 py-3 rounded-full transition-colors text-sm tracking-wider text-center">
                EMPOWERED AGING
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lg">
              <Image src={lifestylePhotos.welcome} alt="Older woman and adult family member sharing a joyful moment together" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-4 left-4 sm:left-8 right-4 sm:right-8 bg-white/95 shadow-lg rounded-xl p-5 border-l-4 border-[#00A8F0]">
              <p className="text-[#123A5E] font-semibold text-lg">Your plans. Your pace. Your next chapter.</p>
            </div>
          </div>
        </div>
      </section>

            {/* ── SERVICES ─────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 bg-[#F1F3F5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#006F9C] font-bold tracking-widest text-sm mb-3 uppercase">What We Offer</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#123A5E]">How We Can Help You</h2>
            <p className="text-[#3d3d3d] mt-3 max-w-2xl mx-auto">Practical help for the decisions, details, and possibilities ahead.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service, i) => (
              <Link key={service.title} href={service.href} className="group block">
                <div className="relative h-64 sm:h-72 overflow-hidden rounded-2xl mb-5 shadow-sm">
                  <Image
                    src={[lifestylePhotos.communities, lifestylePhotos.planning, lifestylePhotos.family][i]}
                    alt={[
                      "Older adult enjoying life in a comfortable home",
                      "Older adult discussing plans with a professional",
                      "Older couple and family member spending time together",
                    ][i]}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-bold text-[#123A5E] text-xl mb-2 group-hover:text-[#006F9C]">{service.title}</h3>
                <p className="text-[#3d3d3d] leading-relaxed text-base mb-2">{service.description}</p>
                <span className="text-[#006F9C] font-bold text-sm group-hover:underline">Explore this service →</span>
              </Link>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-4 mt-10 pt-8 border-t border-[#CBD5E1]">
            {services.slice(3).map((service) => (
              <Link key={service.title} href={service.href} className="group flex items-start gap-3 p-3 rounded-xl hover:bg-white/75 transition-colors">
                <span className="text-[#006F9C] mt-1 flex-shrink-0">{service.icon}</span>
                <div>
                  <h3 className="font-bold text-[#123A5E] group-hover:text-[#006F9C]">{service.title} →</h3>
                  <p className="text-[#3d3d3d] text-sm leading-relaxed mt-1">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

            {/* ── HOW IT WORKS ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 bg-white text-[#123A5E]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-[#006F9C] font-bold tracking-widest text-sm mb-3 uppercase">The Process</p>
            <h2 className="text-3xl sm:text-4xl font-bold">How It Works</h2>
            <p className="text-[#3d3d3d] mt-4 max-w-2xl">A clear plan, thoughtful coordination, and a helping hand through each stage.</p>
          </div>
          <div className="grid lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] gap-8 lg:gap-12 items-center">
            <div className="relative min-h-[430px] lg:min-h-[590px] rounded-[2rem] overflow-hidden shadow-md">
              <Image src={lifestylePhotos.journey} alt="Family sharing a relaxed, cheerful moment at home" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#123A5E]/85 via-[#123A5E]/40 to-transparent">
                <p className="text-white text-xl font-semibold">We guide you. You set the pace.</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-x-7 gap-y-6">
              {steps.map((step, i) => (
                <div key={step.number} className="border-t-2 border-[#E2E8F0] pt-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-11 h-11 rounded-full bg-[#00A8F0] flex items-center justify-center text-[#123A5E] font-bold text-lg flex-shrink-0">{i + 1}</span>
                    <h3 className="font-bold text-[#123A5E] text-lg leading-snug">{step.title}</h3>
                  </div>
                  <p className="text-[#3d3d3d] text-base leading-relaxed">{step.description}</p>
                </div>
              ))}
              <div className="sm:col-span-2 pt-2">
                <Link href="/moving-playbook" className="inline-block bg-[#006F9C] hover:bg-[#005578] text-white font-bold px-8 py-4 rounded-full transition-colors text-sm tracking-wider">
                  READ THE FULL PLAYBOOK
                </Link>
              </div>
            </div>
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
              <p className="text-[#00A8F0] text-sm font-semibold">Founder &amp; Lead Agent | CSHP</p>
            </div>
          </div>

          {/* Bio */}
          <div>
            <p className="text-[#006F9C] font-bold tracking-widest text-sm mb-3 uppercase">Meet Your Partner</p>
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

            <blockquote className="border-l-4 border-[#006F9C] pl-5 mb-8">
              <p className="text-[#123A5E] italic text-lg leading-relaxed">
                &ldquo;Your next chapter deserves the right partner. I am committed to being that partner for you.&rdquo;
              </p>
            </blockquote>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/about/meet-the-team"
                className="inline-block bg-[#006F9C] hover:bg-[#005578] text-white font-bold px-7 py-3 rounded-full transition-colors text-sm tracking-wider text-center"
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

      {/* ── HUMAN MOMENT / EMPOWERED AGING ─────────────────────── */}
      <section className="bg-[#F1F3F5] px-4 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          <div className="relative h-[340px] sm:h-[420px] overflow-hidden rounded-[2rem] shadow-md">
            <Image src={lifestylePhotos.community} alt="Older friends sharing laughter and companionship" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div>
            <p className="text-[#006F9C] font-bold tracking-widest text-sm uppercase mb-3">Empowered Aging</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#123A5E] leading-tight mb-5">A Good Move Opens the Door to More Living.</h2>
            <p className="text-[#3d3d3d] text-lg leading-relaxed mb-7">
              New friendships, fresh routines, and more room for what matters.
              Our educational programs help you plan ahead so you can enjoy the years ahead.
            </p>
            <Link href="/empowered-aging" className="inline-block bg-[#006F9C] hover:bg-[#005578] text-white font-bold px-8 py-4 rounded-full transition-colors text-sm tracking-wider">
              EXPLORE EMPOWERED AGING
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#006F9C] font-bold tracking-widest text-sm mb-3 uppercase">Client Stories</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#123A5E]">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="border-t-4 border-[#00A8F0] pt-6 flex flex-col">
                <p className="text-[#3d3d3d] leading-relaxed italic flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-5 pt-4 border-t border-gray-200">
                  <p className="font-bold text-[#123A5E]">{t.name}</p>
                  <p className="text-sm text-gray-600">{t.location}</p>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

            {/* ── EXPLORE THE TRIANGLE ─────────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#006F9C] font-bold tracking-widest text-sm mb-3 uppercase">Where We Work</p>
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/20 group-hover:from-[#123A5E]/80 group-hover:via-[#123A5E]/50 group-hover:to-[#00A8F0]/20 transition-colors duration-300" />
                <span className="absolute bottom-0 left-0 right-0 p-4 text-white font-bold text-lg sm:text-xl tracking-wide z-10 drop-shadow-lg">
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
              <p className="text-[#006F9C] font-bold tracking-widest text-sm mb-3 uppercase">Resources & Insights</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#123A5E]">From the Blog</h2>
            </div>
            <Link href="/about/blog" className="text-[#006F9C] font-bold text-sm hover:underline whitespace-nowrap">
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
                <div className="bg-[#00A8F0] h-3 group-hover:bg-[#006F9C] transition-colors" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-[#EAF7FD] text-[#006F9C] text-xs font-bold px-3 py-1 rounded-full">{post.tag}</span>
                    <span className="text-gray-500 text-xs">{post.date}</span>
                  </div>
                  <h3 className="font-bold text-[#123A5E] text-lg mb-3 leading-snug group-hover:text-[#006F9C] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[#3d3d3d] text-sm leading-relaxed">{post.excerpt}</p>
                  <span className="inline-block mt-4 text-[#006F9C] text-sm font-bold">Read More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section className="relative py-24 px-4 text-white overflow-hidden">
        <Image
          src={lifestylePhotos.closing}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#123A5E]/78" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-[#5DCCF8] font-bold tracking-widest text-sm mb-4 uppercase">Let&apos;s Get Started</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-5">
            Your Next Chapter Starts<br />with a Conversation
          </h2>
          <p className="text-lg text-gray-200 mb-10 max-w-xl mx-auto leading-relaxed">
            No pressure. No rush. Just an honest conversation about what&apos;s next and how we can help you get there.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about/contact-us"
              className="bg-[#006F9C] hover:bg-[#005578] text-white font-bold px-10 py-4 rounded-full transition-colors text-sm tracking-wider shadow-lg"
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
