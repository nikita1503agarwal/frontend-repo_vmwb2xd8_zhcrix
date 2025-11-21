import { motion } from 'framer-motion'

const homes = [
  {
    name: 'Residence 21A',
    type: '2 BR • 2.5 BA • 1,320 sq ft',
    price: '$2,450,000',
    img: 'https://images.unsplash.com/photo-1521676259650-675b5bfec1ad?q=80&w=1600&auto=format&fit=crop'
  },
  {
    name: 'Penthouse North',
    type: '3 BR • 3.5 BA • 2,480 sq ft',
    price: '$6,900,000',
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1600&auto=format&fit=crop'
  },
  {
    name: 'Residence 12C',
    type: '1 BR • 1 BA • 820 sq ft',
    price: '$1,150,000',
    img: 'https://images.unsplash.com/photo-1600585154722-76edb2d25101?q=80&w=1600&auto=format&fit=crop'
  }
]

export default function Listings() {
  return (
    <section id="listings" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">Available Residences</h2>
            <p className="mt-3 text-slate-300">A curated selection of move-in-ready homes</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-xl bg-white/90 px-5 py-3 font-semibold text-slate-900 shadow-lg hover:bg-white">Request Full List</a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {homes.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={h.img} alt={h.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
              </div>
              <div className="p-5">
                <div className="text-white text-lg font-semibold">{h.name}</div>
                <div className="text-slate-300 text-sm">{h.type}</div>
                <div className="mt-3 text-cyan-300 font-semibold">{h.price}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
