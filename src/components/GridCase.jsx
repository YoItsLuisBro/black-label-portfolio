import { Link } from "react-router-dom";

export default function GridCase({ item }) {
  return (
    <article className="group relative block">
      {/* Card image + overlay + title link to case page */}
      <Link
        to={`/case/${item.slug}`}
        className="block overflow-hidden rounded-2xl ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
        aria-label={`${item.title} — details`}
      >
        <img
          src={item.cover}
          alt={item.title}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-90" />
        <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
          <div>
            <h3 className="text-base font-medium tracking-wide">
              {item.title}
            </h3>
            <p className="text-xs text-white/70 mt-0.5">
              {item.tags.join(" · ")}
            </p>
          </div>
          <span className="text-xs uppercase tracking-widest text-white/70 group-hover:text-white">
            View
          </span>
        </div>
      </Link>

      {/* External live-site button (separate element; not nested inside the Link) */}
      {item.url && (
        <div className="pointer-events-none absolute right-3 top-3">
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto inline-flex items-center gap-1 rounded-full border border-white/15 bg-noir-900/70 px-3 py-1.5 text-xs text-white/90 backdrop-blur
                       hover:bg-noir-800/80 focus:outline-none focus:ring-2 focus:ring-white/20"
            aria-label={`Visit ${item.title} (opens in a new tab)`}
            onClick={(e) => e.stopPropagation()}
          >
            Visit Site
            <span aria-hidden>↗</span>
          </a>
        </div>
      )}
    </article>
  );
}
