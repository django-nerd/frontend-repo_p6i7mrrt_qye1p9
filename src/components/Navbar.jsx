import { Menu, ShoppingBag, Leaf } from "lucide-react"

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="group inline-flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-600/30">
                <Leaf className="h-5 w-5" />
              </div>
              <span className="text-lg font-semibold tracking-tight text-white group-hover:text-emerald-300">
                VitaPure
              </span>
            </a>

            <nav className="hidden gap-8 text-sm font-medium text-slate-200 md:flex">
              <a href="#benefits" className="hover:text-white">Benefits</a>
              <a href="#science" className="hover:text-white">Science</a>
              <a href="#reviews" className="hover:text-white">Reviews</a>
              <a href="#faq" className="hover:text-white">FAQ</a>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="#shop"
                className="hidden rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-400 md:inline-flex"
              >
                <ShoppingBag className="mr-2 h-4 w-4" /> Shop now
              </a>
              <button className="inline-flex items-center justify-center rounded-xl border border-white/15 p-2 text-slate-200 md:hidden">
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
