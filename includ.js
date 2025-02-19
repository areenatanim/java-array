// use of includes
const friends = ['arina', 'tanim', 'mim', 'fojle', 'abid', 'najmun']
console.log(friends.includes('tanim'));
console.log(friends.includes('mun'));

// we can use includes in if else also

if (friends.includes('tanim')){
     console.log('party will run');
     
}
else{
     console.log('go home');
     
}

// indexof()

console.log(friends.indexOf('mim'));
console.log(friends.indexOf('taha'));

// is array

const fruits = ['apple', 'mango', 'lichi']
const man = [];
const fan = "arina";
console.log(Array.isArray(fan));

console.log(Array.isArray(fruits));

