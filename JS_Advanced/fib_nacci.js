function fib() {
    // Some variables here
    fib_array = [0,1];
    var sum = 1;
    
    function nacci() {
      // do something to those variables here
      console.log(sum);
      let temp1 = fib_array[fib_array.length-1];
      let temp2 = fib_array[fib_array.length-2];
      sum = temp1 + temp2;
      fib_array.push(sum);
      //console.log(fib_array);
    }
    return nacci
  }
  var fibCounter = fib();
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "2"
  fibCounter() // should console.log "3"
  fibCounter() // should console.log "5"
  fibCounter() // should console.log "8"
  fibCounter() // should console.log "13"
  
  