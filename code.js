var gotCitiesCSV = "King's Landing, Braavos, Volantis, Old Valyria, Free Cities, Qarth,Meereen"; 
var cities= gotCitiesCSV.split(",")
var div= document.createElement("div")
// gives the quotes and brackets
div.textContent= JSON.stringify(cities)
document.body.appendChild(div)



var bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";
var thing= bestThing.split( )
var div= document.createElement("div")
div.textContent= JSON.stringify(thing)
document.body.appendChild(div)


var gotCitiesCSV = "King's Landing, Braavos, Volantis, Old Valyria, Free Cities, Qarth,Meereen"; 
// why arent these semi-colons?!?!?!
var cities= gotCitiesCSV.split(";;")
var div= document.createElement("div")
div.textContent= JSON.stringify(cities)
document.body.appendChild(div)


var lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
var array= lotrCitiesArray.join(",")
var div= document.createElement("div")
// gives the quotes and brackets
div.textContent= JSON.stringify(array)
document.body.appendChild(div)
