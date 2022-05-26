//Function that accepts a number and returns the cube root of the number

function numbcube(a) {
    console.log('To find the cube root of the given number: ' + a)
    return Math.cbrt(a)                         
}
console.log('Cube root is: ' + numbcube(200))