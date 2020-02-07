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