if ("0") {
    alert( 'Hello' );
  }
  //Yes as the string is not empty

 let name= prompt("What is the “official” name of JavaScript?","none");
 if(name== "ECMAScript")
 {
    alert("right");
 }
 else{
     alert("Didn’t know? ECMAScript!");
 }
 //Rewrite

 let result=(a+b<4)?'Below':'Over';

 //
 let message=(login=="Employee")?"Hello":(login=="Director")?"Greetings":(login==" ")?"no login":" ";