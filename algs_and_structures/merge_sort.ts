const arr = [1,4,5,8,5,1,2,7,5,2,11]

const merge = (arrFirst: number[], arrSecond: number[]) => {
    const arrSort = [];
    let j = 0
    let i = j
    // сравниваем два массива, поочередно сдвигая указатели
    while (i < arrFirst.length && j < arrSecond.length) {
        arrSort.push(
            (arrFirst[i] < arrSecond[j]) ?
                arrFirst[i++] : arrSecond[j++]
        );
    }
    // обрабатываем последний элемент при разной длине массивов
    // и возвращаем один отсортированный массив
    return [
        ...arrSort,
        ...arrFirst.slice(i),
        ...arrSecond.slice(j)
    ];
};

const mergeSort = arr => {
    // Проверяем корректность переданных данных
    if (!arr || !arr.length) {
        return null;
    }
    //Если массив содержит один элемент просто возвращаем его
    if (arr.length <= 1) {
        return arr;
    }
    // Находим середину массива и делим его на два
    const middle = Math.floor(arr.length / 2);
    const arrLeft = arr.slice(0, middle);
    const arrRight = arr.slice(middle);
    // Для новых массивов снова вызываем сортировку,
    // сливаем их и возвращаем снова единый массив
    return merge(mergeSort(arrLeft), mergeSort(arrRight));;
};
