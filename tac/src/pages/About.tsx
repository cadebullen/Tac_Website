export default function About() {
  const certs = [
    'OSHA 10-Hour Safety Certification',
    'FAA Part 107 Remote Pilot Certificate (UAS/Drone Operations)',
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

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-extrabold text-slate-800 mb-4">About Me</h1>
      <div className="w-16 h-1 bg-amber-400 mb-12 rounded"></div>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Bio */}
        <div>
          <h2 className="text-2xl font-bold text-slate-700 mb-6">Who I Am</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              I am a Field Data Collection Specialist with over a decade of experience providing
              accurate, reliable field data collection services across residential, commercial, and
              infrastructure projects.
            </p>
            <p>
              My work spans topographic data collection, utility feature measurement, UAV-based
              aerial data collection, and construction staking. I take pride in delivering results
              that clients and engineers can depend on — on time and within budget.
            </p>
            <p>
              I bring a detail-oriented approach to every project, from single-lot residential
              sites to large-scale infrastructure corridor collection. My field experience is backed
              by proficiency in the latest field measurement technology and software.
            </p>
          </div>

          {/* Certs */}
          <h2 className="text-2xl font-bold text-slate-700 mt-10 mb-4">Certifications &amp; Memberships</h2>
          <ul className="space-y-3">
            {certs.map((c) => (
              <li key={c} className="flex items-start gap-3 text-slate-600">
                <span className="mt-1 text-amber-500 font-bold">✓</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-2xl font-bold text-slate-700 mb-6">Technical Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-amber-50 border border-amber-200 text-amber-800 text-sm font-medium px-4 py-2 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Education */}
          <h2 className="text-2xl font-bold text-slate-700 mt-10 mb-4">Education</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <p className="font-bold text-slate-800">B.S. Surveying &amp; Mapping</p>
            <p className="text-slate-500 text-sm mt-1">University of [Your State] · Graduated [Year]</p>
          </div>
        </div>
      </div>
    </main>
  )
}
