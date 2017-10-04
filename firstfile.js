 //compilation 2 
 var a = b(); // a is in the global scope 
 var c = d(); //c is in the global scope 
 a;
 c;

 function b() { // b is in function scope 
     return c;
 };
 var d = function() { // d is in the global scope 
     return b();
 };
 ////execution1 
 a = b();
 c = d();
 "a"
 /// compilation2
 var foo = function bar() { // foo & bar is in global scope 
     var foo = "baz"; //bar is assigned function, foo is variable

     function baz(foo) { // bar is in fuction scope 
         foo = bar; // baz is in function scope
         foo; //function...
     }
     baz();
 };
 ///execution 2
 foo = 'bar';
 bar();