import { defineConfig } from "vitepress";

export default defineConfig({
  title: "My Guidelines",
  description: "My developer guidelines and best practices.",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Commit Patterns", link: "/commit-patterns" },
    ],
    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Introduction", link: "/" },
          { text: "Commit Patterns", link: "/commit-patterns" },
        ],
      },
    ],
  },
});
