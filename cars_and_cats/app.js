// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:copy
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    const splitURL = request.url.split('/');
    fileType = splitURL[1];
    file = splitURL[2];

    switch(fileType){
        case "stylesheets":
            serveCSS(file,response);
            break;
        case "images":
            serveJPG(file,response);
            break;
        default:
            switch(fileType){
                case "cars":
                    if(file==='new'){
                        serveHTML('new.html',response)
                    }else{
                        serveHTML('cars.html',response)
                    }
                    break;
                case "cats":
                    serveHTML('cats.html',response);
                    break;
                default:
                    serve404(response);
            }

    }

});

function serveHTML(file,response){
        fs.readFile(`./views/${file}`, 'utf8', function(error, contents){
        if(error){return serve404(response)};
        response.writeHead(200, {'Content-type': 'text/html'});
        response.write(contents);
        response.end();
    });
}

function serveCSS(file,response){
        fs.readFile(`./stylesheets/${file}`, 'utf8', function(error, contents){
        if(error){return serve404(response)};
        response.writeHead(200, {'Content-type': 'text/css'});
        response.write(contents);
        response.end();
    });
}

function serveJPG(file,response){
        fs.readFile(`./images/${file}`, function(error, contents){
        if(error){return serve404(response)};
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    });
}

function serve404(response){
    response.writeHead(404);
    response.end("File not found");
}

// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");




//long way before creating functions to take care of repetitive actions (e.g. loading multiple jpegs)

//     if(request.url === '/cars') {
//         fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
//             response.writeHead(200, {'Content-Type': 'text/html'});
//             response.write(contents); 
//             response.end();
//         });
//     }
//     else if (request.url === "/cats") {
//          fs.readFile('./views/cats.html', 'utf8', function (errors, contents){
//              response.writeHead(200, {'Content-type': 'text/html'});
//              response.write(contents); 
//              response.end();
//          });
//     }

//     else if (request.url === "/cars/new") {
//         fs.readFile('./views/new.html', 'utf8', function (errors, contents){
//             response.writeHead(200, {'Content-type': 'text/html'});
//             response.write(contents); 
//             response.end();
//         });
//    }
   
//    else if(request.url === '/stylesheets/style.css'){
//         fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
//             response.writeHead(200, {'Content-type': 'text/css'});
//             response.write(contents);
//             response.end();
//         })
//   }
//   else if(request.url === '/images/bmw.jpg'){
//     // notice we won't include the utf8 encoding
//         fs.readFile('./images/bmw.jpg', function(errors, contents){
//             response.writeHead(200, {'Content-type': 'image/jpg'});
//             response.write(contents);
//             response.end();
//     })
//   }
//   else if(request.url === '/images/mercedes.jpg'){
//     // notice we won't include the utf8 encoding
//         fs.readFile('./images/mercedes.jpg', function(errors, contents){
//             response.writeHead(200, {'Content-type': 'image/jpg'});
//             response.write(contents);
//             response.end();
//     })
//   }
//   else if(request.url === '/images/ferrari.jpg'){
//     // notice we won't include the utf8 encoding
//         fs.readFile('./images/ferrari.jpg', function(errors, contents){
//             response.writeHead(200, {'Content-type': 'image/jpg'});
//             response.write(contents);
//             response.end();
//     })
//   }
//   else if(request.url === '/images/lambo.jpg'){
//     // notice we won't include the utf8 encoding
//         fs.readFile('./images/lambo.jpg', function(errors, contents){
//             response.writeHead(200, {'Content-type': 'image/jpg'});
//             response.write(contents);
//             response.end();
//     })
//   }
//   else if(request.url === '/images/cat1.jpg'){
//     // notice we won't include the utf8 encoding
//         fs.readFile('./images/cat1.jpg', function(errors, contents){
//             response.writeHead(200, {'Content-type': 'image/jpg'});
//             response.write(contents);
//             response.end();
//     })
//   }
//   else if(request.url === '/images/cat2.jpg'){
//     // notice we won't include the utf8 encoding
//         fs.readFile('./images/cat2.jpg', function(errors, contents){
//             response.writeHead(200, {'Content-type': 'image/jpg'});
//             response.write(contents);
//             response.end();
//     })
//   }
//   else if(request.url === '/images/cat3.jpg'){
//     // notice we won't include the utf8 encoding
//         fs.readFile('./images/cat3.jpg', function(errors, contents){
//             response.writeHead(200, {'Content-type': 'image/jpg'});
//             response.write(contents);
//             response.end();
//     })
//   }
//   else if(request.url === '/images/cat4.jpg'){
//     // notice we won't include the utf8 encoding
//         fs.readFile('./images/cat4.jpg', function(errors, contents){
//             response.writeHead(200, {'Content-type': 'image/jpg'});
//             response.write(contents);
//             response.end();
//     })
//   }

//     // request didn't match anything:
//     else {
//         response.end('File not found!!!');
//     }
