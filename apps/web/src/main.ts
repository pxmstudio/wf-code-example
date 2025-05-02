window.Webflow ||= [];

async function main() {
  const randNumberEl = document.querySelector("px-rand-number");

  if (randNumberEl) {
    await import("./components/rand-number");
  }
}

window.Webflow.push(main);