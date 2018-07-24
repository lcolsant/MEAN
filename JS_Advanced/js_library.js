//Coding Dojo homework assignment creating a library

var _ = {
    map: function(array,callback) {
        var temp = [];
        for(let i=0;i<array.length;i++){
            temp.push(callback(array[i]));
        }
        return temp;
    },
    reduce: function(array,callback) { 
        var temp = [];
        var memo =0;
        for(let i=0;i<array.length;i++){
            memo = memo + callback(array[i]);
        }
        temp.push(memo);
        return temp;
    },
    find: function(array,callback) {
        var temp = [];
        for(let i=0;i<array.length;i++){
            if(callback(array[i])){
                temp.push(array[i]);
            }
        }
        return temp;
    },
    filter: function(array,callback) {
        var temp = [];
        for(let i=0;i<array.length;i++){
            if(callback(array[i])){
                temp.push(array[i]);
            }
        }
        return temp;
        
    },
    reject: function(array,callback) {
        var temp = [];
        for(let i=0;i<array.length;i++){
            if(!callback(array[i])){
                temp.push(array[i]);
            }
        }
        return temp;
    }
  }
 

var array = [1,2,3,4,5];
console.log('original array:', array);


var array = _.map(array,function(num){
    num=num+1;
    return num;
});
console.log('mapped array:',array);


var evens = _.filter(array, function(num){ return num % 2 == 0; });
console.log('evens array',evens);


var find = _.find(array, function(num){ 
    return num === 4;
});
console.log('found:', find)


var reject = _.reject(array, function(num){ return num % 2 == 0; });
console.log('reject evens array:',reject);


var reduce = _.reduce(array, function(num){return num+=1});
console.log('reduce array:',reduce);
