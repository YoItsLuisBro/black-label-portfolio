import data from '../data/cases'
import GridCase from '../components/GridCase'

export default function Work() {
    return (
        <section className="container-xl py-12 md:py-20">
            <header className="mb-10 md:mb-14">
                <h1 className="text-2xl md:text-4xl font-semibold tracking-tight">Selected Work</h1>
                <p className="text-white/60 mt-2 max-w-2xl">
                    A tight edit of websites and web apps I've built.
                </p>
            </header>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {data.map(item => (
                    <GridCase key={item.slug} item={item} />
                ))}
            </div>
        </section>
    )
}