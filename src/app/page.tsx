import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col">
      <Header />

      {/* Hero Section */}
      <main className="flex-1 flex flex-col">
        {/* Main Hero */}
        <section className="flex-1 flex items-center justify-center px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-sm font-medium">
                Software uit Nederland
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                Omnitrex
              </span>
              <span className="text-white"> Nederland</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-4 leading-relaxed">
              Software & Diensten voor de Nederlandse Markt
            </p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
              Van digitale vermogensregistratie voor notarissen tot op maat gemaakte
              software oplossingen. Gebouwd in Nederland, voor Nederland.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span>AVG Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <span>Nederlands Bedrijf</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <span>Veilige Data Opslag</span>
              </div>
            </div>
          </div>
        </section>

        {/* Product Cards Section */}
        <section className="py-20 px-6 md:px-12 bg-slate-900/50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Onze Producten & Diensten
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Specialistische software oplossingen voor de Nederlandse markt,
                gebouwd met veiligheid en gebruiksgemak als uitgangspunt.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Vermogenskluis Card */}
              <a
                href="/kluis"
                className="group p-8 bg-slate-800/50 border border-slate-700/50 rounded-2xl hover:border-orange-500/50 transition-all hover:shadow-lg hover:shadow-orange-500/10"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  De Vermogenskluis
                </h3>
                <p className="text-orange-400 text-sm font-medium mb-4">
                  Digitale vermogensregistratie voor nabestaanden
                </p>
                <p className="text-slate-400 text-sm mb-6">
                  Een veilige digitale kluis waarin u al uw vermogensgegevens kunt vastleggen
                  voor uw nabestaanden. Speciaal ontwikkeld voor 60-plussers in samenwerking
                  met notarissen en estate planners.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-slate-300 text-sm">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Activa & Passiva overzicht
                  </li>
                  <li className="flex items-center gap-2 text-slate-300 text-sm">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Toegangsbeheer voor notaris
                  </li>
                  <li className="flex items-center gap-2 text-slate-300 text-sm">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Beveiligd document beheer
                  </li>
                </ul>
                <span className="text-orange-400 text-sm font-medium group-hover:underline flex items-center gap-2">
                  Meer informatie
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>

              {/* Consultancy Card */}
              <a
                href="/advies"
                className="group p-8 bg-slate-800/50 border border-slate-700/50 rounded-2xl hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Advies & Consultancy
                </h3>
                <p className="text-cyan-400 text-sm font-medium mb-4">
                  Op maat gemaakte software oplossingen
                </p>
                <p className="text-slate-400 text-sm mb-6">
                  Professionele software ontwikkeling voor uw specifieke behoeften.
                  Van losse features tot complete applicaties, gebouwd met de
                  nieuwste technologieen en AI-ondersteunde ontwikkeling.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-slate-300 text-sm">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Gratis kennismakingsgesprek
                  </li>
                  <li className="flex items-center gap-2 text-slate-300 text-sm">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Snelle ontwikkeling met Claude Code
                  </li>
                  <li className="flex items-center gap-2 text-slate-300 text-sm">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Volledige overdracht van eigendom
                  </li>
                </ul>
                <span className="text-cyan-400 text-sm font-medium group-hover:underline flex items-center gap-2">
                  Neem contact op
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Onderdeel van Omnitrex
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Omnitrex Nederland is onderdeel van Omnitrex B.V., een Nederlands software
              bedrijf dat enterprise oplossingen bouwt voor de Europese markt. Naast onze
              Nederlandse producten bieden wij ook een GRC Platform en CRM Platform aan
              voor de EU markt via omnitrex.eu.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://omnitrex.eu"
                className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-colors flex items-center gap-2"
              >
                Bezoek omnitrex.eu
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a
                href="mailto:info@omnitrex.nl"
                className="px-6 py-3 border border-slate-700 hover:border-slate-600 text-white font-medium rounded-lg transition-colors"
              >
                Contact Opnemen
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
