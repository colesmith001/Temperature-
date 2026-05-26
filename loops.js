console.log("loops")
// for(let i=1; 1<4; i++){
//     document.write("my for is working")
// }

// for(let i=1; 1<=10; i++){
//     document.write(`<p>${1}</p>}`)
// }

// mini challenge
// for(let i=2; 1<=100; i++){
//     document.write(`<p> 2 x ${i}= ${2*i}</p>`);
// }
const num = 3;
    for(let i=1;i<11;i++){
    document.write(`<p> ${num} x ${i} = ${i*num}</p>`);
    }

let temps = [30,40,25,15,24,35];
console.log(temps[0]);
console.log(temps[1]);
console.log(temps[2]);
console.log(temps[3]);
console.log(temps[4]);
console.log(temps[5]);

for(let i=0; i<=5; i++){
    document.write(`<li> ${temps[i]}<li/>`);
}