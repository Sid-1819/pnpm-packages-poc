function greet(name) {
  return `Hello, ${name}!`;
}
function createGreetingElement(name) {
  const div = document.createElement("div");
  div.className = "greeting-box";
  div.innerHTML = `
    <h2>${greet(name)}</h2>
    <p>This comes from @test/shared package</p>
  `;
  div.style.cssText = `
    padding: 20px;
    background: #f0f0f0;
    border: 2px solid #333;
    border-radius: 8px;
    margin: 10px;
  `;
  return div;
}
console.log("[WEB-LOADER] Package loaded");
function mount(targetId = "app", userName = "Web User") {
  console.log("[WEB-LOADER] Mounting...");
  const target = document.getElementById(targetId);
  if (!target) {
    console.error(`[WEB-LOADER] Target element #${targetId} not found`);
    return;
  }
  target.innerHTML = "";
  const greetingEl = createGreetingElement(userName);
  target.appendChild(greetingEl);
  const webInfo = document.createElement("div");
  webInfo.innerHTML = `
    <p><strong>Loaded from:</strong> @test/web-loader</p>
    <p><strong>Message:</strong> ${greet("from web-loader")}</p>
  `;
  webInfo.style.cssText = "padding: 10px; background: #e3f2fd; margin: 10px;";
  target.appendChild(webInfo);
  console.log("[WEB-LOADER] Mounted successfully");
}
function unmount(targetId = "app") {
  console.log("[WEB-LOADER] Unmounting...");
  const target = document.getElementById(targetId);
  if (target) {
    target.innerHTML = "";
  }
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("auto-mount")) {
      mount("auto-mount");
    }
  });
} else {
  if (document.getElementById("auto-mount")) {
    mount("auto-mount");
  }
}
export {
  mount,
  unmount
};
//# sourceMappingURL=web-loader.js.map
