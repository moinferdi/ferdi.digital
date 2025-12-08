import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    // Scroll the main element to top on route change
    const main = document.querySelector("main");
    if (main) {
      main.scrollTop = 0;
    }
    // Also scroll window to top
    return { top: 0, left: 0 };
  },
};
