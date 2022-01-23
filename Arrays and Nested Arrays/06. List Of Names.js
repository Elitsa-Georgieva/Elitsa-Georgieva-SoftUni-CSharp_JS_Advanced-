function listOfNames(array){
    let sortedArr = array.sort((a,b)=> a.localeCompare(b));

    let orderNum = 1;

    sortedArr.forEach((name) => {
        console.log(`${orderNum}.${name}`);
        orderNum++;
    });
}

listOfNames(["John", "Bob", "Christina", "Ema"]);


