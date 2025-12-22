import { useParams, Link } from 'react-router-dom'
import data from '../data/cases'

export default function Case() {
  const { slug } = useParams()
  const item = data.find(c => c.slug === slug)

  if (!item) {
    return (
      <div className="container-xl py-24">
        <p>Case not found. <Link className="underline" to="/">Back to work</Link></p>
      </div>
    )
  }

  return (
    <article>
      <div className="relative">
        <img src={item.cover} alt="" className="w-full h-[50svh] md:h-[70svh] object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"/>
        <div className="absolute bottom-8 left-0 w-full">
          <div className="container-xl">
            <h1 className="text-3xl md:text-5xl font-semibold">{item.title}</h1>
            <p className="text-white/70 mt-2">{item.tags.join(' · ')}</p>
          </div>
        </div>
      </div>

      {/* Primary CTAs */}
      <div className="container-xl py-6">
        <div className="flex flex-wrap items-center gap-3">
          {item.url && (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-noir-800 px-5 py-3 text-sm font-medium tracking-wide
                         hover:bg-noir-700 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              Visit live site <span aria-hidden>↗</span>
            </a>
          )}
          {item.repo && (
            <a
              href={item.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-noir-900 px-5 py-3 text-sm tracking-wide
                         hover:bg-noir-800 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              View code <span aria-hidden>↗</span>
            </a>
          )}
        </div>
      </div>

      {/* Summary */}
      <div className="container-xl max-w-3xl py-8 md:py-12">
        <p className="text-white/80 leading-relaxed">{item.summary}</p>
        <p className="text-white/60 mt-4">
          Role: {item.role}. Outcome: {item.outcome}.
        </p>

        <p className="mt-8">
          <Link to="/" className="no-underline text-white/80 hover:text-white">← Back to work</Link>
        </p>
      </div>
    </article>
  )
}
