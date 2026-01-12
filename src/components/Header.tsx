"use client";

import { useState } from "react";
import Link from "next/link";

interface HeaderProps {
  currentPage?: string;
}

export default function Header({ currentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full py-3 px-6 md:px-12 border-b border-slate-800/80 bg-[#0f172a]/95 backdrop-blur-md z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
            Omnitrex
          </span>
          <span className="text-sm font-medium text-slate-400">Nederland</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          <a
            href="https://kluis.omnitrex.nl"
            className="px-3 py-2 text-base font-medium rounded-lg transition-colors text-slate-400 hover:text-slate-200 hover:bg-slate-800/30"
          >
            Vermogenskluis
          </a>
          <a
            href="https://advies.omnitrex.nl"
            className="px-3 py-2 text-base font-medium rounded-lg transition-colors text-slate-400 hover:text-slate-200 hover:bg-slate-800/30"
          >
            Advies
          </a>
          <Link
            href="/over-ons"
            className={`px-3 py-2 text-base font-medium rounded-lg transition-colors ${
              currentPage === "/over-ons"
                ? "text-slate-200 bg-slate-800/30"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/30"
            }`}
          >
            Over Ons
          </Link>
          <Link
            href="/contact"
            className={`px-3 py-2 text-base font-medium rounded-lg transition-colors ${
              currentPage === "/contact"
                ? "text-slate-200 bg-slate-800/30"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/30"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* EU Link */}
        <div className="hidden md:flex items-center">
          <a
            href="https://omnitrex.eu"
            className="px-3 py-2 text-sm text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1"
          >
            omnitrex.eu
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-slate-800/50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu openen"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0f172a]/98 backdrop-blur-md border-b border-slate-800 shadow-2xl">
          <div className="max-w-6xl mx-auto px-6 py-6">
            {/* Products Section */}
            <div className="mb-6">
              <p className="text-slate-500 text-xs uppercase tracking-wider font-medium mb-3">
                Producten
              </p>
              <div className="flex flex-col gap-1">
                <a
                  href="https://kluis.omnitrex.nl"
                  className="py-2 px-3 rounded-lg transition-colors text-slate-300 hover:text-white hover:bg-slate-800/50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  De Vermogenskluis
                </a>
                <a
                  href="https://advies.omnitrex.nl"
                  className="py-2 px-3 rounded-lg transition-colors text-slate-300 hover:text-white hover:bg-slate-800/50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Advies & Consultancy
                </a>
              </div>
            </div>

            {/* Company Section */}
            <div className="mb-6">
              <p className="text-slate-500 text-xs uppercase tracking-wider font-medium mb-3">
                Bedrijf
              </p>
              <div className="flex flex-col gap-1">
                <Link
                  href="/over-ons"
                  className={`py-2 px-3 rounded-lg transition-colors ${
                    currentPage === "/over-ons"
                      ? "text-white bg-slate-800/50"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Over Ons
                </Link>
                <Link
                  href="/contact"
                  className={`py-2 px-3 rounded-lg transition-colors ${
                    currentPage === "/contact"
                      ? "text-white bg-slate-800/50"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* EU Link */}
            <div className="pt-6 border-t border-slate-800">
              <a
                href="https://omnitrex.eu"
                className="text-slate-400 text-sm hover:text-orange-400 transition-colors flex items-center gap-1"
              >
                Bezoek omnitrex.eu (EU)
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
