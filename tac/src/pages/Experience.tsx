const jobs = [
  {
    title: 'Field Data Collection Specialist / Owner',
    company: 'Blue Geomatics LLC',
    period: '2018 – Present',
    location: 'Your City, State',
    points: [
      'Founded and operate an independent field data collection company providing topographic measurement, geospatial data collection, and construction staking services.',
      'Manage all phases of projects from proposal and field data collection through deliverable production and client communication.',
      'Mentored junior field technicians and maintained compliance under applicable regulatory requirements.',
      'Built long-term relationships with title companies, engineers, attorneys, and municipal clients.',
    ],
  },
  {
    title: 'Field Crew Chief',
    company: 'Regional Engineering & Field Services Firm',
    period: '2014 – 2018',
    location: 'Your City, State',
    points: [
      'Led 2–3 person field crews on residential, commercial, and infrastructure data collection projects.',
      'Operated GPS/GNSS receivers, total stations, and data collectors across diverse terrain.',
      'Performed calculations and data processing using AutoCAD Civil 3D and Trimble Business Center.',
      'Prepared field data reports, base maps, and exhibit drawings submitted to clients and engineering teams.',
    ],
  },
  {
    title: 'Field Measurement Technician',
    company: 'State Department of Transportation',
    period: '2012 – 2014',
    location: 'Your City, State',
    points: [
      'Assisted crew chief with right-of-way, route, and bridge measurement projects for highway improvement contracts.',
      'Reduced field notes and prepared preliminary field data drawings for engineering review.',
      'Maintained and calibrated field instruments according to QA/QC standards.',
    ],
  },
]

export default function Experience() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-extrabold text-slate-800 mb-4">Experience</h1>
      <div className="w-16 h-1 bg-amber-400 mb-12 rounded"></div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200 hidden md:block"></div>

        <div className="space-y-12">
          {jobs.map((job, i) => (
            <div key={i} className="md:pl-16 relative">
              {/* Dot */}
              <div className="hidden md:block absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-amber-400 border-2 border-white shadow"></div>

              <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-slate-800">{job.title}</h2>
                    <p className="text-amber-600 font-semibold">{job.company}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm font-medium text-slate-700 bg-slate-100 px-3 py-1 rounded-full">{job.period}</p>
                    <p className="text-xs text-slate-400 mt-1">📍 {job.location}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {job.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-slate-500 text-sm leading-relaxed">
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
