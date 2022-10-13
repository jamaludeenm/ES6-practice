// Promise
// syntx for Promise
// let x= new promise((resolve,reject)=>{
// }


// Template literals
//similar to concatinate
// {
// let name='deen';
// let add=`jamal ${name}`;
// console.log("add:",add);
// }

//Default value for function param
//function param takes the default value if we are not give any value to param
// {
//     function show(x=10){
//         return 5+x;
//     }
//     console.log(show(5));
// }

//var
//hoisting process happen & its a global scope accessible in global
//In `var` initailazion was happened due to hoisting so it shows undefined not an error
// {
//  console.log(a);
//  var a=10;
//  var b=10;
//  console.log(b);
// }

//let
//no hoisting process & it's a block scope only accessible in blocks
//initailazion was not happened in `let` so it throws error
// {
    // console.log(a);
    // let a=10;
//     let b=10;
//     console.log(b);
// }

//Arrow function
// {
//    const arrow = ()=>{
//         let x=2,
//         y=3,
//         z=x+y;

//      console.log(z);
//     }
//     arrow();
// }

//spread
///changes array values in to individual values
{
    let array=[1,2,3];//using Array
    let array1=[...array];
    console.log(array1);
}
{
    let object={a:"dark"};//using object, U can change the value of keys it wont't affect the first declared object.
    let object1={...object};
    object1.a = "spark"
    console.log(object,object1);
}

//Arguments->it returns params in to objects..
//it's available normal function only not for arrow function
{
    function add(){
        arguments;
        let total=0;
        for(let i=0;i<arguments.length;i++){
            total += arguments[i];
        }
        console.log(total);
    }
    add(2,3,4,5);
}

//Rest ->its opposite to spread it returns individual values in to an array;
{
    const rest=(...array)=>{
        console.log(array);
    }
    rest(2,4,5,)
}

//destructuring
//used to assidn a value from a array or object in to variable

{
    let obj={
        a:"we",
        b:"he",
    };
    const{ a,b} =obj;
    let array=[1,2,3,4,5];
    const [c,d,e,f,g,h,]=array
    console.log(a,b,c,d,e,f,g,h);
}

