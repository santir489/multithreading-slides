import React, { useEffect } from 'react';

// Reveal
import Reveal from 'reveal.js';

// Styles
import 'reveal.js/dist/reveal.css';

// Reveal themes
// https://revealjs.com/themes
import './themes/rs.scss';

// Reveal plugins
// https://revealjs.com/plugins/#built-in-plugins
import 'reveal.js/plugin/highlight/monokai.css';
import RevealNotes from 'reveal.js/plugin/notes/notes';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight';

// Slides
import * as slides from './slides';

function App() {
  useEffect(() => {
    Reveal.initialize({
      hash: true,
      controls: true,
      progress: true,
      center: true,
      plugins: [RevealHighlight, RevealNotes],
    });
  }, [Reveal]);

  return (
    <main className="flex flex-col justify-between min-h-screen">
      <nav
        className="sticky w-full flex flex-wrap items-center justify-between py-4 hover:text-gray-900 focus:text-gray-900 shadow-lg"
      >
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <div className="container-fluid">
            <a className="flex items-center mt-2 lg:mt-0 mr-1" href="https://www.rootstrap.com">
              <img src={`${process.env.PUBLIC_URL}/RootstrapLogo.svg`} alt="Rootstrap logo" style={{ height: '1.2rem', marginRight: '10px' }} loading="lazy" />
              <img src={`${process.env.PUBLIC_URL}/RootstrapTitle.svg`} alt="Rootstrap" style={{ height: '1.2rem' }} loading="lazy" />
            </a>
          </div>
        </div>
      </nav>

      <div
        className="slides"
      >
        <slides.CoverPage />

        <slides.Agenda />
        <slides.ThreadsProcess />
        <slides.ConcurrenciaParalelismo />
        <slides.Threadnew />
        <slides.Gil />

        <slides.Vertical />

        <slides.Code />

        <slides.Image />
      </div>
    </main>
  );
}

export default App;
