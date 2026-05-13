export type ProjectCategory =
  | "AI视觉"
  | "海报设计"
  | "内容策划"
  | "公众号内容"
  | "数字项目";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  period: string;
  summary: string;
  highlights: string[];
  color: string;
};

export const projects: Project[] = [
  {
    id: "ai-campus-visual",
    title: "校园主题 AI 视觉实验",
    category: "AI视觉",
    period: "2025",
    summary: "围绕校园生活、社团活动和青年情绪，用 AI 工具生成可用于海报与推文封面的视觉方向。",
    highlights: ["提示词设计", "视觉风格统一", "封面延展"],
    color: "#b7a6f6",
  },
  {
    id: "campus-poster-series",
    title: "校园活动海报系列",
    category: "海报设计",
    period: "2024-2025",
    summary: "为校园活动制作色彩鲜明、信息层级清晰的海报，兼顾线下张贴和线上传播效果。",
    highlights: ["活动视觉", "信息排版", "传播场景"],
    color: "#ff7f6e",
  },
  {
    id: "content-planning",
    title: "新媒体内容策划案",
    category: "内容策划",
    period: "2025",
    summary: "从选题、栏目结构、推送节奏到互动机制，搭建可执行的校园账号内容策划框架。",
    highlights: ["选题地图", "栏目规划", "用户互动"],
    color: "#6fd6a5",
  },
  {
    id: "wechat-style-content",
    title: "公众号风格内容样稿",
    category: "公众号内容",
    period: "2024",
    summary: "练习校园语境下的标题、导语、正文节奏与封面配图，让内容更适合社交传播。",
    highlights: ["标题优化", "图文节奏", "账号语气"],
    color: "#f7cd4b",
  },
  {
    id: "android-todo-app",
    title: "Android 待办软件项目",
    category: "数字项目",
    period: "2024",
    summary: "以待办管理为核心的小型 Android 项目，展示基础产品思维、功能拆解和界面组织能力。",
    highlights: ["产品结构", "任务管理", "移动端界面"],
    color: "#71b8f0",
  },
];
