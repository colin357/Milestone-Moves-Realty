import Link from "next/link";

interface Breadcrumb {
  label: string;
  href: string;
}

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  children: React.ReactNode;
  heroColor?: string;
}

export default function PageLayout({
  title,
  subtitle,
  breadcrumbs,
  children,
  heroColor = "#1C2B5E",
}: PageLayoutProps) {
  return (
    <div>
      {/* Page Hero */}
      <div
        className="py-16 px-4 text-white"
        style={{ backgroundColor: heroColor }}
      >
        <div className="max-w-4xl mx-auto">
          {breadcrumbs && (
            <nav className="text-sm mb-4 opacity-70">
              {breadcrumbs.map((crumb, i) => (
                <span key={crumb.href}>
                  {i > 0 && <span className="mx-2">/</span>}
                  <Link href={crumb.href} className="hover:opacity-100 hover:underline">
                    {crumb.label}
                  </Link>
                </span>
              ))}
              <span className="mx-2">/</span>
              <span className="opacity-100">{title}</span>
            </nav>
          )}
          <h1 className="text-3xl sm:text-4xl font-bold">{title}</h1>
          {subtitle && (
            <p className="mt-4 text-lg text-gray-200 max-w-2xl">{subtitle}</p>
          )}
        </div>
      </div>

      {/* Page Content */}
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
}
