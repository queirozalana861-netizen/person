import type { Project } from "../data/projects";

type ProjectCardProps = { project: Project };

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-lg border border-stone-200 bg-white/80 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-paper">
      <div className="mb-5 flex items-center justify-between gap-3"><span className="rounded-full px-3 py-1 text-xs font-semibold text-ink" style={{ backgroundColor: `${project.color}55` }}>{project.category}</span><span className="text-sm text-muted">{project.period}</span></div>
      <h3 className="text-xl font-semibold text-ink">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-muted">{project.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">{project.highlights.map((highlight) => <span key={highlight} className="rounded-full border border-stone-200 bg-paper px-3 py-1 text-xs text-muted">{highlight}</span>)}</div>
    </article>
  );
}
