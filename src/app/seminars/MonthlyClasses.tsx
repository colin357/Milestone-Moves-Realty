"use client";

import { useEffect, useState } from "react";

const CARY_CENTER_URL = "https://www.carync.gov/recreation-enjoyment/facilities/senior-center";
const CARY_REGISTER_URL = "https://www.carync.gov/register";
const FUQUAY_PROGRAMS_URL = "https://www.fuquay-varina.org/311/Programs";
const RALEIGH_ACTIVE_ADULT_URL = "https://raleighnc.gov/parks-and-recreation/services/active-adult-program";
const APEX_LOCATION_URL = "https://www.google.com/maps/search/?api=1&query=1483+Beaver+Creek+Commons+Drive+Apex+NC+27502";
const HOLLY_SPRINGS_URL = "https://www.hollyspringsnc.gov/Directory/Home/DepartmentListing?DID=30";

type ClassInfo = { title: string; date: string; time: string; location: string; locationUrl: string; registerUrl: string };

type MonthInfo = {
  name: string;
  monthIndex: number;
  topic: string;
  description: string;
  sessions: ClassInfo[];
  followingMonthSession?: ClassInfo;
};

const octoberCarySession: ClassInfo = {
  title: "I’m Dead. Now What? — and trust me, you’ll thank me later!",
  date: "Friday, October 2, 2026",
  time: "9:30 AM – 11:00 AM",
  location: "Cary Senior Center",
  locationUrl: CARY_CENTER_URL,
  registerUrl: CARY_REGISTER_URL,
};

const months: MonthInfo[] = [
  { name: "September", monthIndex: 8, topic: "I’m Dead. Now What? — and trust me, you’ll thank me later!", description: "Put your vital information, wishes, and important details in one place so your loved ones have clarity when it matters most.", sessions: [
    { title: "Senior Center Class", date: "Tuesday, September 1, 2026", time: "10:00 AM – 11:30 AM", location: "Five Points Center for Active Adults, Raleigh", locationUrl: RALEIGH_ACTIVE_ADULT_URL, registerUrl: RALEIGH_ACTIVE_ADULT_URL },
    { title: "Senior Center Class", date: "Wednesday, September 2, 2026", time: "10:00 AM – 11:30 AM", location: "Fuquay-Varina Senior Center", locationUrl: FUQUAY_PROGRAMS_URL, registerUrl: FUQUAY_PROGRAMS_URL },
    { title: "Senior Center Class", date: "Tuesday, September 8, 2026", time: "10:00 AM – 11:30 AM", location: "Anne Gordon Center for Active Adults, Raleigh", locationUrl: RALEIGH_ACTIVE_ADULT_URL, registerUrl: RALEIGH_ACTIVE_ADULT_URL },
    { title: "Senior Center Class", date: "Friday, September 11, 2026", time: "10:00 AM – 11:30 AM", location: "Apex Senior Center, 1483 Beaver Creek Commons Drive", locationUrl: APEX_LOCATION_URL, registerUrl: APEX_LOCATION_URL },
    { title: "Senior Center Class", date: "Friday, September 11, 2026", time: "1:00 PM – 2:30 PM", location: "W.E. Hunt Recreation Center, Holly Springs", locationUrl: HOLLY_SPRINGS_URL, registerUrl: HOLLY_SPRINGS_URL },
  ], followingMonthSession: octoberCarySession },
  { name: "October", monthIndex: 9, topic: "One Move, Many Futures: Understanding Continuing Care Retirement Communities", description: "We’ll break down the structure, contracts, and levels of care so you can make informed decisions with confidence.", sessions: [
    octoberCarySession,
    { title: "Senior Center Class", date: "Tuesday, October 6, 2026", time: "10:00 AM – 11:30 AM", location: "Five Points Center for Active Adults, Raleigh", locationUrl: RALEIGH_ACTIVE_ADULT_URL, registerUrl: RALEIGH_ACTIVE_ADULT_URL },
    { title: "Senior Center Class", date: "Wednesday, October 7, 2026", time: "10:00 AM – 11:30 AM", location: "Fuquay-Varina Senior Center", locationUrl: FUQUAY_PROGRAMS_URL, registerUrl: FUQUAY_PROGRAMS_URL },
    { title: "Senior Center Class", date: "Friday, October 9, 2026", time: "10:00 AM – 11:30 AM", location: "Apex Senior Center, 1483 Beaver Creek Commons Drive", locationUrl: APEX_LOCATION_URL, registerUrl: APEX_LOCATION_URL },
    { title: "Senior Center Class", date: "Friday, October 9, 2026", time: "1:00 PM – 2:30 PM", location: "W.E. Hunt Recreation Center, Holly Springs", locationUrl: HOLLY_SPRINGS_URL, registerUrl: HOLLY_SPRINGS_URL },
    { title: "Senior Center Class", date: "Tuesday, October 13, 2026", time: "10:00 AM – 11:30 AM", location: "Anne Gordon Center for Active Adults, Raleigh", locationUrl: RALEIGH_ACTIVE_ADULT_URL, registerUrl: RALEIGH_ACTIVE_ADULT_URL },
  ] },
  { name: "November", monthIndex: 10, topic: "Stage (Not Age): What Chapter Are You In?", description: "Explore the stage of life you’re in today—and the possibilities, purpose, and next steps that may come next.", sessions: [
    { title: "Senior Center Class", date: "Tuesday, November 3, 2026", time: "10:00 AM – 11:30 AM", location: "Five Points Center for Active Adults, Raleigh", locationUrl: RALEIGH_ACTIVE_ADULT_URL, registerUrl: RALEIGH_ACTIVE_ADULT_URL },
    { title: "Senior Center Class", date: "Wednesday, November 4, 2026", time: "10:00 AM – 11:30 AM", location: "Fuquay-Varina Senior Center", locationUrl: FUQUAY_PROGRAMS_URL, registerUrl: FUQUAY_PROGRAMS_URL },
    { title: "Senior Center Class", date: "Friday, November 6, 2026", time: "9:30 AM – 11:00 AM", location: "Cary Senior Center", locationUrl: CARY_CENTER_URL, registerUrl: CARY_REGISTER_URL },
    { title: "Senior Center Class", date: "Tuesday, November 10, 2026", time: "10:00 AM – 11:30 AM", location: "Anne Gordon Center for Active Adults, Raleigh", locationUrl: RALEIGH_ACTIVE_ADULT_URL, registerUrl: RALEIGH_ACTIVE_ADULT_URL },
    { title: "Senior Center Class", date: "Friday, November 13, 2026", time: "10:00 AM – 11:30 AM", location: "Apex Senior Center, 1483 Beaver Creek Commons Drive", locationUrl: APEX_LOCATION_URL, registerUrl: APEX_LOCATION_URL },
    { title: "Senior Center Class", date: "Friday, November 13, 2026", time: "1:00 PM – 2:30 PM", location: "W.E. Hunt Recreation Center, Holly Springs", locationUrl: HOLLY_SPRINGS_URL, registerUrl: HOLLY_SPRINGS_URL },
  ] },
  { name: "December", monthIndex: 11, topic: "What Happens to All the Stuff? The Truth About Estate Sales", description: "Get a behind-the-scenes look at how estate sales work, what sells, what doesn’t, and how to avoid surprises.", sessions: [
    { title: "Senior Center Class", date: "Tuesday, December 1, 2026", time: "10:00 AM – 11:30 AM", location: "Five Points Center for Active Adults, Raleigh", locationUrl: RALEIGH_ACTIVE_ADULT_URL, registerUrl: RALEIGH_ACTIVE_ADULT_URL },
    { title: "Senior Center Class", date: "Wednesday, December 2, 2026", time: "10:00 AM – 11:30 AM", location: "Fuquay-Varina Senior Center", locationUrl: FUQUAY_PROGRAMS_URL, registerUrl: FUQUAY_PROGRAMS_URL },
    { title: "Senior Center Class", date: "Friday, December 4, 2026", time: "9:30 AM – 11:00 AM", location: "Cary Senior Center", locationUrl: CARY_CENTER_URL, registerUrl: CARY_REGISTER_URL },
    { title: "Senior Center Class", date: "Tuesday, December 8, 2026", time: "10:00 AM – 11:30 AM", location: "Anne Gordon Center for Active Adults, Raleigh", locationUrl: RALEIGH_ACTIVE_ADULT_URL, registerUrl: RALEIGH_ACTIVE_ADULT_URL },
    { title: "Senior Center Class", date: "Friday, December 11, 2026", time: "10:00 AM – 11:30 AM", location: "Apex Senior Center, 1483 Beaver Creek Commons Drive", locationUrl: APEX_LOCATION_URL, registerUrl: APEX_LOCATION_URL },
    { title: "Senior Center Class", date: "Friday, December 11, 2026", time: "1:00 PM – 2:30 PM", location: "W.E. Hunt Recreation Center, Holly Springs", locationUrl: HOLLY_SPRINGS_URL, registerUrl: HOLLY_SPRINGS_URL },
  ] },
];

export default function MonthlyClasses() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const currentMonth = new Date().getMonth();
    const nextMonth = months.findIndex((month) => month.monthIndex >= currentMonth);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional client-only sync to next scheduled month
    setSelected(nextMonth === -1 ? months.length - 1 : nextMonth);
  }, []);

  const active = months[selected];

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4" role="group" aria-label="Choose a month">
        {months.map((month, index) => {
          const isActive = index === selected;
          return (
            <button key={month.name} type="button" onClick={() => setSelected(index)} aria-pressed={isActive}
              className={`rounded-xl px-3 py-3 text-sm font-bold tracking-wide transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A7387] focus-visible:ring-offset-2 ${isActive ? "bg-[#0A7387] text-white shadow-sm" : "border border-gray-200 bg-white text-[#123A5E] hover:border-[#0A7387] hover:text-[#0A7387]"}`}>
              {month.name}
            </button>
          );
        })}
      </div>

      <div key={selected} className="grid gap-6 animate-dropdown">
        <section className="rounded-2xl border border-[#d7a900] bg-[#fffaf0] p-6 shadow-sm sm:p-8" aria-labelledby={`topic-${active.name.toLowerCase()}`}>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#8a6500]">{active.name} class topic</p>
          <h3 id={`topic-${active.name.toLowerCase()}`} className="text-2xl font-bold leading-snug text-[#123A5E] sm:text-3xl">{active.topic}</h3>
          <p className="mt-3 max-w-3xl leading-relaxed text-[#3d3d3d]">{active.description}</p>
        </section>

        {active.sessions.map((session) => (
          <article key={`${session.date}-${session.location}`} className="overflow-hidden rounded-2xl border-t-4 border-[#0A7387] bg-gray-50 shadow-sm">
            <div className="p-8 sm:p-10">
              <span className="mb-4 inline-block rounded-full bg-[#f0fafd] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0A7387]">{active.name} Class</span>
              <h3 className="mb-6 text-2xl font-bold leading-snug text-[#123A5E] sm:text-3xl">{session.title}</h3>
              <dl className="mb-8 grid gap-5 sm:grid-cols-3">
                <div><dt className="mb-0.5 text-xs font-bold uppercase tracking-wider text-[#0A7387]">Date</dt><dd className="text-sm font-semibold text-[#123A5E]">{session.date}</dd></div>
                <div><dt className="mb-0.5 text-xs font-bold uppercase tracking-wider text-[#0A7387]">Time</dt><dd className="text-sm text-[#3d3d3d]">{session.time}</dd></div>
                <div><dt className="mb-0.5 text-xs font-bold uppercase tracking-wider text-[#0A7387]">Location</dt><dd><a href={session.locationUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#0A7387] hover:underline">{session.location}</a></dd></div>
              </dl>
              <a href={session.registerUrl} target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-[#0A7387] px-8 py-3 text-center text-sm font-bold tracking-wider text-white transition-colors hover:bg-[#086475]">REGISTRATION DETAILS</a>
            </div>
          </article>
        ))}

        {active.followingMonthSession && (
          <div className="mt-2">
            <div className="mb-4 flex items-center gap-3" aria-hidden="true">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#0A7387]">Coming up first in October</span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>
            <article className="overflow-hidden rounded-2xl border-t-4 border-[#d7a900] bg-[#fffaf0] shadow-sm">
              <div className="p-8 sm:p-10">
                <span className="mb-4 inline-block rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#8a6500]">Special Cary Class</span>
                <h3 className="mb-6 text-2xl font-bold leading-snug text-[#123A5E] sm:text-3xl">{active.followingMonthSession.title}</h3>
                <dl className="mb-8 grid gap-5 sm:grid-cols-3">
                  <div><dt className="mb-0.5 text-xs font-bold uppercase tracking-wider text-[#0A7387]">Date</dt><dd className="text-sm font-semibold text-[#123A5E]">{active.followingMonthSession.date}</dd></div>
                  <div><dt className="mb-0.5 text-xs font-bold uppercase tracking-wider text-[#0A7387]">Time</dt><dd className="text-sm text-[#3d3d3d]">{active.followingMonthSession.time}</dd></div>
                  <div><dt className="mb-0.5 text-xs font-bold uppercase tracking-wider text-[#0A7387]">Location</dt><dd><a href={active.followingMonthSession.locationUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#0A7387] hover:underline">{active.followingMonthSession.location}</a></dd></div>
                </dl>
                <a href={active.followingMonthSession.registerUrl} target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-[#0A7387] px-8 py-3 text-center text-sm font-bold tracking-wider text-white transition-colors hover:bg-[#086475]">REGISTRATION DETAILS</a>
              </div>
            </article>
          </div>
        )}
      </div>

      <div className="mt-10 rounded-2xl border border-[#0A7387] bg-[#f0fafd] p-6 text-center">
        <p className="text-[#3d3d3d]"><strong className="text-[#123A5E]">Having trouble registering?</strong>{" "}Please contact Freda — she&apos;s happy to help you reserve a seat.</p>
        <div className="mt-3 flex flex-col justify-center gap-2 text-sm font-semibold sm:flex-row sm:gap-6">
          <a href="mailto:freda@milestonemoves.com" className="text-[#0A7387] hover:underline">freda@milestonemoves.com</a>
          <a href="tel:+19198109551" className="text-[#0A7387] hover:underline">919-810-9551</a>
        </div>
      </div>
    </div>
  );
}

