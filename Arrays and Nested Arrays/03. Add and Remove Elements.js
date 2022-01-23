function addOrRemove(input){
    let initialNum = 1;
    let output = [];
    for (let i = 0; i < input.length; i++) {
        
        let currCommand = input[i];
        if(currCommand == 'add'){
            output.push(i + 1);
        }else if(currCommand == 'remove'){
            output.pop();
        }
        
    }

    if(output.length === 0){
        console.log('Empty');
    }else{
        console.log(output.join('\n'));
    }

}

addOrRemove(['add', 'add', 'remove', 'add', 'add']);


