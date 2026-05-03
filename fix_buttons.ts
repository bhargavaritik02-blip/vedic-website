import fs from 'fs';

const files = ['src/pages/Home.tsx', 'src/pages/Horoscope.tsx'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  
  content = content.replace(/bg-orange-600(.*?)text-slate-900/g, 'bg-orange-600$1text-white');
  content = content.replace(/bg-orange-500(.*?)text-slate-900/g, 'bg-orange-500$1text-white');
  content = content.replace(/bg-zinc-800(.*?)text-slate-900/g, 'bg-zinc-800$1text-white');
  content = content.replace(/bg-\[\#25D366\](.*?)text-slate-900/g, 'bg-[#25D366]$1text-white');
  content = content.replace(/bg-gradient-to-r from-orange-600 to-amber-600(.*?)text-slate-900/g, 'bg-gradient-to-r from-orange-600 to-amber-600$1text-white');
  content = content.replace(/bg-gradient-to-r from-zinc-700 to-zinc-600(.*?)text-slate-900/g, 'bg-gradient-to-r from-zinc-700 to-zinc-600$1text-white');

  fs.writeFileSync(file, content);
});
