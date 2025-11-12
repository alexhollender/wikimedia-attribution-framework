import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./custom.css";
import Card from "./components/Card.vue";
import GridLayout from "./components/GridLayout.vue";
import FilterButtons from "./components/FilterButtons.vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("Card", Card);
    app.component("GridLayout", GridLayout);
    app.component("FilterButtons", FilterButtons);
  },
} satisfies Theme;
