import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advies & Consultancy | Omnitrex Nederland",
  description:
    "Op maat gemaakte software oplossingen voor uw bedrijf. Van losse features tot complete applicaties, gebouwd met moderne technologieën en AI-ondersteunde ontwikkeling.",
  openGraph: {
    title: "Advies & Consultancy | Omnitrex Nederland",
    description:
      "Op maat gemaakte software oplossingen voor uw bedrijf. Van losse features tot complete applicaties.",
    url: "https://advies.omnitrex.nl",
  },
};

export default function AdviesPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col">
      <Header currentPage="/advies" />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 px-6 md:px-12">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
              <span className="text-cyan-400 text-sm font-medium">
                Software Development
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">Advies & </span>
              <span className="bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent">
                Consultancy
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-4">
              Op Maat Gemaakte Software Oplossingen
            </p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
              Van een enkele feature tot een complete applicatie. Wij bouwen
              software die perfect aansluit bij uw bedrijfsprocessen, met
              moderne technologieën en AI-ondersteunde ontwikkeling.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:advies@omnitrex.nl?subject=Kennismakingsgesprek"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
              >
                Gratis Kennismakingsgesprek
              </a>
              <a
                href="#diensten"
                className="px-8 py-4 border border-slate-700 hover:border-slate-600 text-white font-medium rounded-xl transition-colors"
              >
                Bekijk Diensten
              </a>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-16 px-6 md:px-12 bg-slate-900/50">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Speed */}
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Snelle Ontwikkeling
                </h3>
                <p className="text-slate-400">
                  Door AI-ondersteunde ontwikkeling leveren wij sneller dan
                  traditionele bureaus, zonder concessies aan kwaliteit.
                </p>
              </div>

              {/* Quality */}
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Moderne Stack
                </h3>
                <p className="text-slate-400">
                  Next.js, TypeScript, Tailwind CSS en meer. Uw software wordt
                  gebouwd met bewezen, onderhoudbare technologieën.
                </p>
              </div>

              {/* Ownership */}
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-cyan-400"
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
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  100% Eigendom
                </h3>
                <p className="text-slate-400">
                  Na oplevering is de code volledig van u. Geen verborgen
                  licenties, geen lock-in. Volledige overdracht.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="diensten" className="py-20 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Onze Diensten
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Of u nu een kleine feature nodig heeft of een complete
                applicatie, wij hebben een passende oplossing.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Consultation */}
              <div className="p-8 bg-slate-800/50 border border-slate-700/50 rounded-2xl hover:border-cyan-500/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Kennismakingsgesprek
                </h3>
                <p className="text-cyan-400 text-sm font-medium mb-4">
                  Gratis & vrijblijvend
                </p>
                <p className="text-slate-400 text-sm mb-6">
                  In een gesprek van 30 minuten bespreken we uw wensen en
                  mogelijkheden. Geen verplichtingen, wel duidelijkheid over wat
                  er mogelijk is.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-slate-300 text-sm">
                    <svg
                      className="w-4 h-4 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Bespreking van uw ideeën
                  </li>
                  <li className="flex items-center gap-2 text-slate-300 text-sm">
                    <svg
                      className="w-4 h-4 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Haalbaarheidsadvies
                  </li>
                  <li className="flex items-center gap-2 text-slate-300 text-sm">
                    <svg
                      className="w-4 h-4 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Globale kostenindicatie
                  </li>
                </ul>
                <div className="pt-4 border-t border-slate-700">
                  <span className="text-2xl font-bold text-white">Gratis</span>
                </div>
              </div>

              {/* Feature Development */}
              <div className="p-8 bg-slate-800/50 border border-cyan-500/30 rounded-2xl relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-cyan-500 text-white text-xs font-medium rounded-full">
                  Populair
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Feature Ontwikkeling
                </h3>
                <p className="text-cyan-400 text-sm font-medium mb-4">
                  Per uur of vaste prijs
                </p>
                <p className="text-slate-400 text-sm mb-6">
                  Heeft u een bestaande applicatie die uitbreiding nodig heeft?
                  Wij bouwen losse features of integraties voor uw huidige
                  systemen.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-slate-300 text-sm">
                    <svg
                      className="w-4 h-4 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Nieuwe functionaliteit
                  </li>
                  <li className="flex items-center gap-2 text-slate-300 text-sm">
                    <svg
                      className="w-4 h-4 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    API integraties
                  </li>
                  <li className="flex items-center gap-2 text-slate-300 text-sm">
                    <svg
                      className="w-4 h-4 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Code review & optimalisatie
                  </li>
                </ul>
                <div className="pt-4 border-t border-slate-700">
                  <span className="text-2xl font-bold text-white">€95</span>
                  <span className="text-slate-400 text-sm"> / uur</span>
                </div>
              </div>

              {/* Full Project */}
              <div className="p-8 bg-slate-800/50 border border-slate-700/50 rounded-2xl hover:border-cyan-500/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-white"
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
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Volledig Project
                </h3>
                <p className="text-cyan-400 text-sm font-medium mb-4">
                  Op offerte basis
                </p>
                <p className="text-slate-400 text-sm mb-6">
                  Van concept tot oplevering. Wij bouwen uw complete applicatie
                  en dragen deze na afloop volledig aan u over.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-slate-300 text-sm">
                    <svg
                      className="w-4 h-4 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Functioneel ontwerp
                  </li>
                  <li className="flex items-center gap-2 text-slate-300 text-sm">
                    <svg
                      className="w-4 h-4 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Volledige ontwikkeling
                  </li>
                  <li className="flex items-center gap-2 text-slate-300 text-sm">
                    <svg
                      className="w-4 h-4 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Overdracht & documentatie
                  </li>
                </ul>
                <div className="pt-4 border-t border-slate-700">
                  <span className="text-2xl font-bold text-white">Op maat</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-6 md:px-12 bg-slate-900/50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Hoe Werkt Het?
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Een helder proces van idee tot oplevering.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    1
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Kennismaking
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Gratis gesprek om uw wensen en mogelijkheden te bespreken.
                  </p>
                </div>
                <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-cyan-500 to-slate-700"></div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    2
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Offerte</h3>
                  <p className="text-slate-400 text-sm">
                    Heldere offerte met scope, planning en kosten.
                  </p>
                </div>
                <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-cyan-500 to-slate-700"></div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    3
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Ontwikkeling
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Iteratieve ontwikkeling met regelmatige updates en feedback.
                  </p>
                </div>
                <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-cyan-500 to-slate-700"></div>
              </div>

              {/* Step 4 */}
              <div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    4
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Oplevering
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Volledige overdracht van code, documentatie en eigendom.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-20 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Onze Technologie
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Wij werken met moderne, bewezen technologieën die onderhoudbaar
                en schaalbaar zijn.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Next.js */}
              <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl text-center hover:border-slate-600 transition-colors">
                <div className="text-3xl mb-2">▲</div>
                <h4 className="text-white font-medium">Next.js</h4>
                <p className="text-slate-500 text-sm">React Framework</p>
              </div>

              {/* TypeScript */}
              <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl text-center hover:border-slate-600 transition-colors">
                <div className="text-3xl mb-2 text-blue-400">TS</div>
                <h4 className="text-white font-medium">TypeScript</h4>
                <p className="text-slate-500 text-sm">Type-safe JavaScript</p>
              </div>

              {/* Tailwind */}
              <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl text-center hover:border-slate-600 transition-colors">
                <div className="text-3xl mb-2 text-cyan-400">🎨</div>
                <h4 className="text-white font-medium">Tailwind CSS</h4>
                <p className="text-slate-500 text-sm">Utility-first CSS</p>
              </div>

              {/* Vercel */}
              <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl text-center hover:border-slate-600 transition-colors">
                <div className="text-3xl mb-2">▲</div>
                <h4 className="text-white font-medium">Vercel</h4>
                <p className="text-slate-500 text-sm">Cloud Hosting</p>
              </div>

              {/* PostgreSQL */}
              <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl text-center hover:border-slate-600 transition-colors">
                <div className="text-3xl mb-2 text-blue-300">🐘</div>
                <h4 className="text-white font-medium">PostgreSQL</h4>
                <p className="text-slate-500 text-sm">Database</p>
              </div>

              {/* Prisma */}
              <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl text-center hover:border-slate-600 transition-colors">
                <div className="text-3xl mb-2">◮</div>
                <h4 className="text-white font-medium">Prisma</h4>
                <p className="text-slate-500 text-sm">ORM</p>
              </div>

              {/* Node.js */}
              <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl text-center hover:border-slate-600 transition-colors">
                <div className="text-3xl mb-2 text-green-500">⬢</div>
                <h4 className="text-white font-medium">Node.js</h4>
                <p className="text-slate-500 text-sm">Backend Runtime</p>
              </div>

              {/* Claude */}
              <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl text-center hover:border-slate-600 transition-colors">
                <div className="text-3xl mb-2">🤖</div>
                <h4 className="text-white font-medium">Claude Code</h4>
                <p className="text-slate-500 text-sm">AI Development</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-slate-900/50 to-cyan-900/20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Klaar om te Beginnen?
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Neem contact op voor een gratis kennismakingsgesprek. We bespreken
              uw ideeën en kijken samen naar de mogelijkheden.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:advies@omnitrex.nl?subject=Kennismakingsgesprek"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                advies@omnitrex.nl
              </a>
              <a
                href="https://omnitrex.nl"
                className="px-8 py-4 border border-slate-700 hover:border-slate-600 text-white font-medium rounded-xl transition-colors flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Terug naar omnitrex.nl
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer currentPage="/advies" />
    </div>
  );
}
