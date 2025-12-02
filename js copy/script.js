
//lets see implementation of symbol

let sheryjscodeschool={
    uid:1,
    model:"harsh",
    yaarid:45
}

sheryjscodeschool.yaarid=4;

console.log(sheryjscodeschool);

let u1=Symbol("uid");
let u2=Symbol("uid");
console.log(u1===u2);

let u3=Symbol("uid");
  sheryjscodeschool[u3]="007"
let u4=Symbol("uid");
 sheryjscodeschool[u4]="008"
console.log();
 console.log(sheryjscodeschool);

 let a={
    name:"harsh",
 }

 let c=a;

console.log( c.name);
c.name="harshita";

console.log(" ");

console.log(a.name);

console.log(c.name);

//instanceof works with the reference value


let score=parseInt(prompt("enter your score"));

let grade = score>=90 ?console.log("A Grade") : score>=75?console.log("B Grade") :score>=60? console.log("C Grade"):console.log("Unsuccessful"); 
console.log(grade); 

let LoggedIn=confirm("Are you logges un");
let HasToken=confirm("tokens");

let access= LoggedIn&&HasToken?"Acess Granted":"Access Denied";
console.log(access);


let likes=100;

function abcd()
{
   return ++likes;
}

console.log(abcd());
console.log(likes);
