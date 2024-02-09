//need to create an which starts with 0, 1, and then contatenates the last value two values in the array,
//eg, 0 + 1 = 1 then pushes that value into the array, [0, 1, 1], it needs to continue doing this until it
//reaches the value inputed into the function, "n". the next value would be the last two values in the array,
//[0, 1, 1,] which is 1 + 1, it will then carry on and push the new value into the array becoming, [0, 1, 1, 2]

//i need an array, a variable which takes the last two positions in the array, another variable which
//contatenates them and pushes that new value into the array.
//start with an if statement which checks the value of the function, and if it is 0, input nothing into the array
//if it is 1, input 0 into the array, if its 2, input 1 into the array.
//and for every value of the function after 2 create a while loop for each iteration, contatenates the last two values
//in the array, and then runs through the loop again until the function value is reached//
//
function fibonacciGenerator (n) {
    var arr = [];

    var newval;
    var count = 0;

while (count < n){
    if(count === 0){
        newval = 0;
        }
    else if(count === 1){
        newval = 1;
        }
    else {
        var positionback1 = arr[count - 1];
        var positionback2 = arr[count - 2];
        newval = positionback1 + positionback2;
        }
    
    arr.push(newval);
    count++;
}
return arr;
}
function main(){
    alert   (fibonacciGenerator(10))
}