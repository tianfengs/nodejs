//cwd
console.log(process.cwd());
console.log(__dirname);

// change directory
process.chdir('..');
process.chdir('4.global');
console.log(process.cwd());
console.log(__dirname);