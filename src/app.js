console.log('JS loaded')
import React from 'react'
import ReactDOM from 'react-dom'

import Home from './components/Home'

class App extends React.Component {
  render() {
    return(
      <main>
        <div> HI! </div>
        <Home />
      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
