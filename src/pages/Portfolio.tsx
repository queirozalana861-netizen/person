import { ProjectCard } from "../components/ProjectCard";
import { SectionHeading } from "../components/SectionHeading";
import { projects } from "../data/projects";

export function Portfolio() {
  return <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Portfolio" title="作品集" description="这里先放静态作品卡片，后续可以继续扩展成作品详情页、筛选器、图片预览和完整策划案展示。" /><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{projects.map((project) => <ProjectCard key={project.id} project={project} />)}</div></div></section>;
}
