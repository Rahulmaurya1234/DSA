// ## Solve Problems

// * [ ] Odd Even
// * [ ] Positive Negative
// * [ ] Largest of 3 Numbers
// * [ ] Grade Calculator
// * [ ] Calculator
// * [ ] Voting Eligibility
// * [ ] Leap Year
// * [ ] Electricity Bill

// 1. Odd Even

// Question:
// Ek integer n diya gaya hai. Check karo ki number Odd hai ya Even.

// Input:

// 7

// Output:

// Odd


// let num=10;

// if ( num % 2 ===0 ){
//     console.log("even");
// }else{
//     console.log("odd")
// }

// 2. Positive Negative

// Question:
// Ek number n diya gaya hai. Print karo:

// "Positive" agar number 0 se bada ho
// "Negative" agar 0 se chhota ho
// "Zero" agar number 0 ho

// Input:

// -10

// Output:

// Negative

// let num = -10;

// if (num < 0){
//     console.log("Negative")

// }else if(num > 0){
//     console.log("Positive")

// }else {
//     console.log("Zero")
// }


// 3. Largest of 3 Numbers

// Question:
// Teen numbers a, b, aur c diye gaye hain. Sabse bada number print karo.

// Input:

// 10 25 15

// Output:

// 25

// Bonus: Agar do ya teen numbers equal ho to bhi handle karo.

// let a = 10;
// let b=25;
// let c=25;

// if ((a>b)||(a==b)){
//     if((a>c)||(a==c)){
//         console.log(a)
//     }else{
//         console.log(c)
//     }  
// }else{
//     if ((b>c)||(b==c)){
//         console.log(b)
//     }
//     else{
//         console.log(c)
//     }

// }



// 4. Grade Calculator

// Question:
// Student ke marks diye gaye hain (0–100).

// Grade assign karo:

// Marks	Grade
// 90-100	A
// 80-89	B
// 70-79	C
// 60-69	D
// Below 60	F

// Input:

// 85

// Output:

// Grade B

// let marks = 70;

// if ( 0<=marks && marks < 60){
//     console.log("F")
// }
// else if (60 <= marks && marks <= 69){
//     console.log("D")

// }
// else if ( 70 <= marks && marks <= 79 ){
//     console.log("c")
// }
// else if (80 <= marks && marks <=89){
//      console.log("B")
// }
// else if ( 90 <=  marks && marks <= 100){
//     console.log("A")
// }
// else {
//      console.log("INVALID Marks");
// };


// 5. Calculator

// Question:
// Do numbers aur ek operator diya gaya hai (+, -, *, /).

// Result print karo.

// Input:

// 10
// 20
// +

// Output:

// 30

// Input:

// 20
// 5
// /

// Output:

// 4

// let a = 50;
// let b = 10 ;
// let operator = "+";

// switch ( operator){
// case '+':
//     console.log (a+b);
//     break
// case '-':
//     console.log (a-b);
//     break    
// case '*':
//     console.log (a*b);
//     break
// case '/':
//     console.log (a/b);
//     break    
// default :
//     console.log("haja");
// }



// 6. Voting Eligibility

// Question:
// Ek person's age di gayi hai.

// Age >= 18 → "Eligible for Voting"
// Otherwise → "Not Eligible"

// Input:

// 17

// Output:

// Not Eligible

// let age = 10 ;
//  if ( age >= 18){
//     console.log("Eligibility")
//  }
//  else{
//     console.log("nhi hai ")
//  }


// . Leap Year

// Question:
// Ek year diya gaya hai. Check karo leap year hai ya nahi.

// Rules:

// 4 se divisible ho
// Lekin 100 se divisible na ho

// OR

// 400 se divisible ho

// Input:

// 2024

// Output:

// Leap Year

// Input:

// 1900

// Output:

// Not Leap Year

// let year = 2000


// if ((year % 4 == 0 && year % 100 != 0)||(year % 400 == 0)){
//     console.log("Leap year ")

// }
// else{
//     console.log(" not leap")
// }

// 8. Electricity Bill

// Question:
// Units consumed ke according bill calculate karo:

// Units	Rate
// 0-100	₹5/unit
// 101-200	₹7/unit
// Above 200	₹10/unit

// Input:

// 150

// Output:

// 1050

// Explanation:

// 150 × 7 = 1050
// let units = 110 ;
// if ( 0 <= units && units <= 100 ){
//      console.log(units*5);
// }
// else if(101 <= units && units <= 200 ){
//     console.log(units*7);
// }
// else {
//     console.log(10*units)
// }

// Largest of 4 Numbers
// Smallest of 3 Numbers
// Check Character is Vowel or Consonant
// Check Number is Divisible by 5 and 11
// Find Greatest Among 3 Numbers using Nested If
// Profit or Loss
// Triangle Validity Check
// Simple Interest Calculator

// Ye thode aur interview-oriente

// largest of 4 number

// let a=1
// let b=8
// let c=3
// let d=0

// if (a > b){
//     if(a>c){
//         if(a>d){
//             console.log(a)
//         }else{
//             console.log(d)
//         }
//     }
//     else {
//         if (c > d){
//             console.log(c)
//         }else{
//             console.log(d)
//         }
//     }
// }else if (b>c){
//         if (b>d){
//                 console.log(b)
//             }
//         else{
//                 console.log(d)
//             }
// }else {
//     if (c>d){
//         console.log(c)
//     }
//     else{
//         console.log(d)
//     }
// }


// # Check Character is Vowel or Consonant


// let word = "rahul"
// l=word.length


// for ( let i =0 ; i <l; i++ ){
//     if (word[i] === ('a'||'i'||'o'||'u'||'e')){
//         console.log("vowels")
//     }
//     else{
//         console.log("consonant")
//     }

// }


// let c="o";

// if (['a','e','i','o','u'].includes(c(lowercase( )))){
//         console.log("vowels");
//     }
//     else{
//         console.log("consonant");
//     }

// // 4. Check Number is Divisible by 5 and 11

// n=55

// if ( n%5===0&&n%11===0){
//     console.log("divisible");
// }
// else{
//     console.log("not divisible")
// }


// 5. Find Greatest Among 3 Numbers using Nested If

let a =90;
let b =30;
let c = 40;
if (a>b){
    if (a>c){
        console.log(a)
    }else{
        console.log(c)
    }
}
else{
    if (b>c){
        console.log(b)
    }
    else{
        console.log(c)
    }
}