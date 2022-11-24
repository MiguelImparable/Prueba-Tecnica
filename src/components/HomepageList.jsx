import "../styles/HomepageList.css";

// Estructura del componente
export function HomepageList({ amount }) {
  var x = amount;
  var a = 0;
  var perfectNaturalsNumbers = [];

  // Funcion para definir si el numero es primo
  function isPrime(number) {
    for (let i = 2, raiz = Math.sqrt(number); i <= raiz; i++)
      if (number % i === 0) return false;
    return number > 1;
  }

  while (x) {
    if (isPrime(a)) {
      var perfectNatural = 2 ** (a - 1) * (2 ** a - 1);
      perfectNaturalsNumbers.push(perfectNatural);
    }
    a += 1;
    if (perfectNaturalsNumbers.length > x - 1) break;
  }

  return (
    <div className="Perfect-Numbers-List">
      <h2>Lista de Numeros Naturales Perfectos</h2>
      {perfectNaturalsNumbers.map((element, index) => {
        return (
          <div className="Perfect-Number">
            <div className="index">No.{index + 1}</div>
            <div className="element">{element}</div>
          </div>
        );
      })}
    </div>
  );
}