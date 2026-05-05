const fs = require('fs');

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
    let title = "";
    if (category.includes("Astrologer") || category.includes("Solution") || category.includes("Lost Love Back")) {
      // Just append 'In <Location>'
      title = `${category} In ${location}`;
    } else {
      title = `${category} In ${location}`;
    }
    
    // create slug
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    
    // Add to list
    seoPages.push({
      title,
      slug,
      service: category.replace(' Astrologer', ''),
      city: location
    });
  }
}

// Generate file content
let tsContent = 'export const seoPages = [\n';
seoPages.forEach((page, index) => {
  tsContent += `  {
    title: "${page.title}",
    slug: "${page.slug}",
    service: "${page.service}",
    city: "${page.city}"
  }${index < seoPages.length - 1 ? ',' : ''}\n`;
});
tsContent += '];\n';

fs.writeFileSync('src/data/seoPages.ts', tsContent);
console.log('Generated ' + seoPages.length + ' SEO pages data in src/data/seoPages.ts');
