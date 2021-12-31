import React from 'react';
import testimg from '@/assets/img/test.jpg';
import './index.less';

const Chapter2: React.FC = () => {
  return (
    <>
      <section className="border"></section>
      <hr />
      <section className="stripe"></section>
      <hr />
      <section className="stripe vertical"></section>
      <hr />
      <section className="stripe incline"></section>
      <hr />
      <section className="table-cloth"></section>
      <hr />
      <section className="radial"></section>
      <hr />
      <section className="border-radius"></section>
      <hr />
      <section className="skew"></section>
      <img
        className="img img-test img-test-clip"
        src={testimg}
        alt="clip-image"
      />
      <hr />
      <section className="cut-corner">
        Hey, focus! You're supposed to be looking at my corners, not reading my
        text. The text is just placeholder!
      </section>
      <hr />
      <section className="trapezoid">TRAPEZOID</section>
      <hr />
      <section className="pie" style={{ animationDelay: '-20s' }}></section>
      <section className="pie" style={{ animationDelay: '-60s' }}></section>
      <hr />
      <section className="pie-svg">
        <svg viewBox="0 0 32 32">
          <circle r={16} cx={16} cy={16}></circle>
        </svg>
      </section>
      <hr />
      <img
        className="img img-test img-test-filter"
        src={testimg}
        alt="filter-image"
      />
      <hr />
      <section className="gaussian-blur">
        <main>
          <blockquote>
          &quot;The onby way togtrid ofa temptation istoyild toit Reistit andyour soulgrowos 
          sic wit ongigfor the hings ithas forbiddentoitsel, 
          with desinefor what its monstrous lares havemademonstrous and unlaueful.&quot;
            <footer>
              －<cite>Oscar Wilde, The Picture of Dorian Gray</cite>
            </footer>
          </blockquote>
        </main>
      </section>
    </>
  );
};

export default Chapter2;
