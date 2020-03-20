# Implementation of Gradient Descent

### App Overview
* Diagram Link: https://app.diagrams.net/#Uhttps://raw.githubusercontent.com/StephenGrider/MLCasts/master/diagrams/07/diagrams.xml
* run npm install inside regressions folder
* cars.csv is the dataset
    * mpg: miles per galloon 
    * displacement: size of the engine
* Diagram 01-d: Equation depicting relation between mpg and horsepower
* Diagram 02-class: *Class structure* for the App

### Data Loading
* Make a new file called index.js under regressions
* Require the libraries in index.js
* Load the CSV file of cars using loadCSV
    * Second argument will be an options object
    * Next is to split the dataSet into testSet and trainingSet
    * We want to have a ton of records in our trainingSet and a couple of records in the testSet
    * testSet size of 50 records might be appropriate for our 393 records
    * In machine learning, testSet for validating model's accuracy and trainingSet for predicting the label
    * Which column to put into features and testFeatures from dataColumns
    * labelColumns for what we are trying to predict

### Default Algorithm Options
* Make a new file called linear-regression.js file under regressions
* In this file, we only have to require tfjs library
* That tfjs-node needs to be required only once, preferably in index.js or any other entry file
* Create LinearRegression class and export it
* Options to constructor will be iterations, learningRate etc
* features and labels will be passed as tensors
* Provide default options through Object.assign

### Formulating the Training Loop
* We are gonna scaffold train method
* This method is for getting good values of *m and b*
* Provide iterations so that we can finally stop