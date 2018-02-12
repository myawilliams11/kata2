{const gotCitiesCSV = "King's Landing, Braavos, Volantis, Old Valyria, Free Cities, Qarth,Meereen"; 
const cities= gotCitiesCSV.split(",")
const div= document.createElement("div")
// gives the quotes and brackets
div.textContent= JSON.stringify(cities)
document.body.appendChild(div)
}


{const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";
const thing= bestThing.split( )
const div= document.createElement("div")
div.textContent= JSON.stringify(thing)
document.body.appendChild(div)
}

{const gotCitiesCSV = "King's Landing, Braavos, Volantis, Old Valyria, Free Cities, Qarth,Meereen"; 
// why arent these semi-colons?!?!?!
const cities= gotCitiesCSV.split(";;")
const div= document.createElement("div")
div.textContent= JSON.stringify(cities)
document.body.appendChild(div)
}

{const lotrCitiesArray = "Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"; 
const cities= gotCitiesCSV.split(",")
const div= document.createElement("div")
// gives the quotes and brackets
div.textContent= JSON.stringify(cities)
document.body.appendChild(div)
}