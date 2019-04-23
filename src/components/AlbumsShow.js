import React from 'react'
import axios from 'axios'

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
      <div>{this.state.album.title}</div>
    )
  }
}



export default AlbumsShow
