const fs = require('fs');

fs.readFile('./data/test.txt', function(err, data) {
  const startCallback = Date.now();
  // do something that will take 10ms...
  while (Date.now() - startCallback < 10) {
    // do nothing
  }
  if (err) console.log('Error');
  else console.log(data);

  // Schedule setImmediate first
  setImmediate(() => {
    console.log('I was scheduled to run immediately');
  });

  const timeoutScheduled = Date.now();
  // Then schedule setTimeout
  setTimeout(() => {
    const delay = Date.now() - timeoutScheduled;
    console.log(`${delay}ms have passed since I was scheduled`);
  }, 5);
});
