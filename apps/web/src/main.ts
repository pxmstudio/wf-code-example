async function main() {
  const helloEl = document.querySelector("px-hello");

  if (helloEl) {
    await import("./components/hello");
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
