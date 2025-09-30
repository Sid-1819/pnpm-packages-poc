console.log("[PLUGIN] Initializing...");
window.TestPlugin = {
  version: "1.0.0",
  async init(config = {}) {
    console.log("[PLUGIN] Init called with:", config);
    const { userName = "Test User", mode = "web" } = config;
    try {
      if (mode === "web") {
        console.log("[PLUGIN] Loading web-loader...");
        const { mount } = await import("/packages/web-loader/dist/web-loader.js");
        mount("app", userName);
      } else if (mode === "mobile") {
        console.log("[PLUGIN] Loading react-native...");
        const { initMobileBridge } = await import("/packages/react-native/dist/react-native.js");
        initMobileBridge(userName);
      }
      console.log("[PLUGIN] ✅ Done");
    } catch (error) {
      console.error("[PLUGIN] ❌ Error:", error);
    }
  }
};
console.log("[PLUGIN] Ready!");
//# sourceMappingURL=plugin.js.map
