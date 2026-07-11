import PageLayout from "@/components/PageLayout";

export const metadata = {
  title: "Downsizing Tips for Seniors | Milestone Moves Realty Group",
  description: "Practical, compassionate tips for downsizing your home at any stage of life.",
};

export default function DownsizingTips() {
  const tips = [
    {
      number: "01",
      title: "Start Early — Before You Have To",
      body: "The best time to downsize is before life forces your hand. Starting early gives you control over the pace, the destination, and the decisions.",
    },
    {
      number: "02",
      title: "Sort by Category, Not by Room",
      body: "Go through clothing, books, kitchenware, and memorabilia as categories rather than tackling room by room. This prevents duplicating effort and helps you see the full picture.",
    },
    {
      number: "03",
      title: "Involve Family — Thoughtfully",
      body: "Family heirlooms often mean different things to different people. Have honest conversations about what each family member truly wants before assuming.",
    },
    {
      number: "04",
      title: "Photograph What You Can't Keep",
      body: "You don't have to keep every item to preserve the memory. A well-organized digital photo album of beloved belongings lets you let go with peace.",
    },
    {
      number: "05",
      title: "Measure Your New Space First",
      body: "Before moving a single piece of furniture, measure the rooms in your new home. This saves costly moves and heartbreaking decisions on moving day.",
    },
    {
      number: "06",
      title: "Donate, Don't Just Discard",
      body: "Knowing your belongings will help someone else makes releasing them much easier. We maintain a list of local donation centers for exactly this reason.",
    },
  ];

  return (
    <PageLayout
      title="Downsizing Tips for Seniors"
      subtitle="Practical guidance to make your transition lighter, easier, and more meaningful."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "55+ Options", href: "/55-plus-options/simplified-living-communities" }]}
    >
      <p className="text-[#3d3d3d] leading-relaxed mb-8">
        Downsizing is one of the most emotionally complex parts of a move — but it doesn&apos;t have to be overwhelming.
        With the right mindset and a practical approach, it can even feel liberating. Here are our top tips from years
        of helping 55+ clients through the process.
      </p>

      <div className="space-y-6 mb-10">
        {tips.map((tip) => (
          <div key={tip.number} className="flex gap-5 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-[#0A7387] rounded-full flex items-center justify-center text-white font-bold text-sm">
              {tip.number}
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#123A5E] mb-1">{tip.title}</h3>
              <p className="text-[#3d3d3d] leading-relaxed">{tip.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#123A5E] text-white rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold mb-3">Need a Plan Tailored to Your Situation?</h3>
        <p className="text-gray-200 mb-6">We offer personalized downsizing consultations — no pressure, just guidance.</p>
        <a
          href="/about/contact-us"
          className="inline-block bg-[#0A7387] hover:bg-[#086475] text-white font-bold px-8 py-3 rounded-full transition-colors text-sm tracking-wider"
        >
          TALK TO US
        </a>
      </div>
    </PageLayout>
  );
}
