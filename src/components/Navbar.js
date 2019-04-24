import React from 'react'
import { Link, withRouter } from 'react-router-dom'


class Navbar extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      data: {}
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSearch(e) {
    this.setState({ data: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()

    this.props.history.push(`/search/${this.state.data}`)
  }


  render() {
    return (
      <nav className="navbar is-dark">
        <div className="container">
          <div className="navbar-brand">

            <a role="button" className="navbar-burger">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>

          </div>

          <div className="navbar-menu">
            <div className="navbar-start">
              <Link to="/" className="navbar-item">Home</Link>

              <div className="navbar-item">

                <form onSubmit={this.handleSubmit}>
                  <div className="field has-addons">
                    <div className="control">
                      <input className="input is-small" type="search" onChange={this.handleSearch} placeholder="Artist Name..." />
                    </div>
                    <div className="control">
                      <button className="button is-light is-small is-outlined">
                    Search
                      </button>
                    </div>
                  </div>
                </form>

              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item" id="logo"></div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}


export default withRouter(Navbar)
