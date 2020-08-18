// falsy
// 0
// ""
// undefined
// null
// NaN
// false

// truthy:
// " "
// "0"
// []=Array
// {}=Object
// "false"

let name = NaN;
//console.log(name);
if(name){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}