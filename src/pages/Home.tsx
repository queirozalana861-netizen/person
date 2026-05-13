import { CreativeArchiveFolderHero } from "../components/CreativeArchiveFolderHero";
import { ProjectCard } from "../components/ProjectCard";
import { SectionHeading } from "../components/SectionHeading";
import { projects } from "../data/projects";

const strengths = ["把校园生活观察转化为可传播选题", "用 AI 工具提升视觉创意和内容表达效率", "兼顾文案、排版、视觉和落地执行"];

export function Home() {
  return (
    <>
      <CreativeArchiveFolderHero />
      <section className="px-5 py-16 md:px-8 md:py-20"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Selected Works" title="把灵感整理成可展示的作品" description="作品覆盖 AI 视觉、校园海报、内容策划、公众号风格内容和数字项目，适合从内容运营与创意运营两个方向理解我的能力。" /><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{projects.slice(0, 3).map((project) => <ProjectCard key={project.id} project={project} />)}</div></div></section>
      <section className="bg-white/52 px-5 py-16 md:px-8"><div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">{strengths.map((item, index) => <div key={item} className="rounded-lg border border-stone-200 bg-paper p-6"><span className="text-sm font-semibold text-muted">0{index + 1}</span><p className="mt-4 text-lg font-semibold leading-7 text-ink">{item}</p></div>)}</div></section>
    </>
  );
}
