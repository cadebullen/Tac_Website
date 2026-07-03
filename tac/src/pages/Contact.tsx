import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Form submission UI confirmation; connect to your backend/email service when ready.
    setStatus('sent')
  }

  const socials = [
    { label: 'Email', value: 'contact@tacsurvey.com', href: 'mailto:contact@tacsurvey.com', icon: '✉️' },
    { label: 'Phone', value: '(210) 555-0147', href: 'tel:+12105550147', icon: '📞' },
    { label: 'LinkedIn', value: 'linkedin.com/company/blue-geomatics', href: 'https://linkedin.com/company/blue-geomatics', icon: '🔗' },
  ]

  return (
    <main className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20 text-slate-100">
      <section className="relative overflow-hidden rounded-3xl border border-slate-900 bg-[linear-gradient(145deg,rgba(15,17,22,0.96),rgba(7,9,13,0.98))] p-8 md:p-12 mb-14 md:mb-16">
        <div className="pointer-events-none absolute -top-16 right-[-28px] h-44 w-44 rounded-full bg-amber-300/10 blur-3xl" />
        <p className="text-xs tracking-[0.2em] uppercase text-slate-400 mb-4">Contact</p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">Let’s scope your next deliverable.</h1>
        <p className="text-slate-300 max-w-3xl leading-relaxed text-base md:text-lg">
          Share your timeline, site conditions, and output requirements. You will get a clear response within one business day.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-10 md:gap-12">
        {/* Contact info */}
        <div>
          <h2 className="text-2xl font-semibold text-slate-100 mb-6">Get in Touch</h2>
          <div className="space-y-5">
            {socials.map(({ label, value, href, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 bg-[#0f1116] border border-slate-900 rounded-2xl px-6 py-4 shadow-sm hover:shadow-md hover:border-amber-300/50 transition-all group"
              >
                <span className="text-2xl">{icon}</span>
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">{label}</p>
                  <p className="text-slate-200 font-semibold group-hover:text-amber-400 transition-colors">{value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 bg-amber-500/10 border border-amber-400/30 rounded-2xl p-6">
            <h3 className="font-bold text-amber-300 mb-2">Service Area</h3>
            <p className="text-amber-200 text-sm">
              Serving San Antonio, Central Texas, and statewide projects as requested.
              Remote coordination and regional field data collection available.
            </p>
          </div>
        </div>

        {/* Contact form */}
        <div>
          <h2 className="text-2xl font-semibold text-slate-100 mb-6">Send a Message</h2>
          {status === 'sent' ? (
            <div className="bg-emerald-500/10 border border-emerald-400/30 text-emerald-200 rounded-2xl p-8 text-center">
              <p className="text-4xl mb-3">✓</p>
              <p className="font-bold text-lg">Message Sent!</p>
              <p className="text-sm mt-1 text-emerald-100/90">Thanks for reaching out. I'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1.5" htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full border border-slate-800 bg-[#0f1116] rounded-lg px-4 py-2.5 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1.5" htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full border border-slate-800 bg-[#0f1116] rounded-lg px-4 py-2.5 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1.5" htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="w-full border border-slate-800 bg-[#0f1116] rounded-lg px-4 py-2.5 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                  placeholder="Project inquiry"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1.5" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full border border-slate-800 bg-[#0f1116] rounded-lg px-4 py-2.5 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold py-3 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}
