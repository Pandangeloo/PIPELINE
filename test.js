const { exec } = require('child_process');
exec('npx eslint .', (err, stdout) => {
  if (err) { console.error(err); }
  console.log(stdout);
});
