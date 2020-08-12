function doSamthing(){
    console.log(2222);
}
console.log(3333);
// setTimeout()
// setTimeout(doSamthing)
// setTimeout(function(){
//     console.log('lazy and waiting')
// }, 1000)
setInterval( function(){
    console.log('do somthing')
}, 1000);
console.log(4444)