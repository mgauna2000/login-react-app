import React, { Suspense } from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from '../src/components/Login'

function App() {
  return (
    <Login />
    // <Router>
    //   <Suspense fallback={<p>loading...</p>}>
    //     <Switch>

    //     </Switch>
    //   </Suspense>
    // </Router>
  )
}

export default App
