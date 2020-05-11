# Loading CSV files

* New project of loadCSV
* npm init
* npm install lodash shuffle-seed
* New file of load-csv

### A Test Dataset
* New file of data.csv2

### Reading Files from Disk
* Create loadCSV function in load-csv.js

### Splitting into Columns
* Using data.split and map

### Dropping Trailing Columns
* Require lodash and use dropRightWhile
* This is for bad csv files with trailing empty spaces

### Parsing Number Values

### Custom Value Parsing
* Expand options argument of converters to do custom value parsing

### Extracting Data Columns
* Pass dataColumns and labelColumns
* Helper function of extractColumns
* Dump the first row of headers using shift

### Shuffling Data via Seed Phrase
* Add shuffle true to loadCSV call
* Require shuffle-seed
* The above for shuffling data and labels in the exact same order

### Splitting Test and Training
* Add splitTest argument
```js
{ features: data, labels: labels}
//Can be shortened using es2015 syntax
{ features: data, labels}
```
