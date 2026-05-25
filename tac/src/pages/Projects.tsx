const projects = [
  {
    title: 'Riverside Subdivision — Field Data Collection',
    category: 'Field Data Collection',
    location: 'Jefferson County',
    year: '2024',
    desc: 'Collected field data for a 42-lot residential subdivision including topographic measurements, utility feature positions, and existing monument locations for client and engineer use.',
    tags: ['Topography', 'GNSS', 'GPS'],
  },
  {
    title: 'Highway 12 Corridor — Topographic Data Collection',
    category: 'Topographic Mapping',
    location: 'State DOT Contract',
    year: '2023',
    desc: 'Completed 8-mile topographic data collection corridor for roadway design, delivering DTM, cross-sections, and drainage features.',
    tags: ['Topography', 'LiDAR', 'AutoCAD Civil 3D'],
  },
  {
    title: 'Downtown Commercial Site — Precision Field Measurement',
    category: 'Precision Measurement',
    location: 'City of [Your City]',
    year: '2023',
    desc: 'Collected comprehensive field data for a 2.4-acre commercial redevelopment parcel including existing feature positions, utility infrastructure, and surface conditions for design and planning use.',
    tags: ['GNSS', 'Field Data', 'Commercial'],
  },
  {
    title: 'Agricultural Property — Existing Monument Recovery',
    category: 'Monument Recovery',
    location: 'Rural County',
    year: '2022',
    desc: 'Field-located and documented existing section corners and property monuments as found, capturing GPS positions of all recovered monumentation for client and engineer reference.',
    tags: ['GNSS', 'Monuments', 'Field Data'],
  },
  {
    title: 'Solar Farm Construction Staking',
    category: 'Construction Staking',
    location: 'Regional Energy Project',
    year: '2022',
    desc: 'Provided layout and staking for 240-acre utility-scale solar installation across 1,200+ panel rows over 6-week duration.',
    tags: ['Construction', 'Staking', 'GPS'],
  },
  {
    title: 'Wetland Delineation Support — Field Data Collection',
    category: 'Environmental Documentation',
    location: 'State Park Adjacent Property',
    year: '2021',
    desc: 'Coordinated with environmental consultants to field-collect and document wetland delineation boundary positions for permit application support.',
    tags: ['Wetlands', 'GIS', 'Environmental'],
  },
]

const tagColors: Record<string, string> = {
  GPS: 'bg-green-50 text-green-700 border-green-200',
  GNSS: 'bg-green-50 text-green-700 border-green-200',
  Topography: 'bg-purple-50 text-purple-700 border-purple-200',
  Construction: 'bg-red-50 text-red-700 border-red-200',
}

function tagClass(tag: string) {
  return tagColors[tag] ?? 'bg-slate-50 text-slate-600 border-slate-200'
}

export default function Projects() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-extrabold text-slate-800 mb-4">Projects</h1>
      <div className="w-16 h-1 bg-amber-400 mb-4 rounded"></div>
      <p className="text-slate-500 mb-12 max-w-2xl">
        A selection of completed field data collection projects across residential, commercial,
        infrastructure, and environmental sectors.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col"
          >
            <div className="flex items-start justify-between mb-3">
              <span className="text-xs font-semibold text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                {p.category}
              </span>
              <span className="text-xs text-slate-400">{p.year}</span>
            </div>
            <h2 className="text-lg font-bold text-slate-800 mb-1">{p.title}</h2>
            <p className="text-xs text-slate-400 mb-3">📍 {p.location}</p>
            <p className="text-slate-500 text-sm flex-1 leading-relaxed mb-4">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {p.tags.map((tag) => (
                <span key={tag} className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${tagClass(tag)}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
