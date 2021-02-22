//1 **
let url="";
fetch(url)
.then(function(responce)
{
    console.log(responce)
}).catch(function(error){
    console.error(error)
})
console.log("hello")
