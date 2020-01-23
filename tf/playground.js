const data = tf.tensor([1, 2, 3]); //Create a tensor object
data.shape; //To get the shape of the object
const otherData = tf.tensor([4, 5, 6]);

data.add(otherData); //Element wise operation
data.sub(otherData);
//2d exercise
const data = tf.tensor([
  [1, 2, 3],
  [4, 5, 6]
]);
const otherData = tf.tensor([
  [4, 5, 6],
  [1, 2, 3]
]);
data.sub(otherData);
// Output:
[
  [-3, -3, -3],
  [3, 3, 3]
];

//Tensorflow access to data
const data = tf.tensor([10, 2, 3, 4]);
data.get(0); //10 Access to first element
const data = tf.tensor([
  [1, 2, 3],
  [4, 5, 6]
]);
data.get(0, 0); //1  1st is row, 2nd is column
// To get 5
data.get(1, 1);
// To access multiple values
const data = tf.tensor([
  [1, 2, 13],
  [4, 5, 6],
  [10, 32, 3],
  [4, 45, 36],
  [11, 32, 33],
  [40, 25, 36],
  [13, 22, 43],
  [44, 55, 6],
  [12, 26, 63],
  [44, 59, 6]
]);
data.slice([0,1], [10,1]); //data.slice([0,1], [data.shape[0], 1])
// Alternatively data.slice([0,1], [-1, 1])

// data.slice([4,1],[6,1])
// Output: [[32], [25], [22], [55], [26], [59]];

//Concatenation example
const tensorA = tf.tensor([
  [1, 2, 3],
  [4, 5, 6]
]);
const tensorB = tf.tensor([
  [4, 5, 6],
  [1, 2, 3]
]);
tensorA.concat(tensorB)
// Output: [[1, 2, 3], [4, 5, 6], [4, 5, 6], [1, 2, 3]]
tensorA.concat(tensorB,1)
// Output: [[1, 2, 3, 4, 5, 6], [4, 5, 6, 1, 2, 3]]

//Jump Analysis
const jumpData = tf.tensor([
  [70, 70, 70],
  [70, 70, 70],
  [70, 70, 70],
  [70, 70, 70]
]);
const playerData = tf.tensor([
  [1, 160],
  [2, 160],
  [3, 160],
  [4, 160],
])
jumpData.sum() //840
jumpData.sum(1) //For axis 1, [210,210,210,210]
jumpData.sum(0) //For axis 0, [280,280,280,280]
jumpData.sum(1, true).concat(playerData, 1); 
/* Output
[
  [210, 1, 160],
  [210, 2, 160],
  [210, 3, 160],
  [210, 4, 160]
];
*/
jumpData.sum(1).expandDims() 
// [[210, 210, 210, 210],] and shape is [1,4]
jumpData.sum(1).expandDims(1);
// [[210], [210], [210], [210]] and shape is [4,1]
jumpData
  .sum(1)
  .expandDims(1)
  .concat(playerData, 1); 
// [
//   [210, 1, 160],
//   [210, 2, 160],
//   [210, 3, 160],
//   [210, 4, 160]
// ];


// knn with tensorflow
const features = tf.tensor([
  [-121, 47],
  [-121.2, 46.5],
  [-122, 46.4],
  [-120.9, 46.7]
]);

const labels = tf.tensor([
  [200],
  [250],
  [215],
  [240]
]);

const predictionPoint = tf.tensor([-121, 47]);

features
.sub(predictionPoint)
.pow(2)
.sum(1)
.pow(0.5)