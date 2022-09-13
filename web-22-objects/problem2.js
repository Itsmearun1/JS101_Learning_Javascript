//Given a string print, the number of times each character appears
let str="batman";
let obj={};
for(let i=0;i<=str.length-1;i++){
  if(obj[str[i]]>=1){
  obj[str[i]]= obj[str[i]]+1;
  }
  else{
    obj[str[i]]=1;
  }
}
console.log(obj);


