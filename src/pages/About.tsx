import { SectionHeading } from "../components/SectionHeading";

const profileItems = [
  { title: "求职方向", body: "内容运营、新媒体运营、内容策划与创意运营，关注内容从选题到传播的完整链路。" },
  { title: "个人风格", body: "偏校园、清爽、鲜明、有秩序的视觉与文字表达，喜欢把灵感收纳成结构清楚的方案。" },
  { title: "工作方式", body: "先拆目标和受众，再做选题、内容结构、视觉风格和执行清单，重视可落地性。" },
];

export function About() {
  return (
    <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="About Me" title="关于我" description="我希望把校园阶段积累的审美、内容观察、AI 工具实践和项目经验，转化为内容运营岗位中真正可执行的能力。" /><div className="grid gap-6 md:grid-cols-3">{profileItems.map((item) => <article key={item.title} className="rounded-lg border border-stone-200 bg-white/78 p-6 shadow-sm"><h3 className="text-xl font-semibold text-ink">{item.title}</h3><p className="mt-4 text-sm leading-7 text-muted">{item.body}</p></article>)}</div><div className="mt-10 rounded-lg border border-stone-200 bg-white/78 p-6 md:p-8"><h3 className="text-2xl font-semibold text-ink">我的内容理解</h3><p className="mt-4 text-base leading-8 text-muted">好内容不只是好看的图文，也需要准确的受众判断、清楚的信息层级和可复用的运营节奏。我希望通过作品集展示自己从创意发散、工具使用、视觉表达，到内容落地的完整思考。</p></div></div></section>
  );
}
