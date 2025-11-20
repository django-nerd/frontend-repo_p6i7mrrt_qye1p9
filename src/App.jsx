import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Showcase from './components/Showcase'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <main>
        <Hero />
        <Benefits />
        <Showcase />

        <section id="reviews" className="relative py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {["Changed my mornings.", "The only brand I trust.", "Clean energy all day."].map((quote, i) => (
                  <blockquote key={i} className="rounded-2xl border border-white/10 bg-slate-950/60 p-6 text-slate-300">
                    “{quote}”
                  </blockquote>
                ))}
              </div>
              <div className="mt-8 text-center">
                <a href="#shop" className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-400">
                  Explore Vitamins
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer id="faq" className="border-t border-white/10 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <p className="text-sm text-slate-400">© {new Date().getFullYear()} VitaPure Vitamins</p>
              <div className="flex gap-6 text-sm text-slate-300">
                <a href="#" className="hover:text-white">Privacy</a>
                <a href="#" className="hover:text-white">Terms</a>
                <a href="#" className="hover:text-white">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
