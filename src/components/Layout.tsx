import { Archive, Menu, X } from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";
import { navigationItems, type PageKey } from "../data/navigation";

type LayoutProps = { activePage: PageKey; children: ReactNode };

export function Layout({ activePage, children }: LayoutProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-paper/88 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#/" className="flex items-center gap-2 font-semibold text-ink"><span className="grid h-9 w-9 place-items-center rounded-lg bg-white shadow-sm"><Archive size={19} /></span><span>魏嘉 · Creative Archive</span></a>
          <div className="hidden items-center gap-1 md:flex">
            {navigationItems.map((item) => <a key={item.key} href={item.href} className={`rounded-full px-4 py-2 text-sm font-medium transition ${activePage === item.key ? "bg-white text-ink shadow-sm" : "text-muted hover:bg-white/70 hover:text-ink"}`}>{item.label}</a>)}
          </div>
          <button type="button" className="grid h-10 w-10 place-items-center rounded-lg bg-white text-ink shadow-sm md:hidden" aria-label={isOpen ? "关闭导航" : "打开导航"} onClick={() => setIsOpen((value) => !value)}>{isOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </nav>
        {isOpen ? <div className="border-t border-stone-200 bg-paper px-5 py-3 md:hidden"><div className="mx-auto grid max-w-7xl gap-2">{navigationItems.map((item) => <a key={item.key} href={item.href} className={`rounded-lg px-4 py-3 text-sm font-medium ${activePage === item.key ? "bg-white text-ink shadow-sm" : "text-muted"}`} onClick={() => setIsOpen(false)}>{item.label}</a>)}</div></div> : null}
      </header>
      <main>{children}</main>
      <footer className="border-t border-stone-200 bg-white/45"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-8"><p>Creative Archive Folder · 魏嘉的内容与创意作品档案</p><p>内容运营 / 新媒体运营 / 内容策划 / 创意运营</p></div></footer>
    </div>
  );
}
