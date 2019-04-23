import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import ArtistShow from './components/ArtistShow'

import 'bulma'

class App extends React.Component {
  render() {
    return(
      <Router>
        <main>
          <Navbar />
          <Switch>
            <Route path="/artists" component={ArtistShow} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
