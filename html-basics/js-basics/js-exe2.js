
function highnumb(a,b){
    console.log('To find the highest number:\n' + a, + b)
    if (a>b)                                                //Condition to check the highest of two numbers
    { 
        return a;
    }
        else  {
            return b;
        }
}

console.log('Highest number is: ' + highnumb(10, 20))        //Passing inputs for the function   