var commands = require('./commands');  // get commands from commands.js

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function(data) {
  var data = data.toString().split(' '), cmd = data[0], param = data[1].trim();

   process.stdout.write('You typed: ' + cmd + '\n');
   commands[cmd](param);
   });
