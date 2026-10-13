export type Filtro = "todas" | "calzado" | "ropa" | "accesorios";

const categorias: Filtro[] = ["todas", "calzado", "ropa", "accesorios"];

interface FiltrosProps {
  activo: Filtro;
  onCambiar: (filtro: Filtro) => void;
}

export default function Filtros({ activo, onCambiar }: FiltrosProps) {
  return (
    <nav className="filtros">
      {categorias.map((c) => (
        <button
          key={c}
          className={c === activo ? "filtro activo" : "filtro"}
          onClick={() => onCambiar(c)}
        >
          {c.charAt(0).toUpperCase() + c.slice(1)}
        </button>
      ))}
    </nav>
  );
}