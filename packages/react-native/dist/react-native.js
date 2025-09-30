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
console.log("[MOBILE-BRIDGE] Package loaded");
function sendToMobile(action, data) {
  const message = JSON.stringify({ action, data });
  console.log("[MOBILE-BRIDGE] Sending to mobile:", message);
  if (window.mobileApp) {
    window.mobileApp.postMessage(message);
  } else {
    console.log("[MOBILE-BRIDGE] No mobile app detected (this is normal in browser)");
  }
}
function initMobileBridge(userName = "Mobile User") {
  console.log("[MOBILE-BRIDGE] Initializing...");
  const target = document.getElementById("root") || document.body;
  const greetingEl = createGreetingElement(userName);
  target.appendChild(greetingEl);
  const mobileInfo = document.createElement("div");
  mobileInfo.innerHTML = `
    <p><strong>Loaded from:</strong> @test/react-native</p>
    <p><strong>Message:</strong> ${greet("from react-native")}</p>
    <button id="send-to-mobile">Send Message to Mobile App</button>
  `;
  mobileInfo.style.cssText = "padding: 10px; background: #fff3e0; margin: 10px;";
  target.appendChild(mobileInfo);
  const button = document.getElementById("send-to-mobile");
  if (button) {
    button.addEventListener("click", () => {
      sendToMobile("greeting", { message: greet(userName) });
    });
  }
  console.log("[MOBILE-BRIDGE] Initialized successfully");
  sendToMobile("ready", { userName });
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("mobile-root")) {
      initMobileBridge();
    }
  });
} else {
  if (document.getElementById("mobile-root")) {
    initMobileBridge();
  }
}
export {
  initMobileBridge
};
//# sourceMappingURL=react-native.js.map
