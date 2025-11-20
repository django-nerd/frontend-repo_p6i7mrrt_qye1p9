import { motion } from "framer-motion"
import { ShieldCheck, Sun, Battery, Droplets } from "lucide-react"

const items = [
  {
    icon: ShieldCheck,
    title: "Immunity Support",
    desc: "Clinically dosed Vitamin C, D3, and Zinc to strengthen your body's natural defenses.",
  },
  {
    icon: Sun,
    title: "Mood & Focus",
    desc: "B12 and adaptogens to brighten mood and sharpen cognitive performance.",
  },
  {
    icon: Battery,
    title: "Sustained Energy",
    desc: "Slow-release B-complex designed for steady energy without crashes.",
  },
  {
    icon: Droplets,
    title: "Clean Ingredients",
    desc: "Vegan, non-GMO, and free from artificial colors, fillers, and allergens.",
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(500px_300px_at_10%_20%,rgba(16,185,129,0.15),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Built for daily vitality
          </h2>
          <p className="mt-4 text-slate-300">
            Thoughtfully formulated with bioavailable nutrients your body can actually use.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-2xl border border-white/10 bg-slate-900/50 p-6"
            >
              <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-xl bg-emerald-500/10 text-emerald-400">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-400">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
