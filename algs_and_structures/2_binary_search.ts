const array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let count = 0

function binarySearch(array, item) {
    let start = 0
    let end = array.length
    let middle;
    let found = false
    let position = -1
    while (found === false && start <= end) {
        count+=1
        middle = Math.floor((start + end) / 2);
        if (array[middle] === item) {
            found = true
            position = middle
            return position;
        }
        if (item < array[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
    return position;
}

function recursiveBinarySearch(array, item, start, end) {
    let middle = Math.floor((start + end) / 2);
    count += 1
    if (item === array[middle]) {
        return middle
    }
    if (item < array[middle]) {
        return recursiveBinarySearch(array, item, start, middle - 1 )
    } else {
        return recursiveBinarySearch(array, item, middle + 1, end )
    }
}

        //отсортированный массив                     
function binarySearchWithPointers(array, search) {
         let left = 0
         let right = array.length - 1
         
         while (left < right) {
            const mid = Math.floor((left + right) / 2)

            if (arr[mid] >= search) {
                right = mid
            } else {
                left = mid + 1
            }
          }
     
        return arr[right] === search ? right : -1 
}

console.log(recursiveBinarySearch(array, 0, 0, array.length))
console.log(count)
//time O(log2n)
