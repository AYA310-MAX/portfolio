import { PageShell } from '@/components/PageShell'
import { projects } from '@/content/projects.data'
import { profile } from '@/content/profile'

export default function ProjectsPage() {
  return (
    <PageShell eyebrow="What has been built" title="Projects" lede="What the builder leaves along the way.">
      <ul className="m-0 flex list-none flex-col gap-7 p-0">
        {projects.map((project) => (
          <li
            key={project.id}
            className="rounded-[10px] border border-gold-ember/22 p-7 [background:linear-gradient(155deg,var(--indigo-lift),var(--indigo-deep))]"
          >
            <div className="flex flex-wrap items-baseline gap-2.5">
              {project.flagship && (
                <span className="font-ui rounded-full bg-gold-ember px-2.5 py-0.5 text-[0.62rem] tracking-wider text-indigo-void uppercase">
                  Flagship
                </span>
              )}
              <h2 className="text-xl">{project.title}</h2>
            </div>
            <p className="font-body my-3.5 leading-relaxed text-bone-dim">{project.summary}</p>
            <ul className="m-0 mb-3.5 flex list-none flex-wrap gap-1.5 p-0">
              {project.tech.map((t) => (
                <li key={t} className="font-ui rounded-full border border-gold-bright/30 px-2.5 py-0.5 text-[0.7rem] text-gold-bright">
                  {t}
                </li>
              ))}
            </ul>
            <div className="font-ui flex flex-wrap items-center justify-between gap-2 text-[0.75rem]">
              <span className="text-bone-dim">{project.status}</span>
              {project.publicRepo ? (
                <a
                  href={profile.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-gold-bright/35 text-gold-bright no-underline"
                >
                  View on GitHub ↗
                </a>
              ) : (
                <span className="font-body text-bone-dim italic">Repository not yet public</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </PageShell>
  )
}
