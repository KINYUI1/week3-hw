// for loop that that log 1 - 20

for(let i = 1; i <= 20; i++){
    console.log(i);
}

//even numbers in 0 through 200

console.log("even numbers from 0 - 200");

for(let i = 0;i <= 200; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

//Fizz Buzz

for(let i =1;i <= 100; i++){
    if(i % 3 === 0  && i % 5 === 0){
        console.log('FizzBuzz');
    }else if(i % 3 === 0){
        console.log('Fizz');
    }else if(i % 5 === 0){
        console.log('Buzz');
    }else{
        console.log(i);
    }
}
