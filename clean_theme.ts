import fs from 'fs';

const files = ['src/pages/Home.tsx', 'src/pages/Horoscope.tsx'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  
  // Backgrounds: Make everything light and fresh
  content = content.replace(/bg-\[#050505\]/g, 'bg-slate-50'); 
  content = content.replace(/bg-zinc-950\/90/g, 'bg-white/90'); // Header
  content = content.replace(/bg-zinc-950/g, 'bg-white'); // Mobile nav
  content = content.replace(/from-zinc-900 to-black/g, 'from-orange-50 to-rose-50'); // Hero gradient
  
  // Remove dark glow/transparent darks
  content = content.replace(/bg-zinc-900\/50/g, 'bg-white');
  content = content.replace(/bg-zinc-900\/30/g, 'bg-white');
  content = content.replace(/bg-zinc-900\/40/g, 'bg-white');
  content = content.replace(/bg-zinc-900\/60/g, 'bg-white');
  content = content.replace(/bg-zinc-900\/80/g, 'bg-white');
  content = content.replace(/bg-zinc-900/g, 'bg-white');
  
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
  
  content = content.replace(/text-white/g, 'text-slate-900');
  
  // Fix specific buttons that might have been hit by text-white -> text-slate-900
  // Instead of complex regex, let's target by Tailwind component patterns
  content = content.replace(/text-slate-900 font-bold/g, 'text-white font-bold'); 
  content = content.replace(/fill-white/g, 'fill-orange-600');
  
  // Fix dark-mode inputs to standard
  content = content.replace(/\[color-scheme:dark\]/g, '[color-scheme:light]');

  // Add the light box shadows explicitly to cards 
  content = content.replace(/shadow-xl/g, 'shadow-[0_8px_30px_rgba(0,0,0,0.04)]');
  content = content.replace(/shadow-2xl/g, 'shadow-[0_8px_40px_rgba(0,0,0,0.08)]');
  
  // specific fix for header logo text that might be overwritten to white
  content = content.replace(/tracking-tight text-slate-900/g, 'tracking-tight text-slate-900');

  fs.writeFileSync(file, content);
});
