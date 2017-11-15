const logNum = (num=10)=>
while (num>0){
  console.log(num);
  return logNum(num-1)
}
