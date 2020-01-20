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
        * Diagram 11: With only one independent feature
        * If the ball is dropped at pos 300, then look for positions which are near, in the table it's 275 and 325
        * Diagram 15,16,17,18
        * Diagram link for lodash: https://www.draw.io/#Uhttps://raw.githubusercontent.com/StephenGrider/MLCasts/master/diagrams/02/diagrams.xml
        * Diagram 00: lodash docs and playground link
        * Some lodash methods we frequently use are:
            * sortBy
            * _.sortyBy(numbers, function(row){return row[1]})
            * Or using ES2015 syntax, _.sortyBy(numbers, (row)=> row[1])
            * And map function to extract only the second elements
            * _.map(sorted, row => row[1])
            * chain method and end it with value()
            * example of chain
                * _.chain(numbers).sortBy(row => row[1]).map(row => row[1]).value()
            * As seen here, no need to pass numbers to all the other functions as it passed implicitly
    * Implementation of knn
        * Diagram link: https://www.draw.io/#Uhttps://raw.githubusercontent.com/StephenGrider/MLCasts/master/diagrams/02/diagrams.xml
        * knn function
            * Diagram 3: steps with bounciness and size ignored and subtracted value from 300 and bucket number is on RHS
            * Diagram 5: sortBy 
            * Diagram 6: slice : for example get elements from 0th index upto kth index but not k
            * Code src link: https://www.draw.io/#G1jF0ZgYBj9219rjeEfNEwx4RxGRl0K8mi
            * Diagram 7 to 12: Other utility methods used
            * Diagram 13: Interpreting bad results
            * Diagram 14: Need to have some way to get accuracy not only at dropPoint 300 but any drop point
        * Diagram 15: Finding an ideal K
            * Creating a training set and test set
            * knn from training set is used to predict the test set's bucket and check if the results match
            * If the results match, then it is kept, else discarded
        * Writing splitDataset function inside score.js to split the data into test set and training set
            * The data needs to be shuffled because if dropped manually from left to right, then if we take the left half as training set and right half as test set, we are going to get some ridiculous results
        * Passing testSet's bucket to distance along with trainingSet's bucket
        * runAnalysis function
            * In runAnalysis, for each testSet predicting the bucket with the help of all the elements in the training set
            * Refactor for loop within runAnalysis using lodash method
                * Use chain method
                * filter method
                    * If {} are used, then return knn should be done
                    * Since {} is removed, it is automatically returned
                * let numberCorrect = 0;\
                    for(let i = 0; i < testSet.length; i++) {\
                        const bucket = knn(trainingSet, testSet[i][0]);\
                        if (bucket === testSet[i][3])\
                        numberCorrect++;\
                    }
                * The above can be refactored to the below:
                * const accuracy = _.chain(testSet)\
                    .filter(testPoint => knn(trainingSet, testPoint[0]) === testPoint[3])\
                    .size()\
                    .divide(testSetSize)\
                    .value()
            * Picking Optimal K Value
                * Using lodash range method instead of for loop
                * All the below are done using 10 balls at 10px spacing,i.e., drop a bunch at various spots
                * Delete the hard-coded const k=3
                * Use forEach for different values of k
                * Increasing testSetSize to 50 resulted in 0.28,0.14 etc
                * Keep changing k and testSetSize until a get a good prediction
                * Let's now change testSetSize to 100 and k to 20
                * Observations: For k around 7, accuracy remains stable or increasing
                * Let's take the sweet spot of 10
                * Let's now try **1 ball** every **1px**
                * Now the accuracy drops compared to previous one.
                * Here too, check the sweet spot. For this problem, 10 seems fine
    * Tuning
        * Diagram link: https://www.draw.io/#Uhttps://raw.githubusercontent.com/StephenGrider/MLCasts/master/diagrams/02/diagrams.xml
        * Diagram 13
        * Add more features
        * Taking into account multiple variables in addition to dropPosition
        * Diagram 17: knn with multiple variables
            * The only step that changes is the **distance calculation**
            * Diagram 19: Taking only dropPosition into account
                * Here Prediction point is like Test point
                * Take all the Training set balls and drop them in the Arrow
                * Take the Prediction point also and drop it in the Arrow
                * Whichever is near to it, if k=1, then the nearest one's bucket is taken
            * Diagram 16: Taking bounciness also into account
            * Diagram 19: Use pythagorean theorem
            * Diagram 20: Pythagorus theorem implementation
                * Difference in Drop Position squared
                * Difference in Bounciness squared 
                * Add them and take Square root
            * Diagram 21: Adding ball size as well
                * Need to add C term as well, where C is the difference in the Ball Size metric
            * As more variables are added, we put more the difference squared term
    * Refactor of knn and distance function to work with any arbitrary number of features
        * distance function
            * pointA and pointB now might be an array like [300, .5, 16]
            * Example:
                * const pointA = [1,1]; const pointB = [4,5];
                * _.chain(pointA).zip(pointB) gives [[1,4],[1,5]]
                * Then use .map(pair => (pair[0] - pair[1]))
                    * Instead of using pair[0] and pair[1]
                    * Destructure using ES2015 syntax
                    * .map(([a,b]) => (a-b) ** 2)
                * .sum()
                * .value() ** 0.5;
                * We can use the above code for any number of parameters in pointA and pointB
            * Use the above code in distance function
        * Example of more lodash functions
            * const point = [350, 0.5, 16, 4]
            * _.initial(point) returns [350, 0.5, 16, 4]
            * _.last(point) returns 4
            * We could have used pop method of point, but it modifies point array
            * We don't want this as we might need to reference original point again
        * point in distance function's argument refers to testSet's dropPosition. Refer Diagram 15
            * Now we don't want _.initial(point) as label might not be provided for custom features(Points of our own)
            * The above is in knn function
            * But we can modify point in the runAnalysis itself
    * Try again with the analysis
        * For some initial k, the accuracy was increased
        * Bounciness factor is not getting added as appropriately needed
        * Diagram 20: Gap between Bounciness and DropPosition in not the same
        * Diagram 21 shows the actual distance
        * According to this, Point B in Diagram 20 is not the closest one as seen in Diagram 21
        * This means that the contribution from the Distance is a huge factor than Bounciness
        * Diagram 23: Bounciness having negligent effect
    * Scaling: Diagram 24 : 
        * Strategies to get good prediction accuracy 
            * Normalization: 
                * Consider 1 feature at a time
                * Between 0 and 1
            * Standardization: 
                * Similar to Normalization
                * But base everything around the value of 0
                * Normal distribution 
        * For this problem, let's consider Normalization
            * Diagram 27-minmax: 
                * Take one feature at a time like ballDrop
                * Diagram 28: Example 
                * playground.js Example
            * Diagram 25 and 26: No change in the outcome with and Without Normalization 
        * minMax function in score.js
            * featureCount: How many features we want and we don't want to add everything as the last column is the label
            * We are cloning outputs array to data, as we don't want to modify the outputs array
            * Nested for loop for Normalization
                * The outer loop for columns and the inner for rows
                * column is for column extraction which will be array of numbers
            * For checking this, go to Console of Chrome
                * Shift Enter in Console without processing of line to get new line
        * Modify runAnalysis function to use minMax Scaling
    * After scaling, we find that accuracy drops to even 0.08 which is less than Random guessing which 0.1
    * Diagram 27-feat: 
        * Drop Position change is Predictable
        * Ball Bounciness change is Non-predictable
            * It doesn't aid us
            * Not considering this is a good idea
    * Feature Selection: Deciding **which feature** to include in analysis
        * Diagram link: https://www.draw.io/#Uhttps://raw.githubusercontent.com/StephenGrider/MLCasts/master/diagrams/02/diagrams.xml
        * Diagram 29-knn: Analysis based on running only 1 feature set and comparing it
        * Fix k=10 and then make changes for feature in runAnalysis
        * Move splitDataset within range function
        * data in runAnalysis will be having same structure as in Diagram 29-knn
        * splitDataset for data and only 1 feature
        * testPoint[3] is changed to 
        * After dropping 10 every 10, analyze
            * For feature of 0(dropPostion) accuracy is 0.26
            * For feature of 1(bounciness) accuracy is 0.13
            * For feature of 2(ballsize) accuracy is 0.11
        * Ballsize and bounciness may change the result but do not allow us to accurately predict the results
* End of Introduction: Diagram 32-boot

