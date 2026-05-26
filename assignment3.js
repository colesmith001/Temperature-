console.log("Assignment 3");


let scale= prompt("Enter C or F");
let temp= prompt("Enter the temperature");
console.log(temp,scale)

let convertedTemp;
if(scale === "C"){
    convertedTemp = (temp - 32)*5/9;
    console.log( `${temp} ---> ${convertedTemp}`);
}
else if(scale==="F"){
    convertedTemp = (temp * 9/5)+32;
    console.log(`${temp} ---> ${convertedTemp}`);
}
document.getElementById("weather-input").innerText = convertedTemp;




    

