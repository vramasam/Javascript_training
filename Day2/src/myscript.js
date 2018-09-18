var arr = [4, 2, 5, 8, 1, 9];
// for each example
arr.forEach(function (value, index, array) {
    // console.log(arguments.length);
    // console.log(arguments[0], arguments[1], arguments[2]);
    console.log("value : " + value);
    console.log("using index : " + array[index]);
});
// modifier
var modifier = arr.map(function (v, i, arr) {
    return v * 2;
});
console.log("Array modifier : " + modifier);
// filter example
var byThree = arr.filter(function (val, i, arrValue) {
    return val % 3 === 0;
});
console.log("filter : " + byThree);
// Every example
var everyEx = arr.every(function (val, i, arr) {
    return val > 5;
});
console.log("filter : " + everyEx);
// Some example
var someEx = arr.some(function (val, i, arr) {
    return val < 5;
});
console.log("some : " + someEx);
// reduce example
var total = arr.reduce(function (ival, v, i, arr) {
    return ival + v;
});
console.log("reduce : " + total);
// reduce right example(start the count from right)
var fromRightTotal = arr.reduceRight(function (ival, v, i, arr) {
    return ival + v;
});
console.log("right total : " + fromRightTotal);
// finding the index from start
var index = arr.indexOf(5);
console.log(index);
// finding the index from end
var index1 = arr.lastIndexOf(9);
console.log(index1);
