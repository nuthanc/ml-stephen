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

### Initial Gradient Descent Implementation
* Diagram 3-mat: Initial Implementation of Slow Gradient descent
* Diagram 4-use: Replace with much faster code
* Define gradientDescent method
* By convention, *initial guess* of 0 or 1 for m and b
* Diagram link: Diagram Link: https://www.draw.io/#Uhttps://raw.githubusercontent.com/StephenGrider/MLCasts/master/diagrams/06/diagrams.xml
* Diagram 9-slope: How to **calculate slope of m and b**
* Diagram Link: https://app.diagrams.net/#Uhttps://raw.githubusercontent.com/StephenGrider/MLCasts/master/diagrams/07/diagrams.xml
* Diagram 05-calcs: **Slope w.r.t b**
* mx+b is the Guess or Prediction and Actual is the actual value
* **Two stage calculations:**
    * mx+b as it common for both b and m slopes
    * Rest of the calculations
* Features which is an array of arrays is all the horsepower values in our case

### Calculating MSE slopes
* bSlope and mSlope for slope w.r.t b and m
* Import lodash for summing all the values in bslope and mslope

### Updating Co-efficients
* Update m and b
* In index.js, require LinearRegression

### Interpreting Results
* In index.js, create an instance of LinearRegression class
* Here learning rate is an arbitrary value and iterations is set to 1 to check the values
* Call train method
* node index.js in regressions directory
* Check https://nodejs.org/api/esm.html#esm_enabling
* Also stack overflow "node --experimental-modules, requested module does not provide an export named"
* To solve ESM experimental errors
    * npm i esm
    * node -r esm index.js
* Now let's dial up our iterations to 100 and check
* We see that m and b are raised to 135 and 134 powers of 10
* This is because our **learning rate is too large**
* So let's change our learning rate to 10% of what is was previously by setting it to 0.0001
* But even now, the values of m and b are big
* We can continue to tweak our learning rate, but one other possible solution is min-max normalization or standardization

### Matrix Multiplication
* Diagram 04: Using Tensorflow
* Diagram 10: Goal
    * Every single operation with Tensorflow method
* Diagram 11, 12, 07, 08, 09, 10: Matrix Multiplication
* Diagram 14, 15, 16: More Matrix Multiplication

### Matrix Form Of Slope Equations
* Diagram 9-updates: Calculating m and b slopes at the same time
* How we walked from nasty looking code in Diagram 06 to Diagram 09-update
