import fs from 'fs';

const files = ['src/pages/Home.tsx', 'src/pages/Horoscope.tsx'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  
  // Backgrounds
  content = content.replace(/bg-slate-50/g, 'bg-[#050505]');
  content = content.replace(/bg-white\/90/g, 'bg-zinc-900/40');
  content = content.replace(/bg-white\/95/g, 'bg-zinc-900/60');
  content = content.replace(/bg-slate-100/g, 'bg-black/40');
  content = content.replace(/bg-white/g, 'bg-zinc-900');
  
  // Borders
  content = content.replace(/border-slate-200/g, 'border-zinc-800');
  content = content.replace(/border-slate-300/g, 'border-zinc-700');
  
  // Text colors
  content = content.replace(/text-slate-900/g, 'text-zinc-100');
  content = content.replace(/text-slate-800/g, 'text-zinc-200');
  content = content.replace(/text-slate-700/g, 'text-zinc-300');
  content = content.replace(/text-slate-600/g, 'text-zinc-400');
  content = content.replace(/text-slate-500/g, 'text-zinc-500');
  content = content.replace(/text-slate-400/g, 'text-zinc-600');
  
  // Note: max-width was kept to [1100px] because the user requested it. Let's leave that.
  
  content = content.replace(/\[color-scheme:light\]/g, '[color-scheme:dark]');

  fs.writeFileSync(file, content);
});
