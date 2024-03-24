function kitchen(){
    let roast = 0;
    return function(){
        roast++;
        return roast;
    }
}

const firstSever = kitchen();
console.log(firstSever());
console.log(firstSever());
console.log(firstSever());
console.log(firstSever());

function stopWatch(){
    let counter = 0;
    return function(){
        counter++;
        return counter;
    }
}
const watch1 = stopWatch();

