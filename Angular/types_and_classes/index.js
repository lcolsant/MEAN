//Types and Classes Assignment - Converting Javascript into Typescript
//string, number, array
var myNumber = 5;
var myString = 'Hello Universe';
var myArr1 = [1, 2, 3, 4];
//alternative array definition
var myArr2 = [1, 2, 3, 4];
//object
var myObj = { name: 'Bill' };
var anythingVariable = 'Hey';
anythingVariable = 25;
//array
var arrayOne1 = [true, false, true, true];
//alternative array def
var arrayOne2 = [true, false, true, true];
var arrayTwo = [1, 'abc', true, 2];
myObj = { x: 5, y: 10 };
//class
var MyNode = /** @class */ (function () {
    function MyNode(val) {
        this.val = val;
    }
    MyNode.prototype.doSomething = function () {
        this._priv = 10;
    };
    return MyNode;
}());
var myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);
function myFunction() {
    console.log('Hello World');
    return;
}
function sendingErrors() {
    throw new Error('Error Message');
}
