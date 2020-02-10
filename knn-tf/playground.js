const numbers = tf.tensor([
    [1, 2],
    [3, 4],
    [5, 6]
]);

// We do column-wise operation
const {mean,variance} = tf.moments(numbers);
// We get single numbers for mean and variance instead of obtaining 2 from each column
const { mean, variance } = tf.moments(numbers,0);

numbers.sub(mean).div(variance.pow(0.5))