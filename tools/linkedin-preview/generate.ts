import type { Browser } from 'puppeteer'
import puppeteer from 'puppeteer'
import * as path from 'path'
import * as fs from 'fs'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, '../../apps/web/public/previews');
const MAX_RETRIES = 3;
const RETRY_DELAY = 2000;

async function generateLinkedInPreview(): Promise<void> {
  let browser: Browser | null = null;

  try {
    console.log('Creating output directory...');
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    console.log('Launching browser...');
    browser = await puppeteer.launch({
      headless: true,
      executablePath: process.platform === 'darwin' 
        ? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' 
        : undefined,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
        '--disable-web-security',
        '--window-size=1200,627'
      ],
      defaultViewport: {
        width: 1200,
        height: 627,
        deviceScaleFactor: 2
      }
    });

    const page = await browser.newPage();

    console.log('Navigating to preview page...');
    const response = await page.goto('http://localhost:3000/preview', {
      waitUntil: ['networkidle0', 'domcontentloaded'],
      timeout: 30000
    });

    if (!response?.ok()) {
      throw new Error(`Navigation failed: ${response?.status()} ${response?.statusText()}`);
    }

    await new Promise(resolve => setTimeout(resolve, 2000));

    const outputPath = path.join(OUTPUT_DIR, 'linkedin-preview.png');
    
    console.log('Taking screenshot...');
    await page.screenshot({
      path: outputPath,
      type: 'png',
      clip: {
        x: 0,
        y: 0,
        width: 1200,
        height: 627
      }
    });

    console.log(`Preview generated successfully at: ${outputPath}`);

  } catch (error) {
    console.error('Error generating preview:', error);
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

generateLinkedInPreview();