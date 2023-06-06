const groupBy = (arr, callbackFn) => {
    const dictionary = {}

    arr.forEach(item => {
        const resultAfterCb = callbackFn(item)
        dictionary[item] ? dictionary[item].push(resultAfterCb) : dictionary[item] = [resultAfterCb]
    })

    return dictionary
}

groupBy([5.5, 2.2, 3.7], Math.floor)
