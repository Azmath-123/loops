var a=0,b=1;
console.log(a);
console.log(b);
for(i=0;i<=10;i++){
    var temp=a+b
    console.log(temp);
    a = b;
    b = temp;
}

