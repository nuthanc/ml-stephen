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

### Fixing Standardization Issues
* In index.js, after line of creating LinearRegression object, regression.features.print()
* We see that the column of ones are also getting standardized
* To fix this, add the concatenation step after the standardization
* But still of R2 is bad as last time
```js
const features = tf.ones([10, 1]);
const { mean, variance } = tf.moments(features, 0);

features.sub(mean).div(variance.pow(0.5));
// When this is run in the browser, we don't see -0.95 as before
//Different environments for TensorFlow
```
### Massaging Learning Rates
* Increase learning rate to 0.1 and we get R2 is 0.6048565706121047
* For 0.5 learning rate, just about the same
* For 1 learning rate, same again
* Bringing in other features to play to increase the accuracy

### Moving towards Multivariate Regression
* Diagram Link: https://app.diagrams.net/#Uhttps://raw.githubusercontent.com/StephenGrider/MLCasts/master/diagrams/08/diagrams.xml
* Diagram 26-eq: **Multivariate Regression**
* Diagram 27-multi: Univariate and Multivariate Regression
* Diagram 23-features:
* Diagram 24-multi, 25-sub, 26-xt, 27-multi:

### Refactoring for Multivariate Analysis
* Diagram 23-features:
* In linear-regression.js, this.weights initiliazation change
* In index.js, adding displacement and weight features
* With learning rate of 1, we have R2 equal to -Infinity
* Let's adjust the learning rate, starting from 0.01, 0.1, 0.5
* We see for 0.5, it's decreasing. Going back to 0.1 and changing the number of iterations to 1000
* We see that it's going back down again, so reducing the number of iterations or increasing the learning rate
* Bringing in additional feature, R2 is 0.6609494788240404

### Learning Rate Optimization
* How to get better value of Learning Rate
* Diagram Link: https://app.diagrams.net/#Uhttps://raw.githubusercontent.com/StephenGrider/MLCasts/master/diagrams/09/diagrams.xml
* Diagram 01-lr:
* Diagram 02: **Learning Rate Optimization Methods**
* Diagram 3: **Custom approach to Learning Rate Optimization**

### Recording MSE history
* Diagram 5-mse: Equatin of MSE
* In linear-regression.js, recordMSE function
* Record mse in an array
* Call recordMSE right after calling gradientDescent inside train method
* No need to call recordMSE inside test method because we are not updating weights anymore

### Updating Learning Rate
* Diagram 3: 
* updateLearningRate method in linear-regression.js file
* Can use *unshift* instead of *push* in recordMSE method so that we don't have to do this.mseHistory.length - 1 and -2, which doesn't cleaner
```js
const lastValue = this.mseHistory[this.mseHistory.length - 1];
const secondLast = this.mseHistory[this.mseHistory.length - 2];
```
* unshift is a *prepend operation*
* Call updateLearningRate in train method

### Observing Changing Learning Rate and MSE
* To test out updateLearningRate, let's give a initial learning rate of 10 while instantiating the LinearRegression class
* We see that R2 is 0.6581617545974641, which means the learningRate is adjusting itself even though we gave a crazy value
* To see this, console.log in train method and mseHistory in index.js file

### Plotting MSE values
* In index.js, require node-remote-plot
* Call plot with mseHistory and run node -r esm index.js
* You'll see a plot file called plot.png
* Provide xLabel and yLabel
* Since we have the latest value of MSE in the front, we need to reverse the mseHistory in the plot to show the proper image
* Initially small due to m and b being zero, but explodes because of the big learning rate, then the adjustments
* More sensible with small learning rate like 0.1

### Plotting MSE history against B values
* New array called bHistory inside the LinearRegression constructor
* Then inside train method, push b which is present in weights
* Back in index.js, x for b and y for MSE inside plot
* After we are done, take out bHistory

### Batch and Stochastic Gradient Descent
* Diagram Link: https://app.diagrams.net/#Uhttps://raw.githubusercontent.com/StephenGrider/MLCasts/master/diagrams/09/diagrams.xml
* Diagram 6-flow: 
* Diagram 7-batch: Batch Gradient Descent
* Diagram 8-sotch: Stochastic Gradient Descent(SGD)
* Diagram 9-diff: Summary of all 3
* Batch and Stochastic Gradient Descent converge faster as we are frequently updating the values of m and b

### Refactoring Towards Batch Gradient Descent
* All the matrix multiplication and equations remains the same, as we are only reducing the rows 
* Diagram 7-all: Current Implementation
* Diagram 8-methods: New Implementation
* In linear-regression.js, in gradientDescent function, argument of features and labels

### Determining Batch Size and Quantity
* Diagram 11-train:
* Pass batch size in index.js
* Inside train method, add batchQuantity which defines the number of batches we have

### Iterating Over Batches
* Put gradientDescent in another for loop
* Reminding slice
```js
const features = tf.tensor([
    [1,2,3],
    [1,2,3],
    [4,2,3],
    [5,4,3],
    [1,2,3],
    [1,2,3],
])

//The below will get the first 3 rows
features.slice([0,0], [3,-1]);
//1st argument co-ordinates of the start index
//2nd arguemnt size of the slice(rows,cols) -1 to give all columns

//This will get the next 3 rows
features.slice([3,0], [3,-1]);
```

### Evaluating Batch Gradient Descent Results
* Batch Doesn't make a huge difference with small datasets like 300 or 400 but makes a big impact with large datasets
* Run the analysis and check the new plot
* We see a tremendous decrease in MSE even after the 1st iteration
* Let's change the iterations to 3
    * With this, we notice it ran much faster
    * Also R2 also improved
* To change to *Stochastic*, just change the batchSize to 1
* We see R2 decrease
* For some projects, Batch Gradient descent will be better and for some other vice versa

### Making Predictions with the Model
* Add predict method in LinearRegression class
* observation as argument which is gonna be an array of arrays
* *Matrix multiplication of Features and Weights represented mpg for that set of characteristics*
* To get prediction, just add a column of 1s to observation tensor(which is standardized) and multiply with weights
* This is where we use processFeatures which does exactly that and then multiply with weights
* Call predict in index.js
* **Order of observations same as dataColumns**
* After training, we don't have to do the test step again and again, so we can comment out test

## Introducing Logistic Regression
* Diagram Link: https://app.diagrams.net/#Uhttps://raw.githubusercontent.com/StephenGrider/MLCasts/master/diagrams/11/diagrams.xml
* Diagram 1: Logistic Regression(Discrete values)
* Diagram 2-bin:

### Logistic Regression in Action
* Diagram 4-problem: 1 Feature and 2 Labels
* Diagram 5-rephrase:
* Diagram 6-req:
* Diagram 5-data:
* Diagram 6-encoded:
* Diagram 7-eqn: **Reminder**

### Bad Equation Fits
* Diagram 7-eqn:
* Diagram 8-trend:
* Diagram 9-trend: Range outside of 0 and 1 not good
* Diagram 10-range:
* **Eqn mx+b doesn't fit here**

### The Sigmoid Equation
* Diagram 10-range:
* Diagram 17-good: **Eqn**
* Diagram 9-sigmoid: Always value between 0 and 1
* Diagram 9-trend and Diagram 11-vals: 
    * Optimum values of m and b at .57 and 11.1 respectively
    * m and b calculated with the same steps as linear regression

### Decision Boundaries
* Diagram 11-vals: Gradual shift
* Diagram 12-vals: 
* Diagram 19-Page: **Output of Sigmoid equation**
* Diagram 17-boundary:
    * For safety analysis Decision boundary can be changed to 0.99 instead of 0.5

### Changes for Logistic Regression
* Diagram 22-flow: **Linear Regression**
* Diagram 23-flow: **Logistic Regression**

### Project Setup for Logistic Regression
* Diagram Link: https://app.diagrams.net/#Uhttps://raw.githubusercontent.com/StephenGrider/MLCasts/master/diagrams/10/diagrams.xml
* Diagram 9-q:
* Diagram 11-folder: **Project structure**

### Importing Vehicle Data
* Create index.js and logistic-regression.js inside logistic-regression folder

### Encoding Label Values
* Converters option in loadCSV for encoding label values

### Updating Linear Regression to Logistic Regression
* Copy linear-regression.js to logistic-regression and modify accordingly
* Comparsion between linear and logistic regression
* Diagram link: https://app.diagrams.net/#Uhttps://raw.githubusercontent.com/StephenGrider/MLCasts/master/diagrams/11/diagrams.xml
* **Linear Regression**
* Diagram 27-graph:
* Diagram 29-slopes:
* Diagram 28-mse:
* Diagram 31-vect:
* **Logistic Regression**
* Diagram 29-chart: Using Cross entropy instead of MSE
    * This does the same thing: How badly we guessed the value of m and b
* Diagram 29-full:
* But it turns out the derivate of the above equation ends up being identical to **Diagram 32-slopes**
* Diagram 33-sig:
* So the only difference is apply the **Sigmoid function**

### The Sigmoid Equation with Logistic Regression
```js

const weights = tf.tensor([
    [1],
    [1]
]);

const features = tf.tensor([
    [1,120],
    [1,130],
    [1,125],
    [1,140]
]);

features.matMul(weights).sigmoid()
// All of them are 1
```
* Diagram 9-sigmoid: The above output makes sense because from thid diagram, the z values are way to the right, so they have the value 1

### A touch more Refactoring
* So in LogisticRegression's gradientDescent and predict method, chain sigmoid to matMul
* Then in index.js of logistic-regression, create instance of LogisticRegression and call train and predict
* Give actual datasets value to predict and check whether is correct or not
* node -r esm index.js 
* Looks like it's predicting correctly

### Gauging Classification Accuracy
* Diagram link: https://app.diagrams.net/#Uhttps://raw.githubusercontent.com/StephenGrider/MLCasts/master/diagrams/11/diagrams.xml
* Diagram 34-ref:

### Implementing a Test function
* Empty the test method in logistic-regression
* Pass testFeatures to predict
* Diagram 34-ref: The above will give the probability
* round function used as 0.5 decision boundary
* In index.js file, console log regression.test
* Run node -r esm index.js

### Variable Decision Boundaries
* Move round function in predict method in LogisticRegression class
* To apply different decisionBoundary other than 0.5(using round function), use greater function
* Provide default options.decisionBoundary
* Let's test out this by going to index.js and providing this option
* We get an error, because returns a boolean
* So append cast('float32')
* So by changing decisonBoundary from 0.5 to 0.6, accuracy went down from 0.88 to 0.86

### Mean Squared Error vs Cross Entropy
* How we are getting correct values even when are using *mseHistory* instead of *cross entropy*
* mseHistory is used for updating the *learning rate*
* The reason being we can still use MSE to update learning rate(But this time, we are getting lucky)
* It doesn't always get the global minimum when MSE is used
* Diagram Copy-3: Wavy function when Sigmoid is used with MSE
* We will get a fully convex function with Cross entropy

### Refactoring with Cross Entropy
* In LogisticRegression class, rename mseHistory with costHistory
* MSE and CE are reffered to as Cost functions in most of the documentation
* Diagram Copy-4:
* Diagram 35-cost: **Vectorized equation**

### Finishing the Cost Refactor
* (-Actual + 1) instead of (1 - Actual), as this is easy in tensors

### Plotting Changing Cost History
* Run using node
* It's running fine
* In index.js of logistic-regression, import plot and call it
* If we change our batchSize to 10, we'll get even faster

### Multinominal Logistic Regression
* Diagram link: https://app.diagrams.net/#Uhttps://raw.githubusercontent.com/StephenGrider/MLCasts/master/diagrams/12/diagrams.xml
* Diagram 2-binary:

### A Smart Refactor to Multinominal Analysis
* Diagram 23-refactor:
* Diagram 5-va:
* Diagram 4-m:
* Diagram 6-m:
* Diagram 7-th:
* Diagram 8-pr:

### A Smarter Refactor
* Diagram 19-mul:
* Diagram 24-s:
* Diagram 26-s:

### A Single Instance Approach
* One single weights tensor containing all 3
* Diagram 26-s:
* Diagram 21-j:
* All of the matrix math ends up being identical
* Diagram 20-mu:
* Diagram 21-d:
* Diagram 22-mu:
* Even sigmoid is not a problem, since it's a element-wise operation
* Diagram 23-l:
* Diagram 24-p:

### Refactoring to MultiColumn Weights
* Create multinominal-logistic-regression folder
* Update weights inside constructor

### A problem to Test Multinominal Classification
* Diagram link: https://app.diagrams.net/#Uhttps://raw.githubusercontent.com/StephenGrider/MLCasts/master/diagrams/13/diagrams.xml 
* Diagram 2-q: mpg is fuel efficiency
* Diagram 1-pr:
* Diagram 3-la:
