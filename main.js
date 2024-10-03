function addition(a, b) {
    const result = a + b
    return result 
  }
  
  console.log(addition(2, 3));
  
  function salutation(nom) {
    return "Bonjour " + nom
  }
  
  console.log(salutation("Alice"));

  function estPair(nombre) {
    let result;
    if (nombre === 4) {
      result = true
    } else {
      result = false
    }
    return result;
  }
  
  console.log(estPair(4));
  console.log(estPair(7));

  function aireRectangle(longueur, largeur) {
    const result = longueur * largeur
    return result
  }
  console.log(aireRectangle(5, 3));
  
  function estMajuscule(chaine) {
    if (chaine === chaine.toUpperCase()) {
      return true
    } else {
      return false
    }
  }
  console.log(estMajuscule("HELLO"));
  console.log(estMajuscule("Hello"));

  function maxDeuxNombres(a, b) {
    return Math.max(a, b)
  }
  console.log(maxDeuxNombres(5, 10))

  function difference(a, b) {
    const plusGros = Math.max(a, b)
    const plusPetit = Math.min(a, b)
    return plusGros - plusPetit
  }
  console.log(difference(10, 3));

  function convertirEnCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9
  }
  console.log(convertirEnCelsius(100));

  function estMajeur(age) {
    if (age >= 18) {
      return true
    } else {
      return false
    }
  }
  console.log(estMajeur(20)); 
  console.log(estMajeur(16));

  function maxTroisNombres(a, b, c) {
    return Math.max(a, b, c)
  }
  console.log(maxTroisNombres(3, 7, 5));

  function calculer(a, b, operation) {
    return operation(a, b)
  }
  function addition(x, y) {
    return x + y
  }
  function multiplication(x, y) {
    return x * y 
  }
  console.log(calculer(5, 3, addition)); 
  console.log(calculer(5, 3, multiplication));

