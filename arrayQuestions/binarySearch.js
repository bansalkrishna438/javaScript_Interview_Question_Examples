function binarySearch(arr, k) {
    let low = 0;
    let high = arr.length - 1;

    for (; low <= high;) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === k) {
            return mid;
        } else if (arr[mid] < k) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1; 
}


const arr = [3,4,5,6,7,9,81,3,54,67,32,90]
let  k = 90
console.log(binarySearch(arr,k));
