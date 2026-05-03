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
            
            // Backgrounds: Make everything light and fresh
            content = content.replace(/bg-\[#050505\]/g, 'bg-slate-50'); 
            content = content.replace(/bg-zinc-950\/90/g, 'bg-white/90'); // Header
            content = content.replace(/bg-zinc-950/g, 'bg-white'); // Mobile nav
            content = content.replace(/from-zinc-900 to-black/g, 'from-orange-50 to-rose-50'); // Hero gradient
            content = content.replace(/from-zinc-900 to-zinc-950/g, 'from-orange-50 to-white');
            content = content.replace(/from-zinc-800 to-zinc-900/g, 'from-slate-100 to-white');
            
            // Remove dark glow/transparent darks
            content = content.replace(/bg-zinc-900\/50/g, 'bg-white');
            content = content.replace(/bg-zinc-900\/30/g, 'bg-white');
            content = content.replace(/bg-zinc-900\/40/g, 'bg-white');
            content = content.replace(/bg-zinc-900\/60/g, 'bg-white');
            content = content.replace(/bg-zinc-900\/80/g, 'bg-white');
            content = content.replace(/bg-zinc-900/g, 'bg-white');
            content = content.replace(/bg-zinc-800/g, 'bg-slate-100');
            
            // Dark overlays
            content = content.replace(/bg-black\/60/g, 'bg-white/90');
            content = content.replace(/bg-black\/40/g, 'bg-slate-50');
            content = content.replace(/bg-black\/50/g, 'bg-slate-50');
            
            // Update borders to soft light borders
            content = content.replace(/border-zinc-800\/60/g, 'border-slate-200');
            content = content.replace(/border-zinc-800\/80/g, 'border-slate-200');
            content = content.replace(/border-zinc-800\/50/g, 'border-slate-200');
            content = content.replace(/border-zinc-800/g, 'border-slate-200/80');
            content = content.replace(/border-zinc-700/g, 'border-slate-300');
            content = content.replace(/border-zinc-900/g, 'border-slate-200');
            
            // Update text colors
            content = content.replace(/text-zinc-100/g, 'text-slate-900');
            content = content.replace(/text-zinc-200/g, 'text-slate-800');
            content = content.replace(/text-zinc-300/g, 'text-slate-700');
            content = content.replace(/text-zinc-400/g, 'text-slate-600');
            content = content.replace(/text-zinc-500/g, 'text-slate-500');
            content = content.replace(/text-zinc-600/g, 'text-slate-400');
            
            // Be careful with text-white! We only want to flip text-white if it's NOT in a colored button.
            // Let's manually replace text-white only on non-button containers if possible.
            // Actually, we already removed most text-white in previous steps, but let's just make sure
            // we restore button text.
            
            content = content.replace(/bg-orange-600(.*?)text-slate-900/g, 'bg-orange-600$1text-white');
            content = content.replace(/bg-orange-500(.*?)text-slate-900/g, 'bg-orange-500$1text-white');
            content = content.replace(/bg-\[\#25D366\](.*?)text-slate-900/g, 'bg-[#25D366]$1text-white');
            
            // Fix dark-mode inputs to standard
            content = content.replace(/\[color-scheme:dark\]/g, '[color-scheme:light]');

            // Light box shadows explicitly 
            content = content.replace(/shadow-xl/g, 'shadow-[0_8px_30px_rgba(0,0,0,0.04)]');
            content = content.replace(/shadow-2xl/g, 'shadow-[0_8px_40px_rgba(0,0,0,0.08)]');
            
            // Widths globally 1100px
            content = content.replace(/max-w-\[1440px\]/g, 'max-w-[1100px]');
            content = content.replace(/max-w-7xl/g, 'max-w-[1100px]');

            fs.writeFileSync(fullPath, content);
        }
    });
}

processFiles('src/pages');
processFiles('src/components');
