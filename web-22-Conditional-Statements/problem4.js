//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.
let stored_username="arundev1";
let stored_pass=123321;
let given_username="arundev1";
let given_pass=123322;
if(stored_username==given_username){
  if(stored_pass==given_pass){
    console.log("Login Successful");
  }
  else{
    console.log("Wrong Password");
  }
}
else{
  console.log("wrong Credentials");
}