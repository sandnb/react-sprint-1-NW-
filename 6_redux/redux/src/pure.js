/*
* Impure fn -> 
            * they will not give same result for same input
            * it will input from outer scope

* Pure fn -> give same output for same input
            all its variables: doesnt changes any outer variable(produce side effect)
 fn(x)=x**2+2 => if x = 4 => fn(4) = (4)**2 + 2 => 16 + 2 = 18

*/

let y = 10;

function fn(x){
    y = 2 * y;
    x = x * y;
    console.log("x",x,"y",y);
};

fn(5,2);
fn(5,2);
fn(5,2);
fn(5,2);
fn(5,2);