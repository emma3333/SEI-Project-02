import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class AlbumsIndex extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      albums: null
    }
  }

  componentDidMount(){
    axios.get('https://cors-anywhere.herokuapp.com/api.deezer.com/search/album', {
      params: {
        q: this.props.match.params.artist
      }
    })
      .then(res => {
        console.log(res.data)
        this.setState({ albums: res.data.data })
      })
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.pathname !== this.props.location.pathname) {
      axios.get('https://cors-anywhere.herokuapp.com/api.deezer.com/search/album', {
        params: {
          q: this.props.match.params.artist
        }
      })
        .then(res => {
          console.log(res.data)
          this.setState({ albums: res.data.data })
        })
    }
  }


  render() {
    if(!this.state.albums) return null
    return(
      <section className="section">
        <div className="container">
          <h1 className="title is-1">{this.state.albums[0].artist.name}</h1>
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
