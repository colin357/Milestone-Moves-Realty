import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Frequently Asked Questions | Milestone Moves Realty Group",
  description:
    "Answers to the questions families ask most about downsizing, aging in place, senior living, and later-life moves in the Triangle, NC.",
};

const faqs = [
  {
    q: "Do I need to be ready to move before I contact you?",
    a: "Absolutely not. Many of our clients contact us months or even years before making any decisions — simply gathering information, exploring options, or trying to understand what the future might look like. Our goal is to help you make informed decisions, not pressure you into them.",
  },
  {
    q: "What if I want to stay in my home?",
    a: "That may be exactly the right decision. Not everyone needs to move. In many cases, aging in place can be a safe and successful option with the right planning and support systems. We'll help you evaluate your options so you can make the best decision for your circumstances.",
  },
  {
    q: "How do I know if it's time to downsize?",
    a: "There is no universal answer. For some people it's about maintenance becoming overwhelming; for others it's safety concerns, accessibility, finances, or simply wanting a simpler lifestyle. The right question is often: “Does my current home still support the life I want moving forward?”",
  },
  {
    q: "Can you help with all the stuff?",
    a: "Yes — that's one of the most common concerns families have. We can connect you with trusted organizers, senior move managers, estate sale professionals, movers, donation resources, and clean-out services. You don't have to tackle decades of belongings alone.",
  },
  {
    q: "My parents don't want to talk about moving. What should I do?",
    a: "This is extremely common. Most resistance is rooted in fear, uncertainty, loss of control, or concern about independence. Our role is often to help families have productive conversations without pressure, conflict, or ultimatums. Sometimes information creates opportunities for discussion that pressure never will.",
  },
  {
    q: "What if I live out of town?",
    a: "Many of our clients' adult children live in different cities or states. We regularly help long-distance families coordinate transitions, manage vendors, oversee projects, and communicate updates throughout the process.",
  },
  {
    q: "Do you only help seniors?",
    a: "No. While we specialize in later-life transitions, we help anyone navigating significant housing changes, caregiving situations, downsizing projects, or major life transitions.",
  },
  {
    q: "What makes Milestone Moves different?",
    a: "We focus on people first. Real estate is only one part of the process. We help families navigate emotions, logistics, resources, planning, and caregiving concerns — in addition to traditional real estate services.",
  },
];

export default function FAQ() {
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
            <Link href="/about/meet-the-team" className="hover:underline">About</Link>
            <span className="mx-2">/</span>
            <span>FAQ</span>
          </nav>
          <p className="text-[#2BB8D3] font-bold tracking-widest text-sm mb-4 uppercase">Questions We Hear Every Day</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight max-w-3xl">Frequently Asked Questions</h1>
          <p className="text-gray-200 text-lg max-w-2xl leading-relaxed">
            Most people come to us with more questions than answers — that&apos;s completely normal. Here are the ones we
            hear most often.
          </p>
        </div>
      </section>

      {/* FAQ accordion */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((item) => (
            <details key={item.q} className="group bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-6 font-bold text-[#123A5E] text-lg">
                {item.q}
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0A7387] text-white flex items-center justify-center transition-transform group-open:rotate-45" aria-hidden="true">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 -mt-1">
                <p className="text-[#3d3d3d] leading-relaxed">{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A7387] py-16 px-4 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-lg opacity-90 mb-8">
            Sometimes the first step is simply a conversation with someone who understands the process. No pressure, no obligation.
          </p>
          <Link href="/about/contact-us" className="inline-block bg-[#123A5E] hover:bg-[#0D2942] text-white font-bold px-10 py-4 rounded-full transition-colors text-sm tracking-wider">
            SCHEDULE A CONVERSATION
          </Link>
        </div>
      </section>
    </div>
  );
}
