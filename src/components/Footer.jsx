export default function Footer() {
    return (
        <footer className="border-t border-white/5">
            <div className="container-xl py-10 text-xs text-white/60 flex items-center justify-between">
                <span>© {new Date().getFullYear()} Black Label</span>
                <span className="opacity-60">Cyber Heaven LLC</span>
                <span className="opacity-60">Made with React + Tailwind</span>
            </div>
        </footer>
    )
}