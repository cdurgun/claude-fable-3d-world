// Checks the live scene: it plays, and dragging / scrolling really moves the camera.
import { chromium } from 'playwright';
import { serve } from './serve.mjs';
const server = await serve(4175);
const browser = await chromium.launch({ channel: 'chrome', headless: true, args: ['--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist'] });
const page = await browser.newPage({ viewport: { width: 540, height: 960 } });
page.on('pageerror', e => console.log('[page error]', e.message));
await page.goto('http://127.0.0.1:4175/');
await page.waitForFunction('window.scene3d && window.liveFps', null, { timeout: 60000 });
const pose = () => page.evaluate(() => { const c = scene3d.camera, t = scene3d.controls.target; return { enabled: scene3d.controls.enabled, dist: +c.position.distanceTo(t).toFixed(1), azimuth: +(Math.atan2(c.position.x - t.x, c.position.z - t.z) * 180 / Math.PI).toFixed(1) }; });
console.log('playing at', await page.evaluate(() => liveFps), 'fps');
await page.waitForTimeout(16000);                                   // let the city finish building
await page.mouse.move(270, 480); await page.mouse.down(); await page.mouse.up();   // first click takes over the camera
const before = await pose();
await page.mouse.move(270, 480); await page.mouse.down(); await page.mouse.move(120, 480, { steps: 12 }); await page.mouse.up();
await page.waitForTimeout(600);
const orbited = await pose();
await page.mouse.wheel(0, -600); await page.waitForTimeout(800);
const zoomed = await pose();
console.log({ before, orbited, zoomed });
console.log(orbited.enabled && Math.abs(orbited.azimuth - before.azimuth) > 5 && zoomed.dist < orbited.dist - 1 ? 'PASS: orbit and zoom work' : 'FAIL');
await browser.close(); server.close();
