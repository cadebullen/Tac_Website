export default function Services() {
  const services = [
    {
      title: 'Control Points',
      description:
        'Establishment of ground control points (GCPs) using survey-grade GNSS equipment to support project accuracy and georeferencing needs.',
      icon: '📡',
    },
    {
      title: 'Design Topography',
      description:
        'High-accuracy terrain data collection for corridors, drainage ditches, and site development — including hard surfaces, natural ground, and drainage features. Collected via LiDAR or survey-grade rover/GPS.',
      icon: '🗺️',
    },
    {
      title: 'Surface Utility Collection',
      description:
        'Field collection of existing surface utility infrastructure including gas lines, water lines, telephone, electric, and other utilities. Positions captured via survey-grade rover/GPS and delivered in client-ready formats.',
      icon: '🔌',
    },
    {
      title: 'Orthomosaic Imagery',
      description:
        'UAV-based aerial imagery processed into georeferenced orthomosaics, supported by GCPs for survey-grade horizontal accuracy.',
      icon: '🛰️',
    },
    {
      title: 'Aerial Site Reconnaissance — Imagery & Video',
      description:
        'UAV aerial photography and video of project sites for planning, reconnaissance, and documentation purposes. Useful for identifying site conditions, access constraints, drainage patterns, and existing improvements prior to fieldwork.',
      icon: '🚁',
    },
    {
      title: 'Storm Inlet & Drainage Collection',
      description:
        'Field measurement and positioning of storm inlets, headwalls, and drainage features using survey-grade rover/GPS.',
      icon: '🌧️',
    },
    {
      title: 'Sanitary Sewer Measurement',
      description:
        'Field collection of sanitary sewer infrastructure — manholes, cleanouts, and related features — with survey-grade positional accuracy.',
      icon: '🔧',
    },
    {
      title: 'Irrigation Stand Pipe Collection',
      description:
        'Field measurement and positioning of irrigation stand pipes and related infrastructure using survey-grade rover/GPS.',
      icon: '💧',
    },
    {
      title: 'Stockpile Volume Measurement',
      description:
        'UAV-based aerial data collection and processing to calculate stockpile volumes for aggregate, earthwork, and material management. Deliverables include point cloud data, surface models, and computed volume reports for contractor and owner use.',
      icon: '📦',
    },
    {
      title: 'Property Corner Locating',
      description:
        'Field location and GPS positioning of existing monuments — iron pins, concrete monuments, capped rods — as found in the field. Positions are reported as-found only; no boundary interpretation, resolution, or legal opinion is provided.',
      icon: '📍',
    },
    {
      title: 'As-Built Feature Collection',
      description:
        'Field collection of existing infrastructure — curbs, sidewalks, driveways, retaining walls, signage, and other site features — using survey-grade rover/GPS for use in design or record drawings.',
      icon: '🏗️',
    },
    {
      title: 'Pavement & Surface Condition Documentation',
      description:
        'Field photography and aerial documentation of existing pavement, structures, and site surfaces for asset management or design reference.',
      icon: '🛣️',
    },
    {
      title: 'Cut Sheet / Grade Check Data Collection',
      description:
        'Field verification and data collection of construction grades and elevations at staked locations for contractor or engineer use.',
      icon: '📏',
    },
    {
      title: 'ROW & Easement Marker Recovery',
      description:
        'Field search and location of existing right-of-way markers, easement posts, and related monuments as found. No boundary determination or legal opinion provided.',
      icon: '🚧',
    },
    {
      title: 'Point Cloud & LiDAR Data Collection',
      description:
        'Ground-based or aerial LiDAR scanning for 3D point cloud deliverables used in design, modeling, and quantity estimation.',
      icon: '🔬',
    },
    {
      title: 'CAD Drafting Services',
      description:
        'Preparation of CAD drawings from field-collected data including topographic base maps, as-built exhibit drawings, utility layouts, corridor drawings, drainage exhibits, and site plans. Deliverables provided in client-specified formats (DWG, DXF, PDF). No professional seal or certification included — drafting services only.',
      icon: '📐',
    },
    {
      title: 'Construction Staking — Utilities & Site',
      description:
        'Field staking of proposed infrastructure for new construction including waterlines, storm drain, sanitary sewer, property corners, building corners, and easement lines. Stakes are set from engineer/designer-provided coordinates and plans. No boundary determination or legal opinion provided.',
      icon: '📌',
    },
  ]

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-extrabold text-slate-800 mb-4">Field Data Collection Services</h1>
      <div className="w-16 h-1 bg-amber-400 mb-6 rounded"></div>
      <p className="text-slate-600 text-lg leading-relaxed mb-4 max-w-3xl">
        Precision field data collection using survey-grade GPS/GNSS, UAV, and LiDAR technology.
      </p>
      <p className="text-slate-500 text-sm leading-relaxed mb-16 max-w-3xl">
        All data delivered in client-specified formats (CSV, DWG, SHP, LAS, GeoTIFF, MP4, etc.).
        No professional seals or certifications included — raw field data and documentation only.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md transition-shadow"
          >
            <div className="text-4xl mb-4">{s.icon}</div>
            <h2 className="text-xl font-bold text-slate-800 mb-3">{s.title}</h2>
            <p className="text-slate-600 leading-relaxed text-sm">{s.description}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 bg-slate-800 rounded-2xl px-10 py-12 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-4">Ready to get started?</h2>
        <p className="text-slate-300 mb-8 max-w-xl mx-auto">
          Contact us today to discuss your project requirements and receive a free quote.
        </p>
        <a
          href="/contact"
          className="inline-block bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-8 py-3 rounded-full transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </main>
  )
}
