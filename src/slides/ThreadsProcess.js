import React from 'react';

function ThreadsProcess() {
  return (
    <section>
      <section>Process vs Thread</section>
      <section>
        <h5>Proceso</h5>
        <ul>
          <li>Ejecución independiente con su propio espacio de memoria.</li>
          <li>
            Cada proceso tiene su propia copia de datos, código y recursos,
            no comparten directamente memoria.
          </li>
        </ul>
      </section>
      <section>
        <h5>Thread</h5>
        <ul>
          <li>Un thread, es una unidad más pequeña de ejecución dentro de un proceso</li>
          <li>
            Los hilos comparten el mismo espacio de memoria y
            recursos que el proceso que los crea. Y esto los hace mas ligeros
            y eficientes en
            términos de uso de recursos que los procesos.
          </li>
          <li>Pero tambien pueden traer problemas...</li>
        </ul>
      </section>
    </section>
  );
}

export default ThreadsProcess;
