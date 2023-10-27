//---------------------------------
//const y = 20 ;
function func(){
    const y = 10;
    //y = 20 ;
    console.log(y);
}
func();
//console.log(y);

//---------------------------------

let str1 = "Hello";
function great(){
    let str2 = "World";
    console.log(str1 + " " + str2);
    if(str2=="World"){
        var str3 = "hello"
        console.log(str1 + " " + str2 + " " + str3);
    }
    console.log(str1 + " " + str2 +" t "+ str3);
}
great();

//------------------------------------------

if (true) {
    const foo = "foo";
    console.log(foo);
 
    if (true) {
        const bar = "bar";
        console.log(foo,bar);
 
        if (true) {
            const hello = "hello";
            console.log(foo, bar,hello);
        }
        //console.log(foo, bar,hello);
    }
}
