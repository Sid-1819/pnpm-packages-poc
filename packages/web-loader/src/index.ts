import { createGreetingElement, greet } from '@test/shared';

console.log('[WEB-LOADER] Package loaded');

// Mount function
export function mount(targetId: string = 'app', userName: string = 'Web User') {
  console.log('[WEB-LOADER] Mounting...');
  
  const target = document.getElementById(targetId);
  if (!target) {
    console.error(`[WEB-LOADER] Target element #${targetId} not found`);
    return;
  }

  // Clear existing content
  target.innerHTML = '';

  // Add greeting from shared package
  const greetingEl = createGreetingElement(userName);
  target.appendChild(greetingEl);

  // Add some web-specific content
  const webInfo = document.createElement('div');
  webInfo.innerHTML = `
    <p><strong>Loaded from:</strong> @test/web-loader</p>
    <p><strong>Message:</strong> ${greet('from web-loader')}</p>
  `;
  webInfo.style.cssText = 'padding: 10px; background: #e3f2fd; margin: 10px;';
  target.appendChild(webInfo);

  console.log('[WEB-LOADER] Mounted successfully');
}

// Unmount function
export function unmount(targetId: string = 'app') {
  console.log('[WEB-LOADER] Unmounting...');
  const target = document.getElementById(targetId);
  if (target) {
    target.innerHTML = '';
  }
}

// Auto-mount if specific element exists
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('auto-mount')) {
      mount('auto-mount');
    }
  });
} else {
  if (document.getElementById('auto-mount')) {
    mount('auto-mount');
  }
}