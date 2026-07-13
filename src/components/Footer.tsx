import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#123A5E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo + tagline */}
          <div className="flex flex-col items-start gap-4">
            <div className="bg-white rounded-xl px-4 py-2">
              <div className="relative h-12 w-[220px]">
                <Image
                  src="/images/cropped-logo-with-kw-on-white-1-2048x964.jpg"
                  alt="Milestone Moves Realty Group"
                  fill
                  style={{ objectFit: "contain", objectPosition: "left center" }}
                />
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Serving the 55+ community with care, clarity &amp; confidence in the Triangle area of North Carolina.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold tracking-wider text-sm mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "Moving Playbook", href: "/moving-playbook" },
                { label: "Empowered Aging", href: "/empowered-aging" },
                { label: "55+ Options", href: "/55-plus-options/simplified-living-communities" },
                { label: "Seminars", href: "/seminars" },
                { label: "Meet the Team", href: "/about/meet-the-team" },
                { label: "Contact Us", href: "/about/contact-us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold tracking-wider text-sm mb-4">CONTACT US</h3>
            <address className="not-italic text-sm text-gray-300 space-y-2">
              <p>Freda Hamlett</p>
              <p>Milestone Moves Realty Group</p>
              <p>1483 Beaver Creek Commons Dr</p>
              <p>Apex, NC 27502</p>
              <p className="pt-2">
                <a href="mailto:info@milestonemovesrealty.com" className="hover:text-white transition-colors">
                  info@milestonemovesrealty.com
                </a>
              </p>
              <p>
                <a href="tel:+19198109551" className="hover:text-white transition-colors">
                  919-810-9551
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-blue-900 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Milestone Moves Realty Group. All rights reserved.</p>
          <p>Serving the Triangle, NC</p>
        </div>
      </div>
    </footer>
  );
}
