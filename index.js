function dwarfRollCall(dwarves) {
   var array = []
   var string = ""
   for (var i = 0; i < dwarves.length; i++){
     string += `${i+1}. ${dwarves[i]} `
     if (i < dwarves.length - 1){
     }
   }
   return string
}



function summonCaptainPlanet(planeteerCalls){
  var array = []
  var i = 0
  var string = ""
  while (i < planeteerCalls.length){
    array.push(`${planeteerCalls[i].toUpperCase()}!`)
    i++
  }
  return array
}



function longPlaneteerCalls(words) {
  var array = []
  var i = 0
  for (i = 0; i < words.length; i++){
    if (words.length > 4) {
      return true
    }
    else if (words.length < 4){
      return false
    }
  }
}


function findTheCheese(foods) {
  var cheddarCheese = ["cheddar", "gouda", "camembert"]
  var noCheeseArray = 0
  var i = 0
  for (i = 0; i < foods.length; i++) {
      if (cheddarCheese[noCheeseArray] === foods[i]) {
        for (noCheeseArray = 0; noCheeseArray < cheddarCheese.length; noCheeseArray++) {
        return foods[i]
      }
    }
  }
  return "no cheese!"
}


function wordsWithB(words) {
  var array = []
 for (i = 0; i < words.length; i++)
  if (startsWith('B') )
  return 
}


