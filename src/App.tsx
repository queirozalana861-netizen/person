import { useEffect, useMemo, useState } from "react";
import { Layout } from "./components/Layout";
import { navigationItems, type PageKey } from "./data/navigation";
import { About } from "./pages/About";
import { Exploration } from "./pages/Exploration";
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";
import { Skills } from "./pages/Skills";

const routeMap: Record<string, PageKey> = {
  "/": "home",
  "/about": "about",
  "/portfolio": "portfolio",
  "/skills": "skills",
  "/exploration": "exploration",
};

function getPageFromHash(): PageKey {
  const hashPath = window.location.hash.replace("#", "") || "/";
  return routeMap[hashPath] ?? "home";
}

function renderPage(page: PageKey) {
  switch (page) {
    case "about":
      return <About />;
    case "portfolio":
      return <Portfolio />;
    case "skills":
      return <Skills />;
    case "exploration":
      return <Exploration />;
    case "home":
    default:
      return <Home />;
  }
}

export default function App() {
  const [activePage, setActivePage] = useState<PageKey>(getPageFromHash);

  useEffect(() => {
    const handleHashChange = () => setActivePage(getPageFromHash());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    const title = navigationItems.find((item) => item.key === activePage)?.label ?? "首页";
    document.title = activePage === "home" ? "魏嘉 | Creative Archive Folder" : `${title} | 魏嘉`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activePage]);

  const page = useMemo(() => renderPage(activePage), [activePage]);

  return <Layout activePage={activePage}>{page}</Layout>;
}
