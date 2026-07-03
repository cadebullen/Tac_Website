export default function Footer() {
  return (
    <footer className="bg-[#070809] border-t border-slate-800 text-slate-400 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <p className="text-sm tracking-[0.14em] uppercase text-slate-500 mb-2">Blue Geomatics</p>
          <p className="text-slate-300 text-sm max-w-md">
            Precision field data collection and geospatial deliverables for corridor, utility, and site development projects.
          </p>
          <p className="text-xs text-slate-500 mt-4">&copy; {new Date().getFullYear()} Blue Geomatics. All rights reserved.</p>
        </div>

        <div className="flex gap-6">
          <a
            href="mailto:contact@tacsurvey.com"
            className="text-sm hover:text-amber-300 transition-colors"
          >
            contact@tacsurvey.com
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-amber-300 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
