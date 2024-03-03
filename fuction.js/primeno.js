let num=15;
if(num == 1){ 
    console.log(`${num} is neither a prime nor composite`);
}
else if(num <1){
    console.log(`${num} is not a prime`);
}
else {
    for(i=2;i<num;i++){
        if(num % i ===0) {
            var res=`${num} is not a prime number, it's a composite`;
        break;
        }    else{
                var res= `${num} is a prime number`;
            }
        
    }
    console.log(res);
}
