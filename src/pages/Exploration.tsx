import { SectionHeading } from "../components/SectionHeading";

const logs = [
  { title: "AI 视觉工具学习", body: "持续记录不同提示词、画面结构和风格参考对输出质量的影响。" },
  { title: "校园内容观察", body: "观察校园账号、社团活动和同龄用户对内容标题、封面与互动形式的反馈。" },
  { title: "运营案例拆解", body: "拆解优秀新媒体账号的栏目机制、视觉规范、发布节奏和评论区互动。" },
  { title: "产品与技术实践", body: "通过 Android 待办软件和个人网站项目，补充产品结构与基础开发理解。" },
];

export function Exploration() {
  return <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Exploration" title="探索与学习" description="这一页用于放学习记录、工具实验和运营观察。它不是简历的重复，而是展示我如何持续形成自己的内容判断。" /><div className="grid gap-5 md:grid-cols-2">{logs.map((log, index) => <article key={log.title} className="rounded-lg border border-stone-200 bg-white/78 p-6 shadow-sm"><span className="text-sm font-semibold text-muted">Log 0{index + 1}</span><h3 className="mt-4 text-xl font-semibold text-ink">{log.title}</h3><p className="mt-3 text-sm leading-7 text-muted">{log.body}</p></article>)}</div></div></section>;
}
