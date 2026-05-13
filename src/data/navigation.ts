export type PageKey = "about" | "works" | "experience" | "skills" | "exploration";

export type NavigationItem = {
  key: PageKey;
  label: string;
  href: string;
};

export const navigationItems: NavigationItem[] = [
  {
    key: "about",
    label: "关于我",
    href: "#/about",
  },
  {
    key: "works",
    label: "作品",
    href: "#/works",
  },
  {
    key: "experience",
    label: "经历",
    href: "#/experience",
  },
  {
    key: "skills",
    label: "技能",
    href: "#/skills",
  },
  {
    key: "exploration",
    label: "探索",
    href: "#/exploration",
  },
];
