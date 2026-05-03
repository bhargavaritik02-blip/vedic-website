import https from 'https';
https.get('https://ibb.co/gMnwjx8L', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const matches = data.match(/<img[^>]+src="([^">]+)"/g);
    console.log(matches.slice(0, 10));
  });
});
