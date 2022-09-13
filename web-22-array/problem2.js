//Problem 2 : Given a character in lower case print the upper case character
let char="y";
let position=0;
let lower=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let cap=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
for(let i=0;i<=lower.length-1;i++){
  if (char==lower[i]){
    position=i;
    char= cap[i]; 
  }
}
console.log(char);