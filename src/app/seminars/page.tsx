import Link from "next/link";
import MonthlyClasses from "./MonthlyClasses";

export const metadata = {
  title: "Seminars & Workshops | Milestone Moves Realty Group",
  description:
    "Free educational classes for adults 55+ in the Triangle, NC — hosted by Freda Hamlett at senior and active-adult centers across Wake County.",
};

export default function Seminars() {
  return (
    <div>
      <section className="bg-[#123A5E] py-20 px-4 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#2BB8D3] font-bold tracking-widest text-sm mb-4 uppercase">Education First</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">Seminars &amp; Workshops</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">Free, no-pressure educational sessions for adults 55 and better — because confident decisions start with good information. Join us at a senior or active-adult center across Wake County.</p>
        </div>
      </section>

      <section className="bg-[#f0fafd] px-4 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-8 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-[1.25fr_0.75fr] sm:p-10">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#0A7387]">Featured Seminar</p>
            <h2 className="text-3xl font-bold leading-tight text-[#123A5E]">Living, Dying &amp; Leaving a Legacy</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-[#3d3d3d]">Explore five practical conversations, a one-binder roadmap, and small next steps that help you live well, plan wisely, and leave the people you love less guessing and more peace.</p>
          </div>
          <div className="md:text-right">
            <Link href="/seminars/living-dying-leaving-a-legacy" className="inline-block rounded-full bg-[#0A7387] px-8 py-3 text-sm font-bold tracking-wider text-white transition-colors hover:bg-[#086475]">EXPLORE THE SEMINAR</Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#0A7387] font-bold tracking-widest text-sm mb-3 uppercase">On the Calendar</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#123A5E]">Upcoming Senior Center Classes</h2>
            <p className="text-[#3d3d3d] mt-4 max-w-xl mx-auto">Pick a month below to see Freda&apos;s remaining 2026 classes in Raleigh, Cary, Apex, Fuquay-Varina, and Holly Springs.</p>
          </div>
          <MonthlyClasses />
        </div>
      </section>

      <section className="bg-[#0A7387] py-16 px-4 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Want a Seminar for Your Group?</h2>
          <p className="text-lg opacity-90 mb-8">We host educational workshops for senior centers, community groups, and organizations across the Triangle. Reach out to schedule one.</p>
          <Link href="/about/contact-us" className="inline-block bg-[#123A5E] hover:bg-[#0D2942] text-white font-bold px-10 py-4 rounded-full transition-colors text-sm tracking-wider">GET IN TOUCH</Link>
        </div>
      </section>
    </div>
  );
}

