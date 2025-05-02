async function main() {
  const randNumberEl = document.querySelector("px-rand-number");

  if (randNumberEl) {
    await import("./components/rand-number");
  }

  const randTextEl = document.querySelector("px-rand-text");

  if (randTextEl) {
    await import("./components/rand-text");
  }
}

if (!window.Webflow?._) {
  main();
} else {
  window.Webflow ||= [];
  window.Webflow.push(main);
}
