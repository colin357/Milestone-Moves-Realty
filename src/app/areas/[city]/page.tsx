import PageLayout from "@/components/PageLayout";
import Link from "next/link";
import { notFound } from "next/navigation";

const cityData: Record<string, { name: string; description: string; highlights: string[] }> = {
  apex: {
    name: "Apex",
    description: "Known as the 'Peak of Good Living,' Apex is a charming town in western Wake County offering a thriving downtown, excellent schools, and a growing selection of 55+ communities.",
    highlights: ["Vibrant historic downtown", "Highly rated schools", "Growing 55+ community options", "Easy access to Research Triangle Park", "Beaver Creek Commons shopping & dining"],
  },
  cary: {
    name: "Cary",
    description: "One of the most desirable communities in North Carolina, Cary combines suburban comfort with excellent amenities, parks, and a growing number of active adult communities.",
    highlights: ["SAS headquarters and tech corridor", "Extensive greenway trails", "Bond Park and Lake Crabtree", "Multiple 55+ and active adult communities", "Close to RDU Airport"],
  },
  "chapel-hill": {
    name: "Chapel Hill",
    description: "Home to the University of North Carolina, Chapel Hill offers a vibrant arts scene, world-class healthcare, and a progressive community perfect for active adults.",
    highlights: ["UNC Health system", "Vibrant arts and cultural scene", "Strong community programs for seniors", "Franklin Street dining and shopping", "Beautiful natural surroundings"],
  },
  clayton: {
    name: "Clayton",
    description: "A rapidly growing town in Johnston County, Clayton offers affordable housing, a friendly small-town atmosphere, and increasing senior housing options.",
    highlights: ["Affordable housing market", "Small-town charm with city amenities", "Growing senior community resources", "Easy I-40 access to Triangle", "Active parks and recreation programs"],
  },
  durham: {
    name: "Durham",
    description: "A city of energy and innovation, Durham offers world-class healthcare at Duke, a thriving food scene, and diverse senior living options.",
    highlights: ["Duke University Health System", "Award-winning restaurant scene", "American Tobacco Campus and DPAC", "Diverse 55+ community options", "Strong arts and culture community"],
  },
  garner: {
    name: "Garner",
    description: "Bordering Raleigh to the south, Garner offers affordable living with easy access to all the Triangle has to offer — and a welcoming community feel.",
    highlights: ["Close proximity to Raleigh", "Affordable home prices", "White Deer Park Nature Center", "Active senior programs through Parks & Rec", "Community-centered neighborhoods"],
  },
  hillsborough: {
    name: "Hillsborough",
    description: "A historic gem in Orange County, Hillsborough offers charming small-town living, a vibrant arts scene, and proximity to both Chapel Hill and Durham.",
    highlights: ["Historic downtown with local shops", "Active arts community", "Eno River State Park access", "Close to Chapel Hill and Durham", "Quieter, small-town pace"],
  },
  raleigh: {
    name: "Raleigh",
    description: "North Carolina's capital city offers the best of everything — cultural attractions, world-class healthcare, extensive senior resources, and diverse housing options.",
    highlights: ["NC State Government and WakeMed Health", "Extensive greenway and park system", "Wide range of 55+ communities", "Cultural arts and entertainment", "Strong senior services network"],
  },
  "wake-forest": {
    name: "Wake Forest",
    description: "One of the fastest-growing areas in the Triangle, Wake Forest offers new construction, established neighborhoods, and a welcoming community for all ages.",
    highlights: ["Rapid growth with planned amenities", "Historic downtown area", "Heritage Wake Forest community", "Strong schools and community services", "Easy access to North Raleigh"],
  },
  zebulon: {
    name: "Zebulon",
    description: "A small, welcoming town east of Raleigh, Zebulon offers affordable living and a close-knit community atmosphere with easy Triangle access.",
    highlights: ["Affordable housing options", "Five County Stadium (Carolina Mudcats)", "Small-town community feel", "Growing senior services", "Easy access to Raleigh via US-64"],
  },
};

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return Object.keys(cityData).map((city) => ({ city }));
}

export async function generateMetadata({ params }: PageProps) {
  const { city } = await params;
  const data = cityData[city];
  if (!data) return {};
  return {
    title: `${data.name}, NC Real Estate | Milestone Moves Realty Group`,
    description: `Find your next home in ${data.name}, NC with Milestone Moves Realty Group — serving the 55+ community with care and expertise.`,
  };
}

export default async function CityPage({ params }: PageProps) {
  const { city } = await params;
  const data = cityData[city];

  if (!data) notFound();

  return (
    <PageLayout
      title={data.name}
      subtitle={`Find your next chapter in ${data.name}, NC`}
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Explore the Triangle", href: "/" }]}
    >
      <p className="text-[#3d3d3d] leading-relaxed mb-8 text-lg">{data.description}</p>

      <h2 className="text-2xl font-bold text-[#123A5E] mb-4">Why {data.name}?</h2>
      <ul className="space-y-3 mb-10">
        {data.highlights.map((h) => (
          <li key={h} className="flex items-start gap-3">
            <span className="w-6 h-6 bg-[#0A7387] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-[#3d3d3d]">{h}</span>
          </li>
        ))}
      </ul>

      <div className="bg-[#123A5E] text-white rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold mb-3">Interested in {data.name}?</h3>
        <p className="text-gray-200 mb-6">
          Let our team help you explore homes and communities in {data.name} that fit your lifestyle and goals.
        </p>
        <Link href="/about/contact-us" className="inline-block bg-[#0A7387] hover:bg-[#086475] text-white font-bold px-8 py-3 rounded-full transition-colors text-sm tracking-wider">
          CONTACT US
        </Link>
      </div>
    </PageLayout>
  );
}
