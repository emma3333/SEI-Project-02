import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'


import 'bulma'

class App extends React.Component {
  render() {
    return(
      <Router>
        <main>
          <Navbar />
          <Switch>
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












// import React from 'react'
// import ReactDOM from 'react-dom'
// import { Router, Route } from 'react-router-dom'
//
// import Navbar from './components/Navbar'
// import Home from './components/Home'
//
// import 'bulma'
//
// class App extends React.Component {
//   render() {
//     return(
//       <Router>
//         <main>
//           <div> HI! </div>
//           <Navbar />
//           <Route path="/" component={Home} />
//
//         </main>
//       </Router>
//     )
//   }
// }
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )
