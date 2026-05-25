export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Blue Geomatics. All rights reserved.
        </p>
        <div className="flex gap-5">
          <a
            href="mailto:contact@tacsurvey.com"
            className="text-sm hover:text-amber-400 transition-colors"
          >
            contact@tacsurvey.com
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-amber-400 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
