import React from 'react'
import {}
import axios from 'axios'

class Coldplay extends React.Component {
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
          <h1 className="title is-1">Coldplay</h1>
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

export default Coldplay
