const { count } = require("console");

function findOccurrences(k)
{
    //declaring the array
    const nums=[2,4,5,,3,2,52,2,1,2];
    //initializing count to zero
    let count=0;
    //looping throught the array
    for (let n = 0; n <= nums.length; n++) {
        let element = nums[n];
        //validating if the element is equal to user input and if yes increase the count
        if (element===k) {
            count = count+1;
        }
    }
    console.log(`The number of occurrences of ${k} is ${count}`);
}
findOccurrences(2);