import React, { Component } from "react"
import * as Routes from "../Routes.js"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activePagePath: "./Home",
      activePageName: "Home",
      ActiveComponent: null
    }
  }

  componentWillMount() {
    // Home.load()
    // console.log(Routes.Home.load())
  }

  renderPage(pageName) {}
  setPage(Page) {
    // console.log(Page)
    // console.log(Routes["Home"].load)
    Routes[Page].load().then(Comp => {
      this.setState({
        ActiveComponent: Comp
      })
    })
  }

  preloadPage(Page) {
    // Page.load()
  }

  render() {
    const { ActiveComponent } = this.state
    return (
      <div>
        <button onClick={() => this.setPage("Home")}>Home</button>
        <button onClick={() => this.setPage("About")}>About</button>
        <button onClick={() => this.setPage("Blog")}>Blog</button>
        <button onClick={() => this.setPage("Contact")}>Contact</button>
        {ActiveComponent ? <ActiveComponent /> : null}
      </div>
    )
  }
}

export default App
