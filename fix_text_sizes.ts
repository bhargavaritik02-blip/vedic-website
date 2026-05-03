import fs from 'fs';
import path from 'path';

function processFiles(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processFiles(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf-8');
            
            // Downgrade mobile headings to match 22-28px requirement
            content = content.replace(/text-4xl md:text-5xl/g, 'text-3xl md:text-4xl lg:text-5xl');
            content = content.replace(/text-3xl md:text-4xl/g, 'text-2xl md:text-3xl lg:text-4xl');
            content = content.replace(/text-5xl md:text-6xl/g, 'text-4xl md:text-5xl lg:text-6xl');
            
            // Specifically fix the hero heading in Home.tsx which might be text-4xl md:text-5xl lg:text-7xl
            content = content.replace(/text-4xl lg:text-7xl/g, 'text-3xl md:text-5xl lg:text-7xl');

            fs.writeFileSync(fullPath, content);
        }
    });
}

processFiles('src/pages');
processFiles('src/components');
