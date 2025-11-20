import { motion, useScroll, useTransform } from "framer-motion"

export default function Showcase() {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0.2, 0.6], [0.95, 1.08])
  const rotate = useTransform(scrollYProgress, [0.2, 0.6], [-2, 2])

  return (
    <section id="science" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Potent formulas. Transparent sourcing.
            </h2>
            <p className="mt-4 text-slate-300">
              Every blend is rigorously tested for purity and potency. We publish sourcing maps and certificates, so you always know what's inside.
            </p>
            <ul className="mt-6 space-y-3 text-slate-300">
              <li>• Bioavailable chelates for superior absorption</li>
              <li>• Third-party tested for heavy metals and contaminants</li>
              <li>• Sustainably packaged with biodegradable materials</li>
            </ul>
          </div>

          <motion.div style={{ scale, rotate }} className="relative">
            <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-2">
              <div className="grid grid-cols-2 gap-2 rounded-2xl bg-slate-950 p-2">
                {["https://images.unsplash.com/photo-1603398749947-84de13f7e0f6?q=80&w=1200&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1585577529540-a8095ea25427?q=80&w=1200&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1595511695308-879f114467a2?q=80&w=1200&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1623065425906-4d791a27fbe7?q=80&w=1200&auto=format&fit=crop"].map((src, i) => (
                  <img key={i} src={src} alt="ingredients" className="aspect-square rounded-xl object-cover" />
                ))}
              </div>
            </div>
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-emerald-500/10 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
