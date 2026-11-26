//using for loop

let numbers = [1,1,1,2,2,3,4,5,6];
let remove=[];

for(let i=0;i<=numbers.length;i++){
    if(!remove.includes(numbers[i])){
        remove.push(numbers[i]);
    }
}
console.log(remove);


//without using for loop
let numbers=[1,1,2,2,3,4,5,6]
let remove= [...new Set(numbers)];

console.log(remove);


