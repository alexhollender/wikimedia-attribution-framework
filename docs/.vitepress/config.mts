import { defineConfig } from "vitepress";
import { scenarios, attributionSignals } from "./data";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Wikipedia Attribution Guidelines",
  description:
    "Attribution Guidelines for references and using Wikipedia content",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: "Home", link: "/" },
    //   { text: "Examples", link: "/markdown-examples" },
    // ],
    search: {
      provider: "local",
    },

    sidebar: [
      {
        text: "Getting Started",
        items: [{ text: "Overview", link: "/" }],
      },
      {
        text: "Reuse Scenarios",
        collapsed: false,
        items: scenarios.map((scenario) => ({
          text: scenario.name,
          link: scenario.url,
        })),
      },
      {
        text: "Attribution Signals",
        collapsed: false,
        items: [
          {
            text: "Overview",
            link: "/attribution-signals",
          },
          ...attributionSignals.map((signal) => ({
            text: signal.name,
            link: signal.url,
          })),
        ],
      },
      {
        items: [
          {
            text: "Policy and Principles",
            link: "/policy-and-principles",
          },
          {
            text: "Help and FAQs",
            link: "/help-and-faqs",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
