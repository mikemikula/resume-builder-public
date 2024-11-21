import http from 'http';
import fs from 'fs';
import path from 'path';

const imagePath = path.join(process.cwd(), 'public', 'previews', 'linkedin-preview.png');
console.log('Checking image at:', imagePath);
console.log('Image exists:', fs.existsSync(imagePath));

const server = http.createServer((req, res) => {
  if (req.url === '/previews/linkedin-preview.png') {
    const imagePath = path.join(process.cwd(), 'public', 'previews', 'linkedin-preview.png');
    
    if (fs.existsSync(imagePath)) {
      const image = fs.readFileSync(imagePath);
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.end(image);
    } else {
      console.error('Image not found at:', imagePath);
      res.writeHead(404);
      res.end('Image not found');
    }
  } else if (req.url === '/debug') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Preview Debug</title>
          <meta property="og:title" content="Your Name- Lead Software Engineer" />
          <meta property="og:image" content="http://localhost:3001/previews/linkedin-preview.png" />
        </head>
        <body>
          <h1>Debug Info</h1>
          <img src="/previews/linkedin-preview.png" alt="Preview" />
          <pre>
            Image path: ${path.join(process.cwd(), 'public', 'previews', 'linkedin-preview.png')}
            Exists: ${fs.existsSync(path.join(process.cwd(), 'public', 'previews', 'linkedin-preview.png'))}
          </pre>
        </body>
      </html>
    `;
    res.end(html);
  }
});

server.listen(3001, () => {
  console.log('Debug server running at http://localhost:3001/debug');
}); 