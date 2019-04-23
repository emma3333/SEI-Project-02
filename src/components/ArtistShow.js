import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class ArtistShow extends React.Component {
  constructor(){
    super()

    this.state = {
      artists: []
    }
  }

  componentDidMount(){
    axios.get('https://cors-anywhere.herokuapp.com/api.deezer.com/search?q=coldplay')
      .then(res => this.setState({ artists: res.data.data }))
  }
  render() {
    console.log(this.state.artists)
    return(
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.artists.map(artist =>
              <div key={artist.id} className="column is-one-quarter-desktop is-one-third-tablet">
                <h1>{artist.title}</h1>
                <figure className="image">
                  <img src={artist.album.cover} alt={artist.artist.name} />
                </figure>
              </div>
            )}
          </div>
        </div>
      </section>

    )
  }
}

export default ArtistShow
