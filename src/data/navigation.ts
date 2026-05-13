export type PageKey = "home" | "about" | "portfolio" | "skills" | "exploration";

export type NavigationItem = {
  key: PageKey;
  label: string;
  shortLabel: string;
  href: string;
  color: string;
  shadow: string;
};

export const navigationItems: NavigationItem[] = [
  {
    key: "home",
    label: "首页",
    shortLabel: "首页",
    href: "#/",
    color: "#ff7f6e",
    shadow: "rgba(255, 127, 110, 0.34)",
  },
  {
    key: "about",
    label: "关于我",
    shortLabel: "关于",
    href: "#/about",
    color: "#f7cd4b",
    shadow: "rgba(247, 205, 75, 0.34)",
  },
  {
    key: "portfolio",
    label: "作品集",
    shortLabel: "作品",
    href: "#/portfolio",
    color: "#6fd6a5",
    shadow: "rgba(111, 214, 165, 0.34)",
  },
  {
    key: "skills",
    label: "技能",
    shortLabel: "技能",
    href: "#/skills",
    color: "#71b8f0",
    shadow: "rgba(113, 184, 240, 0.34)",
  },
  {
    key: "exploration",
    label: "探索与学习",
    shortLabel: "探索",
    href: "#/exploration",
    color: "#b7a6f6",
    shadow: "rgba(183, 166, 246, 0.34)",
  },
];
