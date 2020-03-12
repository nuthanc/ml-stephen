# knn with tf

* npm install @tensorflow/tfjs-node
* Require tf library in index.js
    * 1st require instructs where to do calculations, in our case CPU
    * 2nd require tf as a library
* Import load_csv.js file for loading up and parsing our house data csv file
    * 1st argument is file which we want to load
    * 2nd argument options
        * shuffle for shuffling
        * splitTest for splitting into testSet and trainingSet
            * In this example, 10 is testSet and the rest for trainingSet
        * dataColumns: data that we care about
        * labelColumns: labels
* loadCSV returns an object which is then assigned to whatever is declared in let
* Here let is used instead of const because we do re-assignment later
* features for lat and long, 10 for testFeatures, labels for price and testLabels price for 10 records assigned to testFeatures
* Deal with **error** after running node index.js
* Steps used to deal with error:
    * npm install -g node-gyp
    * npm config set python /usr/bin/python
    * npm install
* The error was because node-gyp works with python2 and after setting that, error was resolved

### knn function in index.js
* Arguments to knn
    * features is the features data set
    * labels: the house prices
    * predictionPoint: The lat and long of the house of which we are trying to predict the price
    * k is the top k records
* The variables from loadCSV are all arrays and not yet converted to tensors
* Call knn with only one testFeature which serves as predictionPoint and then k as 10
* Diagram Link: https://www.draw.io/#Uhttps://raw.githubusercontent.com/StephenGrider/MLCasts/master/diagrams/04/diagrams.xml
* Diagram 16-err: Error
    ```
    Error % with only lat and long as features
    Error -30.98617511520737
    Error -52.95661953727506
    Error -9.552941176470588
    Error -28.528495575221243
    Error -6.069828722002635
    Error -9.855653270993358
    Error -11.176432291666668
    Error 43.34094616639478
    Error -19.536472310319592
    Error -5.603238866396762
    ```

##### Add Sqft_lot as another Feature
* Add sqft_loft in dataColumns of loadCSV function in index.js
* Now when we get *features*, it will include Sqft_lot column
* We don't need to change anything as we have added functionality for multiple features beforehand
* Before anything, we need to think about Normalization or Standardization
* Diagram 17-knn: Huge gap in Normalization, so we go for Std Deviation
* Diagram 18-standardization
* Checkout playground.js 
    * tf.moments for numbers tensor gives a variety of keys including mean and variance
    * Std deviation is obtained by square root of variance
    * By providing axis 0 as second argument, we get our desired result of column-wise mean and variance

### Standardization directly inside knn function
* First do standardization for predictionPoint
* Then for all the features
* It is not optimized yet as we calculate mean and variance of features every time we change the testPoint

### Debugging Calculations: Inspecting in Node 
* node --inspect-brk index.js
    * brk for break on the very 1st line of the code
* Then on Chrome navigate to about:inspect
* Click on Inspect
* Progress code to knn function by Stepping over
* Click on line number to add breakpoint
* Click on Resume Script Execution to jump to breakpoint
* Then on console, you can debug each variable
    * predictionPoint.print()
    * features.shape
    * scaledPrediction.print()
* By debugging each print of features till pow, we see that the values are close to zero and don't have any large values
* This shows that we haven't written any bad code

### Ways to increase accuracy
* Do analysis and alter the value of k
* Add more features in the dataColumns(sqft_living)
* Now adding sqft_living we have Error percentage of under 20% which is not bad

# Linear Regression
* Diagram Link: https://www.draw.io/#Uhttps://raw.githubusercontent.com/StephenGrider/MLCasts/master/diagrams/05/diagrams.xml
* Diagram 02-linear: Introduction to Linear Regression
* Goal of Linear Regression: Diagram 05-relation
    * Mathematical equation between Independent and Dependent variable
* Diagram 04-linear: Predict the eqn
* Diagram 06-relation: More than 1 Independent variable
* Google SpreadSheet: Select both Loft Size and House Price and **Insert** a Chart
    * Add Trendline
    * Use Equation and volla you get the Equation
    * Limited to Single Independent variable with Single Dependent variable
* Diagram 3-linear: Methods of Solving Linear Regression
    * We are gonna use Gradient Descent
* Diagram 4-lin
* Diagram 5-344: Really bad guess
* Some equation to tell how wrong we were
    ### Mean Squared Error(MSE) equation: Diagram 07-how
    * Diagram 8-sum
    * Guess - Actual is the dotted line distance in Diagram 06-guess and n is the number of data points
    * Diagram 9-math: Calculation of Mean Squared error
    * Running *Mean Squared Error* by **itself** is not useful
    * It needs to be compared to another guess or calculation

    #### Second calculation: Diagram 10-better
    * Mean squared error comparisons: Diagram 11-better
    * Since the value is significantly lower than the previous one, this new equation is significantly better than the previous one
    * It is unlikely MSE is ever gonna be exactly 0
    * But we can say, the lower our MSE is, the better our guess is
* Diagram 12-guess: **Summarize MSE**
    * (House Price) = m * (LotSize) + b
    * 'm' and 'b' will be as correct as they can be when MSE is as low as possible

### Guessing Coefficients with MSE
* Diagram 20-b: Just focus on b for a moment
    * (House Price) = m * (LotSize) + b
* Diagram 19-b
* ![png of MSE vs guess for b](https://github.com/nuthanc/png-github/blob/master/MSE-vs-Guess-for-b.png)
* Code snippet for getting optimum value of b: https://github.com/nuthanc/png-github/blob/master/mse-vs-b-code.png
* Issues with the above approach of getting optimum value of b: Diagram 21-gu
    * Don't know the possible range of b
    * Don't know a step size for incrementing b
    * Huge computational demands when adding in more features

### Observation Around MSE
* Diagram 23-d: MSE vs b shape like a Parabola(where it decreases, reaches a optimal point and then increases again)
* Diagram 24-c: Tiny portion of the chart of MSE vs b
    * The more vertical the line is, the guess is bad
    * When it gets flat, it is a good guess
    * Diagram 26: Next Guess
    * The steepness of the line tells you how far away you are from the Optimal Guess
    * Diagram 27: When the line is flat, we have our optimal guess
    * Diagram 28: When the line slopes to the left, 'b' must be less and when sloping to the right, 'b' must be greater
    * Diagram 29: Knowing **slope** is very valuable

### Derivatives
* Diagram 30-slope
* Diagram 32: The derivative of an equation (e.g: y=x^2+5) gives a new equation that tells the slope at any location
* To get derivative online: https://www.wolframalpha.com/
    * In searchbar give, derivative x^2+5
* Diagram 33-c
* Demonstration: Diagram 31-c for x=-5

### Gradient Descent in Action
* Diagram 33-mse: How Wrong Were we?
    * Get slope by taking derivative of MSE
    * Assuming m=0
* **Diagram 34-descent: Gradient Descent**
* Link to spreadsheet: goo.gl/f4KdZj
    * My excel link: https://docs.google.com/spreadsheets/d/1uWN6qSM6NovbOPjOmFTwvKooxj-9fmgz7rAguVkF-lw/edit#gid=0
    * Get values automatically in spreadsheet by typing =F2*B11
    * $ is for absolute reference so that even if that cell moves around, you can use that value
        * =F3*$B$11
    * How much to Adjust B - Value of B
        * =E3-G3
    * Referencing https://github.com/nuthanc/png-github/blob/master/MSE-vs-Guess-for-b.png
        * When b is 0, then MSE is 60000 and from the diagram we see that the slope goes downward
        * So for optimum value, b must be greater than 0
    * The same process of calculating slope with the new value of b is done again and then b is adjusted
        * To calculate the same thing, select the cell at the corner and drag it down
        * Select multiple cells and drag it down at once
    * But we are updating b in very small steps
    * So, update Learning rate to 0.01, 0.1, and finally 0.4
    * In 0.4 learning rate, we get to optimum value of b in very less steps