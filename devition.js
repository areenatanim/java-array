for (let i = 1; i <= 30; i++ ) {
     if(i % 3 === 0 ){
          console.log(i);
          
     }
}
console.log("program end");


for (let i = 0; i <= 100; i++ ){
     if(i % 5 === 0 || i % 9 ===0){
          console.log(i);
          
     }
}
console.log('p js end');


for (let i = 0 ; i <= 100 ; i++){
     if (i % 3 === 0 && i % 5 === 0 && i % 9 === 0){
          console.log(i);
          

     }
}
// sum of all numbers from 1 to 100 3 % === 0

let sum = 0;
for ( let i = 0; i <= 100 ; i++){
     if ( i % 7 === 0){
          sum = sum + i;
console.log("sum =" , sum);

     }
}
console.log('sum =', sum);
