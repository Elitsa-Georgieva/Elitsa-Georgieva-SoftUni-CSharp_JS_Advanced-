function rotateAndAdd(input1, input2){
    let arr = input1;
    let numOfRotations = input2;

    for (let i = 0; i < numOfRotations; i++) {
        let lastElment = arr.pop()
        arr.unshift(lastElment);
    }

    console.log(arr.join(' '));

}

rotateAndAdd(['1', '2', '3', '4'], 2);


