// creat
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let temps = [];
let convertedTemp =[]



// input scale
let scale= prompt("Enter C or F");
let temp= prompt("Enter the temperature");
console.log(temp,scale)

if(scale === "C"){
    convertedTemp = (temps - 32)*5/9;
    console.log( `${temp} ---> ${convertedTemp}`);
}
else if(scale==="F"){
    convertedTemp = (temps * 9/5)+32;
    console.log(`${temp} ---> ${convertedTemp}`);
}
for(let i=0 ; i<7 ; i++){
    let temp = prompt("enter the temp");
    temps.push(`<li>${days[i]}  -->  ${temp} \u00B0F</li>`);
    
}

console.log(temps,convertedTemp);
document.getElementById("finals").innerHTML= temps;


