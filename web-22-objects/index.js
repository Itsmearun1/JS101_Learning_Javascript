num=121121;
new_num=num;
let bag="";

while(new_num!=0){
    bag=bag+(new_num%10);
    new_num=Math.floor(new_num/10);
}
if(bag==num){
  console.log("Yes");
}
else{
  console.log("No");
}
