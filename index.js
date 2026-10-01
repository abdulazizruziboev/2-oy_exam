// ============================================================== //
// 100 - masala

// const m100 = (str) => {
//     if(typeof str === "string" && str.includes("*")) {
//         const splitedStr = str.split("*");
//         if(splitedStr.length===2 && !isNaN(Number(splitedStr[1])) && Number(splitedStr[1])>0 ) {
//             return `<${splitedStr[0]}></<${splitedStr[0]}>`.repeat(Number(splitedStr[1]));
//         } else return "Iltimos to'gri formatdagi shortcut kiriting"
//     }
// };

// console.log(
//     m100("div*3")
// );

// ============================================================== //
// 101 - masala

// const m101 = (to) => {
//     let total = 0;
//     if(typeof to === "number" && !isNaN(to)) for(let i = 0; i<to+1;i++) total+=i;
//     return total;
// }

// console.log(m101(3));

// ============================================================== //
// 102 - masala

// const m102 = (initNum, distanceObject) => {
//     if(typeof initNum === "number" && !isNaN(initNum) && distanceObject!==null && typeof distanceObject === "object" && typeof distanceObject?.min === "number" && typeof distanceObject?.max === "number" && !isNaN(distanceObject?.min) && !isNaN(distanceObject?.max)) {
//         if(initNum<=distanceObject?.max&&initNum>=distanceObject?.min) return true
//         else return false;
//     }
// }

// console.log(m102(1,{min: 0, max: 99}));

// ============================================================== //
// 103 - masala

// const m103 = (num) => {
//     if(typeof num === "number" && !isNaN(num) && String(num**2).endsWith(String(num))) return true;
//     else return false;
// }

// console.log(m103(0));

// ============================================================== //
// 104 - masala

// const m104 = (array) => {
//     if(Array.isArray(array)) return array.map((e,i)=> (typeof e === "number" && !isNaN(e)) ? e+i : e );
// };

// console.log(m104([0,0,0,0,0,NaN]))

// ============================================================== //
// 105 - masala

// const m105 = (array) => {
//     if(Array.isArray(array) && array.length>0) return array.filter(e=>(e!=="cola" && e!=="fanta"));
// }

// console.log(
//     m105(["fanta", "cola", "water"])
// );

// ============================================================== //
// 106 - masala

// const m106 = (num) => {
//     if(typeof num === "number" && !isNaN(num)) return String(num).replaceAll(".","").length;
// }

// console.log(m106(
//     123
// ));

// ============================================================== //
// 107 - masala

// const m107 = (num) =>{
//     if(typeof num === "number" && !isNaN(num)) return Number(String(num).split("").reverse().join(""))
// }

// console.log(
//     m107(123)
// );


// ============================================================== //
// 108 - masala

// const m108 = (x,y) => {
//     if(typeof x === "number" && !isNaN(x) && typeof y === "number" && !isNaN(y) && x<y) {
//         for(let i = 0;;i++) {
//             let random = Math.floor(Math.random()*y)+1;
//             if(random>=x&&random<=y) return random;
//         }
//     }
// }

// console.log(
//     m108(5,9)
// );


// ============================================================== //
// 109 - masala

// const m109 = (num) => {
//     if(typeof num === "number" && !isNaN(num)) {
//         array = String(num).split("");
//         return array.reduce((acc,e)=>acc+((+e)**array.length),0) === num;
//     }
// }

// console.log(m109(1652));

// ============================================================== //
// 110 - masala

// const m110 = (str) => {
//     const shiftedLetters = "QWERTYUIOPASDFGHJKLZXCVBNM";
//     if(typeof str === "string" && str.length>0) return str.split("").filter(e=>shiftedLetters.includes(e)).length;
//     else return 0;
// };

// console.log(m110("Aziz"))