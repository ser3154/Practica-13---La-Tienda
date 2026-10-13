interface EncabezadoProps {
  piezas: number;
}

export default function Encabezado({ piezas }: EncabezadoProps) {
  return (
    <header className="encabezado">
      <h1 className="marca">Tienda en linea</h1>
      <span className="contador">🛒 {piezas}</span>
    </header>
  );
}