
var sum = function (array) {
    var sums = 0;
    for (var i = 0; i < array.length; i++) {
        sums = sums + array[i];
    }
    return sums;
};
var equal = function (array) {
    var ar1 = [array[0]];
    var ar2 = [array[1]];
    for (var i = 2; i < array.length; i++) {
        var sum1 = sum(ar1);
        var sum2 = sum(ar2);
        if ( sum1 < sum2 ) {
            ar1.push(array[i]);
        } else {
            ar2.push(array[i]);
        }
    }
    var obj = {ar1,ar2};
    return obj;
}
var array3 = equal ([1,12,3,5,29,100,230]);
console.log (array3)