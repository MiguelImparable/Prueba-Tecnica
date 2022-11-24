import "../styles/Button.css";
// Estructura de todos los Botones de la Aplicacion
export function Button({ className, texto, manejarClick }) {
  return (
    <div className={className} id="refresh">
      <button onClick={manejarClick}>{texto}</button>
    </div>
  );
}
