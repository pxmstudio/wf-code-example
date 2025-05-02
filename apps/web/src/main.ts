import middleware from "./utils/middleware";

window.Webflow ||= [];

async function main() {
  middleware();

  console.log("hello world");

  const helloEl = document.querySelector("px-hello");

  if (helloEl) {
    await import("./components/hello");
  }
}

window.Webflow.push(main);


