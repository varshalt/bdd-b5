var a = 'Learning HTML and Java Script'
var b = 'Learning to compare two strings'

function comptostring(a,b) {   
   console.log("\n This is the first string : " + a)
   console.log("\n This is the second string : " + b)
   if (a.length>=b.length)    
    return a
    else 
    return b   
}

console.log("\n Longest String : "  + comptostring(a,b))    
