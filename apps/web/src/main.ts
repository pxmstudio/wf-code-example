import middleware from "./utils/middleware";

async function main() {
  middleware();

  const helloEl = document.querySelector("px-hello");

  if (helloEl) {
    await import("./components/hello");
  }

  const randTextEl = document.querySelector("px-random-text");

  if (randTextEl) {
    await import("./components/rand-text");
  }
}

window.Webflow ||= [];
window.Webflow.push(main);

if (!window.Webflow._) {
  main();
}

