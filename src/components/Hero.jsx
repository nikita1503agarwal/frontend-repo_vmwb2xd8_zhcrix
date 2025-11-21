import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-slate-950" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-slate-900/40" />

      <div className="relative h-full">
        <div className="mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white"
            >
              Elevate Your Everyday
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
              className="mt-4 max-w-xl text-base sm:text-lg text-slate-200"
            >
              A new standard of luxury living in the heart of the skyline. Thoughtfully designed residences with curated amenities and breathtaking views.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8, ease: 'easeOut' }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a href="#listings" className="rounded-xl bg-white/90 px-6 py-3 font-semibold text-slate-900 shadow-lg shadow-white/20 hover:bg-white transition-colors">Explore Residences</a>
              <a href="#contact" className="rounded-xl bg-slate-900/60 border border-white/20 px-6 py-3 font-semibold text-white backdrop-blur hover:bg-slate-900/70 transition-colors">Book a Private Tour</a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-white/90"
            >
              {[
                ['Studio to 3BR', 'Floor Plans'],
                ['City + River', 'View Options'],
                ['24/7', 'Concierge'],
                ['LEED', 'Certified']
              ].map(([k, v], idx) => (
                <div key={idx} className="rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 backdrop-blur">
                  <div className="text-sm text-slate-300">{v}</div>
                  <div className="text-lg font-semibold">{k}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
