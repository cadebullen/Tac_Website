import { useState } from 'react'
import PointCloudViewer from '../components/PointCloudViewer'

type ProjectItem = {
  id: string
  title: string
  type: string
  category: string
  uploadDate: string
  epsg: string
  approvalStatus: string
  visibility: string
  fileCount: number
  points: string
  triangles: string
  splats: string
  textures: string
  orthomosaics: number
}

const projects: ProjectItem[] = [
  {
    id: 'cloudr-las',
    title: 'cloudR.las',
    type: 'PC',
    category: 'Reality Data',
    uploadDate: 'Jul 03, 2026',
    epsg: '6586',
    approvalStatus: 'none',
    visibility: 'unlisted',
    fileCount: 1,
    points: '31.9 M',
    triangles: '0',
    splats: '0',
    textures: '0',
    orthomosaics: 0,
  },
]

export default function Projects() {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null)

  return (
    <main className="min-h-screen w-full bg-black text-slate-100 px-3 md:px-6 py-6 md:py-8">
      <section className="relative overflow-hidden rounded-3xl border border-slate-900 bg-[linear-gradient(145deg,rgba(15,17,22,0.96),rgba(7,9,13,0.98))] p-6 md:p-10 mb-6 md:mb-7">
        <div className="pointer-events-none absolute -top-16 right-[-34px] h-44 w-44 rounded-full bg-sky-300/10 blur-3xl" />
        <p className="text-xs tracking-[0.2em] uppercase text-slate-400 mb-3">Projects</p>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-3">Reality data, ready to inspect.</h1>
        <p className="text-slate-300 max-w-3xl leading-relaxed">
          Browse active datasets, open point cloud viewers, and review capture metadata in one streamlined workspace.
        </p>
      </section>

      <section className="mb-4 md:mb-6 flex flex-col lg:flex-row lg:items-center gap-3">
        <h2 className="text-lg md:text-xl font-semibold tracking-wide text-slate-100">Project Library</h2>

        <div className="flex-1 lg:max-w-xl">
          <label htmlFor="project-filter" className="sr-only">
            Filter projects
          </label>
          <input
            id="project-filter"
            type="text"
            placeholder="Filter..."
            className="w-full h-10 px-4 bg-[#0a0a0a] border border-slate-800 rounded-full text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/40"
          />
        </div>

        <div className="flex items-center gap-2">
          <select className="h-10 px-3 bg-[#0a0a0a] border border-slate-800 rounded-md text-sm text-slate-200">
            <option>Group by: None</option>
          </select>
          <select className="h-10 px-3 bg-[#0a0a0a] border border-slate-800 rounded-md text-sm text-slate-200">
            <option>Sort by: Upload Date</option>
          </select>
        </div>
      </section>

      <section className="space-y-4">
        {projects.map((project) => {
          const showViewer = activeProjectId === project.id

          return (
            <article
              key={project.id}
              className="w-full bg-[#0f1116] border border-slate-900 rounded-xl overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
            >
              <div className="p-3 md:p-4 flex gap-3 md:gap-4">
                <div className="w-24 h-20 md:w-32 md:h-24 rounded-md bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center shrink-0">
                  <span className="text-[10px] md:text-xs text-slate-300 uppercase tracking-widest">Point Cloud</span>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h2 className="font-semibold text-sm md:text-base text-slate-100">{project.title}</h2>
                    <span className="text-[10px] font-semibold text-slate-200 bg-slate-800 border border-slate-700 px-2 py-0.5 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-400 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded-full">
                      {project.type}
                    </span>
                  </div>

                  <p className="text-[11px] md:text-xs text-slate-400 mb-2 uppercase tracking-wide">
                    Upload Date: {project.uploadDate} | EPSG: {project.epsg}
                  </p>

                  <p className="text-[11px] md:text-xs text-slate-400 leading-relaxed">
                    Approval Status: {project.approvalStatus} | Visibility: {project.visibility} | File Count: {project.fileCount} | Triangles: {project.triangles} | Points: {project.points} | Splats: {project.splats} | Textures: {project.textures} | Orthomosaics: {project.orthomosaics}
                  </p>
                </div>

                <div className="shrink-0 flex items-start gap-2">
                  <a
                    href={`${import.meta.env.BASE_URL}projects/cloudR_potree/cloudR_viewer.html`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-9 px-3 md:px-4 inline-flex items-center text-xs font-semibold rounded-md border border-slate-700 bg-slate-900 hover:border-slate-500 text-slate-200 transition-colors"
                  >
                    Fullscreen
                  </a>
                  <button
                    type="button"
                    onClick={() => setActiveProjectId(showViewer ? null : project.id)}
                    className="h-9 px-3 md:px-4 text-xs font-semibold rounded-md bg-orange-500 hover:bg-orange-400 text-white transition-colors"
                  >
                    {showViewer ? 'Hide 3D' : 'View 3D'}
                  </button>
                </div>
              </div>

              {showViewer && (
                <div className="border-t border-slate-900 bg-black p-3 md:p-4">
                  <PointCloudViewer className="border-slate-800" />
                </div>
              )}
            </article>
          )
        })}
      </section>
    </main>
  )
}
