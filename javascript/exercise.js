let sum=0;
for (let i=1;i<=10;i++){
  sum=sum+i;
}
console.log(sum);
let a=0;
let b=1;
let c=0;
while (b<1000){
  c=a+b;
  a=b;
  b=c;
}
console.log(b);
for(let i=1;i<=100;i++){
  if((i%3===0||i%5===0)&&!(i%3===0&&i%5===0)){
    console.log(i);
  }
}

for(let i=1;;i++){
  let divide=true;
  for(let k=1;k<=10;k++){
    if(i%k===0){
      divide=true;
    }
    else{
      divide=false;
      break;
    }
  }
  if(divide===true){
    console.log(i);
    break;
  }
}
