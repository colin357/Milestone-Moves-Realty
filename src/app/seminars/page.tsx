import Link from "next/link";

export const metadata = {
  title: "Seminars & Workshops | Milestone Moves Realty Group",
  description:
    "Free educational seminars and workshops for adults 55+ in the Triangle, NC — hosted with the Cary Senior Center. Register today.",
};

// Cary Senior Center registration link — update to the exact program URL when available.
const SENIOR_CENTER_URL = "https://www.carync.gov/recreation-enjoyment/facilities/cary-senior-center";

// Placeholder seminars — edit dates, times, topics, and registration links as events are scheduled.
const seminars = [
  {
    month: "This Month",
    title: "Downsizing Without the Overwhelm",
    date: "Thursday, August 14, 2026",
    time: "10:00 AM – 11:30 AM",
    location: "Cary Senior Center",
    locationUrl: SENIOR_CENTER_URL,
    registerUrl: SENIOR_CENTER_URL,
  },
  {
    month: "Next Month",
    title: "Is Now the Right Time to Sell? A 55+ Market Update",
    date: "Wednesday, September 10, 2026",
    time: "1:00 PM – 2:30 PM",
    location: "Cary Senior Center",
    locationUrl: SENIOR_CENTER_URL,
    registerUrl: SENIOR_CENTER_URL,
  },
  {
    month: "Coming Up",
    title: "Understanding 55+ & Active Adult Communities",
    date: "Thursday, October 9, 2026",
    time: "10:00 AM – 11:30 AM",
    location: "Cary Senior Center",
    locationUrl: SENIOR_CENTER_URL,
    registerUrl: SENIOR_CENTER_URL,
  },
];

export default function Seminars() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#123A5E] py-20 px-4 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#2BB8D3] font-bold tracking-widest text-sm mb-4 uppercase">Education First</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">Seminars &amp; Workshops</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Free, no-pressure educational sessions for adults 55 and better — because confident decisions start with
            good information. Join us at the Cary Senior Center.
          </p>
        </div>
      </section>

      {/* Topic of the Month — scrollable cards */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#0A7387] font-bold tracking-widest text-sm mb-3 uppercase">On the Calendar</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#123A5E]">Topic of the Month</h2>
            <p className="text-[#3d3d3d] mt-4 max-w-xl mx-auto">
              Reserve your seat below. Seminars fill quickly — early registration is encouraged.
            </p>
          </div>

          {/* Horizontally scrollable row — shows three across on wider screens */}
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4">
            {seminars.map((s) => (
              <div
                key={s.title}
                className="snap-start flex-shrink-0 w-[300px] sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] bg-gray-50 rounded-2xl shadow-sm border-t-4 border-[#0A7387] flex flex-col overflow-hidden"
              >
                <div className="p-7 flex flex-col flex-1">
                  <span className="inline-block self-start bg-[#f0fafd] text-[#0A7387] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                    {s.month}
                  </span>
                  <h3 className="font-bold text-[#123A5E] text-xl mb-5 leading-snug">{s.title}</h3>

                  <dl className="space-y-3 text-sm text-[#3d3d3d] mb-6">
                    <div className="flex gap-3 items-start">
                      <svg className="w-5 h-5 text-[#0A7387] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <dt className="sr-only">Date</dt>
                        <dd className="font-semibold text-[#123A5E]">{s.date}</dd>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <svg className="w-5 h-5 text-[#0A7387] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <dt className="sr-only">Time</dt>
                        <dd>{s.time}</dd>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <svg className="w-5 h-5 text-[#0A7387] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <dt className="sr-only">Location</dt>
                        <dd>
                          <a
                            href={s.locationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#0A7387] font-semibold hover:underline"
                          >
                            {s.location}
                          </a>
                        </dd>
                      </div>
                    </div>
                  </dl>

                  <a
                    href={s.registerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto block text-center bg-[#0A7387] hover:bg-[#086475] text-white font-bold px-6 py-3 rounded-full transition-colors text-sm tracking-wider"
                  >
                    REGISTER NOW
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Trouble registering note */}
          <div className="mt-10 bg-[#f0fafd] border border-[#0A7387] rounded-2xl p-6 text-center max-w-2xl mx-auto">
            <p className="text-[#3d3d3d]">
              <strong className="text-[#123A5E]">Having trouble registering?</strong>{" "}
              Please contact Freda — she&apos;s happy to help you reserve a seat.
            </p>
            <div className="mt-3 flex flex-col sm:flex-row gap-2 sm:gap-6 justify-center text-sm font-semibold">
              <a href="mailto:freda@milestonemoves.com" className="text-[#0A7387] hover:underline">
                freda@milestonemoves.com
              </a>
              <a href="tel:+19198109551" className="text-[#0A7387] hover:underline">
                919-810-9551
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Host-your-own / CTA */}
      <section className="bg-[#0A7387] py-16 px-4 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Want a Seminar for Your Group?</h2>
          <p className="text-lg opacity-90 mb-8">
            We host educational workshops for senior centers, community groups, and organizations across the Triangle.
            Reach out to schedule one.
          </p>
          <Link
            href="/about/contact-us"
            className="inline-block bg-[#123A5E] hover:bg-[#0D2942] text-white font-bold px-10 py-4 rounded-full transition-colors text-sm tracking-wider"
          >
            GET IN TOUCH
          </Link>
        </div>
      </section>
    </div>
  );
}
