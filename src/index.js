
exports.min = function min(array) {
    if (array === undefined || array.length === 0) return 0;
    return Math.min.apply(null, array);
}

exports.max = function max(array) {
    if (array === undefined || array.length === 0) return 0;
    return Math.max.apply(null, array);
}

exports.avg = function avg(array) {
    if (array === undefined || array.length === 0) return 0;
    let res = 0;
    for (let i = 0; i < array.length; i++) {
        res = (array[i] + res);
        // console.log(res.toFixed(1));
    }
    return ((res / array.length).toFixed(2));
}
// console.log(avg([34,6,11,33,0,-10,10,3,22,-18,6,4,-21,32,23,18,-33,23,0,-1]));
