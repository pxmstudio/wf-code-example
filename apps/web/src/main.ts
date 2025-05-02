async function main() {
  const randNumberEl = document.querySelector("px-rand-number");

  if (randNumberEl) {
    await import("./components/rand-number");
  }

  const randTextEl = document.querySelector("px-rand-text");

  if (randTextEl) {
    await import("./components/rand-text");
  }

  const globalVarEl = document.querySelector("[data-global-var]");

  if (globalVarEl) {
    globalVarEl.innerHTML = import.meta.env.VITE_GLOBAL_VAR;
  }
}

if (!window.Webflow?._) {
  main();
} else {
  window.Webflow ||= [];
  window.Webflow.push(main);
}
