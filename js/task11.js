const array1 = [1, 2, 3, 45,];

function sumArray(array) {
    if (array.length !== 0 || array.value !== null || array.length == 1) {
       array.reduce((acc, number) => {
        
            const total = (acc + number) - Math.max.apply(null, array) - Math.min.apply(null, array)
            return total;
        }, 0)  }
    else return 0;
       
    
}


console.log(sumArray(array1));
