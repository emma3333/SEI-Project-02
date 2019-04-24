import React from 'react'

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
            <div className="column is-half-desktop is-full-mobile is-half-tablet">KANYE</div>
            <div className="column is-half-desktop is-full-mobile is-half-tablet">COLDPLAY</div>
            <div className="column is-half-desktop is-full-mobile is-half-tablet">SHAKIRA</div>
            <div className="column is-half-desktop is-full-mobile is-half-tablet">TAME IMPALA</div>
          </div>
        </div>
      </section>
    </main>

  )
}

export default Home
