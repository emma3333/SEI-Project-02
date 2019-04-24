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
            <Link to="/search/coldplay" className="column is-half-desktop is-full-mobile is-half-tablet"><div>COLDPLAY</div> </Link>
            <Link to="/search/kanyewest" className="column is-half-desktop is-full-mobile is-half-tablet"><div>KANYE WEST</div> </Link>
            <Link to="/search/shakira" className="column is-half-desktop is-full-mobile is-half-tablet"><div>SHAKIRA</div> </Link>
            <Link to="/search/tameimpala" className="column is-half-desktop is-full-mobile is-half-tablet"><div>TAME IMPALA</div> </Link>
          </div>
        </div>
      </section>
    </main>

  )
}

export default Home
