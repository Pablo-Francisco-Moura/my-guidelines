import { App } from "vue";
import Layout from "./Layout.vue";
import HomeContent from "../components/HomeContent.vue";
import DefaultTheme from "vitepress/theme";
import CommitButton from "../components/CommitButton.vue";
import LanguageSwitcher from "../components/LanguageSwitcher.vue";
import NavScreenLanguage from "./NavScreenLanguage.vue";

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }: { app: App }) {
    app.component("HomeContent", HomeContent);
    app.component("CommitButton", CommitButton);
    app.component("LanguageSwitcher", LanguageSwitcher);
    app.component("NavScreenLanguage", NavScreenLanguage);
  },
};
