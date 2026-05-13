import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { projects } from "./data/projects";
import { navigationItems, type PageKey } from "./data/navigation";

const routeMap: Record<string, PageKey> = {
  "/": "about",
  "/about": "about",
  "/works": "works",
  "/portfolio": "works",
  "/experience": "experience",
  "/skills": "skills",
  "/exploration": "exploration",
};

const skillGroups = [
  ["内容运营", "选题策划", "栏目规划", "图文节奏"],
  ["新媒体表达", "标题优化", "公众号内容", "校园语气"],
  ["视觉创意", "海报排版", "AI 视觉", "封面延展"],
  ["数字项目", "需求拆解", "界面组织", "React 基础"],
];

const explorationNotes = ["AI 视觉工具实验", "校园内容观察", "运营案例拆解", "产品与技术实践"];

function getPageFromHash(): PageKey {
  const hashPath = window.location.hash.replace("#", "") || "/";
  return routeMap[hashPath] ?? "about";
}

function AboutPage() {
  return (
    <div className="folder-empty-page" aria-label="关于我内容待补充">
      <div className="empty-line long" />
      <div className="empty-line" />
      <div className="empty-line short" />
    </div>
  );
}

function WorksPage() {
  return (
    <div className="folder-card-grid works-grid">
      {projects.slice(0, 4).map((project) => (
        <article className="folder-note-card" key={project.id}>
          <span>{project.category}</span>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
        </article>
      ))}
    </div>
  );
}

function ExperiencePage() {
  return (
    <div className="folder-timeline">
      <article>
        <span>01</span>
        <h3>校园内容实践</h3>
        <p>围绕校园活动、社团传播和公众号内容，积累选题、排版和传播执行经验。</p>
      </article>
      <article>
        <span>02</span>
        <h3>AI 工具应用</h3>
        <p>把 AI 视觉生成、提示词设计和内容构思结合到作品产出流程中。</p>
      </article>
      <article>
        <span>03</span>
        <h3>数字项目尝试</h3>
        <p>通过 Android 待办项目和个人网站，补充产品结构与基础开发理解。</p>
      </article>
    </div>
  );
}

function SkillsPage() {
  return (
    <div className="folder-card-grid">
      {skillGroups.map(([title, ...items]) => (
        <article className="folder-skill-card" key={title}>
          <h3>{title}</h3>
          <div>
            {items.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

function ExplorationPage() {
  return (
    <div className="folder-explore-grid">
      {explorationNotes.map((note, index) => (
        <article key={note}>
          <span>Log 0{index + 1}</span>
          <h3>{note}</h3>
        </article>
      ))}
    </div>
  );
}

function renderPage(page: PageKey) {
  switch (page) {
    case "works":
      return <WorksPage />;
    case "experience":
      return <ExperiencePage />;
    case "skills":
      return <SkillsPage />;
    case "exploration":
      return <ExplorationPage />;
    case "about":
    default:
      return <AboutPage />;
  }
}

export default function App() {
  const [activePage, setActivePage] = useState<PageKey>(getPageFromHash);
  const activeLabel = navigationItems.find((item) => item.key === activePage)?.label ?? "关于我";

  useEffect(() => {
    const handleHashChange = () => setActivePage(getPageFromHash());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    document.title = `${activeLabel} | 魏嘉创作档案夹`;
  }, [activeLabel]);

  return (
    <main className="folder-app">
      <section className="folder-shell" aria-label="魏嘉的创作档案夹">
        <div className="folder-spine" aria-hidden="true" />
        <div className="folder-cover-cut top" aria-hidden="true" />
        <div className="folder-cover-cut bottom" aria-hidden="true" />

        <nav className="folder-index-tabs" aria-label="档案索引">
          {navigationItems.map((item, index) => (
            <a
              key={item.key}
              href={item.href}
              className={activePage === item.key ? "is-active" : ""}
              style={{ "--index": index } as CSSProperties}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="folder-paper-stack" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="folder-page">
          <header className="folder-page-header">
            <div>
              <p>Creative Archive Folder</p>
              <h1>魏嘉</h1>
            </div>
            <strong>{activeLabel}</strong>
          </header>

          <div className="folder-page-body">{renderPage(activePage)}</div>

          <footer className="folder-page-footer">
            <span>内容运营 / 新媒体运营 / 内容策划 / 创意运营</span>
            <span>B5 INDEX ARCHIVE</span>
          </footer>
        </div>
      </section>
    </main>
  );
}
