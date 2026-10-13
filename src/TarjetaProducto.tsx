import { pesos, type Producto } from "./datos";

interface TarjetaProps {
  producto: Producto;
  onAgregar: (producto: Producto) => void;
}

export default function TarjetaProducto({ producto, onAgregar }: TarjetaProps) {
  const agotado = producto.existencia === 0;

  return (
    <article className="tarjeta">
      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p className="precio">{pesos.format(producto.precio)}</p>
      <p className="existencia">
        {agotado ? "Agotado" : `Existencia: ${producto.existencia}`}
      </p>
      <button disabled={agotado} onClick={() => onAgregar(producto)}>
        {agotado ? "Agotado" : "Agregar al carrito"}
      </button>
    </article>
  );
}