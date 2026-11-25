"use client";

import { useState } from "react";

const CARY_CENTER_URL = "https://www.carync.gov/recreation-enjoyment/facilities/senior-center";
const CARY_REGISTER_URL = "https://www.carync.gov/register";
const FUQUAY_PROGRAMS_URL = "https://www.fuquay-varina.org/311/Programs";
const RALEIGH_ACTIVE_ADULT_URL = "https://raleighnc.gov/parks-and-recreation/services/active-adult-program";
const APEX_SENIOR_CENTER_URL = "https://apexnc.org/515/Apex-Senior-Center";
const APEX_LOCATION_URL = "https://www.google.com/maps/search/?api=1&query=1483+Beaver+Creek+Commons+Drive+Apex+NC+27502";
const HOLLY_SPRINGS_URL = "https://www.hollyspringsnc.gov/Directory/Home/DepartmentListing?DID=30";

type ClassInfo = { title: string; date: string; time: string; location: string; locationUrl: string; registerUrl: string };

type MonthInfo = {
  name: string;
  year: number;
  monthIndex: number;
  topic: string;
  subtitle?: string;
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
  { name: "September", year: 2026, monthIndex: 8, topic: "I’m Dead. Now What? — and trust me, you’ll thank me later!", description: "Put your vital information, wishes, and important details in one place so your loved ones have clarity when it matters most.", sessions: [
    { title: "Senior Center Class", date: "Tuesday, September 1, 2026", time: "10:00 AM – 11:30 AM", location: "Five Points Center for Active Adults, Raleigh", locationUrl: RALEIGH_ACTIVE_ADULT_URL, registerUrl: RALEIGH_ACTIVE_ADULT_URL },
    { title: "Fuquay-Varina Senior Center", date: "Wednesday, September 2, 2026", time: "10:00 AM – 11:30 AM", location: "Fuquay-Varina Senior Center", locationUrl: FUQUAY_PROGRAMS_URL, registerUrl: FUQUAY_PROGRAMS_URL },
    { title: "Senior Center Class", date: "Tuesday, September 8, 2026", time: "10:00 AM – 11:30 AM", location: "Anne Gordon Center for Active Adults, Raleigh", locationUrl: RALEIGH_ACTIVE_ADULT_URL, registerUrl: RALEIGH_ACTIVE_ADULT_URL },
    { title: "Senior Center Class", date: "Friday, September 11, 2026", time: "10:00 AM – 11:30 AM", location: "Milestone Moves Office, 1483 Beaver Creek Commons Drive, Apex", locationUrl: APEX_LOCATION_URL, registerUrl: APEX_LOCATION_URL },
    { title: "Senior Center Class", date: "Friday, September 11, 2026", time: "1:00 PM – 2:30 PM", location: "W.E. Hunt Recreation Center, Holly Springs", locationUrl: HOLLY_SPRINGS_URL, registerUrl: HOLLY_SPRINGS_URL },
  ], followingMonthSession: octoberCarySession },
  { name: "October", year: 2026, monthIndex: 9, topic: "One Move, Many Futures: Understanding Continuing Care Retirement Communities", description: "We’ll break down the structure, contracts, and levels of care so you can make informed decisions with confidence.", sessions: [
    octoberCarySession,
    { title: "Senior Center Class", date: "Tuesday, October 6, 2026", time: "10:00 AM – 11:30 AM", location: "Five Points Center for Active Adults, Raleigh", locationUrl: RALEIGH_ACTIVE_ADULT_URL, registerUrl: RALEIGH_ACTIVE_ADULT_URL },
    { title: "Fuquay-Varina Senior Center", date: "Wednesday, October 7, 2026", time: "10:00 AM – 11:30 AM", location: "Fuquay-Varina Senior Center", locationUrl: FUQUAY_PROGRAMS_URL, registerUrl: FUQUAY_PROGRAMS_URL },
    { title: "Senior Center Class", date: "Friday, October 9, 2026", time: "10:00 AM – 11:30 AM", location: "Apex Senior Center, 1483 Beaver Creek Commons Drive", locationUrl: APEX_LOCATION_URL, registerUrl: APEX_LOCATION_URL },
    { title: "Senior Center Class", date: "Friday, October 9, 2026", time: "1:00 PM – 2:30 PM", location: "W.E. Hunt Recreation Center, Holly Springs", locationUrl: HOLLY_SPRINGS_URL, registerUrl: HOLLY_SPRINGS_URL },
    { title: "Senior Center Class", date: "Tuesday, October 13, 2026", time: "10:00 AM – 11:30 AM", location: "Anne Gordon Center for Active Adults, Raleigh", locationUrl: RALEIGH_ACTIVE_ADULT_URL, registerUrl: RALEIGH_ACTIVE_ADULT_URL },
  ] },
  { name: "November", year: 2026, monthIndex: 10, topic: "Stage (Not Age): What Chapter Are You In?", description: "Explore the stage of life you’re in today—and the possibilities, purpose, and next steps that may come next.", sessions: [
    { title: "Senior Center Class", date: "Tuesday, November 3, 2026", time: "10:00 AM – 11:30 AM", location: "Five Points Center for Active Adults, Raleigh", locationUrl: RALEIGH_ACTIVE_ADULT_URL, registerUrl: RALEIGH_ACTIVE_ADULT_URL },
    { title: "Fuquay-Varina Senior Center", date: "Wednesday, November 4, 2026", time: "10:00 AM – 11:30 AM", location: "Fuquay-Varina Senior Center", locationUrl: FUQUAY_PROGRAMS_URL, registerUrl: FUQUAY_PROGRAMS_URL },
    { title: "Senior Center Class", date: "Friday, November 6, 2026", time: "9:30 AM – 11:00 AM", location: "Cary Senior Center", locationUrl: CARY_CENTER_URL, registerUrl: CARY_REGISTER_URL },
    { title: "Senior Center Class", date: "Tuesday, November 10, 2026", time: "10:00 AM – 11:30 AM", location: "Anne Gordon Center for Active Adults, Raleigh", locationUrl: RALEIGH_ACTIVE_ADULT_URL, registerUrl: RALEIGH_ACTIVE_ADULT_URL },
    { title: "Apex Office Class", date: "Friday, November 13, 2026", time: "10:00 AM – 11:30 AM", location: "Keller Williams Legacy Office, 1483 Beaver Creek Commons Drive, Apex, NC", locationUrl: APEX_LOCATION_URL, registerUrl: "https://cmuia9ng4000jv7deul9rq0dx.zapier.app/" },
    { title: "Senior Center Class", date: "Friday, November 13, 2026", time: "1:00 PM – 2:30 PM", location: "W.E. Hunt Recreation Center, Holly Springs", locationUrl: HOLLY_SPRINGS_URL, registerUrl: HOLLY_SPRINGS_URL },
  ] },
  { name: "December", year: 2026, monthIndex: 11, topic: "What Happens to All the Stuff? The Truth About Estate Sales", description: "Get a behind-the-scenes look at how estate sales work, what sells, what doesn’t, and how to avoid surprises.", sessions: [
    { title: "Senior Center Class", date: "Tuesday, December 1, 2026", time: "10:00 AM – 11:30 AM", location: "Five Points Center for Active Adults, Raleigh", locationUrl: RALEIGH_ACTIVE_ADULT_URL, registerUrl: RALEIGH_ACTIVE_ADULT_URL },
    { title: "Fuquay-Varina Senior Center", date: "Wednesday, December 2, 2026", time: "10:00 AM – 11:30 AM", location: "Fuquay-Varina Senior Center", locationUrl: FUQUAY_PROGRAMS_URL, registerUrl: FUQUAY_PROGRAMS_URL },
    { title: "Senior Center Class", date: "Friday, December 4, 2026", time: "9:30 AM – 11:00 AM", location: "Cary Senior Center", locationUrl: CARY_CENTER_URL, registerUrl: CARY_REGISTER_URL },
    { title: "Senior Center Class", date: "Tuesday, December 8, 2026", time: "10:00 AM – 11:30 AM", location: "Anne Gordon Center for Active Adults, Raleigh", locationUrl: RALEIGH_ACTIVE_ADULT_URL, registerUrl: RALEIGH_ACTIVE_ADULT_URL },
    { title: "Apex Office Class", date: "Friday, December 11, 2026", time: "10:00 AM – 11:30 AM", location: "Keller Williams Legacy Office, 1483 Beaver Creek Commons Drive, Apex, NC", locationUrl: APEX_LOCATION_URL, registerUrl: "https://cmuia9ng4000jv7deul9rq0dx.zapier.app/" },
    { title: "Senior Center Class", date: "Friday, December 11, 2026", time: "1:00 PM – 2:30 PM", location: "W.E. Hunt Recreation Center, Holly Springs", locationUrl: HOLLY_SPRINGS_URL, registerUrl: HOLLY_SPRINGS_URL },
  ] },
  {
    name: "January", year: 2027, monthIndex: 0,
    topic: "Is Your Home Ready for You?",
    subtitle: "The Conversation About Aging in Place",
    description: "You love your home, but will it keep supporting you? Explore safety, simple improvements, independence, and when other options may make sense.",
    sessions: [
      { title: "Senior Center Class", date: "Tuesday, January 5, 2027", time: "10:00 AM – 11:30 AM", location: "Five Points Center for Active Adults, Raleigh", locationUrl: RALEIGH_ACTIVE_ADULT_URL, registerUrl: RALEIGH_ACTIVE_ADULT_URL },
      { title: "Fuquay-Varina Senior Center", date: "Wednesday, January 6, 2027", time: "10:00 AM – 11:30 AM", location: "Fuquay-Varina Senior Center", locationUrl: FUQUAY_PROGRAMS_URL, registerUrl: FUQUAY_PROGRAMS_URL },
      { title: "Senior Center Class", date: "Friday, January 8, 2027", time: "10:00 AM – 11:30 AM", location: "Apex Senior Center, 63 Hunter Street, Apex, NC", locationUrl: APEX_SENIOR_CENTER_URL, registerUrl: APEX_SENIOR_CENTER_URL },
      { title: "Senior Center Class", date: "Friday, January 8, 2027", time: "1:00 PM – 2:30 PM", location: "W.E. Hunt Recreation Center, Holly Springs", locationUrl: HOLLY_SPRINGS_URL, registerUrl: HOLLY_SPRINGS_URL },
      { title: "Senior Center Class", date: "Monday, January 11, 2027", time: "11:00 AM – 12:30 PM", location: "Cary Senior Center", locationUrl: CARY_CENTER_URL, registerUrl: CARY_REGISTER_URL },
      { title: "Senior Center Class", date: "Tuesday, January 12, 2027", time: "10:00 AM – 11:30 AM", location: "Anne Gordon Center for Active Adults, Raleigh", locationUrl: RALEIGH_ACTIVE_ADULT_URL, registerUrl: RALEIGH_ACTIVE_ADULT_URL },
    ],
  },
  {
    name: "February", year: 2027, monthIndex: 1,
    topic: "Independent Living: What's the Buzz?",
    subtitle: "Exploring Senior Living Without the Pressure",
    description: "Retirement living has changed. Discover what today's communities offer, separate myths from facts, and learn how to explore your options before a move becomes urgent.",
    sessions: [
      { title: "Senior Center Class", date: "Monday, February 1, 2027", time: "11:00 AM – 12:30 PM", location: "Cary Senior Center", locationUrl: CARY_CENTER_URL, registerUrl: CARY_REGISTER_URL },
      { title: "Senior Center Class", date: "Tuesday, February 2, 2027", time: "10:00 AM – 11:30 AM", location: "Five Points Center for Active Adults, Raleigh", locationUrl: RALEIGH_ACTIVE_ADULT_URL, registerUrl: RALEIGH_ACTIVE_ADULT_URL },
      { title: "Fuquay-Varina Senior Center", date: "Wednesday, February 3, 2027", time: "10:00 AM – 11:30 AM", location: "Fuquay-Varina Senior Center", locationUrl: FUQUAY_PROGRAMS_URL, registerUrl: FUQUAY_PROGRAMS_URL },
      { title: "Senior Center Class", date: "Friday, February 5, 2027", time: "9:30 AM – 11:00 AM", location: "Cary Senior Center", locationUrl: CARY_CENTER_URL, registerUrl: CARY_REGISTER_URL },
      { title: "Senior Center Class", date: "Tuesday, February 9, 2027", time: "10:00 AM – 11:30 AM", location: "Anne Gordon Center for Active Adults, Raleigh", locationUrl: RALEIGH_ACTIVE_ADULT_URL, registerUrl: RALEIGH_ACTIVE_ADULT_URL },
      { title: "Senior Center Class", date: "Friday, February 12, 2027", time: "10:00 AM – 11:30 AM", location: "Apex Senior Center, 63 Hunter Street, Apex, NC", locationUrl: APEX_SENIOR_CENTER_URL, registerUrl: APEX_SENIOR_CENTER_URL },
      { title: "Senior Center Class", date: "Friday, February 12, 2027", time: "1:00 PM – 2:30 PM", location: "W.E. Hunt Recreation Center, Holly Springs", locationUrl: HOLLY_SPRINGS_URL, registerUrl: HOLLY_SPRINGS_URL },
    ],
  },
  {
    name: "March", year: 2027, monthIndex: 2,
    topic: "Selling Your Home in Today's Market",
    subtitle: "What Homeowners 60+ Should Know",
    description: "Thinking about a future move? Learn what buyers want, how timing affects your sale, and why planning ahead can mean better choices and less stress.",
    sessions: [
      { title: "Senior Center Class", date: "Tuesday, March 2, 2027", time: "10:00 AM – 11:30 AM", location: "Five Points Center for Active Adults, Raleigh", locationUrl: RALEIGH_ACTIVE_ADULT_URL, registerUrl: RALEIGH_ACTIVE_ADULT_URL },
      { title: "Fuquay-Varina Senior Center", date: "Wednesday, March 3, 2027", time: "10:00 AM – 11:30 AM", location: "Fuquay-Varina Senior Center", locationUrl: FUQUAY_PROGRAMS_URL, registerUrl: FUQUAY_PROGRAMS_URL },
      { title: "Senior Center Class", date: "Monday, March 8, 2027", time: "11:00 AM – 12:30 PM", location: "Cary Senior Center", locationUrl: CARY_CENTER_URL, registerUrl: CARY_REGISTER_URL },
      { title: "Senior Center Class", date: "Tuesday, March 9, 2027", time: "10:00 AM – 11:30 AM", location: "Anne Gordon Center for Active Adults, Raleigh", locationUrl: RALEIGH_ACTIVE_ADULT_URL, registerUrl: RALEIGH_ACTIVE_ADULT_URL },
      { title: "Senior Center Class", date: "Friday, March 12, 2027", time: "10:00 AM – 11:30 AM", location: "Apex Senior Center, 63 Hunter Street, Apex, NC", locationUrl: APEX_SENIOR_CENTER_URL, registerUrl: APEX_SENIOR_CENTER_URL },
      { title: "Senior Center Class", date: "Friday, March 12, 2027", time: "1:00 PM – 2:30 PM", location: "W.E. Hunt Recreation Center, Holly Springs", locationUrl: HOLLY_SPRINGS_URL, registerUrl: HOLLY_SPRINGS_URL },
    ],
  },
  {
    name: "April", year: 2027, monthIndex: 3,
    topic: "Right-Sizing Your Life",
    subtitle: "It's About the Right Space, Not Less Space",
    description: "A home should fit the life you want now. Compare staying put, moving smaller, or choosing a retirement community, and identify the questions worth asking first.",
    sessions: [
      { title: "Senior Center Class", date: "Friday, April 2, 2027", time: "9:30 AM – 11:00 AM", location: "Cary Senior Center", locationUrl: CARY_CENTER_URL, registerUrl: CARY_REGISTER_URL },
      { title: "Senior Center Class", date: "Tuesday, April 6, 2027", time: "10:00 AM – 11:30 AM", location: "Five Points Center for Active Adults, Raleigh", locationUrl: RALEIGH_ACTIVE_ADULT_URL, registerUrl: RALEIGH_ACTIVE_ADULT_URL },
      { title: "Fuquay-Varina Senior Center", date: "Wednesday, April 7, 2027", time: "10:00 AM – 11:30 AM", location: "Fuquay-Varina Senior Center", locationUrl: FUQUAY_PROGRAMS_URL, registerUrl: FUQUAY_PROGRAMS_URL },
      { title: "Senior Center Class", date: "Friday, April 9, 2027", time: "10:00 AM – 11:30 AM", location: "Apex Senior Center, 63 Hunter Street, Apex, NC", locationUrl: APEX_SENIOR_CENTER_URL, registerUrl: APEX_SENIOR_CENTER_URL },
      { title: "Senior Center Class", date: "Friday, April 9, 2027", time: "1:00 PM – 2:30 PM", location: "W.E. Hunt Recreation Center, Holly Springs", locationUrl: HOLLY_SPRINGS_URL, registerUrl: HOLLY_SPRINGS_URL },
      { title: "Senior Center Class", date: "Monday, April 12, 2027", time: "11:00 AM – 12:30 PM", location: "Cary Senior Center", locationUrl: CARY_CENTER_URL, registerUrl: CARY_REGISTER_URL },
      { title: "Senior Center Class", date: "Tuesday, April 13, 2027", time: "10:00 AM – 11:30 AM", location: "Anne Gordon Center for Active Adults, Raleigh", locationUrl: RALEIGH_ACTIVE_ADULT_URL, registerUrl: RALEIGH_ACTIVE_ADULT_URL },
    ],
  },
  {
    name: "May", year: 2027, monthIndex: 4,
    topic: "Decluttering Without the Drama",
    subtitle: "More Space for Life, One Room at a Time",
    description: "Keep what matters and let go of what no longer serves you. Learn practical ways to reduce clutter, preserve memories, and make home easier to enjoy.",
    sessions: [
      { title: "Senior Center Class", date: "Tuesday, May 4, 2027", time: "10:00 AM – 11:30 AM", location: "Five Points Center for Active Adults, Raleigh", locationUrl: RALEIGH_ACTIVE_ADULT_URL, registerUrl: RALEIGH_ACTIVE_ADULT_URL },
      { title: "Fuquay-Varina Senior Center", date: "Wednesday, May 5, 2027", time: "10:00 AM – 11:30 AM", location: "Fuquay-Varina Senior Center", locationUrl: FUQUAY_PROGRAMS_URL, registerUrl: FUQUAY_PROGRAMS_URL },
      { title: "Senior Center Class", date: "Tuesday, May 11, 2027", time: "10:00 AM – 11:30 AM", location: "Anne Gordon Center for Active Adults, Raleigh", locationUrl: RALEIGH_ACTIVE_ADULT_URL, registerUrl: RALEIGH_ACTIVE_ADULT_URL },
      { title: "Senior Center Class", date: "Friday, May 14, 2027", time: "10:00 AM – 11:30 AM", location: "Apex Senior Center, 63 Hunter Street, Apex, NC", locationUrl: APEX_SENIOR_CENTER_URL, registerUrl: APEX_SENIOR_CENTER_URL },
      { title: "Senior Center Class", date: "Friday, May 14, 2027", time: "1:00 PM – 2:30 PM", location: "W.E. Hunt Recreation Center, Holly Springs", locationUrl: HOLLY_SPRINGS_URL, registerUrl: HOLLY_SPRINGS_URL },
    ],
  },
];

export default function MonthlyClasses() {
  // Only show sessions that have not yet happened. Past months disappear automatically.
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const upcomingMonths = months
    .map((month) => ({
      ...month,
      sessions: month.sessions.filter((session) => new Date(session.date + " 12:00:00") >= today),
    }))
    .filter((month) => month.sessions.length > 0);
  const [selected, setSelected] = useState(0);
  const active = upcomingMonths[selected];

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4" role="group" aria-label="Choose a month">
        {upcomingMonths.map((month, index) => {
          const isActive = index === selected;
          return (
            <button key={`${month.year}-${month.monthIndex}`} type="button" onClick={() => setSelected(index)} aria-pressed={isActive}
              className={`rounded-xl px-3 py-3 text-sm font-bold tracking-wide transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A7387] focus-visible:ring-offset-2 ${isActive ? "bg-[#0A7387] text-white shadow-sm" : "border border-gray-200 bg-white text-[#123A5E] hover:border-[#0A7387] hover:text-[#0A7387]"}`}>
              {month.name} {month.year}
            </button>
          );
        })}
      </div>

      {!active && <p className="mb-10 text-center text-[#123A5E]">New class dates are being finalized. Contact Freda for upcoming workshops and registration details.</p>}
      {active && <div key={selected} className="grid gap-4 animate-dropdown">
        <section className="rounded-2xl border border-[#d7a900] bg-[#fffaf0] p-6 shadow-sm sm:p-8" aria-labelledby={`topic-${active.name.toLowerCase()}`}>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#8a6500]">{active.name} {active.year} class topic</p>
          <h3 id={`topic-${active.name.toLowerCase()}`} className="text-2xl font-bold leading-snug text-[#123A5E] sm:text-3xl">{active.topic}</h3>
          {active.subtitle && <p className="mt-2 text-lg font-semibold text-[#123A5E]">{active.subtitle}</p>}
          <p className="mt-3 max-w-3xl leading-relaxed text-[#3d3d3d]">{active.description}</p>
        </section>

        {active.sessions.map((session) => (
          <article key={`${session.date}-${session.location}`} className="overflow-hidden rounded-2xl border-t-4 border-[#0A7387] bg-gray-50 shadow-sm">
            <div className="p-4 sm:p-5">
              <span className="mb-2 inline-block rounded-full bg-[#f0fafd] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0A7387]">{active.name} Class</span>
              <h3 className="mb-3 text-2xl font-bold leading-snug text-[#123A5E] sm:text-3xl">{session.title}</h3>
              <dl className="mb-4 grid gap-3 sm:grid-cols-3">
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
              <div className="p-4 sm:p-5">
                <span className="mb-2 inline-block rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#8a6500]">Special Cary Class</span>
                <h3 className="mb-3 text-2xl font-bold leading-snug text-[#123A5E] sm:text-3xl">{active.followingMonthSession.title}</h3>
                <dl className="mb-4 grid gap-3 sm:grid-cols-3">
                  <div><dt className="mb-0.5 text-xs font-bold uppercase tracking-wider text-[#0A7387]">Date</dt><dd className="text-sm font-semibold text-[#123A5E]">{active.followingMonthSession.date}</dd></div>
                  <div><dt className="mb-0.5 text-xs font-bold uppercase tracking-wider text-[#0A7387]">Time</dt><dd className="text-sm text-[#3d3d3d]">{active.followingMonthSession.time}</dd></div>
                  <div><dt className="mb-0.5 text-xs font-bold uppercase tracking-wider text-[#0A7387]">Location</dt><dd><a href={active.followingMonthSession.locationUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#0A7387] hover:underline">{active.followingMonthSession.location}</a></dd></div>
                </dl>
                <a href={active.followingMonthSession.registerUrl} target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-[#0A7387] px-8 py-3 text-center text-sm font-bold tracking-wider text-white transition-colors hover:bg-[#086475]">REGISTRATION DETAILS</a>
              </div>
            </article>
          </div>
        )}
      </div>}

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

