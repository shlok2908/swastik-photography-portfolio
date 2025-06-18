const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Base URL of your website
const BASE_URL = 'https://swastikbysarang.com';

// Get all gallery images
const weddingImages = glob.sync('src/assets/galleries/wedding/**/*.jpg');
const fashionImages = glob.sync('src/assets/galleries/fashion/**/*.jpg');

// Create sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd
        http://www.google.com/schemas/sitemap-image/1.1
        http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd">
  
  <!-- Main Pages -->
  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${BASE_URL}/home</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${BASE_URL}/wedding</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${BASE_URL}/fashion</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${BASE_URL}/aboutus</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${BASE_URL}/enquire</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Gallery Pages -->
  ${weddingImages.map(image => {
    const slug = path.basename(path.dirname(image));
    return `
  <url>
    <loc>${BASE_URL}/gallery/${slug}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>${BASE_URL}/${image}</image:loc>
      <image:title>Wedding Photography - ${slug.replace(/-/g, ' ')}</image:title>
    </image:image>
  </url>`;
  }).join('')}

  ${fashionImages.map(image => {
    const slug = path.basename(path.dirname(image));
    return `
  <url>
    <loc>${BASE_URL}/gallery/${slug}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>${BASE_URL}/${image}</image:loc>
      <image:title>Fashion Photography - ${slug.replace(/-/g, ' ')}</image:title>
    </image:image>
  </url>`;
  }).join('')}
</urlset>`;

// Write sitemap to file
fs.writeFileSync('public/sitemap.xml', sitemap);

// Create image sitemap
const imageSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${[...weddingImages, ...fashionImages].map(image => `
  <url>
    <loc>${BASE_URL}/${image}</loc>
    <image:image>
      <image:loc>${BASE_URL}/${image}</image:loc>
      <image:title>${path.basename(image, '.jpg').replace(/-/g, ' ')}</image:title>
    </image:image>
  </url>`).join('')}
</urlset>`;

// Write image sitemap to file
fs.writeFileSync('public/image-sitemap.xml', imageSitemap);

console.log('Sitemaps generated successfully!'); 