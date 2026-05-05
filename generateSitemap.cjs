const fs = require('fs');
const path = require('path');

// Read seoPages from the generated file (assuming it's a JS object or we can parse it/require it if we compile it)
// Let's just read it as text and extract slugs, or we can use the same logic we used to generate it.
const categories = [
  "Vashikaran Specialist Astrologer",
  "Love Marriage Specialist Astrologer",
  "Black Magic Specialist Astrologer",
  "Love Problem Solution",
  "Lost Love Back",
  "Husband Wife Problem Solution",
  "Divorce Problem Solution"
];

const indianCities = [
  "Delhi", "Mumbai", "Pune", "Bangalore", "Hyderabad", "Kolkata", 
  "Chennai", "Jaipur", "Ahmedabad", "Surat", "Indore", "Bhopal", 
  "Lucknow", "Kanpur", "Nagpur", "Patna", "Vadodara", "Ghaziabad", 
  "Noida", "Faridabad", "Ludhiana", "Amritsar", "Nashik", "Rajkot", 
  "Meerut", "Varanasi", "Agra"
];

const internationalCities = [
  "USA", "Canada", "UK", "Australia", "New Zealand", "Dubai", 
  "Kuwait", "Germany", "France", "Spain", "South Africa", "Hong Kong"
];

const allLocations = [...indianCities, ...internationalCities];

const seoPages = [];

for (const location of allLocations) {
  for (const category of categories) {
    let title = `${category} In ${location}`;
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    seoPages.push(slug);
  }
}

const DOMAIN = 'https://yourwebsite.com'; // User needs to change this later

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Core Pages -->
  <url>
    <loc>${DOMAIN}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${DOMAIN}/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;

seoPages.forEach(slug => {
  sitemap += `  <url>
    <loc>${DOMAIN}/${slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
});

sitemap += `</urlset>`;

fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemap);
console.log('Generated public/sitemap.xml');

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${DOMAIN}/sitemap.xml
`;
fs.writeFileSync(path.join(__dirname, 'public', 'robots.txt'), robotsTxt);
console.log('Generated public/robots.txt');
