import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Selling Your Home | Milestone Moves Realty Group",
  description: "Sell your Triangle, NC home with strategy, expert pricing, and compassionate support.",
};

const marketingItems = [
  { icon: "📸", title: "Professional Photography", desc: "Every listing gets magazine-quality photos. We never use phone snapshots." },
  { icon: "🎬", title: "Video & Virtual Tour", desc: "A walkthrough video and 3D virtual tour let buyers fall in love before they ever step inside." },
  { icon: "🗺️", title: "MLS Syndication", desc: "Your listing hits Zillow, Realtor.com, Homes.com, and 100+ platforms the day it goes live." },
  { icon: "📱", title: "Social Media Campaign", desc: "Targeted ads on Facebook and Instagram reach the right buyers — by age, location, and interest." },
  { icon: "✉️", title: "Email Marketing", desc: "Sent directly to our buyer pool and the greater agent community in the Triangle." },
  { icon: "🏡", title: "Open Houses & Showings", desc: "Strategically scheduled to generate momentum and create buyer urgency in the first 7 days." },
  { icon: "📊", title: "Weekly Performance Reports", desc: "You&apos;ll always know how many views, showings, and inquiries your listing is generating." },
  { icon: "🤝", title: "Agent Network Outreach", desc: "We personally reach out to active buyer agents in the Triangle to preview your listing." },
];

const timeline = [
  { week: "Week 1–2", phase: "Preparation", tasks: ["Walkthrough and pricing consultation", "Staging recommendations and repairs", "Professional photography scheduled"] },
  { week: "Week 2–3", phase: "Pre-Launch", tasks: ["Marketing materials created", "Coming soon announcement", "Agent network alerted"] },
  { week: "Week 3", phase: "Launch", tasks: ["Listed on MLS and all platforms", "Open house scheduled", "Social media campaign activated"] },
  { week: "Week 3–5", phase: "Active Market", tasks: ["Showings coordinated", "Weekly performance reports", "Buyer feedback reviewed"] },
  { week: "Week 4–6", phase: "Offer & Negotiation", tasks: ["Offers reviewed together", "Terms negotiated on your behalf", "Contract executed"] },
  { week: "Week 6–10", phase: "Under Contract", tasks: ["Inspection negotiation managed", "Appraisal monitored", "Closing coordinated"] },
];

export default function SellingYourHome() {
  return (
    <div>
      {/* Split Hero */}
      <section className="grid md:grid-cols-2 min-h-[70vh]">
        <div className="bg-[#123A5E] flex items-center px-10 py-20">
          <div>
            <p className="text-[#2BB8D3] font-bold tracking-widest text-sm mb-4 uppercase">Sell with Confidence</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Your Home Deserves a<br />
              <span className="text-[#2BB8D3]">Maximum Sale.</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              We combine smart pricing, professional marketing, and compassionate negotiation to get you the best
              outcome — so you can move forward with confidence and peace of mind.
            </p>
            <Link href="/about/contact-us" className="inline-block bg-[#0A7387] hover:bg-[#086475] text-white font-bold px-8 py-4 rounded-full transition-colors text-sm tracking-wider">
              GET A FREE HOME VALUATION
            </Link>
          </div>
        </div>
        <div className="relative min-h-[400px]">
          <Image src="/images/selling-home.jpg" alt="Beautifully staged home ready to sell" fill className="object-cover" sizes="50vw" priority />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#123A5E]/20" />
          {/* Floating stat card */}
          <div className="absolute bottom-8 left-8 bg-white rounded-2xl shadow-xl p-5">
            <p className="text-3xl font-black text-[#123A5E]">Top Dollar</p>
            <p className="text-sm text-[#3d3d3d] mt-1">Our goal on every single listing.</p>
          </div>
        </div>
      </section>

      {/* What sellers need to know */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-1">
              <p className="text-[#0A7387] font-bold tracking-widest text-sm mb-3 uppercase">The Foundation</p>
              <h2 className="text-3xl font-bold text-[#123A5E] leading-tight">Three Things That Win Every Sale</h2>
              <p className="text-[#3d3d3d] mt-4 leading-relaxed text-sm">
                After years of working with sellers in the Triangle, we&apos;ve learned that every successful sale comes
                down to these three things — and we engineer all three on your behalf.
              </p>
            </div>
            <div className="md:col-span-2 grid sm:grid-cols-3 gap-5">
              {[
                { number: "01", title: "Right Price", desc: "Data-driven pricing that attracts serious buyers fast — without leaving money on the table." },
                { number: "02", title: "Right Presentation", desc: "Professional photos, staging guidance, and marketing that makes your home shine above the competition." },
                { number: "03", title: "Right Exposure", desc: "Maximum reach across every channel — MLS, social media, email, agent network, and open houses." },
              ].map((item) => (
                <div key={item.number} className="bg-[#123A5E] text-white rounded-2xl p-6">
                  <p className="text-5xl font-black text-white/10 mb-2">{item.number}</p>
                  <h3 className="font-bold text-xl text-[#2BB8D3] mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Showcase */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#0A7387] font-bold tracking-widest text-sm mb-3 uppercase">What We Do For Your Listing</p>
            <h2 className="text-3xl font-bold text-[#123A5E]">Marketing That Means Business</h2>
            <p className="text-[#3d3d3d] mt-4 max-w-xl mx-auto">
              Every Milestone Moves listing gets the full treatment — because your home deserves more than a phone photo and a Zillow post.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {marketingItems.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow border-b-4 border-[#0A7387]">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-[#123A5E] mb-2">{item.title}</h3>
                <p className="text-[#3d3d3d] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-[#123A5E] text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#2BB8D3] font-bold tracking-widest text-sm mb-3 uppercase">The Selling Timeline</p>
            <h2 className="text-3xl font-bold">From Decision to Closing</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {timeline.map((phase, i) => (
              <div key={phase.phase} className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-[#0A7387] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-xs text-[#2BB8D3] font-bold">{phase.week}</p>
                    <p className="font-bold text-white">{phase.phase}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {phase.tasks.map((task) => (
                    <li key={task} className="flex gap-2 items-start text-sm text-gray-300">
                      <span className="text-[#2BB8D3] mt-0.5 flex-shrink-0">›</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prepare your home */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#0A7387] font-bold tracking-widest text-sm mb-3 uppercase">Before You List</p>
            <h2 className="text-3xl font-bold text-[#123A5E]">How to Prepare Your Home</h2>
            <p className="text-[#3d3d3d] mt-4 max-w-xl mx-auto">Small investments before listing consistently deliver outsized returns. Here&apos;s where we focus first.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { priority: "High ROI", items: ["Fresh neutral paint throughout", "Deep professional cleaning", "Declutter and depersonalize", "Landscaping and mulch"], color: "bg-[#0A7387] text-white" },
              { priority: "Strong ROI", items: ["Kitchen hardware and fixtures", "Bathroom touch-ups", "Power wash driveway and exterior", "Fix leaky faucets and squeaky doors"], color: "bg-[#123A5E] text-white" },
              { priority: "Consider If Time Allows", items: ["Update light fixtures", "Refinish hardwood floors", "Replace worn carpet in main areas", "Touch up deck or patio"], color: "bg-gray-100 text-[#3d3d3d]" },
              { priority: "Rarely Worth the Cost", items: ["Full kitchen remodel", "Adding a bathroom", "Major landscaping overhaul", "Converting a garage"], color: "bg-gray-50 text-[#3d3d3d] border border-gray-200" },
            ].map((group) => (
              <div key={group.priority} className={`${group.color} rounded-2xl p-6`}>
                <p className="font-bold text-lg mb-4 opacity-90">{group.priority}</p>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm items-start opacity-90">
                      <span className="mt-0.5 flex-shrink-0">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A7387] py-16 px-4 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Put Your Home on the Market?</h2>
          <p className="text-lg opacity-90 mb-8">Start with a free, no-obligation home valuation and seller consultation.</p>
          <Link href="/about/contact-us" className="inline-block bg-[#123A5E] hover:bg-[#0D2942] text-white font-bold px-10 py-4 rounded-full transition-colors text-sm tracking-wider">
            SCHEDULE YOUR LISTING CONSULTATION
          </Link>
        </div>
      </section>
    </div>
  );
}
