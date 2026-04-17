import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kryvea Documentation",
  description: "The reporting platform you never expected",

  // GitHub Pages deployment
  base: "/docs/",
  head: [["link", { rel: "icon", href: "/docs/images/logo.svg" }]],

  // Performance optimizations
  cleanUrls: true,

  // Theme configuration
  themeConfig: {
    logo: "/images/logo.svg",
    siteTitle: "Kryvea Docs",

    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/installation" },
      { text: "GitHub", link: "https://github.com/Kryvea/Kryvea" },
    ],

    sidebar: [
      {
        text: "Getting Started",
        collapsed: false,
        items: [
          { text: "Installation", link: "/installation" },
          { text: "Configuration", link: "/configuration" },
        ],
      },
      {
        text: "Usage",
        collapsed: false,
        items: [
          { text: "Usage Guide", link: "/usage" },
          { text: "Templating", link: "/templating" },
        ],
      },
      {
        text: "Development",
        collapsed: false,
        items: [{ text: "Contributing", link: "/contributing" }],
      },
      {
        text: "Support",
        collapsed: false,
        items: [{ text: "Troubleshooting", link: "/troubleshooting" }],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/Kryvea/Kryvea" }],

    footer: {
      message:
        "Made with ❤️ for the security community by " +
        '<a href="https://github.com/Alexius22">Alexius</a>, ' +
        '<a href="https://github.com/CharminDoge">CharminDoge</a> and ' +
        '<a href="https://github.com/JJJJJJack">Jack</a>',
    },

    search: {
      provider: "local",
    },
  },

  markdown: {
    theme: {
      light: "github-light",
      dark: "github-dark",
    },
    lineNumbers: false,
  },
});
