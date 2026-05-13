import type { CSSProperties } from "react";
import { useState } from "react";
import { navigationItems, type PageKey } from "../data/navigation";

const pageNotes: Record<PageKey, string> = {
  home: "首页",
  about: "关于我",
  portfolio: "作品集",
  skills: "技能",
  exploration: "探索与学习",
};

const activeCopy: Record<PageKey, string> = {
  home: "Creative Archive Folder",
  about: "个人信息",
  portfolio: "作品档案",
  skills: "能力索引",
  exploration: "探索记录",
};

export function CreativeArchiveFolderHero() {
  const [activeTab, setActiveTab] = useState<PageKey>("about");

  return (
    <section className="archive-hero-section" aria-label="Creative Archive Folder">
      <div className="archive-folder-board">
        <div className="archive-folder-spine" aria-hidden="true" />
        <div className="archive-folder-lip" aria-hidden="true" />

        <nav className="archive-folder-tabs" aria-label="档案夹页面导航">
          {navigationItems
            .filter((item) => item.key !== "home")
            .map((item, index) => (
              <a
                key={item.key}
                href={item.href}
                className={`archive-folder-tab ${activeTab === item.key ? "is-active" : ""}`}
                style={{ "--tab-index": index } as CSSProperties}
                onMouseEnter={() => setActiveTab(item.key)}
                onFocus={() => setActiveTab(item.key)}
              >
                {item.shortLabel}
              </a>
            ))}
          <a
            href="#/"
            className={`archive-folder-tab archive-folder-tab-home ${
              activeTab === "home" ? "is-active" : ""
            }`}
            onMouseEnter={() => setActiveTab("home")}
            onFocus={() => setActiveTab("home")}
          >
            首页
          </a>
        </nav>

        <div className="archive-blue-indexes" aria-hidden="true">
          {navigationItems.slice(1).map((item, index) => (
            <span
              key={item.key}
              className={activeTab === item.key ? "is-active" : ""}
              style={{ "--index": index } as CSSProperties}
            />
          ))}
        </div>

        <div className="archive-drawn-card">
          <span className="archive-card-kicker">{activeCopy[activeTab]}</span>
          <h1>你好，我是魏嘉</h1>
          <p className="archive-role">内容运营 / 新媒体运营 / 内容策划 / 创意运营</p>
          <p className="archive-intro">
            我把校园灵感、AI 工具应用和内容创意，整理成可展示、可传播、可落地的作品。
          </p>

          <div className="archive-card-lines" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="archive-card-actions">
            <a href="#/portfolio">查看作品集</a>
            <a href="#/about">关于我</a>
          </div>
        </div>

        <div className="archive-folder-brand">
          <strong>Creative Archive Folder</strong>
          <span>campus ideas / AI visuals / content plans</span>
        </div>

        <div className="archive-active-label" aria-live="polite">
          {pageNotes[activeTab]}
        </div>
      </div>
    </section>
  );
}
