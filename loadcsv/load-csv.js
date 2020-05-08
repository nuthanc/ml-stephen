const fs = require('fs');

function loadCSV(filename, options) {
  const data = fs.readFileSync(filename, { encoding: 'utf-8' });
  data.split('\n').map(row => row.split(','))
}

loadCSV('data.csv');
