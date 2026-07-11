import PageLayout from "@/components/PageLayout";

export const metadata = {
  title: "Decluttering Made Easy | Milestone Moves Realty Group",
  description: "Simple, stress-free decluttering strategies to help you prepare for your next move.",
};

export default function DeclutteringMadeEasy() {
  return (
    <PageLayout
      title="Decluttering Made Easy"
      subtitle="Simple strategies to lighten your load before the big move."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "55+ Options", href: "/55-plus-options/simplified-living-communities" }]}
    >
      <p className="text-[#3d3d3d] leading-relaxed mb-6">
        Decades of living fill a home with memories — and a lot of stuff. Before you can move forward, you need to go
        through what you have. The good news: decluttering doesn&apos;t have to be stressful or done all at once.
      </p>

      <h2 className="text-2xl font-bold text-[#123A5E] mb-4">The Three-Box Method</h2>
      <p className="text-[#3d3d3d] leading-relaxed mb-4">
        For every room, grab three boxes and label them:
      </p>
      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        {[
          { label: "KEEP", color: "#123A5E", desc: "Items you love, use, and will bring to your new home." },
          { label: "DONATE / GIVE", color: "#0A7387", desc: "Items still useful to others — family, friends, or local charities." },
          { label: "LET GO", color: "#6b7280", desc: "Items that are worn, expired, or no longer serve a purpose." },
        ].map((box) => (
          <div key={box.label} className="rounded-xl p-5 text-white text-center" style={{ backgroundColor: box.color }}>
            <p className="font-bold text-lg mb-2">{box.label}</p>
            <p className="text-sm opacity-90">{box.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-[#123A5E] mb-4">Room-by-Room Checklist</h2>
      <div className="space-y-4 mb-8">
        {[
          { room: "Kitchen", items: ["Duplicate cookware", "Rarely-used appliances", "Expired pantry items", "Mismatched storage containers"] },
          { room: "Bedroom & Closets", items: ["Clothing not worn in 2+ years", "Extra bedding sets", "Shoes in poor condition", "Old jewelry you no longer wear"] },
          { room: "Living & Dining", items: ["Excess furniture (measure your new space!)", "Books and magazines", "Decorative items", "Extra electronics or cords"] },
          { room: "Garage & Storage", items: ["Seasonal items", "Old tools", "Sports equipment no longer used", "Holiday decorations (keep favorites only)"] },
        ].map((section) => (
          <div key={section.room} className="border-l-4 border-[#0A7387] pl-4">
            <h3 className="font-bold text-[#123A5E] mb-2">{section.room}</h3>
            <ul className="list-disc list-inside text-[#3d3d3d] space-y-1 text-sm">
              {section.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-[#f0fafd] border border-[#0A7387] rounded-xl p-6">
        <p className="text-[#3d3d3d] text-center">
          <strong>Tip:</strong> Plan to spend 1–2 hours per day over several weeks rather than one overwhelming weekend.
          Slow and steady leads to better decisions and less regret.
        </p>
      </div>
    </PageLayout>
  );
}
