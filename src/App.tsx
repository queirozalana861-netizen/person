import { useEffect, useState } from "react";
import { navigationItems, type PageKey } from "./data/navigation";
import { projects } from "./data/projects";

const routeMap: Record<string, PageKey> = {
  "/": "about",
  "/about": "about",
  "/works": "works",
  "/experience": "experience",
  "/skills": "skills",
  "/exploration": "exploration",
};

const pageMeta: Record<PageKey, { title: string; subtitle: string }> = {
  about: {
    title: "About",
    subtitle: "个人信息 / Introduction",
  },
  works: {
    title: "Works",
    subtitle: "作品档案 / Portfolio",
  },
  experience: {
    title: "Experience",
    subtitle: "经历记录 / Experience",
  },
  skills: {
    title: "Skills",
    subtitle: "能力索引 / Skill Map",
  },
  exploration: {
    title: "Exploration",
    subtitle: "探索与学习 / Learning Notes",
  },
};

const experienceItems = ["校园内容实践", "AI 工具应用", "Android 待办项目", "个人作品集搭建"];
const skillItems = ["内容策划", "新媒体运营", "公众号图文", "海报排版", "AI 视觉", "项目拆解", "基础前端"];
const explorationItems = ["AI 视觉工具实验", "校园账号观察", "运营案例拆解", "内容栏目灵感", "产品体验记录"];

function getPageFromHash(): PageKey {
  const path = window.location.hash.replace("#", "") || "/";
  return routeMap[path] ?? "about";
}

function AboutPanel() {
  return (
    <section className="blank-panel" aria-label="关于我内容待补充">
      <div className="blank-line wide" />
      <div className="blank-line" />
      <div className="blank-line short" />
    </section>
  );
}

function WorksPanel() {
  return (
    <section className="work-grid">
      {projects.map((project) => (
        <article className="work-card" key={project.id}>
          <span>{project.category}</span>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
        </article>
      ))}
    </section>
  );
}

function ExperiencePanel() {
  return (
    <section className="list-panel">
      {experienceItems.map((item, index) => (
        <article key={item}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <h3>{item}</h3>
          <p>这里预留经历说明，后续可以补充时间、职责、产出和结果。</p>
        </article>
      ))}
    </section>
  );
}

function SkillsPanel() {
  return (
    <section className="tag-panel">
      {skillItems.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </section>
  );
}

function ExplorationPanel() {
  return (
    <section className="list-panel compact">
      {explorationItems.map((item, index) => (
        <article key={item}>
          <span>Log {String(index + 1).padStart(2, "0")}</span>
          <h3>{item}</h3>
        </article>
      ))}
    </section>
  );
}

function renderPanel(page: PageKey) {
  switch (page) {
    case "works":
      return <WorksPanel />;
    case "experience":
      return <ExperiencePanel />;
    case "skills":
      return <SkillsPanel />;
    case "exploration":
      return <ExplorationPanel />;
    case "about":
    default:
      return <AboutPanel />;
  }
}

export default function App() {
  const [activePage, setActivePage] = useState<PageKey>(getPageFromHash);
  const meta = pageMeta[activePage];

  useEffect(() => {
    const handleHashChange = () => setActivePage(getPageFromHash());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    document.title = `${meta.subtitle} | 魏嘉`;
  }, [meta.subtitle]);

  return (
    <main className="site-shell">
      <header className="top-nav">
        <a className="brand" href="#/about">
          魏嘉 / Creative Archive
        </a>
        <nav aria-label="作品集导航">
          {navigationItems.map((item) => (
            <a key={item.key} className={activePage === item.key ? "active" : ""} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero-layout">
        <div className="intro-block">
          <p className="eyebrow">Content Operation / Creative Planning</p>
          <h1>Hi, this is Wei Jia's archive.</h1>
          <p className="intro-copy">
            一个用于整理内容创意、校园作品、AI 视觉实验和项目经历的个人求职作品集框架。
          </p>
        </div>

        <aside className="index-board" aria-label="栏目索引">
          {navigationItems.map((item) => (
            <a key={item.key} className={activePage === item.key ? "active" : ""} href={item.href}>
              {item.label}
            </a>
          ))}
        </aside>
      </section>

      <section className="page-section">
        <div className="page-heading">
          <div>
            <p>{meta.subtitle}</p>
            <h2>{meta.title}</h2>
          </div>
          <span>Archive {navigationItems.findIndex((item) => item.key === activePage) + 1}/5</span>
        </div>
        {renderPanel(activePage)}
      </section>

      <footer className="site-footer">
        <span>Email</span>
        <span>Rednote</span>
        <span>Resume</span>
        <span>Rights</span>
      </footer>
    </main>
  );
}
