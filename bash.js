//console.log("Process: ");
//console.log(process);
//console.log("End of process");

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function(data) {
  var cmd = data.toString().trim(); // remove the newline

   process.stdout.write('You typed: ' + cmd + '\n');

  //   if (cmd === "pwd") {
  //     process.stdout.write(process.argv[1]);
  //   }
  //   else if (cmd === "date") {
  //    console.log(new Date());
  //  }

     switch(cmd) {
       case "pwd": {
           process.stdout.write(process.argv[1]);
           break;
       }
       case "date": {
           process.stdout.write(Date());
           break;
       }
     }
     
      process.stdout.write('\nprompt > ');
   });
