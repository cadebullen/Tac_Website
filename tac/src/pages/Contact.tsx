import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // TODO: wire up to your preferred email/form service
    setStatus('sent')
  }

  const socials = [
    { label: 'Email', value: 'contact@tacsurvey.com', href: 'mailto:contact@tacsurvey.com', icon: '✉️' },
    { label: 'Phone', value: '(555) 123-4567', href: 'tel:+15551234567', icon: '📞' },
    { label: 'LinkedIn', value: 'linkedin.com/in/yourname', href: 'https://linkedin.com', icon: '🔗' },
  ]

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-extrabold text-slate-800 mb-4">Contact</h1>
      <div className="w-16 h-1 bg-amber-400 mb-4 rounded"></div>
      <p className="text-slate-500 mb-12 max-w-xl">
        Ready to start a project or have a question? Reach out and I'll get back to you within one business day.
      </p>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Contact info */}
        <div>
          <h2 className="text-2xl font-bold text-slate-700 mb-6">Get in Touch</h2>
          <div className="space-y-5">
            {socials.map(({ label, value, href, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 bg-white border border-slate-200 rounded-xl px-6 py-4 shadow-sm hover:shadow-md hover:border-amber-300 transition-all group"
              >
                <span className="text-2xl">{icon}</span>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">{label}</p>
                  <p className="text-slate-700 font-semibold group-hover:text-amber-600 transition-colors">{value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h3 className="font-bold text-amber-800 mb-2">Service Area</h3>
            <p className="text-amber-700 text-sm">
              Serving [Your County] and surrounding areas within [Your State].
              Remote/statewide field data collection available.
            </p>
          </div>
        </div>

        {/* Contact form */}
        <div>
          <h2 className="text-2xl font-bold text-slate-700 mb-6">Send a Message</h2>
          {status === 'sent' ? (
            <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-8 text-center">
              <p className="text-4xl mb-3">✓</p>
              <p className="font-bold text-lg">Message Sent!</p>
              <p className="text-sm mt-1">Thanks for reaching out. I'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-1.5" htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-1.5" htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1.5" htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                  placeholder="Project inquiry"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1.5" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent resize-none"
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
