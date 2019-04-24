import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main>
      <section className="section">
        <div className="container">
          <h1 className="title">{'Search for your favourite artist\'s album'}</h1>
          <h2 className="subtitle headingtitle">Powered by Deezer</h2>
          <hr />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            <Link to="/search/coldplay"><div className="column is-half-desktop is-full-mobile is-half-tablet">COLDPLAY</div> </Link>
            <Link to="/search/kanyewest"><div className="column is-half-desktop is-full-mobile is-half-tablet">KANYE WEST</div> </Link>
            <Link to="/search/shakira"><div className="column is-half-desktop is-full-mobile is-half-tablet">SHAKIRA</div> </Link>
            <Link to="/search/tameimpala"><div className="column is-half-desktop is-full-mobile is-half-tablet">TAME IMPALA</div> </Link>
          </div>
        </div>
      </section>
    </main>

  )
}

export default Home
