const userInputC = Number(prompt("Enter the Celcius here"))
const userInputF = Number(prompt("Enter the Farenheit here"))

//C = (F - 32) * 5/9. 
const convertCtoF = (userInputC * (9/5)) + 32
//F = (C * 9/5) + 32
const convertFtoC =  (userInputF - 32) * (5/9)


console.log(`${userInputC}°C is ${convertCtoF} °F`);
console.log(`${userInputF}°F is ${convertFtoC} °C`);

//intput value is 60 for celcius and 45 for farenheeit
//Output

//60°C is 140°F
//45°F is 7.222222222222222°C
