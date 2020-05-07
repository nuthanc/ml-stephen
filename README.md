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
    * Use Equation and voila you get the Equation
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
* Diagram 33-mse: How Wrong Were we?(Slope equation)
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

### Quick Review
* Diagram Link: https://www.draw.io/#Uhttps://raw.githubusercontent.com/StephenGrider/MLCasts/master/diagrams/06/diagrams.xml
* Diagram 04-why: **Quick summary of Gradient Descent**
* Diagram 05-lr: If Slope is negative, the value of b must be higher
    * when the slope becomes too small, that's the value of b we should take and no more iterations are required
* Common Question: Diagram 01-hwys

### Why Learning Rate?
* Why are we using *slope*?
    * Meaningful data: **It gives the direction**
    * - for increasing the value of b
    * + for decreasing the value of b
    * The *initial slope adjustments are very high* but when it comes closer to *optimum value of b, adjustments are very less*
* Without using learning rate and using slope only for direction(+ve or -ve), using countdown as 100 and divide that by 1.5 each step
    * If 100 is at H2, in excel
        * =H2/1.5
    * To adjust b, the condition in excel
        * =if(F2 > 0, 1, -1) * H2, where H2 is the countdown
* Since **slope gives the direction and also has magnitude**, why can't we use only that and **not learning rate** along with it
    * If slope is 488 and b is 1 and from this Diagram 5
    * If we update b with only slope
        * 1-(-488) = 489
        * We overshoot the optimum value of b and we never converge
* **Learning rate** is used to tame the value of the Adjustment value of b
    * Its value depends on the nature of the Dataset we are working on
* Link Chart: goo.gl/f4KdZj
    * For MSE vs b
    * Try with learning 0.5, and we see that we obtain Optimal value of b very quickly

### Other 2 Common Questions
* Diagram Link: https://www.draw.io/#Uhttps://raw.githubusercontent.com/StephenGrider/MLCasts/master/diagrams/06/diagrams.xml
* Diagram 01-hwys
* https://docs.google.com/spreadsheets/d/1uWN6qSM6NovbOPjOmFTwvKooxj-9fmgz7rAguVkF-lw/edit#gid=528303167
* Chart sheet in the above link
* Why worry about derivatives? Just calculate MSE twice and compare two values
    * Calculating the derivative is same as calculating MSE twice
    * It comes with the added advantage of calculating only once
* Diagram 3-zero: The other question of setting the slope to zero
    * We made tremendous simplication by ignoring the value of m
    * There are 2 unknowns in the equation

### Gradient Descent with Multiple Terms
* Diagram 09-slope
* **Flow for Gradient Descent now**: Diagram 10-flow

### Multiple Terms In Action
* My spreadsheet link: https://docs.google.com/spreadsheets/d/1uWN6qSM6NovbOPjOmFTwvKooxj-9fmgz7rAguVkF-lw/edit#gid=0
* M+B empty sheet
* Enter the same equation found in Diagram 09-slope for finding slope of m and b
* We see very large numbers bouncing back and forth for learning rate of 0.01
* So we'll put learning rate of 0.0000001
    * For this, we see that the value of m seems to converge but the value of b never changes
    * This happens when we don't scale the value of features
    * So need to apply min-max or std-deviation method
* Applying min-max, so all of the features get values between 0 and 1
* Check M+B completed sheet for the changes
* From observation, we see that we had to change learning rate to suit to our taste
* But in reality, we just keep a small arbitrary value of learning rate and just keep running Gradient descent for many iterations

## Implementation of Gradient Descent
* Checkout regressions folder

### Loading CSV files
* New project of loadCSV