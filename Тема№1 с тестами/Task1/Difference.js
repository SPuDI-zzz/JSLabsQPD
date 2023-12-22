function MyDifference(arrA, arrB) {      
    const resultArray = arrA.filter(elementOfBiggerArr => 
        !arrB.some(element => MyIsEqual(element, elementOfBiggerArr))
    );

    return resultArray;
}
