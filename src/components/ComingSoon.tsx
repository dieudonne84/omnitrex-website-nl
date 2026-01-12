export default function ComingSoon() {
  return (
    <div className="h-screen bg-[#0f172a] flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="text-center flex flex-col items-center justify-center gap-3">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-2">
          <span className="font-semibold text-4xl md:text-5xl tracking-tight bg-gradient-to-br from-orange-400 to-orange-500 bg-clip-text text-transparent">
            Omnitrex
          </span>
          <span className="text-slate-500 text-2xl md:text-3xl font-light">
            Nederland
          </span>
        </div>

        {/* Coming Soon Text */}
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          Binnenkort Beschikbaar
        </h1>
        <p className="text-base md:text-lg text-slate-400">
          We werken hard aan iets moois. Blijf op de hoogte.
        </p>

        {/* Footer */}
        <p className="text-slate-500 text-sm mt-4">
          &copy; {new Date().getFullYear()} Omnitrex B.V. Alle rechten
          voorbehouden.
        </p>
      </div>
    </div>
  );
}
