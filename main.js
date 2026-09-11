let x = new Date();
const y = new Date('2026-12-31');
let numberOfDays = Math.floor((y - x) / (1000 * 60 * 60 * 24));
const namn = "ida" 

document.getElementById("newYearCounter").textContent = (`Hej!! ${namn.toUpperCase()}, det är ${numberOfDays} dagar kvar till nyår!`);

