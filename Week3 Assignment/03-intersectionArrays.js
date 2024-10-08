function intersection()
{
   let arr1 =[1,2,3,45,4,5]
   let arr2 =[3,45,6,7,7]
   let arr3 = [];
    for (let i = 0; i<arr1.length; i++) 
    {  for (let j =0; j < arr2.length; j++) {
        if (arr1[i]===arr2[j]) {
            arr3 =arr1[i];
            console.log(arr3);
            
        }
    }
    
   }    
   }
   intersection();
