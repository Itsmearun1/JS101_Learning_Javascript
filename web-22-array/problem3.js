//Problem 3 : Given an array of numbers find the average of all the even numbers.

let numbers = [1,2,3,4,5,6];
let sum=0;
let count=0;
for(i=0;i<=numbers.length-1;i++){
  if(numbers[i]%2==0){
      sum=sum+numbers[i];
      count++;
    
  }
}
console.log(sum/count);