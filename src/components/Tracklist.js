import React from 'react'

// class Tracklist extends React.Component {
// constructor() {
//   super()
//
//   this.state = {}
// }

const Tracklist = ({cover}) => {

  return(
    <section className="section">
      <div className="container">
        <h1 className="title is-1">title</h1>
        <hr />
        <div className="columns">
          <div className="column is-half-desktop is-full-tablet is-full-mobile">
            <figure className="image">
              <img src={cover} alt="title" />
            </figure>
          </div>
          <div className="column is-half-desktop is-full-tablet is-full-mobile">
            <p>info</p>
          </div>
        </div>
      </div>
    </section>
  )

}

export default Tracklist
