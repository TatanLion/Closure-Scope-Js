const myGlobal = 0;

function myFunction(){
    const myNumber = 1;
    console.log(myNumber);

    function myParent(){ //funcion interna
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child(){
            console.log(inner, myGlobal, myNumber)
        }
        return child();
    }
    return myParent(); 
}

myFunction();