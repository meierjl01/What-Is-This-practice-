// Problem 1
// console.log(this);
// this is: the Window object (global scope)
// because... this in a global scope is the global scope -- it's not in a constructor

// Problem 2
var obj1 = {
 myName: 'obj1',
 this: this
};
// console.log(obj1.this);
// this is: the Window Object (global scope)
// because...the context is still global at this point, even though we're inside an object

// Problem 3
var obj2 = {
 myName: 'obj2',
 child: {
     myName: 'obj2.child',
     this: this
 }
};
// console.log(obj2.child.this);
// this is: the Window Object (global scope)
// because...the context is still global, no matter how nested in an object it gets (we haven't changed context yet)

// Problem 4
function returnThis(aParameter) {
 console.log('the argument was: ', aParameter);
 return this;
}
// console.log(returnThis('This is fun!'));
// this is: the Window Object
// because...last console.log was in the global context, which means this is still the global object

// Problem 5
// console.log(new returnThis('This is fun!'));
// this is: an empty object, an instance of the returnThis constructor
// because... the new keyword was used and changes the context of the this to the object being constructed

// Problem 6
var obj3 = {
 myName: 'obj3',
 thisFn: returnThis
};
// console.log(obj3.thisFn('this is Fun'));
// this is: obj3
// because...the context from which the function was called changed to obj3 becuase the function lives on obj3

// Problem 7
var obj4 = {
 myName: 'obj4',
 child: {
     myName: 'obj4.child',
     thisFn: returnThis
 }
};
// console.log(obj4.child.thisFn('this is fun!'));
// this is: obj4.child
// because...context from which the function was requested was the nested object

// Problem 8
// console.log(returnThis.call(this, 'how does call work?'));
// this is: the global scope (window object)
// because...call has called the function instead of using ()s, but what happened to the arugments?

// Problem 9
// console.log(returnThis.apply(this, ['how does apply work?']));
// this is: the window object (global)
// because... I had to look this up -- apply accepts a single array of arguments while call accpets an argument list. it seemed to not change the scope here

// Problem 10
// console.log(returnThis.apply(obj1, ['how does apply work?']));
// this is: obj1
// because...I had to look this up -- apply accepts a single array of arguments while call accpets an argument list. it seemed to change the scope here, maybe because returnThis is a function, whereas earlier there was no function when obj1 was console logged the first time

// Problem 11
// console.log(returnThis.call(obj2, ['how does call work?']));
// this is: obj2
// because...call sets the context to its first argument

// Problem 12
var newReturnThis1 = returnThis.bind(this, 'how does bind work?');
console.log(newReturnThis1());
// this is: the global object (window)
// because...Based on the console log for this problem and the two below it, it seems to make new functions. it also didn't seem to change the scope for this one because we got the window

// Problem 13
var newReturnThis2 = returnThis.bind(null, 'how does bind work?');
console.log(newReturnThis2());
// this is: the global object (window)
// because...it made a new function, and didn't seem to change the scope

// Problem 14
var newReturnThis3 = returnThis.bind(obj4, 'how does bind work?');
console.log(newReturnThis3());
// this is: Obj4
// because...this one made a new funciton and also logged an object. I'm not sure exactly why, but I'm guessing it has to do with the fact that the object it logged was in the arguments.

// Problem 15
document.getElementById('button').addEventListener('click', function(e) {
 console.log(this);
});
// this is:the information for the input = type and class
// because...it has scope because it's not giving the global scope (window), and I think it's because a function is involved

// Problem 16
$('#button').on('click', function(e) {
 console.log(this);
});
// this is:the information for the input = type and class
// because...it has scope because it's not giving the global scope (window), and I think it's because a function is involved

// Problem 17
$.ajax({
 url: 'http://tiny-za-server.herokuapp.com/collections/unicorns',
 success: function() {
     console.log(this);
 }
});
// this is:an object
// because...of the function in the success line of the request
