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