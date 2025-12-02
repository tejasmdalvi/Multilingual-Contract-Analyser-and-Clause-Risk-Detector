//var dulha = "Abhishek";
//var dulhan = "Aishwarya";
const dulha = "Abhishek";
const dulhan = "Aishwarya";
console.log(a);
var a=10;
/*hosting and hoisting are two different scenarios .
In hoising the declaration  is moved to the top the program .
like var a=10;
is written as
 var a; declaration part which is moved to the top and 
 a=10; this is initialization part 
 so if we print a before it is initialized we will get output as undefined.
 
 there is difference in undefined and not defined 

 if there is something in existence and we dont know the value then it is undefined but if
 there is nothing in existence then it is basically called not defined.
 
 
 */

 // primitives= number ,string,null, undefined ,boolean
 //reference = [] {} ()  bracket wale log

 /* 
 aisi koi bhi value jise copy karne par real copy nahi hota ,balki us value ka reference value pass hojaata hai, use hum reference value kehte hai ,
 aur jiska copy karne par real value copy hota hai use hum primitive type value kehte hai.
 
 */
var c=[10,11,12,13];
var d=c;
d.pop();//reference type value
var abcd=NaN;//primitive
var abce=[];//reference

if(true){
console.log("chaman champak chakna chur chavanprash")
}
else{

}

if(10>11){

}
else{
  console.log(454)  
}

if(11>110){
    console.log("apple");

}
else{
    console.log("ball");
}
//0-10
for(var i=0;i<11;i++)
{
    console.log(i);
}
console.log("       ")
//25-50

for(i=0;i<=50;i++)
{
    console.log(i);
}
console.log("       ")
console.log("       ")

for(var j=0;j<=50;j++)
{
    console.log(j);
}

var k=0;
 while(k>20)
 {
    console.log(k);
    k++;
 }
 function abcd()
 {
    //function statement
 }
 function hellobolo()
 {
    console.log("hello");
 }

 hellobolo();

 function hello(a,b,c)
 {
    console.log(a,b,c);

 }

 hello(10,12,13);

 //arguments=real value jo hum dete hai function chalate waqt
 //parameters= variables jinme value store  hoti hai arguments vaali
  
 var arr=[1,2,3,4,5,6,7,8,9];
 console.log(arr[0]);
 arr.push(98); // add one element on the right /end
 arr.push(99);
 arr.pop();// remove one element on the right /end
 arr.unshift(0);//add one element to the start
 arr.shift();//remove one element from the start
 arr.splice(2,2); // here 2 is the index of array and 2 values from that index i want to remove and its splice and not slice


 //push pop shift unshift slice

 /*ek bande se jyaada ki baat ki toh hua array and ek bande ke baare mein saari baat ki toh hua object*/
 // object is holding one banda's details,in a key value pair

 //blank obj

 var a={};

 var ghadi={

    brand:"Kenneth Cole",
    price:"16k",
    color:"silver",
    type:"automatic",
    digital:false,
    saarebolo:function(){}  //now saarebolo has become method as we are using functions because iski value function hai
 }

 ghadi.brand="titan gold Kenneth Cole"; 
 