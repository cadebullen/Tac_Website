import { useEffect, useState } from 'react'

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

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % services.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [services.length])

  const activeService = services[activeIndex]

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + services.length) % services.length)
  }

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % services.length)
  }

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') showPrevious()
      if (event.key === 'ArrowRight') showNext()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [services.length])

  return (
    <main className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20 text-slate-100">
      <section className="relative overflow-hidden rounded-3xl border border-slate-900 bg-[linear-gradient(145deg,rgba(15,17,22,0.96),rgba(7,9,13,0.98))] p-8 md:p-12 mb-14 md:mb-16">
        <div className="pointer-events-none absolute -top-16 right-[-28px] h-44 w-44 rounded-full bg-cyan-300/10 blur-3xl" />
        <p className="text-xs tracking-[0.2em] uppercase text-slate-400 mb-4">Services</p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">Field data collection built for production teams.</h1>
        <p className="text-slate-300 max-w-3xl leading-relaxed text-base md:text-lg">
          Survey-grade GPS/GNSS, UAV, and LiDAR services designed to move projects from site capture to design-ready outputs.
        </p>
      </section>

      <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl shadow-[0_10px_50px_rgba(0,0,0,0.45)] p-8 md:p-10 mb-14 md:mb-16">
        <div className="pointer-events-none absolute -top-24 -right-20 h-64 w-64 rounded-full bg-cyan-300/12 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-amber-300/12 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-white/0 to-white/5" />

        <div className="relative flex items-center justify-between gap-4 mb-8">
          <h2 className="text-2xl font-bold text-slate-100">Service Highlights</h2>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={showPrevious}
              className="h-10 w-10 rounded-full border border-white/25 bg-white/10 text-slate-100 hover:border-amber-300/70 hover:bg-white/20 transition-colors"
              aria-label="Previous service"
            >
              <svg className="mx-auto h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={showNext}
              className="h-10 w-10 rounded-full border border-white/25 bg-white/10 text-slate-100 hover:border-amber-300/70 hover:bg-white/20 transition-colors"
              aria-label="Next service"
            >
              <svg className="mx-auto h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg p-8 min-h-[300px] shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
          <div className="text-5xl mb-4">{activeService.icon}</div>
          <h3 className="text-2xl font-bold text-slate-100 mb-3">{activeService.title}</h3>
          <p className="text-slate-200/90 leading-relaxed text-base max-w-3xl">{activeService.description}</p>
        </div>

        <div className="relative mt-6 flex flex-wrap gap-2">
          {services.map((service, index) => (
            <button
              key={service.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === activeIndex
                  ? 'w-8 bg-amber-300 shadow-[0_0_18px_rgba(251,191,36,0.65)]'
                  : 'w-2.5 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`View ${service.title}`}
            />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl px-10 py-12 text-center shadow-[0_10px_50px_rgba(0,0,0,0.45)]">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10" />
        <h2 className="text-3xl font-extrabold text-white mb-4">Ready to get started?</h2>
        <p className="text-slate-300 mb-8 max-w-xl mx-auto">
          Contact us today to discuss your project requirements and receive a free quote.
        </p>
        <a
          href="/contact"
          className="inline-block bg-amber-300 hover:bg-amber-200 text-slate-950 font-bold px-8 py-3 rounded-full transition-colors shadow-[0_0_20px_rgba(251,191,36,0.35)]"
        >
          Get in Touch
        </a>
      </div>
    </main>
  )
}
