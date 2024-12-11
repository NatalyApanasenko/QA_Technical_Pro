function pow(x, y) {
    let result = x;
  
    for (let i = 1; i < y; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let y = prompt("y?", '');
  
  if (y < 1) {
    alert(`Ступінь ${y} не підтримується, використовуйте натуральне число`);
  } else {
    alert( pow(x, y) );
  }
