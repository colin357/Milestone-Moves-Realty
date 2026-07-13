"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
  { label: "HOME", href: "/" },
  {
    label: "SERVICES",
    dropdown: [
      { label: "AGING IN PLACE", href: "/services/aging-in-place" },
      { label: "SENIOR LIVING TRANSITIONS", href: "/services/senior-living-transitions" },
      { label: "CAREGIVER SUPPORT", href: "/services/caregiver-support" },
      { label: "DOWNSIZING TIPS", href: "/55-plus-options/downsizing-tips-for-seniors" },
    ],
  },
  { label: "MOVING PLAYBOOK", href: "/moving-playbook" },
  { label: "EMPOWERED AGING", href: "/empowered-aging" },
  { label: "SEMINARS", href: "/seminars" },
  {
    label: "55+ OPTIONS",
    dropdown: [
      { label: "SIMPLIFIED LIVING COMMUNITIES", href: "/55-plus-options/simplified-living-communities" },
      { label: "DOWNSIZING TIPS FOR SENIORS", href: "/55-plus-options/downsizing-tips-for-seniors" },
      { label: "DECLUTTERING MADE EASY", href: "/55-plus-options/decluttering-made-easy" },
      { label: "SENIOR DISCOUNTS", href: "/55-plus-options/senior-discounts" },
      { label: "DONATION LOCATIONS", href: "/55-plus-options/donation-locations" },
    ],
  },
  {
    label: "BUY-SELL-SMILE",
    dropdown: [
      { label: "IS NOW THE BEST TIME TO SELL?", href: "/buy-sell-smile/is-now-the-best-time-to-sell" },
      { label: "PROPERTY VALUE", href: "/buy-sell-smile/property-value" },
      { label: "OFFER IS ACCEPTED", href: "/buy-sell-smile/offer-is-accepted" },
      { label: "PRICING YOUR HOME", href: "/buy-sell-smile/pricing-your-home" },
      { label: "TIPS FOR 1ST TIME BUYERS", href: "/buy-sell-smile/tips-for-1st-time-buyers" },
      { label: "WHAT ARE CLOSING COSTS?", href: "/buy-sell-smile/what-are-closing-costs" },
    ],
  },
  {
    label: "ABOUT",
    dropdown: [
      { label: "MEET THE TEAM", href: "/about/meet-the-team" },
      { label: "WHO WE HELP", href: "/who-we-help" },
      { label: "FAQ", href: "/about/faq" },
      { label: "BLOG", href: "/about/blog" },
      { label: "CONTACT US", href: "/about/contact-us" },
      { label: "REFERRAL PARTNERS", href: "/about/referral-partners" },
      { label: "WHAT IS A CSHP", href: "/about/what-is-a-cshp" },
      { label: "REAL ESTATE TERMS", href: "/about/real-estate-terms" },
    ],
  },
];

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="relative h-14 w-[260px]">
              <Image
                src="/images/cropped-logo-with-kw-on-white-1-2048x964.jpg"
                alt="Milestone Moves Realty Group"
                fill
                style={{ objectFit: "contain", objectPosition: "left center" }}
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.dropdown ? (
                  <button
                    className="flex items-center gap-1 px-3 py-2 text-xs font-bold text-[#3d3d3d] tracking-wider hover:text-[#123A5E] transition-colors"
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  >
                    {item.label}
                    <svg
                      className={`w-3 h-3 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.href!}
                    className="px-3 py-2 text-xs font-bold text-[#3d3d3d] tracking-wider hover:text-[#123A5E] transition-colors block"
                  >
                    {item.label}
                  </Link>
                )}

                {item.dropdown && openDropdown === item.label && (
                  <div className="animate-dropdown absolute top-full left-0 bg-white shadow-xl border-t-2 border-[#123A5E] min-w-[280px] py-2 z-50 rounded-b-lg">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setOpenDropdown(null)}
                        className="block px-5 py-3 text-xs font-bold text-[#3d3d3d] tracking-wider hover:text-[#123A5E] hover:bg-gray-50 transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-[#3d3d3d]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-4 animate-dropdown">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-gray-100 last:border-0">
              {item.dropdown ? (
                <>
                  <button
                    className="flex items-center justify-between w-full py-3 text-xs font-bold text-[#3d3d3d] tracking-wider"
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                  >
                    {item.label}
                    <svg
                      className={`w-3 h-3 transition-transform duration-200 ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="pl-4 pb-2 animate-dropdown">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block py-2 text-xs font-bold text-[#3d3d3d] tracking-wider hover:text-[#123A5E]"
                          onClick={() => setMobileOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href!}
                  className="block py-3 text-xs font-bold text-[#3d3d3d] tracking-wider hover:text-[#123A5E]"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
