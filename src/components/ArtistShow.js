import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class ArtistShow extends React.Component {
  constructor(){
    super()

    this.state = {
      artists: null
    }
  }

  componentDidMount(){
    axios.get('https://cors-anywhere.herokuapp.com/api.deezer.com/search?q=coldplay')
      .then(res => this.setState({ artists: res.data.data }))
  }
  render() {
    console.log(this.state.artists)
    return(
      <div></div>
    )
  }
}

export default ArtistShow
