import { motion, useScroll, useTransform } from "framer-motion"
import Spline from "@splinetool/react-spline"

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const maskY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section className="relative overflow-hidden pt-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_50%_-200px,rgba(16,185,129,0.25),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(600px_400px_at_80%_20%,rgba(59,130,246,0.25),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.6),rgba(2,6,23,0.95))]" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div className="relative">
          <motion.div
            style={{ WebkitMaskImage: `linear-gradient(to bottom, black ${maskY.get()}, transparent)` }}
            className="relative"
          >
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
              Clean nutrition for modern life
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Premium, science-backed vitamin blends made from sustainably sourced ingredients. Feel the difference in clarity, energy, and immunity.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#shop"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-400"
              >
                Shop Vitamins
              </a>
              <a
                href="#science"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white/90 hover:text-white"
              >
                The Science
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-slate-400">
              <div className="flex -space-x-2">
                {[1,2,3,4,5].map((i) => (
                  <img key={i} src={`https://i.pravatar.cc/48?img=${i}`} alt="" className="h-8 w-8 rounded-full ring-2 ring-slate-900" />
                ))}
              </div>
              <p className="text-sm">Trusted by 25k+ health-conscious customers</p>
            </div>
          </motion.div>
        </div>

        <div className="relative aspect-square w-full">
          <div className="absolute inset-0 rounded-3xl border border-white/10 bg-slate-900/50 p-2">
            <div className="h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900">
              <Spline scene="https://prod.spline.design/uhsM0g0FDQdJt6bT/scene.splinecode" />
            </div>
          </div>
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-b from-emerald-500/20 to-transparent blur-2xl" />
        </div>
      </div>
    </section>
  )
}
