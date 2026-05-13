import { PenTool, Palette, Sparkles, Target, Workflow } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";

const skillGroups = [
  { title: "内容运营", icon: Target, items: ["选题策划", "栏目规划", "用户互动", "传播复盘"], color: "#ff7f6e" },
  { title: "新媒体表达", icon: PenTool, items: ["标题与导语", "公众号图文", "校园语气", "信息层级"], color: "#f7cd4b" },
  { title: "视觉创意", icon: Palette, items: ["海报排版", "配色系统", "封面设计", "风格延展"], color: "#6fd6a5" },
  { title: "AI 工具应用", icon: Sparkles, items: ["提示词设计", "视觉生成", "素材迭代", "效率优化"], color: "#b7a6f6" },
  { title: "数字项目", icon: Workflow, items: ["需求拆解", "界面组织", "React 基础", "Android 项目"], color: "#71b8f0" },
];

export function Skills() {
  return <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Skill Map" title="技能" description="能力组合更偏内容与创意执行，同时保留一定数字产品和前端基础，方便与设计、技术和运营协作。" /><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{skillGroups.map((group) => { const Icon = group.icon; return <article key={group.title} className="rounded-lg border border-stone-200 bg-white/78 p-6 shadow-sm"><div className="mb-5 grid h-12 w-12 place-items-center rounded-lg" style={{ backgroundColor: `${group.color}4d` }}><Icon size={22} /></div><h3 className="text-xl font-semibold text-ink">{group.title}</h3><div className="mt-5 flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="rounded-full border border-stone-200 bg-paper px-3 py-1 text-sm text-muted">{item}</span>)}</div></article>; })}</div></div></section>;
}
