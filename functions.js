const identity = function (value) {
  return value
};



const first = function (array, n) {
  // if (n === undefined){
  //   return array[0];
  // }else {
  //   return array.slice(0,n);
  // }
  
  // if (n === 0){
  //   return [];
  // }
  // if (n > array.length){
  //   return array;
  // }
  
  return n === undefined ? array[0] : array.slice(0,n);
  
};

const last = function (array, n) {
  // if (n === undefined){
  //   return array[array.length - 1];
  // };
  // if (n === 2){
  //   let newArray = []
  //   newArray.push(array[array.length - 2]);
  //   newArray.push(array[array.length - 1]);
  //   return newArray;
  // };
  // if (n === 0){
  //   return [];
  // };
  // if (n > array.length){
  //   return array;
  // };
  
  if (n === undefined){
    return array[array.length -1];
  }else {
    return array.slice(Math.max(0, array.length - n));
  }
  
  
};



const each = function (collection, callback) {
  // if (collection instanceof Array)
  if(Array.isArray(collection)){
    for (i = 0; i < collection.length; i++){
      callback(collection[i], i, collection)
    }
  }
  else{
    for (const item in collection){
      callback(collection[item], item, collection)
    } 
  }
};


// const indexOf = function (array, target) {

//   for (i = 0; i < array.length; i++){
//     if (array[i] === target){
//       return i;
//     }
//   }
//   return -1;
// };





// using 'each' to solve the above code challenge/function


const indexOf = function (array, target){
  let result = -1;
  
  each(array, function (item, index){
    if (item === target && result === -1){
      result = index;
    }
  });
  return result;
};





// const each = function (collection, callback) {
//   if (collection instanceof Array) {
//     for (let i = 0; i < collection.length; i++) {

//       console.log(collection[i], i, collection);
//       callback(collection[i], i, collection);
//       return;
//       // callback(10, 0, [10, 20, 30, 40, 50];);
//     }
//   } else {
//     for (let prop in collection) {
//       callback(collection[prop], prop, collection);
//     }
//   }
// };
// const indexOf = function (array, target) {
//   let result = -1;
//   each(array, function (item, index, array) {
//     console.log('FROM LINE 31')
//     console.log(item, index, array)
//   });
// };



// const map = function (collection, iterator) {
//   let newArray = [];
//   for (i = 0; i < collection.length; i++){
//     let number = iterator(collection[i]);
//     newArray.push(number);
//   }
//   return newArray;
// };


const map = function (collection, callback) {
  let newArray = [];
  each(collection, function (item){
    newArray.push(callback(item));
  });
  return newArray;
};





module.exports = {
  identity,
  first,
  last,
  each,
  indexOf,
  map,
};