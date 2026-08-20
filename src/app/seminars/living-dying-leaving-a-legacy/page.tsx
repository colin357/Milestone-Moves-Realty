import Link from "next/link";

export const metadata = {
  title: "Living, Dying & Leaving a Legacy | Milestone Moves Realty Group",
  description:
    "A practical, compassionate guide to living well, planning wisely, and leaving your family a clear roadmap.",
};

const roadMarkers = [
  { number: "01", title: "Living", text: "Protect the life you are living now and name what matters most." },
  { number: "02", title: "Planning", text: "Prepare with purpose before harder decisions become urgent." },
  { number: "03", title: "Legacy", text: "Leave meaning, values, and guidance—not confusion." },
  { number: "04", title: "Action", text: "Take manageable steps with confidence and the right support." },
  { number: "05", title: "Peace", text: "Give the people you love a kinder, clearer path forward." },
];

const conversations = [
  { title: "Health care wishes", text: "Choose who can speak for you and make your wishes clear before a hospital hallway becomes the meeting place." },
  { title: "Money and bills", text: "Document where accounts are held, how bills are paid, and who can act if you cannot." },
  { title: "Home and belongings", text: "Decide what should stay in the family, what can be released, and which meaningful items need their stories preserved." },
  { title: "Digital life", text: "Create secure guidance for devices, passwords, subscriptions, photos, and legacy contacts." },
  { title: "Final wishes", text: "Record service preferences, people to notify, and the personal touches that matter to you." },
];

export default function LivingDyingLeavingALegacy() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[#123A5E] px-4 py-20 text-white sm:py-24">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#2BB8D3]/15" aria-hidden="true" />
        <div className="relative mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#2BB8D3]">Empowered Aging Seminar</p>
          <h1 className="max-w-4xl text-4xl font-black leading-tight sm:text-6xl">Living, Dying &amp; Leaving a Legacy</h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-gray-200">A practical guide to living well, planning wisely, and leaving with peace of mind.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/seminars" className="rounded-full bg-[#0A7387] px-8 py-3 text-center text-sm font-bold tracking-wider text-white transition-colors hover:bg-[#086475]">VIEW SEMINAR CALENDAR</Link>
            <Link href="/about/contact-us" className="rounded-full border border-white/40 px-8 py-3 text-center text-sm font-bold tracking-wider text-white transition-colors hover:bg-white/10">BRING THIS SEMINAR TO YOUR GROUP</Link>
          </div>
        </div>
      </section>

      <section className="bg-[#0A7387] px-4 py-10 text-center text-white">
        <p className="mx-auto max-w-3xl text-2xl font-bold leading-relaxed sm:text-3xl">Clarity before chaos protects your voice, your family, and your dignity.</p>
      </section>

      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#0A7387]">The Roadmap</p>
            <h2 className="text-3xl font-bold text-[#123A5E] sm:text-4xl">Five road markers from intention to peace</h2>
            <p className="mt-4 leading-relaxed text-[#3d3d3d]">Planning is not about being ready to die. It is about being ready to live without leaving the people you love a scavenger hunt.</p>
          </div>
          <ol className="grid gap-5 md:grid-cols-5">
            {roadMarkers.map((marker) => (
              <li key={marker.number} className="border-t-4 border-[#0A7387] bg-gray-50 p-6">
                <span className="text-sm font-black tracking-widest text-[#0A7387]">{marker.number}</span>
                <h3 className="mt-3 text-xl font-bold text-[#123A5E]">{marker.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#3d3d3d]">{marker.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#0A7387]">Start With Your Voice</p>
            <h2 className="text-3xl font-bold text-[#123A5E] sm:text-4xl">Five conversations that prevent complicated crises</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {conversations.map((conversation, index) => (
              <article key={conversation.title} className={`rounded-2xl bg-white p-7 shadow-sm ${index === conversations.length - 1 ? "md:col-span-2" : ""}`}>
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#0A7387] font-black text-white">{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-bold text-[#123A5E]">{conversation.title}</h3>
                    <p className="mt-2 leading-relaxed text-[#3d3d3d]">{conversation.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-[#123A5E] p-8 text-white sm:p-10">
            <p className="text-sm font-bold uppercase tracking-widest text-[#2BB8D3]">The One-Binder System</p>
            <h2 className="mt-3 text-3xl font-bold">One place. One roadmap. Fewer frantic phone calls.</h2>
            <p className="mt-5 leading-relaxed text-gray-200">Bring together legal, financial, home, medical, final-wishes, and secure digital-access information. A plan needs names, locations, and current documents—not just good intentions.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-8 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-widest text-[#0A7387]">Your 30-Day Starter Plan</p>
            <h2 className="mt-3 text-3xl font-bold text-[#123A5E]">Small steps beat grand intentions.</h2>
            <ol className="mt-5 space-y-3 text-[#3d3d3d]">
              <li><strong className="text-[#123A5E]">Gather:</strong> find one important document.</li>
              <li><strong className="text-[#123A5E]">Name:</strong> write down one trusted decision maker.</li>
              <li><strong className="text-[#123A5E]">Talk:</strong> schedule one conversation.</li>
              <li><strong className="text-[#123A5E]">Create:</strong> begin your binder or secure roadmap.</li>
              <li><strong className="text-[#123A5E]">Review:</strong> keep plans current, valid, and findable.</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-[#0A7387] px-4 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Choose your next right step</h2>
          <p className="mt-4 text-lg opacity-90">You do not have to solve everything today. One clear conversation and one manageable task are enough to begin.</p>
          <Link href="/about/contact-us" className="mt-8 inline-block rounded-full bg-[#123A5E] px-10 py-4 text-sm font-bold tracking-wider text-white transition-colors hover:bg-[#0D2942]">START A CONVERSATION</Link>
        </div>
      </section>
    </div>
  );
}
