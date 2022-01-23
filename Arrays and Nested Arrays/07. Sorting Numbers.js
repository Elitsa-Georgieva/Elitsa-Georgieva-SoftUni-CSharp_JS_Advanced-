function sortingNums(array){
    let resultArr = [];
    array = array.sort((a,b) => a-b);

    while(array.length !== 0){
        resultArr.push(array.shift());
        resultArr.push(array.pop());
    }

    //console.log(resultArr.join('\n'));
    return resultArr;
}

sortingNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);


