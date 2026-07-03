import { useState } from 'react'

type PointCloudViewerProps = {
  className?: string
  deferLoad?: boolean
}

export default function PointCloudViewer({ className = '', deferLoad = true }: PointCloudViewerProps) {
  const [isLoaded, setIsLoaded] = useState(!deferLoad)
  const [isBooting, setIsBooting] = useState(false)
  const viewerSrc = `${import.meta.env.BASE_URL}projects/cloudR_potree/cloudR_viewer.html`

  const loadViewer = () => {
    if (isLoaded || isBooting) return

    setIsBooting(true)

    const activate = () => setIsLoaded(true)

    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      const idle = window as Window & {
        requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number
      }
      idle.requestIdleCallback(activate, { timeout: 700 })
      return
    }

    setTimeout(activate, 0)
  }

  return (
    <section className={`rounded-2xl overflow-hidden border border-slate-200 bg-slate-950 shadow-sm ${className}`}>
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800">
        <h2 className="text-sm font-semibold tracking-wide text-slate-100">CloudR Point Cloud</h2>
        <span className="text-xs text-slate-400">Potree</span>
      </div>
      {isLoaded ? (
        <>
          <div className="px-4 py-2 border-b border-slate-800 bg-slate-900/60 text-[11px] text-slate-300 flex flex-wrap gap-x-4 gap-y-1">
            <span><strong>Scroll:</strong> zoom</span>
            <span><strong>Left drag:</strong> orbit</span>
            <span><strong>Right drag:</strong> pan</span>
            <span><strong>Double click:</strong> focus area</span>
          </div>
          <iframe
            src={viewerSrc}
            title="CloudR Potree Viewer"
            className="w-full h-[70vh] min-h-[480px]"
            loading="lazy"
          />
        </>
      ) : (
        <div className="w-full h-[70vh] min-h-[480px] grid place-items-center bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
          <div className="text-center px-6">
            <p className="text-slate-200 text-lg font-semibold mb-2">Interactive point cloud ready</p>
            <p className="text-slate-400 text-sm mb-6">Load the 3D Potree scene on demand for faster page performance.</p>
            <button
              type="button"
              onClick={loadViewer}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-amber-400 hover:bg-amber-300 text-slate-900 text-sm font-semibold transition-colors"
            >
              {isBooting ? 'Initializing Viewer...' : 'Load 3D Viewer'}
            </button>
          </div>
        </div>
      )}
    </section>
  )
}