import { Component } from 'solid-js';


export function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Simple data type
export interface UserData {
  name: string;
  id: number;
}


// NEW: A real Solid.js component (like your App.tsx)
export const GreetingCard: Component<{ userName: string }> = (props) => {
  return (
    <div style={{
      padding: '20px',
      background: '#f0f0f0',
      border: '2px solid #333',
      'border-radius': '8px',
      margin: '10px'
    }}>
      <h2>{greet(props.userName)}</h2>
      <p>This is a <strong>Solid.js component</strong> from @test/shared package!</p>
      <p>User: {props.userName}</p>
    </div>
  );
};


// Simple component creator (vanilla JS, no framework)
export function createGreetingElement(name: string): HTMLElement {
  const div = document.createElement('div');
  div.className = 'greeting-box';
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