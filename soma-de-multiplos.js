function soma(){
    let calculo = 0;


    for( let i=1; i < 1000; i++){
        if (i % 5 == 0 || i % 7 == 0){
            calculo += i;
            
        }


    }

    return calculo;
}
console.log(soma())
