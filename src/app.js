console.log('JS loaded')
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  render() {
    return(
      <main>
        <div> HI! </div>
      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
