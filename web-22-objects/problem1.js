//Given an array find the unique items in the array
let names=["arun","sooraj","arjun","arun","anagha","sooraj"];
let unq_name={};
for(let i=0;i<=names.length-1;i++){
  unq_name[names[i]]=1;}

console.log(unq_name);