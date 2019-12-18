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

## App Overview: Plinko
Diagram link: https://www.draw.io/#Uhttps://raw.githubusercontent.com/StephenGrider/MLCasts/master/diagrams/01/diagrams.xml
* App path: MLKits/plinko/index.html
* Open it in MAC using: open index.html

Diagram order:
* Diagram 20: Goal of the application,i.e. which bucket does it fall based on from where it is dropped

#### Problem solving process:
* Identify **data that is relevant** to the problem, in the Plinko app's case, 
    * Where the ball is being dropped(Drop Position)
    * Which Bucket the ball falls into
    * Range of Ball Bounciness
    * Range of BAll Size
    * Diagram 8: Features and Labels
    * Features:
        * Drop Position
        * Ball Bounciness
        * Ball Size
    * Labels:
        * Bucket a ball lands in
* Assemble data related to the problem
    * How datasets are stored in js
        * Array of Objects(Dictionaries): Diagram 20
        * Array of Arrays: Diagram 21
            * In this approach, index represents the **features**
    * Record data from the balldrop
        * Finally some code
        * onScoreUpdate is the function which gets called when the ball falls into a bucket
        * Made some updates in score.js
* **Type** of output
    * It's a classification problem as it has a finite set of buckets
    * Diagram 21: Classification
* Pick an algorithm for classification
    * K-Nearest Neighbor(knn) algorithm: Diagram 13
    * Diagram 14: Birds of a feather flock together
    * Diagram 9, 10, 11: More about knn
    * Looking at other observations which are very close in nature, predict the output
    * Diagram 14: Inner workings of knn