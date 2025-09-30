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
export {
  createGreetingElement,
  greet
};
//# sourceMappingURL=index.js.map
