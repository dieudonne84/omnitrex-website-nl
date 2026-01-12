import Link from "next/link";

interface FooterProps {
  currentPage?: string;
}

export default function Footer({ currentPage }: FooterProps) {
  const productLinks = [
    { href: "https://kluis.omnitrex.nl", label: "De Vermogenskluis", external: true },
    { href: "https://advies.omnitrex.nl", label: "Advies & Consultancy", external: true },
  ];

  const companyLinks = [
    { href: "/over-ons", label: "Over Ons" },
    { href: "/contact", label: "Contact" },
  ];

  const legalLinks = [
    { href: "/privacy", label: "Privacy" },
    { href: "/voorwaarden", label: "Voorwaarden" },
  ];

  return (
    <footer className="border-t border-slate-800">
      {/* Main Footer */}
      <div className="py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Logo & Description */}
            <div className="col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                  <rect width="40" height="40" rx="8" fill="url(#footer-icon-gradient-nl)"/>
                  <path d="M20 11L26.5 15V23L20 27L13.5 23V15L20 11Z" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round" fill="none"/>
                  <circle cx="20" cy="19" r="3.5" fill="#ffffff"/>
                  <path d="M20 22.5V27" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="footer-icon-gradient-nl" x1="0" y1="20" x2="40" y2="20" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#fb923c"/>
                      <stop offset="1" stopColor="#f97316"/>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="flex flex-col">
                  <span className="text-white font-semibold text-xl">
                    Omnitrex
                  </span>
                  <span className="text-slate-500 text-xs">Nederland</span>
                </div>
              </Link>
              <p className="text-slate-400 text-sm mb-4 max-w-xs">
                Software oplossingen voor de Nederlandse markt. De Vermogenskluis voor
                estate planning en advies voor op maat gemaakte software.
              </p>
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Nederland</span>
              </div>
            </div>

            {/* Products Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Producten</h4>
              <ul className="space-y-2">
                {productLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors text-slate-400 hover:text-white flex items-center gap-1"
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                    >
                      {link.label}
                      {link.external && (
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      )}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="https://omnitrex.eu"
                    className="text-sm transition-colors text-slate-400 hover:text-white flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Omnitrex EU
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Bedrijf</h4>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`text-sm transition-colors ${
                        currentPage === link.href
                          ? "text-white"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Omnitrex B.V. Alle rechten voorbehouden.
            </span>
            <div className="flex items-center gap-6 text-sm">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors ${
                    currentPage === link.href
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
