const divisor = (num) => {
    let arr = [];
    for ( let i = 1; i < num; i++ ){
        if (num % i === 0){
            console.log(`${i} is a divisor of ${num}`);
            arr.push(i);
        }
    }
    console.log(`Number ${num} has ${arr.length} divisors excluding itself.`);
}

divisor(10);