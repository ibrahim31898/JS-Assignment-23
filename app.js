// Questions PDF 31-40.docx:

// Chapter 31 - 34 (Date & Time)

// 1. 
var dObj = new Date();

// 2. 
var dStr = new Date().toString();

// 3. 
var d = new Date();
var day = d.getDay();

// 4. 
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
alert(dayNames[day]);

// 5. 
var dateTime = new Date();

// 6. 
var later = new Date(2020, 11, 31);

// 7. 
var specificDate = new Date(1992, 1, 2);

// 8. 
alert(new Date(1980, 0, 1).getTime());

// 9. To change the year of a date in JavaScript, you can use the setFullYear method or directly assign a new year to the year property of the Date object.

// 10. 
function changeMonthToJanuary(date) {
    date.setMonth(0); 
}

// 11. There's no direct method to change the day of the week for a specific date in JavaScript. Days of the week are determined by the date itself.

// 12. 
function changeMinutesToSpecificValue(time) {
    var newMinutes = prompt("Enter new minutes:");
    time.setMinutes(parseInt(newMinutes));
}

// 13. 
function addHoursToTime(time, hours) {
    time.setHours(time.getHours() + hours);
}

// 14. 
function calculateAge(dateOfBirth) {
    var today = new Date();
    var birthDate = new Date(dateOfBirth);
    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

// Chapter 35 - 37 (Functions)

// 1. 
function displayAlert() {

}

// 2. 
function askName() {
    var userName = prompt("Enter name:");
    return userName;
}

// 3.
function callTwoFunctions() {
    
    
}

// 4. 
function promptAndAlertName() {
    var userName = askName();
    alert(userName);
}

// 5. 
function concat(a, b, c) {

}

// 6. 
function concatenateStrings(str1, str2) {
    var result = str1 + str2;
    return result;
}

// 7. 
function multiplyThreeNumbers(num1, num2, num3) {
    var result = num1 * num2 * num3;
    return result;
}

// 8. 
function calculateAverage(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

// 9. 
function sumTwoNumbers(num1, num2) {
    return num1 + num2;
}

// 10. 

// 11. 
var result = someFunction();

// 12. 
function letterCounts(word) {
    var counts = {};
    for (var i = 0; i < word.length; i++) {
        var char = word[i];
        counts[char] = counts[char] ? counts[char] + 1 : 1;
    }
    return counts;
}

// 13. 
function setYearInDateObject(date, year) {
    date.setFullYear(year);
}

// 14. 
function calculateAge(dateOfBirth) {
    var today = new Date();
    var birthDate = new Date(dateOfBirth);
    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

// 15.
function checkPresence(word, array) {
    return array.includes(word);
}

// 16. 
function repeatLetter(letter, times) {
    return letter.repeat(times);
}

// 17. 
function reverseArray(arr) {
    return arr.reverse();
}

// Chapter 38 (Local vs. Global Variables)

// 1. 
function demoLocalVariable() {
    var localVar = "This is a local variable";
    console.log(localVar);
}

// 2. 
var globalVar = "This is a global variable";
function accessGlobalVariable() {
    console.log(globalVar);
}

// Chapter 39, 40 (Switch Statements)

// 1. 
var variable = 2;
switch (variable) {
    case 1:
       
        break;
    case 2:
       
        break;
    default:
        
}

// 2.
var cityName = prompt("Enter city name:");
switch (cityName) {
    case "London":
        alert("You entered London!");
        break;
    case "Paris":
        alert("You entered Paris!");
        break;
    default:
        alert("City name not recognized.");
}



// Chapters 31-34 pdf:


// 1. 
var currentDateAndTime = new Date();
alert(currentDateAndTime);

// 2. 
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentMonth = months[new Date().getMonth()];
alert(currentMonth);

// 3. 
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var currentDayLetters = days[new Date().getDay()].substring(0, 3);
alert(currentDayLetters);

// 4. 
var currentDay = new Date().getDay();
if (currentDay === 0 || currentDay === 6) {
    alert("It’s Fun day");
}

// 5. 
var currentDate = new Date().getDate();
if (currentDate < 16) {
    alert("First fifteen days of the month");
} else {
    alert("Last days of the month");
}

// 6. 
var minutesSinceMidnight = (new Date() - new Date().setHours(0, 0, 0, 0)) / (1000 * 60);
console.log(minutesSinceMidnight);

// 7. 
var currentTime = new Date().getHours();
if (currentTime < 12) {
    alert("It's AM");
} else {
    alert("It's PM");
}

// 8. 
var laterDate = new Date(2020, 11, 0);

// 9. 
var ramadanStartDate = new Date(2015, 5, 18);
var currentDate = new Date();
var daysPastSinceRamadan = Math.floor((currentDate - ramadanStartDate) / (1000 * 60 * 60 * 24));
alert(daysPastSinceRamadan);

// 10. 
var referenceDate = new Date(1970, 0, 1);
var secondsElapsed = Math.floor((new Date(2015, 0, 1) - referenceDate) / 1000);
document.write("Seconds elapsed since the beginning of 2015: " + secondsElapsed + " seconds");

// 11. 
var currentDateAndTime = new Date();
var currentHours = currentDateAndTime.getHours();
currentDateAndTime.setHours(currentHours + 1);
alert(currentDateAndTime);

// 12. 
var date100YearsBack = new Date();
date100YearsBack.setFullYear(date100YearsBack.getFullYear() - 100);
alert(date100YearsBack);

// 13. 
var age = prompt("Enter your age:");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - parseInt(age);
alert("Your birth year is: " + birthYear);

// 14. 
var customerName = prompt("Enter customer name:");
var currentMonth = months[new Date().getMonth()];
var numberOfUnits = parseFloat(prompt("Enter number of units:"));
var chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));

var netAmountPayable = numberOfUnits * chargesPerUnit;
var latePaymentSurcharge = 0.05 * netAmountPayable;
var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

alert("Customer Name: " + customerName +
    "\nCurrent Month: " + currentMonth +
    "\nNumber of Units: " + numberOfUnits +
    "\nCharges per Unit: " + chargesPerUnit.toFixed(2) +
    "\nNet Amount Payable (within Due Date): " + netAmountPayable.toFixed(2) +
    "\nLate Payment Surcharge: " + latePaymentSurcharge.toFixed(2) +
    "\nGross Amount Payable (after Due Date): " + grossAmountPayable.toFixed(2));



// Chapters 35-38 pdf:   


// 1. 
function displayCurrentDateTime() {
    var currentDateAndTime = new Date();
    alert(currentDateAndTime);
}

// 2.
function greetUser(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    alert("Hello, " + fullName + "!");
}

// 3. 
function addNumbers(num1, num2) {
    return num1 + num2;
}

// 4. 
function calculator(num1, num2, operator) {
    var result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = "Invalid operator";
    }
    return result;
}

// 5. 
function squareNumber(num) {
    return num * num;
}

// 6. 
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

// 7. 
function countNumbers(start, end) {
    for (var i = start; i <= end; i++) {
        document.write(i + "<br>");
    }
}

// 8. 
function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(side) {
        return side * side;
    }
    var hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
    return hypotenuse;
}

// 9. 
function calculateRectangleArea(width, height) {
    return width * height;
}

// 10. 
function isPalindrome(str) {
    var reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

// 11. 
function capitalizeFirstLetter(str) {
    var words = str.split(' ');
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}

// 12. 
function findLongestWord(str) {
    var words = str.split(' ');
    var longestWord = "";
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}

// 13. 
function countOccurrences(str, letter) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}

// 14. 
function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    alert("The circumference is " + circumference.toFixed(2));
}

function calcArea(radius) {
    var area = Math.PI * radius * radius;
    alert("The area is " + area.toFixed(2));
}



// Chapters 38-42 pdf:


// 1. 
function power(a, b) {
    return Math.pow(a, b);
}

// 2. 
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// 3. 
function calculateArea(a, b, c) {
    var s = calculateSemiPerimeter(a, b, c);
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

function calculateSemiPerimeter(a, b, c) {
    return (a + b + c) / 2;
}

// 4. 
function mainFunction(mark1, mark2, mark3) {
    var avg = calculateAverage(mark1, mark2, mark3);
    var percentage = calculatePercentage(mark1, mark2, mark3);
    console.log("Average: " + avg);
    console.log("Percentage: " + percentage + "%");
}

function calculateAverage(mark1, mark2, mark3) {
    return (mark1 + mark2 + mark3) / 3;
}

function calculatePercentage(mark1, mark2, mark3) {
    return ((mark1 + mark2 + mark3) / 300) * 100;
}

// 5. 
function customIndexOf(str, char) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1; 
}

// 6. 
function deleteVowels(sentence) {
    return sentence.replace(/[aeiou]/gi, '');
}

// 7. 
function countSuccessiveVowels(text) {
    var count = 0;
    for (var i = 0; i < text.length - 1; i++) {
        switch (text[i] + text[i + 1]) {
            case "ae":
            case "ai":
            case "ao":
            case "au":
            case "ea":
            case "ei":
            case "eo":
            case "eu":
            case "ia":
            case "ie":
            case "io":
            case "iu":
            case "oa":
            case "oe":
            case "oi":
            case "ou":
            case "ua":
            case "ue":
            case "ui":
            case "uo":
            case "uu":
                count++;
                break;
        }
    }
    return count;
}

// 8. 
function kmToMeters(km) {
    return km * 1000;
}

function kmToFeet(km) {
    return km * 3280.84;
}

function kmToInches(km) {
    return km * 39370.1;
}

function kmToCentimeters(km) {
    return km * 100000;
}

// 9. 
function calculateOvertimePay(hoursWorked) {
    var regularHours = 40;
    var overtimeRate = 12.00;
    if (hoursWorked > regularHours) {
        var overtimeHours = hoursWorked - regularHours;
        return overtimeHours * overtimeRate;
    } else {
        return 0;
    }
}

// 10. 
function calculateCurrencyNotes(amountToWithdraw) {
    var hundredNotes = Math.floor(amountToWithdraw / 100);
    var fiftyNotes = Math.floor((amountToWithdraw % 100) / 50);
    var tenNotes = Math.floor(((amountToWithdraw % 100) % 50) / 10);
    alert("You will have " + hundredNotes + " hundred notes, " + fiftyNotes + " fifty notes, and " + tenNotes + " ten notes.");
}
