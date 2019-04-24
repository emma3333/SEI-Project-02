import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import AlbumsIndex from './components/AlbumsIndex'
import AlbumsShow from './components/AlbumsShow'
import Tracklist from './components/Tracklist'

import 'bulma'
import './style.scss'

class App extends React.Component {
  render() {
    return(
      <Router>
        <main>
          <Navbar />
          <Switch>
            <Route path="/search/:query" component={AlbumsIndex} />
            <Route path="/albums/:id/tracklist" component={Tracklist} />
            <Route path="/albums/:id" component={AlbumsShow} />
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
