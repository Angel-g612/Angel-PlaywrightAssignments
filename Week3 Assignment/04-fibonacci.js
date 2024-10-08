function fibonacciSeries(number)
{
    let numb1= 0;
    let numb2 =1;
    let numb3 ;
    for (let i = 0; i< number; i++) {
        console.log(numb1);
        numb3 =numb1+numb2;
        numb1 = numb2;
        numb2= numb3;  
              
    }     
    console.log(`The fibonacci series of ${number} is ${numb1}`);
}

fibonacciSeries(1)