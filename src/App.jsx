import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Listings from './components/Listings'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Features />
      <Listings />
      <CTA />
      <footer className="py-10 text-center text-slate-400 bg-slate-950/90 border-t border-white/10">
        © {new Date().getFullYear()} Skyline Living. All rights reserved.
      </footer>
    </div>
  )
}

export default App
