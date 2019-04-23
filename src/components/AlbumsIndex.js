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

  getData() {
    axios.get('https://cors-anywhere.herokuapp.com/api.deezer.com/search/album', {
      params: {
        q: this.props.match.params.query
      }
    })
      .then(res => {
        console.log(res.data)
        this.setState({ albums: res.data.data })
      })
  }

  componentDidMount(){
    this.getData()
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.pathname !== this.props.location.pathname) {
      this.getData()
    }
  }


  render() {
    if(!this.state.albums) return null
    return(
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.albums.map(album =>
              <div key={album.id} className="column is-one-quarter-desktop is-one-third-tablet">
                <Link to={`/albums/${album.id}`}>
                  <h1 className="title is-4">{album.title}</h1>
                  <h2 className="subtitle is-5">{album.artist.name}</h2>
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
