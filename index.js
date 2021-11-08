function averageInArray(numbers){
    let average = 0;
    for( let i = 0; i < numbers.length; i++){
        average += numbers[i]
    }
        average = average/numbers.length
        return average
}
console.log(averageInArray([2,2,5,10]))
