// Function that returns longest string if two strings are given as input parameter

function comptostring(a, b) {
    console.log("\n This is the first string : " + a)
    console.log("\n This is the second string : " + b)
    if (a.length >= b.length)
        return a
    else
        return b
}

console.log("\n Longest String : " + comptostring('HelloWorld', 'Hello'))    
