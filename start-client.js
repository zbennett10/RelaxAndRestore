///this code makes starting client server cross compatible across OS

const args = [ 'start' ];
const opts = { stdio: 'inherit', cwd: 'client', shell: true };
require('child_process').spawn('npm', args, opts);