//Problem 2 : Given an array of string count the overall total number of characters
let arr=["Batman","Superman","Flash"];
let total=0;
for(i=0;i<=arr.length-1;i++){
total=total+arr[i].length;
}
console.log(total);