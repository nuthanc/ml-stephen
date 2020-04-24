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

### Classifying Continuous Values
* In multinominal-logistic-regression index.js, labelColumns of mpg
* converters should be passed with mpg column
* console log labels to check

### Training a Multinominal Model
* Require lodash in index.js
* Use flatMap function to remove one layer of nesting
* Print weights to check if it is proper
* It prints a 4*3 matrix which makes sense for b and 3 features m's along with 3 labels 
* Put real data from cars.csv and check the predict method
* Need to pass in the same order as given in dataColumns

### Marginal vs Conditional Probability
* Getting 2 1's in predict
* Entire goal is to take the highest probability
* Diagram link: https://app.diagrams.net/#Uhttps://raw.githubusercontent.com/StephenGrider/MLCasts/master/diagrams/12/diagrams.xml
* Diagram 24-p:
* Diagram 9-m:
* Diagram 10-d:
* Diagram 11-c: Single characteristic probability
* Diagram 12-t:
* **Marginal or Conditional** by summing up to 1 or not
* Diagram 13-n:

### Sigmoid vs Softmax
* Diagram 12-eq: Softmax
* Diagram 10-s:
* Diagram 14-s:

### Refactoring Sigmoid to Softmax
* Diagram 21-d:
```js
const guesses = tf.tensor([
  [15, 23, 22]
]);

guesses.softmax()
//This gives conditional probability
//Done on a per row basis
```
* In logistic-regression.js, everywhere replace sigmoid by softmax

### Implementing Accuracy Gauges
* Diagram link: https://app.diagrams.net/#Uhttps://raw.githubusercontent.com/StephenGrider/MLCasts/master/diagrams/13/diagrams.xml
* Diagram 4-accu:

### Calculating Accuracy
* predict method doesn't need decisionBoundary anymore in LogisticRegression class
* argMax along the horizontal axis in predict
* argMax for testLabels in test method
* notEqual operation for incorrect instead of sub and abs
* In index.js, regression.test

### Handwriting Recognition
* Diagram 5-mn:
* Diagram 6-mn:

### Greyscale Values
* Diagram 13-image:
* Diagram 11-gs:
* Diagram 7-pixels:
