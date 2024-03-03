//objects

var user = {
     name : Azmath,
    age : 21,
    height :  5.7,
    skills : ["html","css","js"],
contact : {
        email : azmath123,
        phone  : 123456,
         social_handles :{
            insta: "azmath_insta",

         }
}
}
console.log(user.contact.phone);
//acces only th key values
console.log(Object.key(user));
//access only values
console.log(Object.values(user));



//for-in loop
for(x in user){
    console.log(user[x]);
}
*************************************************************************************************************************************************
fuction factorial (number){//function declaration
   var sum =1;
   for(i=0 ; i <= number;i++){
    res=sum*i;
   }
   console.log(res);
}
factorial(5);








