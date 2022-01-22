function calculates(num, O1, O2, O3, O4, O5){
    let inputStart = Number(num);
    let arr = [O1, O2, O3, O4, O5];
    
    let chop = function(){
        return inputStart/2;
    }

    let dice = function(){
        return Math.sqrt(inputStart);
    }

    let spice = function(){
        return inputStart + 1;
    }

    let bake = function(){
        return inputStart * 3;
    }

    let fillet= function(){
        //return inputStart - ((inputStart * 20)/100);
        return inputStart * 0.80;
    }

    for (let i = 0; i < arr.length; i++) {
        let currCommand = arr[i];

        switch(currCommand){
            case 'chop':
                inputStart = chop(inputStart);
                console.log(inputStart);
                break;
            case 'dice':
                inputStart = dice(inputStart);
                console.log(inputStart);
                break;
            case 'spice':
                inputStart = spice(inputStart);
                console.log(inputStart);
                break;
            case 'bake':
                inputStart = bake(inputStart);
                console.log(inputStart);
                break;
            case 'fillet':
                inputStart = fillet(inputStart);
                console.log(inputStart);
                break;
        }
        
    }
}

calculates('32', 'chop', 'chop', 'chop', 'chop', 'chop')
