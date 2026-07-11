import PageLayout from "@/components/PageLayout";
import Link from "next/link";

export const metadata = {
  title: "Blog | Milestone Moves Realty Group",
  description: "Tips, insights, and resources for seniors navigating housing transitions in the Triangle, NC.",
};

const posts = [
  {
    slug: "when-is-the-right-time-to-downsize",
    title: "When Is the Right Time to Downsize?",
    date: "April 15, 2025",
    excerpt: "There&apos;s no universal answer, but there are clear signs that your current home may no longer be serving your best life. Here&apos;s how to know.",
    tag: "Downsizing",
  },
  {
    slug: "top-55-plus-communities-triangle-nc",
    title: "Top 55+ Communities in the Triangle, NC",
    date: "March 28, 2025",
    excerpt: "From vibrant clubhouses to scenic walking trails, the Triangle offers some of the best active adult communities in the Southeast.",
    tag: "Communities",
  },
  {
    slug: "what-is-a-cshp-and-why-does-it-matter",
    title: "What Is a CSHP and Why Does It Matter?",
    date: "March 10, 2025",
    excerpt: "A Certified Senior Housing Professional brings specialized knowledge that can make a meaningful difference when navigating housing transitions.",
    tag: "Education",
  },
  {
    slug: "5-things-to-do-before-listing-your-home",
    title: "5 Things to Do Before Listing Your Home",
    date: "February 20, 2025",
    excerpt: "A little preparation goes a long way. Here are the five steps our team recommends before putting your home on the market.",
    tag: "Selling",
  },
];

export default function Blog() {
  return (
    <PageLayout
      title="Blog"
      subtitle="Resources, tips, and insights for your next chapter."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about/meet-the-team" }]}
    >
      <div className="grid gap-6 mb-8">
        {posts.map((post) => (
          <article key={post.slug} className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-[#0A7387] text-white text-xs font-bold px-3 py-1 rounded-full">{post.tag}</span>
              <span className="text-gray-500 text-sm">{post.date}</span>
            </div>
            <h2 className="text-xl font-bold text-[#123A5E] mb-2">{post.title}</h2>
            <p className="text-[#3d3d3d] text-sm leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
            <Link href={`/about/blog/${post.slug}`} className="text-[#0A7387] font-bold text-sm hover:underline">
              Read More →
            </Link>
          </article>
        ))}
      </div>

      <div className="bg-[#f0fafd] border border-[#0A7387] rounded-xl p-6 text-center">
        <p className="text-[#3d3d3d] mb-4">Want personalized guidance? We&apos;re just a conversation away.</p>
        <Link href="/about/contact-us" className="inline-block bg-[#0A7387] hover:bg-[#086475] text-white font-bold px-8 py-3 rounded-full transition-colors text-sm tracking-wider">
          CONTACT US
        </Link>
      </div>
    </PageLayout>
  );
}
