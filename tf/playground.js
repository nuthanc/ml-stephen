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
