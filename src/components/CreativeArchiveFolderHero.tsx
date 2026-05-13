import { ArrowRight, Sparkles } from "lucide-react";
import type { CSSProperties } from "react";
import { useState } from "react";
import { navigationItems, type PageKey } from "../data/navigation";

const layerNotes: Record<PageKey, string> = {
  home: "Creative Archive",
  about: "About Me",
  portfolio: "Projects",
  skills: "Skill Map",
  exploration: "Learning Log",
};

export function CreativeArchiveFolderHero() {
  const [activeTab, setActiveTab] = useState<PageKey>("portfolio");

  return (
    <section className="relative overflow-hidden border-b border-stone-200 bg-[radial-gradient(circle_at_18%_16%,rgba(255,127,110,0.12),transparent_28%),radial-gradient(circle_at_82%_12%,rgba(111,214,165,0.16),transparent_30%),linear-gradient(180deg,#fff8ea_0%,#f7f2e6_100%)]">
      <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-5 py-14 md:grid-cols-[0.92fr_1.08fr] md:px-8 md:py-16">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/72 px-4 py-2 text-sm font-medium text-muted shadow-sm">
            <Sparkles size={16} />
            Creative Archive Folder / 创作档案夹
          </div>
          <h1 className="text-5xl font-semibold leading-tight text-ink md:text-7xl">
            你好，我是魏嘉
          </h1>
          <p className="mt-5 text-xl font-medium text-ink md:text-2xl">
            内容运营 / 新媒体运营 / 内容策划 / 创意运营
          </p>
          <p className="mt-5 max-w-xl text-base leading-8 text-muted md:text-lg">
            我把灵感、AI 工具应用和内容创意，整理成可展示、可传播、可落地的作品。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#/portfolio" className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-stone-700">
              查看作品集
              <ArrowRight size={17} />
            </a>
            <a href="#/about" className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white/70 px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-white">
              了解我
            </a>
          </div>
        </div>

        <div className="archive-stage" aria-label="创作档案夹导航">
          <div className="archive-perspective">
            <div className="archive-folder">
              {navigationItems.map((item, index) => (
                <div key={item.key} className={`archive-paper ${activeTab === item.key ? "is-active" : ""}`} style={{ "--paper-index": index, "--tab-color": item.color } as CSSProperties}>
                  <span>{layerNotes[item.key]}</span>
                </div>
              ))}
              <div className="folder-back"><span className="folder-title">Creative Archive Folder</span></div>
              <div className="folder-front"><span className="folder-label">Wei Jia</span><span className="folder-caption">campus ideas · AI visuals · content plans</span></div>
              <div className="archive-tabs">
                {navigationItems.map((item, index) => (
                  <a key={item.key} href={item.href} className={`archive-tab ${activeTab === item.key ? "is-active" : ""}`} style={{ "--tab-index": index, "--tab-color": item.color, "--tab-shadow": item.shadow } as CSSProperties} onMouseEnter={() => setActiveTab(item.key)} onFocus={() => setActiveTab(item.key)}>
                    {item.shortLabel}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
