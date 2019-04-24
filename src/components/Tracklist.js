import React from 'react'

// class Tracklist extends React.Component {
// constructor() {
//   super()
//
//   this.state = {}
// }

const Tracklist = (props) => {
  console.log(props.location.state.tracks)
  return(
    <section className="section">
      <div className="container">
        <h1 className="title is-3">{props.location.state.name} {props.location.state.title}</h1>
        <h2 className="subtitle is-5 headingtitle">Tracklisting</h2>
        <hr />
        <div className="columns">
          <div className="column is-half-desktop is-full-tablet is-full-mobile">
            <figure className="image">
              <img src={props.location.state.cover} alt="title" />
            </figure>
          </div>
          <div className="column is-half-desktop is-full-tablet is-full-mobile">
            <ul>

              {props.location.state.tracks[0].map(track =>
                <li key={track.id}>
                  <h4 className="title is-4">{track.title}</h4>
                  <audio src={track.preview} controls />
                </li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )

}

export default Tracklist

// <li key={track.title}>{track.title}</li>)
