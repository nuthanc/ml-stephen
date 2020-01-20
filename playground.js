const points = [200, 150, 650, 430];

const min = _.min(points);
const max = _.max(points);

_.map(points, point => {
    return (point - min) / (max - min); // Output: [0.1,0,1,0.56]
})

