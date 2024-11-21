import fs from 'fs';
import path from 'path';

const requiredAssets = [
  {
    path: 'public/previews/linkedin-preview.png',
    minSize: 100000, // minimum size in bytes
  }
];

function verifyAsset(assetPath: string, minSize: number): void {
  const fullPath = path.join(process.cwd(), assetPath);
  
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Required asset missing: ${assetPath}`);
  }

  const stats = fs.statSync(fullPath);
  if (stats.size < minSize) {
    throw new Error(`Asset too small: ${assetPath}. Size: ${stats.size} bytes. Expected at least: ${minSize} bytes`);
  }

  console.log(`✅ Verified ${assetPath}`);
}

try {
  requiredAssets.forEach(asset => verifyAsset(asset.path, asset.minSize));
  console.log('All production assets verified successfully!');
} catch (error) {
  console.error('Asset verification failed:', error);
  process.exit(1);
} 