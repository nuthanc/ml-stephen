#### Lodash and Tensorflow
* Diagram link: https://www.draw.io/#Uhttps://raw.githubusercontent.com/StephenGrider/MLCasts/master/diagrams/02/diagrams.xml
* Advantages and Disadvantages of Lodash:Diagram 30features
* Tensorflow: Diagram 31-tf
* Tensorflow Plan: Diagram 32-plan
* Diagram 33-algs: Some question
    
#### Tensorflow as a library
* Doc link: js.tensorflow.org and checkout API 
* Diagram link: https://www.draw.io/#Uhttps://raw.githubusercontent.com/StephenGrider/MLCasts/master/diagrams/03/diagrams.xml
* Diagram 06-tf: Tensorflow's job
* Tensor: Core unit in TF
    * JS object that wraps a collection of numbers
    * Diagram 2: Possible tensors
* Diagram 3: Dimensions
    * Example of 3d : Diagram 06-ed
* Shape: Diagram 3-shape
    * Diagram 4-trick: Trick to understand shape
    * One time length for each dimension
    * Example
        * Diagram 4-shape
        * Diagram 6-shape
        * Diagram 7-shape
* Why is Shape important: Diagram 4-struct
    * Key is **Row, Column**
* Shape of 2d Tensor: Diagram 05-mem

#### Tensorflow exercise done in playground.js
* Diagram 09-add,10-sub: Element wise operation
* If Shapes don't match: Diagram 11-sha
    * Operation can still be done but there are some rules
* Diagram 12-2d: 2d Operations
* Diagram 17: Different shape operation can still be done
    * This is called **Broadcasting**
* Diagram 19-bro: Rule for Broadcasting
    * Shapes are equal
    * Or one of them has Shape of 1
* Examples of Broadcasting
    * Diagram 20-r
    * Diagram 18-b
    * Diagram 21-b: Can still be done as they are equal and one of them is 1
    * Diagram 22-b: Case where broadcasting doesn't apply
        * It's because 3!=2
* Chrome console 
    * Type tf and Enter
    ```javascript
    const data = tf.tensor([1,2,3,4])
    // data and then Enter, you'll get an ugly looking object
    // Do data.print() to see what is inside data
    ```
##### Access to Tensor data
* print method for debugging purposes
* get method as shown in playground.js
* slice method: playground.js and Diagram 25-s
* There are no ways to set an existing tensor, therefore new tensor should be made
* Referencing Diagram 25-slice: Takes 2 arguments
    * Start index
    * Size: Array of Size and Width
* Instead of using shape, -1 is used
    * Here -1 gives all records in the particular dimension
    * Most of the times we change only the column in the 1st argument of slice. Rest all remains the same

##### More operations
* Diagram 27-axis: Concatenation
* Concat method has 2nd argument to specify which way to concatenate
* Default 2nd argument is 0
* Diagram 28-axis: More about 2nd argument of concat
* Diagram 30: How to remember the axis system
* Diagram 31: Athlete jump example
* Diagram 32: Jump analysis
    * Example shown in playground.js
    * sum method 1st argument
        * 1 for axis-1
        * 0 for axis-0
    * concat cannot be used because sum returns a 1d tensor
    * sum method 2nd argument for keepDimension
        * true for preserving dimensions
    * Diagram 32,32: Why axis 1 and not 0
    * Alternate method to sum 2ND DIMENSION
        * expandDims: 1st argument for axis
    
#### knn with tensorflow
* Diagram link: https://www.draw.io/#Uhttps://raw.githubusercontent.com/StephenGrider/MLCasts/master/diagrams/04/diagrams.xml
* Diagram 06-task: Steps
* Diagram 04: Map
    * If New House around some location, how much should that cost
* Diagram 05: Regression problem
* Diagram 03: knn(steps to be followed)
    * Prediction point: Maybe latitude and longitude
* Diagram 01: Data depicting features and labels and Prediction point
* Diagram 07: Data structure used
    * sum, multiply of tensors work on all elements
    * So we don't want to modify the label
* Data in playground.js
* Diagram 08: Next step
* Implementation in tf:
    * Distance(sub): Diagram 02-dist
    * Power(pow): Diagram 09-sqr
    * Sum across axis 1: Diagram 10-sum
    * Sqrt: Diagram 11-sqrt



