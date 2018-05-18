function orderSupplies(item,callback){
    let warehouse; //undefined
    const deliveryTime = Math.random() * 3000;
    
    setTimeout(function(){
        warehouse = {
            paint: {
                product: 'Neon Green Paint',
                directions:function(){return 'mix it!'}
            },
            brush:{
                product: 'Horsehair Brush',
                directions:function(){return 'start painting!'}
            }
        };
    
        callback(warehouse[item]);

    },deliveryTime);

}

function received_item(item){
    console.log(`received: ${item.product}. Time to: ${item.directions()}`)
}


/////////////////////////////////////////////solution one/////////////////////////////////////////////
// orderSupplies('paint', item=>{
//     received_item(item); 
    
//     orderSupplies('brush', received_item)

// });



/////////////////////////////////////////////solution two///////////////////////////////////////////////
// let havePaint = false;
// orderSupplies('paint', item=>{
//     received_item(item); 
//     havePaint = true;

// });

//using setInterval
// orderSupplies('brush', item=>{
//     if(havePaint){
//         received_item(item); 
//     }else{
//         const timer = setInterval(function(){
//             console.log('...checking for paint...')
//             if(havePaint){
//                 received_item(item);
//                 clearInterval(timer);
//             }
//         },50);
//     }
// });

//using setTimeout (recursive like function)

// orderSupplies('brush', checkPaint);

// function checkPaint(item){
//     if(havePaint){
//         return received_item(item); 
//     }else{
//         console.log('...checking for paint...');
//         setTimeout(checkPaint,50,item);
//     }

// }




/////////////////////////////////////////solution three///////////////////////////////////////////////////

//no setTimeout; no setInterval

// let havePaint = false;
// let haveBrush = false;

// orderSupplies('paint',function(item){
//     received_item(item);
//     havePaint = true;
    
//     if(haveBrush){
//         return received_item(haveBrush);
//     }

// });

// orderSupplies('brush',function(item){
//     if(havePaint){
//         return received_item(item);
//     }else{
//         haveBrush = item;
//     }
// });

/////////////////////////////////////////solution four - Promises //////////////////////////////////////

const paint = new Promise(function(resolve, reject){
    orderSupplies('paint',resolve);
});

const brush = new Promise(function(resolve, reject){
    orderSupplies('brush',resolve);
});

paint
    .then(function(item){
        received_item(item);
    })
    .then(function(item){
        return brush;
    })
    .then(function(item){
        received_item(item);
    })
    .catch(function(){

    });
