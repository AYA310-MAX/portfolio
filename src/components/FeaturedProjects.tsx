import { projects } from '@/content/projects.data'
import { profile } from '@/content/profile'

const featured = projects.filter((p) => p.flagship).concat(projects.filter((p) => !p.flagship).slice(0, 2))

export function FeaturedProjects() {
  return (
    <section id="projects" className="mx-auto max-w-3xl px-4 py-24">
      <p className="eyebrow">What has been built</p>
      <h2 className="mt-1.5 mb-10 text-[clamp(1.6rem,3.5vw,2.2rem)]">Featured Projects</h2>

      <div className="flex flex-col gap-6">
        {featured.map((project) => (
          <div
            key={project.id}
            className="rounded-[10px] border border-gold-ember/22 p-7 [background:linear-gradient(155deg,var(--indigo-lift),var(--indigo-deep))]"
          >
            <div className="flex flex-wrap items-baseline gap-2.5">
              {project.flagship && (
                <span className="font-ui rounded-full bg-gold-ember px-2.5 py-0.5 text-[0.62rem] tracking-wider text-indigo-void uppercase">
                  Flagship
                </span>
              )}
              <h3 className="text-xl">{project.title}</h3>
            </div>
            <p className="font-body my-3.5 leading-relaxed text-bone-dim">{project.summary}</p>
            <ul className="m-0 mb-3.5 flex list-none flex-wrap gap-1.5 p-0">
              {project.tech.map((t) => (
                <li key={t} className="font-ui rounded-full border border-gold-bright/30 px-2.5 py-0.5 text-[0.7rem] text-gold-bright">
                  {t}
                </li>
              ))}
            </ul>
            {project.publicRepo && (
              <a href={profile.contact.github} target="_blank" rel="noreferrer" className="font-ui text-[0.75rem] text-gold-bright">
                View on GitHub ↗
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
