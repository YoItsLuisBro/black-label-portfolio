import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImg from "../assets/hero.jpg"; // add any image here (e.g., a desk/setup or portrait)

export default function Home() {
  return (
    <motion.section
      className="container-xl py-12 md:py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
    >
      <div className="grid gap-10 md:grid-cols-2 items-center">
        {/* Copy: short summary */}
        <div>
          <p className="text-sm uppercase tracking-widest text-white/50">
            Accountant | Software Engineering Student
          </p>
          <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
            I build fast, minimal websites.
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl">
            5 years as an Accountant. Currently studying to become a software engineer.
            I'm passionate about adding value to people & businesses.  I create tools I can use everyday, or
            actual sites that provide value, selfishly to myself. If you're curious about the projects
            I've created, click the "View Work" button/tab. If you like what you see contact me via the
            "Contact Me" button/tab. See you soon !
          </p>

          {/* CTAs */}
          <div className="mt-8 flex gap-3">
            <Link
              to="/work"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-noir-800
                         px-5 py-3 text-sm font-medium tracking-wide hover:bg-noir-700
                         focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              View Work
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-noir-900
                         px-5 py-3 text-sm tracking-wide hover:bg-noir-800
                         focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right-side image */}
        <div className="order-first md:order-0">
          <img
            src={heroImg}
            alt="Workstation and code — minimalist, dark theme"
            className="w-full h-80 md:h-[420px] object-cover rounded-2xl ring-1 ring-white/10"
            loading="eager"
          />
        </div>
      </div>
    </motion.section>
  );
}
