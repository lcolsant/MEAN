function orderSupplies(item){
    let warehouse; //undefined
    const deliveryTime = Math.random() * 3000;
    return new Promise(function(resolve,reject){

        setTimeout(function(){
            warehouse = {
                paint: {
                    product: 'Neon Green Paint',
                    directions:function(){return 'mix it!'}
                },
                brush:{
                    product: 'Horsehair Brush',
                    directions:function(){return 'start painting!'}
                },
                tarp:{
                    product: 'A Large Tarp',
                    directions:function(){return 'cover the floor!'}
                },
            };
            if(item in warehouse){
                resolve(warehouse[item]);
            }else reject(new Error(`Item ${item} is out of stock!`));
    
        },deliveryTime);
    });

}

function received_item(item){
    console.log(`received: ${item.product}. Time to: ${item.directions()}`)
}


/////////////////////////////solution five - Promises 2 ////////////////////////////////////

const paint = orderSupplies('paint');
const brush = orderSupplies('brush');
const tarp = orderSupplies('tarp');
//error case 'roller'
const roller = orderSupplies('roller').catch(handleError);

//in the Promise.all approach, if any item in below method fails you will not get any items below returned.
// Promise.all([tarp,paint,brush])
//     .then(function(items){
//         items.forEach(received_item);
//     })


//better solution....
tarp
    .then(function(item){
        received_item(item);
        return paint
    })
    .then(function(item){
        received_item(item);
        return brush;
    })
    .then(function(item){
        received_item(item);
        return roller;
    })
    
    //approach to handle errors asynchronously
    // .catch(function(error){
    //     console.log(error.message)
    // });

    //approach to handle errors immediately
    .catch(handleError);

function handleError(error){
    console.log(error.message)
}