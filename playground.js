const points = [200, 150, 650, 430];

const min = _.min(points);
const max = _.max(points);

_.map(points, point => {
    return (point - min) / (max - min); // Output: [0.1,0,1,0.56]
})

/* 
-----------------------------------------------------------------
Tensorflow exercise
-----------------------------------------------------------------
*/
const data = tf.tensor([1,2,3]) //Create a tensor object
data.shape //To get the shape of the object
const otherData = tf.tensor([4,5,6])

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

