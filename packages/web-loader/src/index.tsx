import { render } from 'solid-js/web';
import { GreetingCard, createGreetingElement, greet } from '@test/shared';

console.log('[WEB-LOADER] Package loaded');

export function mount(targetId: string = 'app', userName: string = 'Web User') {
  console.log('[WEB-LOADER] Mounting with Solid.js...');
  
  const target = document.getElementById(targetId);
  if (!target) {
    console.error(`[WEB-LOADER] Target element #${targetId} not found`);
    return;
  }

  target.innerHTML = '';

  // Render the Solid component
  render(() => (
    <div>
      <GreetingCard userName={userName} />
      <div style={{
        padding: '10px',
        background: '#e8f5e9',
        margin: '10px',
        'border-radius': '5px'
      }}>
        <p><strong>Loaded from:</strong> @test/web-loader</p>
        <p><strong>Framework:</strong> Solid.js</p>
        <p><strong>Message:</strong> {greet('from web-loader')}</p>
      </div>
    </div>
  ), target);

  console.log('[WEB-LOADER] Solid.js component mounted successfully');
}

export function unmount(targetId: string = 'app') {
  console.log('[WEB-LOADER] Unmounting...');
  const target = document.getElementById(targetId);
  if (target) {
    target.innerHTML = '';
  }
}