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