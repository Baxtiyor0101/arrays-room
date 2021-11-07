fruits=['apple', 12, 'Ananas', 'Orange', 'Banana', 'Kivi'];
 numbers=[10, 5, 11, 'apple', 2, 3, 4, 5, 6];


//1a)
// let s=0;
// let result=fruits.map(function(item1){
//    for (let i=0; i<item1.length; i++){
//        if(item1[i]=='a' || item1[i]=='A'){
//            s++;
//        }
//        else continue;
//     }
// });
// alert(s);

//1b)
// let t=0;
// let result=fruits.map(function(item2){
//    for (let i=0; i<item2.length; i++){
//        if(item2[i]=='b' || item2[i]=='B'){
//            t++;
//        }
//        else continue;
//     }
// });
// alert(t);






//2) sonlar yig'indisini toping
// let s=0;
//     for (let i=0; i<numbers.length; i++){
//         if(typeof(numbers[i])===typeof(8)){
//             s+=numbers[i];
//         }
//         else continue;
//     }
// alert(s);





// //3a)kattasidan bitta kichigi
// let a=numbers[0];
// for(let i=1; i<numbers.length; i++){
//     if(typeof(numbers[i])===typeof(9)){
//         if(a<numbers[i]){
//             a=numbers[i];
//         }
//         else continue;
//     }
//     else continue;
// }

// for(let i=0; i<numbers.length; i++){
//     if(numbers[i]==a){
//         delete numbers[i];
//     }
//     else continue;
// }
// // alert(numbers);

// let b=numbers[0];
// for(let i=1; i<numbers.length; i++){
//     if(typeof(numbers[i])===typeof(9)){
//         if(b<numbers[i]){
//             b=numbers[i];
//         }
//         else continue;
//     }
//     else continue;
// }
// alert(b);


// //3b) kichigidan bitta katta
// let a=numbers[0];
// for(let i=1; i<numbers.length; i++){
//     if(typeof(numbers[i])===typeof(9)){
//         if(a>numbers[i]){
//             a=numbers[i];
//         }
//         else continue;
//     }
//     else continue;
// }

// for(let i=0; i<numbers.length; i++){
//     if(numbers[i]==a){
//         delete numbers[i];
//     }
//     else continue;
// }
// // alert(numbers);

// let b=numbers[0];
// for(let i=1; i<numbers.length; i++){
//     if(typeof(numbers[i])===typeof(9)){
//         if(b>numbers[i]){
//             b=numbers[i];
//         }
//         else continue;
//     }
//     else continue;
// }
// alert(b);





// //4)toq va juft indexdagi elementlarining yig'indilarini toping
// let s1=0;
// let s2=0;
// for(let i=0; i<numbers.length; i++){
//     if(typeof(numbers[i])===typeof(9)){
//         if(i%2==0){
//             s1+=numbers[i];
//         }
//         else{
//             s2+=numbers[i];
//         }
//     }
//     else continue;
// }
// alert(s1);
// alert(s2);




//5)massiv elementlarini teskari tartibda chiqarish reverseni ishlatmasdan
// for(let i=numbers.length-1; i>=0; i--){
//    alert(numbers[i]);
// }




// // //6a) filter amalini filtersiz  amalga oshirish 
// let a=5;
// for(let i=0; i<numbers.length; i++){
//     if(numbers[i]>a){
//         alert(numbers[i]);
//     }
//     else{
//         continue;
//     }
// }

//6b) sort amali bilan chiqariladigan jarayonni sortdan foydalanmay chiqarish
