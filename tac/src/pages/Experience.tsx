const jobs = [
  {
    title: 'Project Manager',
    company: 'Bowman Consulting',
    period: 'Apr 2026 – Present',
    location: 'San Antonio, TX',
    points: [
      'Lead multidisciplinary survey delivery for transportation and infrastructure clients across active corridors.',
      'Coordinate field operations, QA/QC, and client communication to keep schedules and deliverables aligned.',
    ],
  },
  {
    title: 'Project Surveyor',
    company: 'DCCM',
    period: 'Aug 2023 - Apr 2026',
    location: 'San Antonio, TX',
    points: [
      'Managed survey data workflows for right-of-way and utility packages under strict production timelines.',
      'Supported parcel exhibits, control strategies, and design-ready outputs for engineering coordination.',
    ],
  },
  {
    title: 'Field Measurement Technician',
    company: 'Texas Department of Transportation (TxDOT)',
    period: '2012 – 2014',
    location: 'Texas, USA',
    points: [
      'Assisted crew chief with right-of-way, route, and bridge measurement projects for highway improvement contracts.',
      'Reduced field notes and prepared preliminary field data drawings for engineering review.',
      'Maintained and calibrated field instruments according to QA/QC standards.',
    ],
  },
]

export default function Experience() {
  return (
    <main className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20 text-slate-100">
      <section className="relative overflow-hidden rounded-3xl border border-slate-900 bg-[linear-gradient(145deg,rgba(15,17,22,0.96),rgba(7,9,13,0.98))] p-8 md:p-12 mb-14 md:mb-16">
        <div className="pointer-events-none absolute -bottom-16 left-[-32px] h-48 w-48 rounded-full bg-sky-300/10 blur-3xl" />
        <p className="text-xs tracking-[0.2em] uppercase text-slate-400 mb-4">Experience</p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">From field execution to project leadership.</h1>
        <p className="text-slate-300 max-w-3xl leading-relaxed text-base md:text-lg">
          A timeline of surveying and infrastructure delivery roles across transportation and private-sector programs.
        </p>
      </section>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-800 hidden md:block"></div>

        <div className="space-y-8 md:space-y-10">
          {jobs.map((job, i) => (
            <div key={i} className="md:pl-16 relative">
              {/* Dot */}
              <div className="hidden md:block absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-amber-400 border-2 border-slate-950 shadow"></div>

              <div className="bg-[#0f1116] border border-slate-900 rounded-2xl p-8 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-slate-100">{job.title}</h2>
                    <p className="text-amber-400 font-semibold">{job.company}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm font-medium text-slate-200 bg-slate-900 px-3 py-1 rounded-full">{job.period}</p>
                    <p className="text-xs text-slate-500 mt-1">📍 {job.location}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {job.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                      <span className="text-amber-400 font-bold mt-0.5">→</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
