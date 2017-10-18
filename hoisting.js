////////Hoisting//////
(function() {  
    college();  
    return;
    function college() {
        console.log("Tamuk");
    }
 })();
 /////
 (function() {
     function college() {  
         console.log("College station");
     }
     college();            
     return;
 })();
 //////////////////closures
 function subtract() 
 {
 
   var counter =2;
 
 function minus() 
 {
    
   counter-=1;
   
  }
     
 minus();
 
    return counter;
 
   }
 
 
 subtract();
 
 subtract();
 subtract();
 
 ///
 
 function multiply() {
  
  var counter =3;
 
 function into() {
  
  counter*=1;
 
   }
   
   into();
 
    return counter;
  
  }
 
 
 multiply();
 
 multiply();
 multiply();
 multiply();
 ///
 function showplace (city, state) {
 var displayingnote = "You are living in ";
 
 function location () {        
 return displayingnote + city + " " + state;    
 }
 
 return location ();
 }
 
 showplace ("Houston", "Teaxs");
 ////
 var foo = function() {
   
     alert("Hi");
 
    };
 
 
    var bar = function(baz) {
   
     return baz;
 
    };
 
 
 bar(foo)();
 
 