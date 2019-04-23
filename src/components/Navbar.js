import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends React.Component {

  constructor() {
    super()

    this.state = {
      data: {}
    }
    this.handleSearch =this.handleSearch.bind(this)
  }

  handleSearch(e) {
    const data=[e.target.value]
    this.setState({ data })
    console.log(this.state.data)
  }



  render() {
    return (
      <nav className="navbar is-light">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">Home</Link>

            <a role="button" className="navbar-burger">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>

          </div>

          <div className="navbar-menu">
            <div className="navbar-start">
              <Link to="/albums" className="navbar-item">Albums</Link>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">

                <form>
                  <div className="field has-addons">
                    <div className="control">
                      <input className="input" type="search" onChange={this.handleSearch} placeholder="Artist Name..." />
                    </div>
                    <div className="control">
                      <a className="button is-info">
                      Search
                      </a>
                    </div>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}


export default withRouter(Navbar)
