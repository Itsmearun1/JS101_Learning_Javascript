//Problem 1 : Given a string count the number of words in that string
let string = "I am Batman";
count=0;
for(i=0;i<=string.length;i++){if(string[i]==" ")
{count++;}
}
if (string.length==0){
  console.log(0);
}
else{  
console.log(count+1);
}