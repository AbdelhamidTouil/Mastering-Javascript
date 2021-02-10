//1
// Déclarez et initialisez les variables: firstName, lastName, country, city, age, isMarried, year et utilisez 'typeof' operator pour vérifier les différents data types.
var firstName="abdelhamid";
var lastName="touil";
var country="maroc";

var age=21;
var isMarried =false;
var year="1999";

console.log(typeof("abdelhamid"));
console.log(typeof("touil"));
console.log(typeof("maroc"));
console.log(typeof(21));
console.log(typeof(false));
//2
//Vérifiez si le type '10' est égal à 10
var x=false;
var y=true;
if ('10'===10)
{
console.log(y);
}
else{console.log(x)}
//3
if ('9.8'===10)
{
console.log(y);
}
else{console.log(x)}
//4
var v1=true;
var v2=true;
var v3=true;

var v4=false;
var v5=false;
var v6=false;
//5 1. 4 > 3
/*2. 4 >= 3
3. 4 < 3
4. 4 <= 3
5. 4 == 4
6. 4 === 4
7. 4 != 4
8. 4 !== 4
9. 4 != '4'
10. 4 == '4'
11. 4 === '4'*/
var a4=4;
var a3=3;
var res=true;
var res1=false;

if(a4>a3)
{
console.log(res)
}
else{
    console.log(res1)  
    }
if(a4>=a3)
{
console.log(res)
}
else{
    console.log(res1)  
    }
if(a4==a4)
{
console.log(res)
}
else{
    console.log(res1)  
    }
if(a4!=a4)
{
console.log(res)
}
else{
    console.log(res1)  
    }
if(a4!==a4)
{
console.log(res)
}
else{
    console.log(res1)  
    }
if(a4!==a4)
{
console.log(res)
}
else{
    console.log(res1)  
    }
if(a4!='a4')
{
console.log(res)
}
else{
    console.log(res1)  
    }

    if(a4=='a4')
{
console.log(res)
}
else{
    console.log(res1)  
    }

    if(a4==='a4')
    {
    console.log(res)
    }
    else{
        console.log(res1)  
        }
   //5/12
   var p ="paython";
   var j= "jardon";
   var r=true;
 
   console.log(p.length);
   console.log(j.length);
   if(p.length!=j.length)
   {
       r= false;
   }
   console.log(r);
   //6
    4 > 3 && 10 < 12
    if(4>3 && 10<12)
    {
        return 
    }