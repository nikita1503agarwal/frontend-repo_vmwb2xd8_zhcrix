import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-950">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-bold text-white tracking-tight"
        >
          Book a Private Tour
        </motion.h2>
        <p className="mt-3 text-slate-300">Share your details and our concierge will reach out to arrange a time that works for you.</p>

        <form onSubmit={(e) => e.preventDefault()} className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input className="rounded-xl border border-white/10 bg-slate-900/60 p-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Full name" />
          <input className="rounded-xl border border-white/10 bg-slate-900/60 p-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Email" />
          <button className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg hover:shadow-cyan-400/40 transition">Request Tour</button>
        </form>
      </div>
    </section>
  )
}
