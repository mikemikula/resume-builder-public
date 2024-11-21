const { verifyImageExists } = require('../lib/utils/verifyAssets')

const requiredImages = [
  '/previews/linkedin-preview.png'
]

requiredImages.forEach(imagePath => {
  if (!verifyImageExists(imagePath)) {
    console.error(`Required image missing: ${imagePath}`)
    process.exit(1)
  }
}) 