import React from 'react';

function Threadnew() {
  return (
    <section>
      <section>
        <p>Let&apos;s get into threads</p>
      </section>

      <section>
        <pre>
          <code data-trim data-noescape className="language-ruby">
            {`
              irb(main):001:0> Thread.current
              => #<Thread:0x00000001034ab100 run>
            `}
          </code>
        </pre>

        <aside className="notes">
          <p>
            - Siempre estamos en un thread
          </p>
        </aside>
      </section>

      <section>

        <pre>
          <code data-trim data-noescape className="language-ruby">
            {`
             thread = Thread.new { puts "What's the big deal" }

             thread.join #=> "What's the big deal"
            `}
          </code>
        </pre>
        <aside className="notes">
          <p>
            - Cuando hace .new se inmediatamente se crea el thread
            - el join
            - .....
            - Mostrar ejemplo 01.rb,
            - explicar codigo, menciona, crea 1000 threads en paralelo
            - ver que no devulve lo esperado
            - Decir q estoy con jruby
            - mencionar Global Lock interpreter
            - pasar a MRI,
            - ver que funciona
            - pero deja de funcionar si agrego un sleep, que carajo esta pasando ?
          </p>
        </aside>
      </section>
    </section>
  );
}

export default Threadnew;
