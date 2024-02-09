//function | parameters as strings | function needs to generate a random number and return it as a percentage |
// end function by returning an alert or message, saying something like, x, y you have a x% chance of love...|

function names(name1, name2){
    name1 = prompt("what is the first persons name?");
    name2 = prompt("what is the second persons name?");
    var randomNumber = Math.random() * 100;
    randomNumber = Math.floor(randomNumber);
    alert(name1 + " and" + name2 + " you have a " + randomNumber +"% chance of finding love");
}

names()
