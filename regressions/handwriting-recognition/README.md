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
