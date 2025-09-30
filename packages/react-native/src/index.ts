import { createGreetingElement, greet } from '@test/shared';

console.log('[MOBILE-BRIDGE] Package loaded');

// Simulate mobile bridge
declare global {
  interface Window {
    mobileApp?: {
      postMessage: (message: string) => void;
    };
  }
}

// Send message to mobile app (simulated)
function sendToMobile(action: string, data: any) {
  const message = JSON.stringify({ action, data });
  console.log('[MOBILE-BRIDGE] Sending to mobile:', message);
  
  if (window.mobileApp) {
    window.mobileApp.postMessage(message);
  } else {
    console.log('[MOBILE-BRIDGE] No mobile app detected (this is normal in browser)');
  }
}

// Initialize mobile bridge
export function initMobileBridge(userName: string = 'Mobile User') {
  console.log('[MOBILE-BRIDGE] Initializing...');
  
  const target = document.getElementById('root') || document.body;
  
  // Add greeting from shared package
  const greetingEl = createGreetingElement(userName);
  target.appendChild(greetingEl);

  // Add mobile-specific info
  const mobileInfo = document.createElement('div');
  mobileInfo.innerHTML = `
    <p><strong>Loaded from:</strong> @test/react-native</p>
    <p><strong>Message:</strong> ${greet('from react-native')}</p>
    <button id="send-to-mobile">Send Message to Mobile App</button>
  `;
  mobileInfo.style.cssText = 'padding: 10px; background: #fff3e0; margin: 10px;';
  target.appendChild(mobileInfo);

  // Add button handler
  const button = document.getElementById('send-to-mobile');
  if (button) {
    button.addEventListener('click', () => {
      sendToMobile('greeting', { message: greet(userName) });
    });
  }

  console.log('[MOBILE-BRIDGE] Initialized successfully');
  sendToMobile('ready', { userName });
}

// Auto-initialize if in mobile context
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('mobile-root')) {
      initMobileBridge();
    }
  });
} else {
  if (document.getElementById('mobile-root')) {
    initMobileBridge();
  }
}