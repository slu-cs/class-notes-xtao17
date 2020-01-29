int sum=0;
for (int i=1;i<=10;i++){
  sum+=i;
}
console.log(sum);
int a=0;
int b=1;
int c=0;
while (b<1000){
  c=a+b;
  a=b;
  b=c;
}
console.log(b);
for(int i=1;i<=100;i++){
  if(i%3===0||i%5===0){
    console.log(i);
  }
}
divide=true
for(int i=1;;i++){
  for(int k=1;k<=10;k++){
    if(i%k===0){
      divide=true
    }
    else{
      divide=false
    }
  }
  if(divide===true){
    console.log(i);
  }
}
