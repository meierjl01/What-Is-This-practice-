console.log('hi');

// Problem 1
console.log(this);
// this is:
// because...

// // Problem 2
// var obj1 = {
//  myName: 'obj1',
//  this: this
// };
// console.log(obj1.this);
// // this is:
// // because...

// // Problem 3
// var obj2 = {
//  myName: 'obj2',
//  child: {
//      myName: 'obj2.child',
//      this: this
//  }
// };
// console.log(obj2.child.this);
// // this is:
// // because...

// // Problem 4
// function returnThis(aParameter) {
//  console.log('the argument was: ', aParameter)
//  return this;
// }
// console.log(returnThis('This is fun!'));
// // this is:
// // because...

// // Problem 5
// console.log(new returnThis('This is fun!'));
// // this is:
// // because...

// // Problem 6
// var obj3 = {
//  myName: 'obj3',
//  thisFn: returnThis
// }
// console.log(obj3.thisFn('this is Fun'));
// // this is:
// // because...

// // Problem 7
// var obj4 = {
//  myName: 'obj4',
//  child: {
//      myName: 'obj4.child',
//      thisFn: returnThis
//  }
// }
// console.log(obj4.child.thisFn('this is fun!'));
// // this is:
// // because...

// // Problem 8
// console.log(returnThis.call(this, 'how does call work?'));
// // this is:
// // because...

// // Problem 9
// console.log(returnThis.apply(this, ['how does apply work?']));
// // this is:
// // because...

// // Problem 10
// console.log(returnThis.apply(obj1, ['how does apply work?']));
// // this is:
// // because...

// // Problem 11
// console.log(returnThis.call(obj2, ['how does call work?']));
// // this is:
// // because...

// // Problem 12
// var newReturnThis1 = returnThis.bind(this, 'how does bind work?');
// console.log(newReturnThis1());
// // this is:
// // because...

// // Problem 13
// var newReturnThis2 = returnThis.bind(null, 'how does bind work?');
// console.log(newReturnThis2());
// // this is:
// // because...

// // Problem 14
// var newReturnThis3 = returnThis.bind(obj4, 'how does bind work?');
// console.log(newReturnThis3());
// // this is:
// // because...

// // Problem 15
// document.getElementById('button').addEventListener('click', function(e) {
//  console.log(this);
// });
// // this is:
// // because...

// // Problem 16
// $('#button').on('click', function(e) {
//  console.log(this);
// });
// // this is:
// // because...

// // Problem 17
// $.ajax({
//  url: 'http://tiny-za-server.herokuapp.com/collections/unicorns',
//  success: function() {
//      console.log(this);
//  }
// })
// // this is:
// // because...
