function qsort(arr) {
    if (arr.length == 0) {
        return [];
    }
    var left = [];
    var right = [];
    var pivot = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return qsort(left).concat(pivot, qsort(right));
}
var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = Math.floor(Math.random() * 100 + 1);
}
console.log(a);
//console.log();
console.log(qsort(a));