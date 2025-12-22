import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import SiteLayout from "./layouts/SiteLayout";
import Home from './pages/Home'
import Work from './pages/Work'
import Case from "./pages/Case";
import About from "./pages/About";
import Contact from "./pages/Contact";

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

export default function App() {
  const location = useLocation();

  return (
    <SiteLayout>
      {/* Fade-to-black: because the body background is pure black, a fade-out reads as "fade to black" */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={{ duration: 0.45, ease: "easeInOut" }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/case/:slug" element={<Case />} />
            <Route
              path="*"
              element={<div className="container-xl py-24">Not found.</div>}
            />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </SiteLayout>
  );
}
