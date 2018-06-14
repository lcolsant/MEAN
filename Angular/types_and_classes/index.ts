//Types and Classes Assignment - Converting Javascript into Typescript


//string, number, array
const myNumber: Number = 5;
const myString: String = 'Hello Universe';
const myArr1: number[] = [1,2,3,4];
//alternative array definition
const myArr2: Array<Number> = [1,2,3,4];

//object
let myObj: { [key: string]:(string | number) } = { name: 'Bill'};

let anythingVariable: any = 'Hey';
anythingVariable = 25;

//array
const arrayOne1: Array<boolean> = [true,false,true,true];
//alternative array def
const arrayOne2: boolean[] = [true,false,true,true];
const arrayTwo: (number|string|boolean)[] = [1, 'abc', true,2];

myObj = { x: 5, y:10};

//class
class MyNode{
    private _priv: number;

    constructor(public val: number){}

    doSomething(): void{
        this._priv = 10;
    }
}

const myNodeInstance: MyNode = new MyNode(1);
console.log(myNodeInstance.val);

function myFunction(): void{
    console.log('Hello World');
    return;
}

function sendingErrors(): never{
    throw new Error('Error Message');
}



