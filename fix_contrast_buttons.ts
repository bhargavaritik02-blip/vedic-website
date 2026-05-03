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
            
            // Fix text-white on light buttons
            content = content.replace(/bg-slate-100(.*?)text-white/g, 'bg-slate-100$1text-slate-900');
            content = content.replace(/bg-transparent(.*?)text-white/g, 'bg-transparent$1text-slate-900');
            
            // Fix text-slate-900 on dark buttons
            content = content.replace(/bg-orange-600(.*?)text-slate-900/g, 'bg-orange-600$1text-white');
            content = content.replace(/bg-orange-500(.*?)text-slate-900/g, 'bg-orange-500$1text-white');
            content = content.replace(/bg-zinc-950(.*?)text-slate-900/g, 'bg-zinc-950$1text-white');

            fs.writeFileSync(fullPath, content);
        }
    });
}

processFiles('src/pages');
processFiles('src/components');
