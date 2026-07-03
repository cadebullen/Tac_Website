import { Link } from 'react-router-dom'
import { useState, useCallback, useEffect, useRef } from 'react'
import { flushSync } from 'react-dom'

// Set how many seconds to show each video (null = play until natural end)
const BROLL_VIDEOS = [
  { src: 'https://pub-96cbe33ea7714010b741c1392fc46d03.r2.dev/broll_1_compressed.mp4', duration: 8 },
  { src: 'https://pub-96cbe33ea7714010b741c1392fc46d03.r2.dev/broll_2.mp4', duration: 12 },
  { src: 'https://pub-96cbe33ea7714010b741c1392fc46d03.r2.dev/broll_3.mp4', duration: 6 },
  { src: 'https://pub-96cbe33ea7714010b741c1392fc46d03.r2.dev/broll_4_compressed.mp4', duration: 10 },
  { src: 'https://pub-96cbe33ea7714010b741c1392fc46d03.r2.dev/broll_5.mp4', duration: 8 },
]

export default function Home() {
  const indexRef = useRef(0)
  const activeSlotRef = useRef<0 | 1>(0)
  const [activeSlot, setActiveSlot] = useState<0 | 1>(0)
  const refA = useRef<HTMLVideoElement>(null)
  const refB = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const transitioningRef = useRef(false)

  const advance = useCallback(() => {
    if (transitioningRef.current) return
    transitioningRef.current = true

    indexRef.current = (indexRef.current + 1) % BROLL_VIDEOS.length
    const nextIndex = indexRef.current
    const prevSlot = activeSlotRef.current
    const nextSlot = (prevSlot === 0 ? 1 : 0) as 0 | 1
    const nextRef = nextSlot === 0 ? refA : refB
    const prevRef = prevSlot === 0 ? refA : refB

    // Capture the current video's last frame to canvas — hides any flash
    const activeVideo = prevRef.current
    const canvas = canvasRef.current
    if (activeVideo && canvas) {
      canvas.width = activeVideo.videoWidth
      canvas.height = activeVideo.videoHeight
      canvas.getContext('2d')?.drawImage(activeVideo, 0, 0)
      // Direct DOM write — no React render, no flushSync, no setTimeout violation
      canvas.style.zIndex = '2'
    }

    const doSwitch = () => {
      nextRef.current?.removeEventListener('playing', doSwitch)
      transitioningRef.current = false
      // Swap video z-indexes synchronously before reloading the old slot
      flushSync(() => {
        activeSlotRef.current = nextSlot
        setActiveSlot(nextSlot)
      })
      // Now safe to reload the hidden slot
      const afterNextIndex = (nextIndex + 1) % BROLL_VIDEOS.length
      if (prevRef.current) {
        prevRef.current.pause()
        prevRef.current.src = BROLL_VIDEOS[afterNextIndex].src
        prevRef.current.load()
      }
      if (timerRef.current) clearTimeout(timerRef.current)
      const { duration } = BROLL_VIDEOS[nextIndex]
      if (duration !== null) {
        timerRef.current = setTimeout(advance, duration * 1000)
      }
      // Defer hiding the canvas by two paint frames. Without this, when 'playing'
      // fires before the browser's first rendering opportunity (first transition,
      // fully-buffered video), advance() and doSwitch() both execute before any
      // paint — the canvas goes z:2→z:-1 in the DOM but is never rendered visible.
      // Two rAFs guarantee the frozen frame is painted at least once before removal.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (canvasRef.current) canvasRef.current.style.zIndex = '-1'
        })
      })
    }

    nextRef.current?.addEventListener('playing', doSwitch)
    nextRef.current?.play().catch(err => {
      nextRef.current?.removeEventListener('playing', doSwitch)
      transitioningRef.current = false
      if (err.name !== 'AbortError') console.error(err)
    })
  }, [])

  useEffect(() => {
    // Slot A: play first video
    if (refA.current) {
      refA.current.src = BROLL_VIDEOS[0].src
      refA.current.load()
      refA.current.play().catch(() => {})
    }
    // Slot B: silently preload second video
    if (refB.current) {
      refB.current.src = BROLL_VIDEOS[1 % BROLL_VIDEOS.length].src
      refB.current.load()
    }
    // Schedule first cut
    const { duration } = BROLL_VIDEOS[0]
    if (duration !== null) {
      timerRef.current = setTimeout(advance, duration * 1000)
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
      // Pause videos so StrictMode's effect re-run doesn't get an AbortError
      // from load() interrupting a pending play() promise
      refA.current?.pause()
      refB.current?.pause()
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <main className="bg-black text-slate-100">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
        <video
          ref={refA}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: activeSlot === 0 ? 1 : 0 }}
          muted
          playsInline
          onEnded={advance}
        />
        <video
          ref={refB}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: activeSlot === 1 ? 1 : 0 }}
          muted
          playsInline
          onEnded={advance}
        />
        {/* Freeze-frame canvas: covers both videos during the switch */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: -1 }}
        />
        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-black/45" style={{ zIndex: 3 }} />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.18),transparent_35%),radial-gradient(circle_at_80%_65%,rgba(14,165,233,0.16),transparent_40%)]"
          style={{ zIndex: 3 }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" style={{ zIndex: 3 }} />

        {/* Hero content */}
        <div className="relative max-w-6xl mx-auto w-full px-6 md:px-10" style={{ zIndex: 4 }}>
          <span className="inline-block bg-white/10 backdrop-blur border border-white/20 text-amber-200 text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full mb-7 tracking-[0.18em] uppercase">
            Field Data Collection Specialist

          </span>
          <h1 className="max-w-4xl text-5xl md:text-7xl lg:text-8xl font-semibold mb-6 leading-[0.95] tracking-tight text-white">
            Precision,
            <br />
            engineered for
            <br />
            the real world.
          </h1>
          <p className="text-base md:text-xl text-slate-200/90 mb-10 max-w-2xl leading-relaxed">
            From ground control to LiDAR deliverables, every capture is built for clean data,
            fast decisions, and confident execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-4 md:mt-6">
            <Link
              to="/projects"
              className="bg-white text-black hover:bg-slate-200 font-semibold px-8 py-3 rounded-full transition-colors"
            >
              View Featured Work
            </Link>
            <Link
              to="/contact"
              className="border border-white/40 hover:border-white hover:bg-white/10 text-white font-medium px-8 py-3 rounded-full transition-colors"
            >
              Start a Project
            </Link>
          </div>

          <p className="mt-10 text-xs tracking-[0.24em] uppercase text-slate-300/80">Scroll to explore</p>
        </div>
      </section>

      <section className="py-24 md:py-32 border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="text-xs tracking-[0.22em] uppercase text-slate-400 mb-5">Built for demanding sites</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl leading-[1.02] font-semibold tracking-tight max-w-5xl text-white">
            Reliable field intelligence,
            <span className="text-slate-400"> from first shot to final deliverable.</span>
          </h2>

          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {[
              {
                title: 'Capture',
                text: 'Survey-grade GNSS, UAV, and LiDAR workflows calibrated for repeatable accuracy in the field.',
              },
              {
                title: 'Process',
                text: 'Structured QA/QC and standardized processing pipelines that reduce rework and delivery risk.',
              },
              {
                title: 'Deliver',
                text: 'Client-ready outputs across CAD, GIS, and point cloud formats to plug directly into design teams.',
              },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-900 bg-[#0f1116] p-6 md:p-7">
                <h3 className="text-2xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-slate-300 leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-28 border-t border-slate-900 bg-[#07090d]">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="rounded-3xl border border-slate-800 bg-[linear-gradient(145deg,rgba(15,17,22,0.95),rgba(10,12,17,0.98))] p-8 md:p-12">
            <p className="text-xs tracking-[0.22em] uppercase text-slate-400 mb-5">Core Services</p>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-white">
                  Precision workflows.
                  <br />
                  Modern outputs.
                </h2>
              </div>
              <div className="space-y-4 text-slate-300">
                {[
                  'Monument Recovery and Boundary Support Data',
                  'Topographic Mapping and Surface Utility Collection',
                  'LiDAR, Orthomosaic, and Point Cloud Deliverables',
                  'Construction Staking and As-Built Documentation',
                ].map((line) => (
                  <div key={line} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" />
                    <p>{line}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-28 border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
            {[
              { value: '10+', label: 'Years Experience' },
              { value: '200+', label: 'Projects Completed' },
              { value: '15+', label: 'Counties Covered' },
              { value: '100%', label: 'Licensed & Insured' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-4xl md:text-5xl font-semibold text-white mb-1">{value}</p>
                <p className="text-slate-400 text-sm uppercase tracking-wide">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-slate-900 bg-[#0f1116] p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-slate-400 mb-2">Featured Dataset</p>
              <h3 className="text-2xl md:text-3xl font-semibold text-white">Explore CloudR in 3D</h3>
              <p className="text-slate-300 mt-2 max-w-xl">
                Open the point cloud viewer and inspect real project geometry with a full Potree workflow.
              </p>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center bg-amber-300 hover:bg-amber-200 text-black font-semibold px-7 py-3 rounded-full transition-colors"
            >
              Launch Viewer
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-slate-300 text-lg">Need coverage for your next corridor, site, or utility package?</p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center border border-slate-600 hover:border-white hover:bg-white/5 text-slate-100 font-medium px-6 py-2.5 rounded-full transition-colors"
          >
            Talk to Blue Geomatics
          </Link>
        </div>
      </section>
    </main>
  )
}
