const { stdin, stdout } = process;
const fs = require('fs');
const path = require('path');
const output = fs.createWriteStream(path.join(__dirname, 'text.txt'));

stdout.write('Hello! Input any text, please.\n');
stdin.on('data', data => {
    
    if (data ==='exit') {
        process.on('exit', () => console.log('Good luck!'));
    } else {output.write(data);}
});
