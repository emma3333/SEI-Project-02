import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
class AlbumsShow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      album: null
    }

  }

  componentDidMount() {
    axios.get(`https://cors-anywhere.herokuapp.com/api.deezer.com/album/${this.props.match.params.id}`)
      .then(res => this.setState({ album: res.data }))
  }


  render() {
    if(!this.state.album) return null
    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-1">{this.state.album.title}</h1>
          <hr />
          <div className="columns">
            <div className="column is-half-desktop is-full-tablet is-full-mobile">
              <Link to={{
                pathname: `/albums/${this.state.album.id}/tracklist`,
                state: {
                  cover: [this.state.album.cover],
                  title: [this.state.album.title],
                  tracks: [this.state.album.tracks.data]
                }
              }}>
                <figure className="image">
                  <img src={this.state.album.cover} alt={this.state.album.title} />
                </figure>
              </Link>
            </div>
            <div className="column is-half-desktop is-full-tablet is-full-mobile">
              <h2 className="title is-4">Artist: {this.state.album.artist.name}</h2>
              <h2 className="title is-4">Label: {this.state.album.label}</h2>
              <h2 className="title is-4">Number of tracks: {this.state.album.nb_tracks}</h2>
              <h2 className="title is-4">Release date: {this.state.album.release_date}</h2>
              <h2 className="title is-4">Genre: {this.state.album.genres.data[0].name}</h2>
            </div>
          </div>
        </div>
      </section>
    )
  }
}



export default AlbumsShow
