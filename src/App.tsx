import { useState } from "react";
import { productos, type Producto } from "./datos";
import Layout from "./Layout";
import Encabezado from "./Encabezado";
import PiePagina from "./PiePagina";
import Filtros, { type Filtro } from "./Filtros";
import Catalogo from "./Catalogo";

export default function App() {
  const [filtro, setFiltro] = useState<Filtro>("todas");
  const [carrito, setCarrito] = useState<Producto[]>([]);

  // Derivados: se calculan en cada pintada, no van al estado
  const visibles =
    filtro === "todas"
      ? productos
      : productos.filter((p) => p.categoria === filtro);
  const total = carrito.reduce((suma, p) => suma + p.precio, 0);

  // Siempre un arreglo nuevo, nunca push
  const agregar = (producto: Producto) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <Layout
      encabezado={<Encabezado piezas={carrito.length} />}
      pie={<PiePagina piezas={carrito.length} total={total} />}
    >
      <Filtros activo={filtro} onCambiar={setFiltro} />
      <Catalogo productos={visibles} onAgregar={agregar} />
    </Layout>
  );
}