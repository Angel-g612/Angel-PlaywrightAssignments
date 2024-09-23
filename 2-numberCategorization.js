
let xnumber = -115;

function numberCategorization()
{
    if (xnumber > 0) 
    {

        return "The number is positive";
        
    }
    else if (xnumber < 0)
    {
        return "The number is negative";
    }
    else
    {
        return "The number is neutral";
    }
}

console.log(numberCategorization());
