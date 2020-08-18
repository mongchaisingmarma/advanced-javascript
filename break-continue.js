// const numbers = [1, 2, 3, 4, 5, 6, 7, 8 ,9];
//  for(let i = 0; i < numbers.length; i++){
//     //  console.log(numbers[i]);
//     if(numbers[i] > 6){
//         break;
//     };
//     console.log(numbers[i]);
// }


const numbers = [1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7, 8, -8, 9, -9];
 for(let i = 0; i < numbers.length; i++){
    //  console.log(numbers[i]);
    if(numbers[i] < 0){
        continue;
    };
    console.log(numbers[i]);
}