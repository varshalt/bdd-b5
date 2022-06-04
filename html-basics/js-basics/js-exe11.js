var names = ["Adam", "Smith", "Sam", "Jhonathan"];

var arry = {};

for (var i = 0; i < names.length; i++) {
    var test = names[i]                  //storing strings into another variable
    var test2 = test.length              // Calculates character in each string and stores the value in another variable
    arry[test2] = names[i]                 //Storing length as key and name as value in an object 

}

var arry2 = Object.keys(arry)           //Retriving keys of object and storing it into an array

arry2.sort();                         //Sorting the array

console.log(arry[arry2[0]])             // Gives the first string in that array (which is in [0] place)
