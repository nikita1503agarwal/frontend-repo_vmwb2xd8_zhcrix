import { motion } from 'framer-motion'
import { Sparkles, Mountain, Sun, Droplets, Dumbbell } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Timeless Interiors',
    desc: 'Floor-to-ceiling glass, natural stone, premium fixtures, and bespoke millwork come together for a serene, modern aesthetic.'
  },
  {
    icon: Mountain,
    title: 'Skyline Views',
    desc: 'Panoramas of river and city through ultra-clear glazing with acoustic insulation for tranquil living.'
  },
  {
    icon: Sun,
    title: 'Natural Light',
    desc: 'Optimized orientation floods homes with daylight while maintaining privacy and comfort.'
  },
  {
    icon: Dumbbell,
    title: 'Wellness Club',
    desc: 'Private gym, yoga studio, cold plunge, and spa-level amenities curated for daily restoration.'
  },
  {
    icon: Droplets,
    title: 'Sustainable Design',
    desc: 'High-efficiency systems, filtered air and water, and LEED-focused materials.'
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-bold text-white tracking-tight text-center"
        >
          Crafted For Urban Living
        </motion.h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur shadow-lg"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white grid place-content-center shadow-md shadow-cyan-500/30">
                <f.icon />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-slate-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
