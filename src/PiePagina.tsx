import { pesos } from "./datos";

interface PieProps {
  piezas: number;
  total: number;
}

export default function PiePagina({ piezas, total }: PieProps) {
  return (
    <footer className="pie">
      <span>
        {piezas} {piezas === 1 ? "pieza" : "piezas"} en el carrito
      </span>
      <strong>Total: {pesos.format(total)}</strong>
    </footer>
  );
}