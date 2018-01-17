/*eslint-env browser*/
/*eslint "no-console": "off"*/
var text = "Starting javascript...";
console.log(text);
var name = "Egle";
console.log(name);
var age = 34;
console.log(age);
var ignasiAge = 32;
var ageDiff = ignasiAge - age;

if(ageDiff > 0) {
    console.log("Ignasi is older than you");
} else if(ageDiff === 0) {
    console.log("You have the same age than Ignasi");
} else {
    console.log("Ignasi is younger than you");
}

var classmates = ["Egle", "Nikita", "Victor", "Jordi", "Mykyta", "Virginia", "Ernesto", "Eddie", "Mike", "Javier","Ignacio", "Bruno", "Raul", "Karin", "Francesc", "Mohd"];
classmates.sort();
console.log(classmates[0]);
var length = classmates.length;
console.log(length);
console.log(classmates[15]);
var i;
for (i = 0; i < length; i++) {
    console.log(classmates[i]);
}
var agesOfClassmates = [22, 36, 34, 25, 20, 21, 26, 28, 27, 35, 30, 25, 22, 23, 26, 23];


for (i = 0; i < agesOfClassmates.length; i++) 
{
    if(agesOfClassmates[i] % 2 === 0) {
    console.log("The age is " + agesOfClassmates[i]); 
    
    }
}

var exampleArray = [3,6,67,6,23,11,100,8,93,7,6,6,6,6,6,6,17,24,0,1,33,45,28,33,23,12,99,100];

function lowestNumber(array) {
    var lowestNum = array[0];
    for (var i = 0; i < array.length; i++) {
        if(array[i] < lowestNum) {
            lowestNum = array[i];
        }   
    }
    console.log ("The lowest number in array is " + lowestNum);
}

lowestNumber(exampleArray);


function largestNumber(array) {
    var largestNum = array[0];

    for (var i = 0; i < array.length; i++) {
        if(array[i] > largestNum) {
            largestNum = array[i];
        }   
    }
    console.log ("The largest number in array is " + largestNum);
}
largestNumber(exampleArray);


function numberGivenIndexOfArray (array, index) {
    console.log(array[index]);
}
numberGivenIndexOfArray(exampleArray, 1);

/* 
function repeatedValues(array) {
    
    var result = array.filter((value, index) => array.indexOf(value) !== index);
    console.log(result);

}
repeatedValues(exampleArray); 
*/
 

function findRepeatedValues(array) {

    var result = [];
   
    for (var i = 0; i < array.length; i++) {
        for (var n = i + 1; n < array.length; n++) {
            if(array[i] == array[n]) {
                if(result.includes(array[i]) == false) {
                    result.push(array[i]);    
                }
           }
        }
    }
  
  console.log('The duplicates in this array are ' + result);
}

findRepeatedValues(exampleArray);


var myColors = ["Red", "Green", "White", "Black"];

function arraytoString(array, separatorString) {
    
    /*var newString = '';
    newString = array.join(separatorString);
    console.log(newString);*/
    
    var newString = '';
    for (var i = 0; i < array.length; i++){
         newString += array[i];       
        if(i != array.length - 1) {
            newString += separatorString;
        } 
       } 
    console.log(newString)
 }

arraytoString(myColors, " // ");


var number = 32243;

function reverseNumber(num) {
    num = num + "";
    console.log(+(num.split("").reverse().join("")));
}
reverseNumber(number);

var text = 'webmaster';

function stringOrderAlphabetically (n) {
     
    console.log(n.split('').sort().join('')); 
}
stringOrderAlphabetically(text);


var t = "prince of persia";

function upperCaseFirstWord (str) {
    var arrayOfStrings = str.split(" ");
    console.log(arrayOfStrings);
    var newlyCreatedString = "";
    for(var i = 0; i < arrayOfStrings.length; i++){
        var firstL = arrayOfStrings[i].charAt(0).toUpperCase();
        var restOfWord = arrayOfStrings[i].slice(1);
        var newWord = firstL + restOfWord;
        newlyCreatedString += newWord + " ";
        
    }
            
    console.log(newlyCreatedString);
}

upperCaseFirstWord(t);


var f = 'Web Development Tutorial';

function longestWord(str) {
    str = str.split(' ');
    var longest = '';
    for(var i = 0; i < str.length; i++){
        if (str[i].length > longest.length) {
            longest = str[i];
        }
    }
    console.log(longest);
}
longestWord(f);