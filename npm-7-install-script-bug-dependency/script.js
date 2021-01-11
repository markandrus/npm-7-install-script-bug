const { spawnSync } = require('child_process');

spawnSync('node-pre-gyp', ['--help'], {
  shell: true,
  stdio: 'inherit'
});
