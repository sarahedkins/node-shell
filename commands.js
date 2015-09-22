var fs = require('fs');  // require the MODULE fs (not a built-in like process)

var print5Lines = function (isTop, file) {
  var n = 5;
  fs.readFile(file, function(err, data){
    if (err) {throw err;}
    else {
      var dataArray = convertDataToSplitArray(data);
      var length = dataArray.length;
      if (isTop) { // prints TOP lines
        for (var i = 0; i < n; i++){
          process.stdout.write(dataArray[i] + "\n");
        }
      } else { // print BOTTOM lines
        for (var i = length - 6; i <= length - 1; i++){
          process.stdout.write(dataArray[i] + "\n");
        }
      }
        process.stdout.write("prompt >");
    }
  })
};

var convertDataToSplitArray = function(data) {
  // takes readFile's "data" and returns split on newline array
  var dataString = data.toString();
  return  dataString.split('\n');
}

module.exports = {
  pwd: function(file) {
    process.stdout.write(process.argv[1]);
    process.stdout.write('\nprompt > ');
  },
  date: function(file) {
    process.stdout.write(Date());
    process.stdout.write('\nprompt > ');
  },
  ls: function(file) {
    fs.readdir('.', function(err, files) {
        if (err) throw err;
        files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
        })
        process.stdout.write("prompt >");  // need to include prompt here because asynchronous
    });
  },
  echo: function(file) {
    process.stdout.write(file);
    process.stdout.write('\nprompt > ');
  },
  cat: function(file) {
      fs.readFile(file, function(err, data){
        if (err) {throw err;}
        else {
          process.stdout.write(data);
        }
      });
      process.stdout.write("prompt >");
  },
  head: function(file) {
    print5Lines(true, file);
  },
  tail: function(file) {
    print5Lines(false, file);
  },
  wc: function(file) {
    fs.readFile(file, function(err, data){
      if (err) {throw err;}
      else {
        var dataArray = convertDataToSplitArray(data);
        process.stdout.write("Length of " + file + " is "+ dataArray.length.toString());
        return dataArray.length;
      }
    })
  }
}
