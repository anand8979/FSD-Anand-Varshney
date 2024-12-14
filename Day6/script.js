let arr=[0,1,22,23,3,4,5,33,2];
// let newary=arr.map((x)=>x*2);
// console.log(newary);
// let even=arr.filter((x)=> x%2==0);
// console.log(even);
// let sum=arr.reduce((x,y)=>x+y,0);
// console.log(sum);

let sum=arr.filter((x)=> x%2==0).reduce((x,y)=>x+y,0);
console.log(sum);


// Student data question