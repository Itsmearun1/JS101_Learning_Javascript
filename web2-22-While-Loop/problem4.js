//Problem 4: Print the average of even numbers from 1 to 100 (both included)
let i=1;
sum=0;
count=0;
while(i<=100){
  if(i%2==0){
    sum=sum+i;
    count++;
  }
  i++
}
console.log("Average is",sum/count);
