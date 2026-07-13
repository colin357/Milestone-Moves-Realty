"use client";

import { useState, useEffect } from "react";

// Cary Senior Center registration link — update to the exact program URL when available.
const SENIOR_CENTER_URL = "https://www.carync.gov/recreation-enjoyment/facilities/cary-senior-center";

type ClassInfo = {
  title: string;
  date: string;
  time: string;
  location: string;
  locationUrl: string;
  registerUrl: string;
};

// Freda hosts one class per month. Edit each month's details (or set `session: null`
// for a month with no scheduled class) as the calendar is confirmed.
const months: { name: string; short: string; session: ClassInfo | null }[] = [
  { name: "January", short: "Jan", session: { title: "Downsizing Made Simple", date: "Thursday, January 8, 2026", time: "10:00 AM – 11:30 AM", location: "Cary Senior Center", locationUrl: SENIOR_CENTER_URL, registerUrl: SENIOR_CENTER_URL } },
  { name: "February", short: "Feb", session: { title: "Aging in Place With Confidence", date: "Thursday, February 12, 2026", time: "10:00 AM – 11:30 AM", location: "Cary Senior Center", locationUrl: SENIOR_CENTER_URL, registerUrl: SENIOR_CENTER_URL } },
  { name: "March", short: "Mar", session: { title: "Selling Your Home in Today's Market", date: "Thursday, March 12, 2026", time: "1:00 PM – 2:30 PM", location: "Cary Senior Center", locationUrl: SENIOR_CENTER_URL, registerUrl: SENIOR_CENTER_URL } },
  { name: "April", short: "Apr", session: { title: "Stage Not Age: Purpose in Later Life", date: "Thursday, April 9, 2026", time: "10:00 AM – 11:30 AM", location: "Cary Senior Center", locationUrl: SENIOR_CENTER_URL, registerUrl: SENIOR_CENTER_URL } },
  { name: "May", short: "May", session: { title: "Living, Dying & Leaving a Legacy", date: "Thursday, May 14, 2026", time: "10:00 AM – 11:30 AM", location: "Cary Senior Center", locationUrl: SENIOR_CENTER_URL, registerUrl: SENIOR_CENTER_URL } },
  { name: "June", short: "Jun", session: { title: "Understanding 55+ & Active Adult Communities", date: "Thursday, June 11, 2026", time: "10:00 AM – 11:30 AM", location: "Cary Senior Center", locationUrl: SENIOR_CENTER_URL, registerUrl: SENIOR_CENTER_URL } },
  { name: "July", short: "Jul", session: { title: "Downsizing Made Simple", date: "Thursday, July 9, 2026", time: "10:00 AM – 11:30 AM", location: "Cary Senior Center", locationUrl: SENIOR_CENTER_URL, registerUrl: SENIOR_CENTER_URL } },
  { name: "August", short: "Aug", session: { title: "Aging in Place With Confidence", date: "Thursday, August 13, 2026", time: "10:00 AM – 11:30 AM", location: "Cary Senior Center", locationUrl: SENIOR_CENTER_URL, registerUrl: SENIOR_CENTER_URL } },
  { name: "September", short: "Sep", session: { title: "Senior Living Options Explained", date: "Thursday, September 10, 2026", time: "1:00 PM – 2:30 PM", location: "Cary Senior Center", locationUrl: SENIOR_CENTER_URL, registerUrl: SENIOR_CENTER_URL } },
  { name: "October", short: "Oct", session: { title: "Selling Your Home in Today's Market", date: "Thursday, October 8, 2026", time: "10:00 AM – 11:30 AM", location: "Cary Senior Center", locationUrl: SENIOR_CENTER_URL, registerUrl: SENIOR_CENTER_URL } },
  { name: "November", short: "Nov", session: { title: "Decluttering Without the Overwhelm", date: "Thursday, November 12, 2026", time: "10:00 AM – 11:30 AM", location: "Cary Senior Center", locationUrl: SENIOR_CENTER_URL, registerUrl: SENIOR_CENTER_URL } },
  { name: "December", short: "Dec", session: { title: "Planning Ahead: A Gift to Your Family", date: "Thursday, December 10, 2026", time: "10:00 AM – 11:30 AM", location: "Cary Senior Center", locationUrl: SENIOR_CENTER_URL, registerUrl: SENIOR_CENTER_URL } },
];

export default function MonthlyClasses() {
  const [selected, setSelected] = useState(0);

  // Jump to the current month once mounted. This runs only on the client, after
  // hydration, so the prerendered HTML (which can't know "now") and the first client
  // render agree — reading the date in a useState initializer would bake in the
  // build-time month and cause a hydration mismatch.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional client-only sync to current month
    setSelected(new Date().getMonth());
  }, []);

  const active = months[selected];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Month picker */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-3 mb-10" role="group" aria-label="Choose a month">
        {months.map((m, i) => {
          const isActive = i === selected;
          return (
            <button
              key={m.name}
              type="button"
              onClick={() => setSelected(i)}
              aria-pressed={isActive}
              className={`px-3 py-3 rounded-xl text-sm font-bold tracking-wide transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A7387] focus-visible:ring-offset-2 ${
                isActive
                  ? "bg-[#0A7387] text-white shadow-sm"
                  : "bg-white text-[#123A5E] border border-gray-200 hover:border-[#0A7387] hover:text-[#0A7387]"
              }`}
            >
              <span className="sm:hidden">{m.short}</span>
              <span className="hidden sm:inline">{m.name}</span>
            </button>
          );
        })}
      </div>

      {/* Selected month's class */}
      <div key={selected} className="animate-dropdown">
        {active.session ? (
          <div className="bg-gray-50 rounded-2xl shadow-sm border-t-4 border-[#0A7387] overflow-hidden">
            <div className="p-8 sm:p-10">
              <span className="inline-block bg-[#f0fafd] text-[#0A7387] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                {active.name} Class
              </span>
              <h3 className="font-bold text-[#123A5E] text-2xl sm:text-3xl mb-6 leading-snug">{active.session.title}</h3>

              <dl className="grid sm:grid-cols-3 gap-5 mb-8">
                <div className="flex gap-3 items-start">
                  <svg className="w-5 h-5 text-[#0A7387] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-[#0A7387] mb-0.5">Date</dt>
                    <dd className="font-semibold text-[#123A5E] text-sm">{active.session.date}</dd>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <svg className="w-5 h-5 text-[#0A7387] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-[#0A7387] mb-0.5">Time</dt>
                    <dd className="text-[#3d3d3d] text-sm">{active.session.time}</dd>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <svg className="w-5 h-5 text-[#0A7387] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-[#0A7387] mb-0.5">Location</dt>
                    <dd>
                      <a href={active.session.locationUrl} target="_blank" rel="noopener noreferrer" className="text-[#0A7387] font-semibold text-sm hover:underline">
                        {active.session.location}
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>

              <a
                href={active.session.registerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center bg-[#0A7387] hover:bg-[#086475] text-white font-bold px-8 py-3 rounded-full transition-colors text-sm tracking-wider"
              >
                REGISTER NOW
              </a>
            </div>
          </div>
        ) : (
          <div className="bg-gray-50 rounded-2xl border border-gray-100 p-10 text-center">
            <p className="text-[#123A5E] font-bold text-lg mb-2">No class scheduled for {active.name} yet.</p>
            <p className="text-[#3d3d3d]">Check back soon, or reach out to Freda and she&apos;ll let you know what&apos;s coming up.</p>
          </div>
        )}
      </div>

      {/* Trouble registering note */}
      <div className="mt-10 bg-[#f0fafd] border border-[#0A7387] rounded-2xl p-6 text-center">
        <p className="text-[#3d3d3d]">
          <strong className="text-[#123A5E]">Having trouble registering?</strong>{" "}
          Please contact Freda — she&apos;s happy to help you reserve a seat.
        </p>
        <div className="mt-3 flex flex-col sm:flex-row gap-2 sm:gap-6 justify-center text-sm font-semibold">
          <a href="mailto:freda@milestonemoves.com" className="text-[#0A7387] hover:underline">freda@milestonemoves.com</a>
          <a href="tel:+19198109551" className="text-[#0A7387] hover:underline">919-810-9551</a>
        </div>
      </div>
    </div>
  );
}
