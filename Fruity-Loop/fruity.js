// Initialize variable number of vowel (vnum), number of consonant (cnum),
// article at the beginning of sentense, regEx to check the first letter is a vowel,
// text for display on HTML page and array fruits

var vnum="";
var cnum="";
var article="";
var regExp = /[A,E,I,O,U]/;
var text="";
var fruits = ["Apple", "Orange", "Banana", "Pear", "Peach", "Strawberry", "Cherry", "Acai"];

// Iterate array with for in loop to count vowel and consonant with use of case switch

for (let fruit in fruits) {
    var vowel=0;
    var consonant=0;
    article = fruits[fruit][0].match(regExp) ? "An" : "A";    //ternary operator to determine article
    for (var i=0; i<fruits[fruit].length; i++) {
        switch (fruits[fruit][i].toLowerCase()) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                vowel++;
                break;
            default:
                consonant++;
        }
    }
    vnum = vowel>1 ? "vowels" : "vowel";               //ternary operator to determine plural or singular
    cnum = consonant>1 ? "consonants" : "consonant";
    console.log(`${article} ${fruits[fruit]} has ${vowel} ${vnum} and ${consonant} ${cnum}`);
    text += `${article} ${fruits[fruit]} has ${vowel} ${vnum} and ${consonant} ${cnum}` + "<br>";
    document.getElementById("col1").innerHTML =text;
}

// Use of object to determine the total number of letter we need 
// including block capital and lower case

text="";
var obj={};
// for loop to create elements to the object if they don't exist or increment count if they exist
for (let fruit of fruits) {
    for (var i=0; i<fruit.length; i++) {
        obj[fruit[i]]= obj[fruit[i]] ? obj[fruit[i]]+1 : 1;
    }
}
// Once object has all elemnt we can print outcome to console and HTML page
for (let element in obj) {
    console.log(`I need to order ${obj[element]} ${element}`);
    text += `I need to order ${obj[element]} ${element}` + "<br>";
    document.getElementById("col2").innerHTML = text;
}
