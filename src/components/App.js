import React, { Component } from "react"
import lazy from "./Lazy"

const Home = lazy(import(/*webpackMode: "lazy" */ "./views/Home.js"))
const About = lazy(import(/*webpackMode: "lazy" */ "./views/About.js"))
const pages = {
  Home: "./Home",
  About: "./About",
  Blog: "./Blog",
  Contact: "./Contact"
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activePagePath: "./Home",
      activePageName: "Home",
      ActiveComponent: Home
    }
  }

  componentWillMount() {}

  renderPage(pageName) {}
  setPage(pageName) {
    this.setState({
      ActiveComponent: pageName
    })
  }

  render() {
    const { ActiveComponent } = this.state
    return (
      <div>
        <button onClick={() => this.setPage(About)}>About</button>
        {ActiveComponent ? <ActiveComponent /> : <p>Error</p>}
      </div>
    )
  }
}

export default App
