import { useState } from 'react'
import { Menu, Home, Phone, Building2 } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 border border-white/10 shadow-lg">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-3 group">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 grid place-content-center text-white shadow-md shadow-blue-500/30">
                <Building2 size={22} />
              </div>
              <div>
                <div className="text-white font-semibold tracking-tight group-hover:text-cyan-200 transition-colors">Skyline Living</div>
                <div className="text-xs text-slate-300/70">Luxury Residences</div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-slate-200">
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#listings" className="hover:text-white transition-colors">Residences</a>
              <a href="#amenities" className="hover:text-white transition-colors">Amenities</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </nav>

            <div className="hidden md:flex">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/40 transition-all">
                <Phone size={18} />
                Book a Tour
              </a>
            </div>

            <button aria-label="Open menu" className="md:hidden text-white/90" onClick={() => setOpen(!open)}>
              <Menu />
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4 space-y-3 text-slate-200">
              <a href="#features" className="block">Features</a>
              <a href="#listings" className="block">Residences</a>
              <a href="#amenities" className="block">Amenities</a>
              <a href="#contact" className="block">Contact</a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-white shadow-lg">
                <Home size={18} /> Book a Tour
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
