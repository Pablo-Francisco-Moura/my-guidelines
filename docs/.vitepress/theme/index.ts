import { App } from "vue";
import DefaultTheme from "vitepress/theme";
import CommitButton from "../components/CommitButton.vue";

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component("CommitButton", CommitButton);
  },
};
