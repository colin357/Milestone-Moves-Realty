import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/Logo";

const cities = [
  { name: "Apex", slug: "apex", image: "/images/cities/apex.jpg" },
  { name: "Cary", slug: "cary", image: "/images/cities/cary.jpg" },
  { name: "Chapel Hill", slug: "chapel-hill", image: "/images/cities/chapel-hill.jpg" },
  { name: "Clayton", slug: "clayton", image: "/images/cities/clayton.jpg" },
  { name: "Durham", slug: "durham", image: "/images/cities/durham.jpg" },
  { name: "Garner", slug: "garner", image: "/images/cities/garner.jpg" },
  { name: "Hillsborough", slug: "hillsborough", image: "/images/cities/hillsborough.jpg" },
  { name: "Raleigh", slug: "raleigh", image: "/images/cities/raleigh.jpg" },
  { name: "Wake Forest", slug: "wake-forest", image: "/images/cities/wake-forest.jpg" },
  { name: "Zebulon", slug: "zebulon", image: "/images/cities/zebulon.jpg" },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#1C2B5E] text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2BB8D3] to-transparent" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Logo variant="white" className="h-20 w-auto" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Serving the 55+ Community with<br />
            <span className="text-[#2BB8D3]">Care, Clarity &amp; Confidence</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-10">
            At <strong className="text-white">Milestone Moves Realty Group</strong>, we specialize in helping adults
            55 and better navigate one of life&apos;s most important transitions — finding the right home for the next chapter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about/contact-us"
              className="bg-[#2BB8D3] hover:bg-[#1fa3bd] text-white font-bold px-8 py-4 rounded-full transition-colors text-sm tracking-wider"
            >
              GET IN TOUCH
            </Link>
            <Link
              href="/moving-playbook"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-[#1C2B5E] text-white font-bold px-8 py-4 rounded-full transition-colors text-sm tracking-wider"
            >
              THE MOVING PLAYBOOK
            </Link>
          </div>
        </div>
      </section>

      {/* About / Intro */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#3d3d3d] mb-6">
            Serving the 55+ Community with Care, Clarity &amp; Confidence
          </h2>
          <p className="text-[#3d3d3d] mb-4 leading-relaxed">
            At <strong>Milestone Moves Realty Group</strong>, we specialize in helping adults 55 and better navigate
            one of life&apos;s most important transitions — finding the right home for the next chapter.
          </p>
          <p className="text-[#3d3d3d] mb-8 leading-relaxed">
            We understand that this move is about far more than real estate. It&apos;s about lifestyle, comfort, health,
            financial peace of mind, and staying connected to the people and activities you love. That&apos;s why our
            approach begins with <strong>education</strong>. We take the time to listen, answer questions, explain
            options, and create a personalized plan that fits your goals, your timeline, and your future.
          </p>

          <h3 className="text-xl font-bold text-[#3d3d3d] mb-4">A Smooth Transition, Guided by Experts</h3>
          <p className="text-[#3d3d3d] mb-3 leading-relaxed">Whether you are:</p>
          <ul className="list-disc list-inside text-[#3d3d3d] mb-6 space-y-2 ml-2">
            <li>Exploring <strong>55+ communities</strong></li>
            <li>Downsizing to simplify life</li>
            <li>Considering <strong>independent living</strong></li>
            <li>Or helping a loved one prepare for the next stage of housing</li>
          </ul>
          <p className="text-[#3d3d3d] mb-8 leading-relaxed">
            Our experienced team provides step-by-step guidance, trusted resources, and compassionate support throughout
            the entire process. We work closely with families, financial advisors, senior service providers, and
            community partners to ensure every detail is handled with care and respect.
          </p>

          <h3 className="text-xl font-bold text-[#3d3d3d] mb-4">Education First — Always</h3>
          <p className="text-[#3d3d3d] mb-3 leading-relaxed">
            We believe informed decisions create confident transitions. Through personalized consultations, workshops,
            and one-on-one guidance, we help our clients fully understand:
          </p>
          <ul className="list-disc list-inside text-[#3d3d3d] mb-6 space-y-2 ml-2">
            <li>Housing and lifestyle options</li>
            <li>Timing and financial considerations</li>
            <li>Market conditions and home values</li>
            <li>How to prepare their current home for sale</li>
          </ul>
          <p className="text-[#3d3d3d] mb-10 leading-relaxed">
            Our goal is to remove uncertainty, reduce stress, and make each transition as smooth and empowering as possible.
          </p>

          <h3 className="text-xl font-bold text-[#3d3d3d] mb-4">More Than a Move — It&apos;s a New Beginning</h3>
          <p className="text-[#3d3d3d] mb-4 leading-relaxed">
            At Milestone Moves, we don&apos;t rush decisions and we don&apos;t treat clients like transactions. We walk
            beside you, providing clarity, support, and steady guidance so you can step into your next chapter with
            confidence and peace of mind.
          </p>
          <p className="text-[#3d3d3d] font-bold">
            Your next chapter deserves the right partner. Welcome to Milestone Moves.
          </p>
        </div>
      </section>

      {/* Explore the Triangle */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#3d3d3d] mb-10">Explore the Triangle</h2>
          <div className="grid grid-cols-2 gap-4">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/areas/${city.slug}`}
                className="relative rounded-xl h-36 sm:h-44 overflow-hidden group"
              >
                {/* Background photo */}
                <Image
                  src={city.image}
                  alt={city.name}
                  fill
                  sizes="(max-width: 640px) 50vw, 400px"
                  className="object-cover scale-100 group-hover:scale-105 transition-transform duration-500 blur-[1px] group-hover:blur-0"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/20 group-hover:from-[#1C2B5E]/80 group-hover:via-[#1C2B5E]/50 group-hover:to-[#2BB8D3]/20 transition-colors duration-300" />
                {/* City name */}
                <span className="absolute bottom-0 left-0 right-0 p-5 text-white font-bold text-xl sm:text-2xl tracking-wide z-10 drop-shadow-lg">
                  {city.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#2BB8D3] py-16 px-4 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Let us guide you through one of life&apos;s most meaningful transitions with expertise and compassion.
          </p>
          <Link
            href="/about/contact-us"
            className="inline-block bg-[#1C2B5E] hover:bg-[#152047] text-white font-bold px-10 py-4 rounded-full transition-colors text-sm tracking-wider"
          >
            CONTACT US TODAY
          </Link>
        </div>
      </section>
    </div>
  );
}
