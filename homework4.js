function randomInteger(min, max) {
    // випадкове число від min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  
  alert( randomInteger(100, 1000) );