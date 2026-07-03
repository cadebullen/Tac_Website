import { Link } from 'react-router-dom'

export default function About() {
  const certs = [
    'Registered Professional Land Surveyor: Texas (#7176)',
    'Engineer-In-Training: Civil (#79451)',
    'FAA Remote Pilot Certificate 14 CFR Part 107 - Small Unmanned Aircraft Systems',
  ]

  const skills = [
    'UAV & LiDAR Field Operations',
    'GPS/GNSS Data Collection',
    'Total Station Operation',
    'AutoCAD Civil 3D',
    'Trimble Business Center',
    'Point Cloud Processing',
    'GIS & ArcMap',
    'Construction Layout',
    'CAD Base Map Production',
  ]

  const process = [
    {
      title: 'Scope',
      desc: 'Align deliverables, coordinate systems, and field constraints before mobilization.',
    },
    {
      title: 'Capture',
      desc: 'Execute field collection with survey-grade GNSS, UAV, and LiDAR workflows.',
    },
    {
      title: 'Validate',
      desc: 'Run QA/QC checks and package clean outputs for CAD, GIS, and design teams.',
    },
  ]

  return (
    <main className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20 text-slate-100">
      <section className="relative overflow-hidden rounded-3xl border border-slate-900 bg-[linear-gradient(145deg,rgba(15,17,22,0.96),rgba(7,9,13,0.98))] p-8 md:p-12 mb-14 md:mb-16">
        <div className="pointer-events-none absolute -top-20 right-[-40px] h-52 w-52 rounded-full bg-amber-300/10 blur-3xl" />
        <p className="text-xs tracking-[0.2em] uppercase text-slate-400 mb-4">About</p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-5 md:mb-6">Survey leadership built on precision and repeatability.</h1>
        <p className="text-slate-300 max-w-3xl leading-relaxed text-base md:text-lg">
          I lead field data programs for corridor, utility, and boundary projects across Texas,
          balancing speed in the field with dependable downstream deliverables.
        </p>

        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center bg-white text-black hover:bg-slate-200 font-semibold px-7 py-3 rounded-full transition-colors"
          >
            See Project Results
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center border border-white/35 hover:border-white hover:bg-white/10 text-white font-medium px-7 py-3 rounded-full transition-colors"
          >
            Discuss Your Scope
          </Link>
        </div>
      </section>

      <section className="mb-14 md:mb-16 grid md:grid-cols-2 gap-8 md:gap-10">
        <article className="rounded-2xl border border-slate-900 bg-[#0f1116] p-7 md:p-8">
          <h2 className="text-2xl font-semibold text-slate-100 mb-4 md:mb-5">Who I Am</h2>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              Registered Professional Land Surveyor (RPLS) focused on boundary surveys, ROW
              acquisition support, and infrastructure design data.
            </p>
            <p>
              I have managed TxDOT and private-sector workloads under strict QA/QC requirements,
              coordinated utilities and parcel data, and delivered consistent field accuracy under
              aggressive schedules.
            </p>
          </div>
        </article>

        <article className="rounded-2xl border border-slate-900 bg-[#0f1116] p-7 md:p-8">
          <h2 className="text-2xl font-semibold text-slate-100 mb-4 md:mb-5">Credentials</h2>
          <ul className="space-y-3">
            {certs.map((c) => (
              <li key={c} className="flex items-start gap-3 text-slate-300">
                <span className="mt-1 text-amber-400 font-bold">✓</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mb-14 md:mb-16">
        <p className="text-xs tracking-[0.2em] uppercase text-slate-400 mb-4">How I Work</p>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-8 md:mb-10">A simple operating system for clean data delivery.</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {process.map((step) => (
            <article key={step.title} className="rounded-2xl border border-slate-900 bg-[#0f1116] p-6 md:p-7">
              <h3 className="text-2xl font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-slate-300 leading-relaxed">{step.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-14 md:mb-16 rounded-3xl border border-slate-900 bg-[linear-gradient(150deg,rgba(15,17,22,0.98),rgba(8,10,14,0.98))] p-8 md:p-10">
        <div className="grid lg:grid-cols-[1fr,1.3fr] gap-8 md:gap-10 items-start">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-slate-400 mb-3">Tools & Expertise</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">Technology backed by field discipline.</h2>
            <p className="text-slate-300 mt-4 leading-relaxed">
              Production-ready skills across capture, processing, and drafting workflows.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-amber-500/10 border border-amber-400/30 text-amber-200 text-sm font-medium px-4 py-2 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6">
          <h3 className="text-lg font-semibold text-slate-100 mb-2">Education</h3>
          <p className="text-slate-300">BS, Mechanical Engineer</p>
          <p className="text-slate-400 text-sm mt-1">University of Texas Rio Grande Valley, 2019</p>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-900 bg-[#0f1116] p-8 md:p-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3 md:mb-4">Need a survey partner who can execute under real project pressure?</h2>
        <p className="text-slate-300 max-w-3xl leading-relaxed mb-7 md:mb-8">
          Share your project details and required outputs. I will respond with scope alignment,
          expected delivery path, and next steps.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-amber-300 hover:bg-amber-200 text-black font-semibold px-7 py-3 rounded-full transition-colors"
          >
            Contact Blue Geomatics
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center border border-slate-600 hover:border-white hover:bg-white/5 text-slate-100 font-medium px-7 py-3 rounded-full transition-colors"
          >
            Review Services
          </Link>
        </div>
      </section>
    </main>
  )
}
