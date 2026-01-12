import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "De Vermogenskluis | Digitale Estate Planning voor Nabestaanden",
  description:
    "Leg al uw vermogensgegevens veilig vast voor uw nabestaanden. De Vermogenskluis is speciaal ontwikkeld voor 60-plussers in samenwerking met notarissen.",
  openGraph: {
    title: "De Vermogenskluis | Digitale Estate Planning",
    description:
      "Veilige digitale vermogensregistratie voor uw nabestaanden via uw notaris.",
    url: "https://kluis.omnitrex.nl",
  },
};

export default function VermogenskluisPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
                <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-orange-400 text-sm font-medium">
                  Binnenkort beschikbaar
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                  De Vermogenskluis
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-4">
                Digitale vermogensregistratie voor uw nabestaanden
              </p>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Een veilige digitale kluis waarin u al uw financiele gegevens kunt vastleggen,
                zodat uw nabestaanden precies weten wat er geregeld moet worden.
              </p>
            </div>

            {/* Value Proposition Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-16">
              <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Maximale Veiligheid</h3>
                <p className="text-slate-400 text-sm">
                  Uw gegevens worden versleuteld opgeslagen in beveiligde EU-datacenters.
                  Alleen u en uw gemachtigden hebben toegang.
                </p>
              </div>

              <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Via Uw Notaris</h3>
                <p className="text-slate-400 text-sm">
                  Werk samen met uw notaris of estate planner. Zij kunnen u helpen bij
                  het invullen en hebben toegang wanneer dat nodig is.
                </p>
              </div>

              <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Rust voor Nabestaanden</h3>
                <p className="text-slate-400 text-sm">
                  Uw nabestaanden hoeven niet te zoeken. Alles staat overzichtelijk
                  bij elkaar, van bankrekeningen tot verzekeringen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What You Can Store Section */}
        <section className="py-20 px-6 md:px-12 bg-slate-900/50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Wat kunt u vastleggen?
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                De Vermogenskluis biedt een compleet overzicht van uw financiele situatie,
                georganiseerd in overzichtelijke categorieen.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Activa */}
              <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Activa (Bezittingen)</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                    Bankrekeningen (betaal, spaar, deposito)
                  </li>
                  <li className="flex items-center gap-2 text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                    Beleggingen (aandelen, obligaties, fondsen)
                  </li>
                  <li className="flex items-center gap-2 text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                    Pensioenen (opgebouwd en ingegaan)
                  </li>
                  <li className="flex items-center gap-2 text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                    Vastgoed (woning, verhuurpand)
                  </li>
                  <li className="flex items-center gap-2 text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                    Voertuigen en waardevolle bezittingen
                  </li>
                  <li className="flex items-center gap-2 text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                    Crypto en digitale activa
                  </li>
                </ul>
              </div>

              {/* Passiva */}
              <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Passiva (Schulden)</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                    Hypotheken (woning, verhuur)
                  </li>
                  <li className="flex items-center gap-2 text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                    Persoonlijke leningen
                  </li>
                  <li className="flex items-center gap-2 text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                    Studieschuld (DUO)
                  </li>
                  <li className="flex items-center gap-2 text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                    Creditcard schulden
                  </li>
                  <li className="flex items-center gap-2 text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                    Doorlopend krediet
                  </li>
                </ul>
              </div>

              {/* Verzekeringen */}
              <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Verzekeringen</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    Levensverzekeringen
                  </li>
                  <li className="flex items-center gap-2 text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    Uitvaartverzekeringen
                  </li>
                  <li className="flex items-center gap-2 text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    Zorgverzekeringen
                  </li>
                  <li className="flex items-center gap-2 text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    Overige verzekeringen
                  </li>
                </ul>
              </div>

              {/* Documenten & Contacten */}
              <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Documenten & Contacten</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                    Testament en volmachten
                  </li>
                  <li className="flex items-center gap-2 text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                    Identiteitsbewijzen
                  </li>
                  <li className="flex items-center gap-2 text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                    Jaaropgaven en belastingaangiften
                  </li>
                  <li className="flex items-center gap-2 text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                    Contactgegevens notaris, accountant, etc.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Hoe werkt het?
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                In drie eenvoudige stappen uw vermogen vastleggen voor uw nabestaanden.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-orange-500/10 border-2 border-orange-500/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-400">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Account Aanmaken</h3>
                <p className="text-slate-400 text-sm">
                  Maak een account aan via uw notaris of estate planner.
                  Zij begeleiden u door het proces.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-orange-500/10 border-2 border-orange-500/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-400">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Gegevens Invullen</h3>
                <p className="text-slate-400 text-sm">
                  Vul uw vermogensgegevens in op uw eigen tempo.
                  Upload belangrijke documenten veilig.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-orange-500/10 border-2 border-orange-500/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-400">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Toegang Beheren</h3>
                <p className="text-slate-400 text-sm">
                  Bepaal wie wanneer toegang krijgt: nu, bij wilsonbekwaamheid,
                  of na overlijden.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="py-20 px-6 md:px-12 bg-slate-900/50">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Uw gegevens zijn veilig bij ons
                </h2>
                <p className="text-slate-400 mb-6">
                  Wij nemen de beveiliging van uw persoonlijke gegevens zeer serieus.
                  De Vermogenskluis is gebouwd met de hoogste beveiligingsstandaarden.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="text-white font-medium">AVG/GDPR Compliant</span>
                      <p className="text-slate-400 text-sm">Volledig conform Europese privacywetgeving</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="text-white font-medium">EU Data Residency</span>
                      <p className="text-slate-400 text-sm">Alle data wordt opgeslagen in Frankfurt, Duitsland</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="text-white font-medium">End-to-end Encryptie</span>
                      <p className="text-slate-400 text-sm">Uw gegevens zijn versleuteld in transit en at rest</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="text-white font-medium">Twee-factor Authenticatie</span>
                      <p className="text-slate-400 text-sm">Extra beveiliging voor uw account</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-600/10 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-orange-500/30 to-orange-600/20 flex items-center justify-center">
                    <svg className="w-24 h-24 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Interesse in De Vermogenskluis?
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              De Vermogenskluis is momenteel in ontwikkeling. Bent u notaris of estate planner
              en wilt u meer weten over een samenwerking? Of bent u particulier en wilt u
              op de hoogte gehouden worden? Neem contact met ons op.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:kluis@omnitrex.nl"
                className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Opnemen
              </a>
              <Link
                href="/"
                className="px-8 py-4 border border-slate-700 hover:border-slate-600 text-white font-semibold rounded-lg transition-colors"
              >
                Terug naar Omnitrex.nl
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
