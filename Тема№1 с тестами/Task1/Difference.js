function MyDifference(arrA, ...arrB) {  
    const set = new Set([].concat(...arrB));
    const resultArray = arrA.filter(element => 
        !set.has(element)
    );

    return resultArray;
}
