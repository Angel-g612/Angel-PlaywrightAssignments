
const browserVersion= "Chrome"; //global variable
console.log("The browser is "+ browserVersion);

function getBrowserversion()
{
    if(browserVersion == 'Chrome')
    {
        //var browserversion = "Edge";// This prints Edge and this is a block level variable
        let browserversion = "Firefox"; //displays browserversion is not defined
        
    }
    
    console.log("The browser version to be printed outside the block but inside the function is " + browserversion);
    
}
getBrowserversion();
