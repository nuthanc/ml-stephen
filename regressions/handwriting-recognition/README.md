### Handwriting Recognition
* Diagram link: https://app.diagrams.net/#Uhttps://raw.githubusercontent.com/StephenGrider/MLCasts/master/diagrams/13/diagrams.xml
* Diagram 5-mn:
* Diagram 6-mn:

### Greyscale Values
* Diagram 13-image:
* Diagram 11-gs:
* Diagram 7-pixels:

### Many Features
* Diagram 9-vals:
* Diagram 12-features:
* Diagram 13-fea:
* Diagram 6-mn:

### Flattening Image Data
* Copy multinominal to Handwriting and clear up index.js after the require statements
* Require mnist
* Training image data from 0 to 1 non-inclusive
* mnistData.images.values are our pixel values
* It's an array of arrays
* Each inner array denotes a row of pixels
* But we don't to work with a Grid, so we need to flatten it out
* 784 elements in total
* Load up 10 images using (0,10) as arguments to mnist.training

### Encoding Label Values
* Diagram link: https://app.diagrams.net/#Uhttps://raw.githubusercontent.com/StephenGrider/MLCasts/master/diagrams/12/diagrams.xml
* Diagram 7-t:
* Diagram link: https://app.diagrams.net/#Uhttps://raw.githubusercontent.com/StephenGrider/MLCasts/master/diagrams/13/diagrams.xml
* Diagram 14-labels:
* Log out our values by mnistData.labels.values

### Implementing an Accuracy Gauge
* Diagram 6-mnist:
* Increase training to 1000 images

### Unchanging Accuracy
* Increase 1000 to 5000
* Iterations to 20
* Changing parameters and accuracy not showing any change indicates something is very wrong in the algorithm

### Debugging the Calculation Process
* node --inspect-brk index.js
* Open Chrome and navigate to chrome://inspect
* Click on Inspect
* Breakpoint at regression.train
* Click on Blue arrow on top RHS
* Down Arrow to Step into the function
* Step Over till gradientDescent in the train method
* Then in console, type the variable to get its value
```js
batchQuantity
this.labels.print()
this.weights.print()
this.features.print() //The problem is here, where we see it's not a number(NaN)
```
* So let's start debugging at processFeatures
* Close the debugger
* Add **debugger** statement in processFeatures
* Run the same node inspect command
* Unset the previous breakpoint and play and it'll land at processFeatures
* In debugger console
```js
features.print()
//All 0's in top and bottom which makes sense from Diagram 9-val
//Step over to standardize method
//Step into standardize method
mean.print() and variance.print()
features.sub(mean).div(variance.pow(0.5)).print()
//The above line is causing the problem
```
* Diagram link: https://app.diagrams.net/#Uhttps://raw.githubusercontent.com/StephenGrider/MLCasts/master/diagrams/13/diagrams.xml
* Diagram 9-val

### Dealing with Zero Variances
* Diagram 15-options: Possible solutions
```js
const features = tf.tensor([
  [0, 20, 40],
  [0, 20.5, 80],
  [0, 20.3, 90]
])

const {mean, variance} = tf.moments(features, 0);
console.log(variance) or just variance in browser
//Browser we won't see this issue, as this is a different environment than Node
//Browser will automatically turn 0 to 1

//Workaround
variance.cast('bool').logicalNot().cast('float32')

```

### Backfilling Variances
* Remove debugger within processFeatures
* Add filler code in standardize function
* Now accuracy is 0.87 when index.js is run

### Handling Large Datasets
* Easiest way to increase our accuracy is to increase the number in our training data set
* Let's try loading all 60000 images
* Also increase testing pool to 1000