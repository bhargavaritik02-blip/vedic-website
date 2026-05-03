import fs from 'fs';

const files = ['src/pages/Home.tsx', 'src/pages/Horoscope.tsx'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  
  // Backgrounds
  content = content.replace(/bg-\[#050505\]/g, 'bg-slate-50');
  content = content.replace(/bg-zinc-900\/50/g, 'bg-white');
  content = content.replace(/bg-zinc-900\/30/g, 'bg-white');
  content = content.replace(/bg-zinc-900\/40/g, 'bg-white/90');
  content = content.replace(/bg-zinc-900\/60/g, 'bg-white/95');
  content = content.replace(/bg-zinc-900\/80/g, 'bg-white');
  content = content.replace(/bg-zinc-900/g, 'bg-white');
  content = content.replace(/bg-black\/60/g, 'bg-white/90');
  content = content.replace(/bg-black\/40/g, 'bg-slate-100');
  content = content.replace(/bg-black\/50/g, 'bg-slate-50');
  // Be careful with bg-black
  content = content.replace(/bg-black/g, 'bg-white');
  
  // Borders
  content = content.replace(/border-zinc-800\/60/g, 'border-slate-200');
  content = content.replace(/border-zinc-800\/80/g, 'border-slate-200');
  content = content.replace(/border-zinc-800\/50/g, 'border-slate-200');
  content = content.replace(/border-zinc-800/g, 'border-slate-200');
  content = content.replace(/border-zinc-700\/50/g, 'border-slate-200');
  content = content.replace(/border-zinc-700/g, 'border-slate-300');
  content = content.replace(/border-zinc-900/g, 'border-slate-200');
  
  // Text colors
  content = content.replace(/text-white/g, 'text-slate-900');
  content = content.replace(/text-zinc-200/g, 'text-slate-800');
  content = content.replace(/text-zinc-300/g, 'text-slate-700');
  content = content.replace(/text-zinc-400/g, 'text-slate-600');
  content = content.replace(/text-zinc-500/g, 'text-slate-500');
  content = content.replace(/text-zinc-600/g, 'text-slate-400');
  content = content.replace(/text-zinc-100/g, 'text-slate-900');
  
  // Widths
  content = content.replace(/max-w-\[1440px\]/g, 'max-w-[1100px]');
  content = content.replace(/max-w-7xl/g, 'max-w-[1100px]');
  
  // Specific fix for header so inverted text doesn't hide text
  content = content.replace(/fill-white/g, 'fill-orange-600');
  
  // Specific fix for "color-scheme:dark" inputs which now need light
  content = content.replace(/\[color-scheme:dark\]/g, '[color-scheme:light]');

  fs.writeFileSync(file, content);
});
