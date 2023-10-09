import React from 'react';
import ConcurrenciaParalelismoImage from '../images/concurrencia_vs_paralelismo.png';

function ConcurrenciaParalelismo() {
  return (
    <section>
      <section>
        Concurrencia != paralelismo

      </section>
      <section>
        <img src={ConcurrenciaParalelismoImage} alt="Meme" loading="lazy" />

        <aside className="notes">
          <p>
            Primera imagen, imaginense a un desarrollador que tiene 2 tareas asignadas ....
          </p>

          <p>
            Segunda imagen, si fueran 2 desaroolladores,
            la tarea 1 y tarea 2 se pueden ejecutar en paralelo
          </p>

          <p>
            Mostrar ejemplo 01.rb
          </p>
        </aside>
      </section>
    </section>
  );
}

export default ConcurrenciaParalelismo;
