const stabArray = [1,4,5,8,5,1,2,7,5,2,11]

function linearSearch(array: number[], item: number): number | null {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }

    return null
}

console.log(linearSearch(stabArray, 11))
// O(n)
