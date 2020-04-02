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

### Simplication with Matrix Multiplication
* Rewrite gradientDescent with Matrix multiplication
* Diagram Link: https://app.diagrams.net/#Uhttps://raw.githubusercontent.com/StephenGrider/MLCasts/master/diagrams/07/diagrams.xml
* Diagram 19-r, 20-c, 21-p: 
    * Weights: Value which are calculated to relate featureset with labelset(In our case, it is m and b)
    * Adding the 1 column for making it eligible for matrix multiplication

### How it All works Together
* Diagram link: https://app.diagrams.net/#Uhttps://raw.githubusercontent.com/StephenGrider/MLCasts/master/diagrams/08/diagrams.xml
* Diagram 06-all: **Slope of b and m**
* Diagram 09-updates: **Slope of b and m using matrix operations**
* Diagram 07-transpose: Entire calcuation in Tensors
* Diagram 08, 09-trans: 
* Diagram 10-trans: Comparing with Diagram 06-all
    * The 1st row is slope of m without 2 and n
    * The 2nd row is slope of b without 2 and n
* This refactor allows the addition of multiple features

### Refactoring the Linear Regression Class
* Diagram 11-steps: Steps for Refactoring
* In linear-regression.js file, make the above mentioned changes
* Concat by default is on 0 axis which is downwards and it does not update an existing tensor
* In the above steps, the column of 1s is left of the featureset
* While multipying, the order of m and b is changed to accomodate this

### Refactoring to One Equation
* Replacing m and b with weights
* Clear up the old gradientDescent
* Diagram 09-updates: Referring to the equation
* mul is element-wise operation and is different from matMul
* From the original equation, **2 is omitted**, as this doesn't matter as we are gonna multiply with learning rate anyway

### A few more changes
* Anything we do to a tensor does not update the tensor as they are mutable
* This is the **Vectorized implementation of Gradient Descent**
* Now, after running 100 iterations with learningRate as 0.000, we get Updated m is 0.17875829339027405 Updated b is 0.04919028282165527

### Same results or not
* Last time, we ran with the same parameters mentioned above without Vectorized approach, we had gotten a different result
* Cause in the non-vectorized approach, we multiplied by 2

### Calculating Model Accuracy
* Diagram Link: https://app.diagrams.net/#Uhttps://raw.githubusercontent.com/StephenGrider/MLCasts/master/diagrams/08/diagrams.xml
* Diagram 12-tset: Accuracy
* Diagram 13-r2: Coefficient of Determination
    * How good our Guess is with the Actual data
    * Sum of Squared residual and total
    * Range: -ve infinity to 1
    * Value of 1 is perfect fit or relationship
    * Diagram 15-eq: SS(tot) and SS(res)
    * Diagram 14-tot:
    * Diagram 16-tot:
    * Diagram 15-res:
    * Diagram 18-res:
    * Diagram 20-r:
    * If a negative number is obtained, it means that SS(tot)(mean line) is better than SS(res)

### Implementing Coefficient of Determination
* Diagram 12-tset: 
* In LinearRegression class, add test function
* Then do as before, Diagram 21-pre
* Print test to see if it's calculating properly
* Accuracy metric is more important than m and b values

### Dealing with Bad Accuracy
* Diagram 15-eq: 
* Diagram 13-r2:
* Then assign the result to r2 in index.js and console log it
* R2 is -3.0282662711232344
* Res is larger than total and our prediction is so bad that even using Sum of squares(i.e mean) is better

### Reminder on Standardization
* Our results from previous section were bad
* In order to improve, we do Data normalization(Min-Max) or Standardization(Std deviation and Mean)
* tf.moments(Tensorflow library itself) return mean and variance
* Same mean and variance for both **testFeatures and features**

### Data Processing in a Helper Method
* Diagram 22-sta: Helper method for appending ones and concatentation to features
* So inside LinearRegression class, add processFeatures method

### Reapplying Standardization
* Use the same mean and variance used for featureSet to testFeatures also
* standardize method in LinearRegression
* After standardization, R2 is -10.938349176819127

