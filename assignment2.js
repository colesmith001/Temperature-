// constansts
const city = "San Diego"
//step 1. create a fn gets C and convert it to F
function celsiusToFahrenheit (celsius){
    return celsius * 9/5 + 32; 
}
// step 2. Create a var for each day with C
let mondayC = 29;
let tuesdayC = 28;
let wednesdayC = 42;
let thursdayC = 35;
let fridayC = 37;
let saturdayC = 38;
let sundayC = 52;
// Step 3. Call the fn for every day
let mondayF = celsiusToFahrenheit(mondayC);
let tuesdayF = celsiusToFahrenheit(tuesdayC);
let wednesdayF = celsiusToFahrenheit(wednesdayC);
let thursdayF = celsiusToFahrenheit(thursdayC);
let fridayF = celsiusToFahrenheit(fridayC);
let saturdayF = celsiusToFahrenheit(saturdayC);
let sundayF = celsiusToFahrenheit(saturdayC);
// Step 4. create output to the HTML
console.log(mondayF);
let output = "";
output += `<li> Monday: ${mondayC}\u00B0C --> ${mondayF}\u00B0F ⛅ </li>`;
output += `<li> Tuesday: ${tuesdayC}\u00B0C --> ${tuesdayF}\u00B0F ⛅ </li>`;
output += `<li> Wednesday: ${wednesdayC}\u00B0C --> ${wednesdayF}\u00B0F 😵 </li>`;
output += `<li>Thursday: ${thursdayC}\u00B0C --> ${thursdayF}\u00B0F 🌞 </li>`;
output += `<li> Friday: ${fridayC}\u00B0C --> ${fridayF}\u00B0F 🌞 </li>`;
output += `<li> Saturday ${saturdayF}\u00B0C --> ${saturdayF}\u00B0F 🌞 </li>`;
output += `<li> Sunday ${sundayF}\u00B0C --> ${sundayF}\u00B0F 🌈 </li>`;

document.getElementById("forecast").innerHTML= output;