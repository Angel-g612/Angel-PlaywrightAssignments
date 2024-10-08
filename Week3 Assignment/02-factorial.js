function numberFactorial(n)
{
    if (n===0)
    {
        console.log(`The factorial of ${n} is 1 `);
        
    }
    else if (n > 0)
    {
        fact =1
        for (let i = 1; i <=n ;i++) {
           fact=fact*i;
            
        }
        console.log(fact);
    }
    else
    {
        console.log("provide a valid number");
        
    }
    
}
numberFactorial(5)


