 import { Link, NavLink, useLocation } from 'react-router-dom'

 export default function Header() {
   const { pathname } = useLocation()
   return (
     <header className="sticky top-0 z-40 backdrop-blur supports-backdrop-filter:bg-noir-950/70 border-b border-white/5">
       <div className="container-xl h-16 flex items-center justify-between">
         <Link to="/" className="font-semibold tracking-widest text-sm md:text-base">LUIS FONSECA</Link>
         <nav className="flex gap-6 text-sm">
           <NavLink to="/work" className={({isActive})=>`hover:opacity-100 opacity-80 ${isActive ? 'opacity-100' : ''}`}>Work</NavLink>
           {/* <NavLink to="/about" className={({isActive})=>`hover:opacity-100 opacity-80 ${isActive ? 'opacity-100' : ''}`}>About</NavLink> */}
           <NavLink to="/contact" className={({isActive})=>`hover:opacity-100 opacity-80 ${isActive ? 'opacity-100' : ''}`}>Contact</NavLink>
         </nav>
       </div>
     </header>
   )
 }
