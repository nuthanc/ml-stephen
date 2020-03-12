# ml-stephen
Diagram link: https://www.draw.io/#Uhttps%3A%2F%2Fraw.githubusercontent.com%2FStephenGrider%2FMLCasts%2Fmaster%2Fdiagrams%2F00%2Fdiagrams.xml

Diagram order:
* Diagram 1: ML example
* Diagram 4: Analyst who predicts flood damage cost based on amount of rainfall
* Diagram 12: Problem solving process (Main)
* Diagram 14: Independent variable(feature) and Dependent variable(label)
* Diagram 13: Gathering data from multiple sources and aggregating it
* Diagram 15: Decide on type of output you are predicting is for **narrowing down the algorithm**
    * Classification: Value of labels belong to a discrete set. Example in Diagram 16
    * Regression: Value of labels belong to a continuous set. Example in Diagram 17
* Diagram 18: Entire walkthrough of example
* **Diagram 19**: Problem Solving process

### Checkout README of plinko folder for Plinko App

## Linear Regression
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