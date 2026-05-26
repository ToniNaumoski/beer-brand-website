const fs = require('fs');
const path = require('path');
const https = require('https');

const ASSET_DIR = path.join(__dirname, 'public', 'assets');
const HTML_FILE = path.join(__dirname, 'index.html.bak');
const OUTPUT_HTML_FILE = path.join(__dirname, 'index.html.local');

// Create assets directory if it doesn't exist
if (!fs.existsSync(ASSET_DIR)) {
  fs.mkdirSync(ASSET_DIR, { recursive: true });
}

// Helper function to download file from URL
function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirect
        downloadFile(response.headers.location, destPath).then(resolve).catch(reject);
        return;
      }
      
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: Status ${response.statusCode}`));
        return;
      }
      
      const fileStream = fs.createWriteStream(destPath);
      response.pipe(fileStream);
      
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded: ${url} -> ${destPath}`);
        resolve();
      });
      
      fileStream.on('error', (err) => {
        fs.unlink(destPath, () => {});
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function run() {
  if (!fs.existsSync(HTML_FILE)) {
    console.error(`Error: ${HTML_FILE} does not exist. Please place your index.html.bak in the root.`);
    process.exit(1);
  }

  let htmlContent = fs.readFileSync(HTML_FILE, 'utf8');

  // Regex patterns to find remote assets
  const urlRegexes = [
    /https:\/\/assets\.website-files\.com\/[a-zA-Z0-9_./%-]+/g,
    /https:\/\/d3e54v103j8qbb\.cloudfront\.net\/js\/[a-zA-Z0-9_./%-]+/g,
    /https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/[a-zA-Z0-9_./%-]+/g,
    /https:\/\/code\.jquery\.com\/[a-zA-Z0-9_./%-]+/g
  ];

  // Find all matches
  const allUrls = new Set();
  for (const regex of urlRegexes) {
    let match;
    while ((match = regex.exec(htmlContent)) !== null) {
      // Strip any trailing punctuation (like single/double quotes or brackets)
      let url = match[0].split(/[ '")]/)[0];
      allUrls.add(url);
    }
  }

  console.log(`Found ${allUrls.size} unique remote assets. Starting download...`);

  const urlMap = {};

  for (const url of allUrls) {
    try {
      // Create a clean filename
      const parsedUrl = new URL(url);
      let filename = path.basename(parsedUrl.pathname);
      
      // If filename has no extension or is generic, add it
      if (!filename || !filename.includes('.')) {
        filename = 'asset_' + Math.random().toString(36).substring(7);
      }

      // Handle queries/hashes
      filename = filename.split('?')[0].split('#')[0];

      // To keep names clean and avoid conflicts, let's prefix subdirectories if it's a CSS or JS file
      let destDir = ASSET_DIR;
      let relativePath = `/assets/${filename}`;

      if (filename.endsWith('.js')) {
        const jsDir = path.join(ASSET_DIR, 'js');
        if (!fs.existsSync(jsDir)) fs.mkdirSync(jsDir, { recursive: true });
        destDir = jsDir;
        relativePath = `/assets/js/${filename}`;
      } else if (filename.endsWith('.css')) {
        const cssDir = path.join(ASSET_DIR, 'css');
        if (!fs.existsSync(cssDir)) fs.mkdirSync(cssDir, { recursive: true });
        destDir = cssDir;
        relativePath = `/assets/css/${filename}`;
      }

      const destPath = path.join(destDir, filename);
      
      await downloadFile(url, destPath);
      urlMap[url] = relativePath;
    } catch (err) {
      console.error(`Failed to download ${url}:`, err.message);
    }
  }

  // Rewrite URLs in HTML
  console.log('Rewriting asset URLs in HTML...');
  let rewrittenHtml = htmlContent;
  
  // Sort original URLs by length descending to prevent partial matches replacing subsets of longer URLs
  const sortedOriginalUrls = Object.keys(urlMap).sort((a, b) => b.length - a.length);
  
  for (const origUrl of sortedOriginalUrls) {
    const localUrl = urlMap[origUrl];
    // Global replace
    rewrittenHtml = rewrittenHtml.split(origUrl).join(localUrl);
  }

  fs.writeFileSync(OUTPUT_HTML_FILE, rewrittenHtml, 'utf8');
  console.log(`Rewriting complete. Locally-referenced file saved to: ${OUTPUT_HTML_FILE}`);
  console.log('Downloader finished successfully!');
}

run();
