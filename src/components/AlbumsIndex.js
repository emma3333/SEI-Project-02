import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class AlbumsIndex extends React.Component {
  constructor(){
    super()

    this.state = {
      albums: []
    }
  }

  componentDidMount(){
    axios.get('https://cors-anywhere.herokuapp.com/api.deezer.com/search/album?q=coldplay')
      .then(res => this.setState({ albums: res.data.data }))
  }
  render() {
    return(
      <section className="section">
        <div className="container">
          <h1 className="title is-1">Coldplay</h1>
          <div className="columns is-multiline">
            {this.state.albums.map(album =>
              <div key={album.id} className="column is-one-quarter-desktop is-one-third-tablet">
                <Link to={`/albums/${album.id}`}>
                  <h1>{album.title}</h1>
                  <figure className="image">
                    <img src={album.cover} alt={album.name} />
                  </figure>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

    )
  }
}

export default AlbumsIndex
