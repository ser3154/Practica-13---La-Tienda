import type { ReactNode } from "react";

interface LayoutProps {
  encabezado: ReactNode;
  pie: ReactNode;
  children: ReactNode;
}

export default function Layout({ encabezado, pie, children }: LayoutProps) {
  return (
    <div className="layout">
      {encabezado}
      <main className="contenido">{children}</main>
      {pie}
    </div>
  );
}