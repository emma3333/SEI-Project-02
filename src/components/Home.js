import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main>
      <section className="section home">
        <div className="container">
          <h1 className="title">{'Search by artist..'}</h1>
          <h2 className="subtitle headingtitle">Powered by Deezer</h2>
          <hr />
        </div>
      </section>

      <section className="section featured">
        <div className="container">
          <div className="columns is-multiline is-vcentered">
            <Link to="/search/coldplay" className="column is-half-desktop is-full-mobile is-half-tablet is-vcentered" id="art-one"><div>COLDPLAY</div> </Link>
            <Link to="/search/kanyewest" className="column is-half-desktop is-full-mobile is-half-tablet" id="art-two"><div>KANYE WEST</div> </Link>
            <Link to="/search/shakira" className="column is-half-desktop is-full-mobile is-half-tablet" id="art-three"><div>SHAKIRA</div> </Link>
            <Link to="/search/tameimpala" className="column is-half-desktop is-full-mobile is-half-tablet" id="art-four"><div>TAME IMPALA</div> </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
