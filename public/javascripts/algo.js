// array tested
var array = [
  10,
  7,
  -3,
  4.5,
  -1.3,
  579
];

/**
 * trololo() return the number mostly approching 0
 * of all numbers in the array passed in param
 *
 * @param <int> array
 * @return <int> array[minIndex]
 */
function trololo(array) {

  // testing if the array isEmpty, return false
  if (array[0] === undefined) {
    console.log('votre tableau est vide');
    return false;
  }


  var minValue = array[0];
  var minIndex = 0;

  // arrayPositif will contain a copy of array value with positive value, if there is negative value in it
  var arrayPositif = array.slice();


  for (var i = 0; i < array.length; i++) {
    // if the value is negative, them we make the opposite of this one
    if (arrayPositif[i] < 0) {
      arrayPositif[i] += arrayPositif[i] * (-2);
    }
  }

  // now that all value are positive, we can check which one is the lowest
  for (var i = 0; i < array.length; i++) {
    if (arrayPositif[i] < minValue) {
      minValue = arrayPositif[i];
      minIndex = i;
    }
  }

  // show and return the lowest value
  console.log('la valeur la plus proche de 0 est : '+array[minIndex]);
  return array[minIndex];
}



// call the function
trololo(array);