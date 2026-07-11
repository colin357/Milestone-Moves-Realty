import PageLayout from "@/components/PageLayout";

export const metadata = {
  title: "Contact Us | Milestone Moves Realty Group",
  description: "Get in touch with Milestone Moves Realty Group in Apex, NC.",
};

export default function ContactUs() {
  return (
    <PageLayout
      title="Contact Us"
      subtitle="We'd love to hear from you. Reach out today — no pressure, just conversation."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about/meet-the-team" }]}
    >
      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold text-[#123A5E] mb-6">Get in Touch</h2>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-[#0A7387] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-[#123A5E]">Office Address</p>
                <p className="text-[#3d3d3d]">1483 Beaver Creek Commons Dr<br />Apex, NC 27502</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-[#0A7387] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-[#123A5E]">Email</p>
                <a href="mailto:info@milestonemovesrealty.com" className="text-[#0A7387] hover:underline">
                  info@milestonemovesrealty.com
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-[#0A7387] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-[#123A5E]">Call or Text Our Team</p>
                <ul className="text-[#3d3d3d] space-y-1 mt-1">
                  <li>
                    Freda Hamlett ·{" "}
                    <a href="tel:+19198109551" className="text-[#0A7387] font-semibold hover:underline">919-810-9551</a>
                  </li>
                  <li>
                    Robin ·{" "}
                    <a href="tel:+19197463604" className="text-[#0A7387] font-semibold hover:underline">919-746-3604</a>
                  </li>
                  <li>
                    Heather ·{" "}
                    <a href="tel:+19196555424" className="text-[#0A7387] font-semibold hover:underline">919-655-5424</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-[#123A5E] text-white rounded-xl p-5">
            <h3 className="font-bold mb-2">Service Area</h3>
            <p className="text-gray-200 text-sm">
              We proudly serve the entire Triangle area including Apex, Cary, Chapel Hill, Clayton, Durham, Garner,
              Hillsborough, Raleigh, Wake Forest, and Zebulon.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold text-[#123A5E] mb-6">Send a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-[#3d3d3d] mb-1">Full Name *</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[#3d3d3d] focus:outline-none focus:border-[#0A7387] focus:ring-1 focus:ring-[#0A7387]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#3d3d3d] mb-1">Email Address *</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[#3d3d3d] focus:outline-none focus:border-[#0A7387] focus:ring-1 focus:ring-[#0A7387]"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#3d3d3d] mb-1">Phone Number</label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[#3d3d3d] focus:outline-none focus:border-[#0A7387] focus:ring-1 focus:ring-[#0A7387]"
                placeholder="(555) 000-0000"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#3d3d3d] mb-1">How Can We Help?</label>
              <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[#3d3d3d] focus:outline-none focus:border-[#0A7387] focus:ring-1 focus:ring-[#0A7387]">
                <option value="">Select a topic...</option>
                <option>Buying a Home</option>
                <option>Selling My Home</option>
                <option>Exploring 55+ Communities</option>
                <option>Downsizing Consultation</option>
                <option>General Question</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#3d3d3d] mb-1">Message *</label>
              <textarea
                rows={5}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[#3d3d3d] focus:outline-none focus:border-[#0A7387] focus:ring-1 focus:ring-[#0A7387]"
                placeholder="Tell us a bit about your situation..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#0A7387] hover:bg-[#086475] text-white font-bold py-4 rounded-full transition-colors text-sm tracking-wider"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </PageLayout>
  );
}
