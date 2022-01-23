function extractDecreasing(array){
    
    let newArr = [];
    let maxNum = 0;

    for (let i = 0; i < array.length; i++) {
        let currNum = array[i];

        if(currNum >= maxNum)
        {
            maxNum = currNum;
            let newArray = newArr.push(currNum);
        }
    }

    return newArr;
    //console.log(newArr.join('\n'));
    //console.log(arr.join(' '));

}

extractDecreasing([1, 3, 8, 4, 10, 12, 3, 2, 24]);


