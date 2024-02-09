let name = prompt("What is your name?");
 firstChar = name.slice(0,1);
 name = name.slice(1,20)
 firstChar = firstChar.toUpperCase()
 alert("Hello! your name is " + firstChar + name)