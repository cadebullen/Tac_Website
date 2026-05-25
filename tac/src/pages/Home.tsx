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
    <main>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-white overflow-hidden bg-slate-900">
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
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-slate-900/65" style={{ zIndex: 3 }} />

        {/* Hero content */}
        <div className="relative max-w-3xl mx-auto px-6 text-center" style={{ zIndex: 4 }}>
          <span className="inline-block bg-amber-400/20 text-amber-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
            Field Data Collection Specialist
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Precision &amp; Accuracy in Every Measurement
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Delivering reliable field data collection, precision measurement, and geospatial
            mapping services with over a decade of field expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projects"
              className="bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-8 py-3 rounded-lg transition-colors"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="border border-slate-500 hover:border-amber-400 hover:text-amber-400 text-slate-300 font-medium px-8 py-3 rounded-lg transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="bg-slate-800 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '10+', label: 'Years Experience' },
            { value: '200+', label: 'Projects Completed' },
            { value: '15+', label: 'Counties Covered' },
            { value: '100%', label: 'Licensed & Insured' },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-4xl font-extrabold text-amber-400 mb-2">{value}</p>
              <p className="text-slate-300 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services overview */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Core Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: '📐',
              title: 'Monument Recovery',
              desc: 'Field location of existing monuments and as-found corners, captured with survey-grade GNSS equipment for client and engineer reference.',
            },
            {
              icon: '🗺️',
              title: 'Topographic Mapping',
              desc: 'Detailed terrain and feature mapping for design, planning, and engineering projects.',
            },
            {
              icon: '🏗️',
              title: 'Construction Staking',
              desc: 'Accurate layout and staking to guide construction and ensure design intent is met.',
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
              <p className="text-slate-500">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
