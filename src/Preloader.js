import React from "react"

export default (importModule, customProps = {}) => {
  class Preloader extends React.Component {
    constructor() {
      super()
      this.state = {
        Component: null
      }
      this.Comp = null
      this.loadingPromise = null
    }

    static load() {
      if (!this.loadingPromise) {
        this.loadingPromise = importModule()
          .then(module => {
            const Comp = module.default // fix this with some kind of resolve function
            this.Comp = Comp
            return Comp
          })
          .catch(err => {
            this.loadingPromise = null
            throw err
          })
      }
      return this.loadingPromise
    }
    componentWillMount() {
      this.load()
        .then(Comp => {
          this.handleImport(Comp)
        })
        .catch(err => console.log(err))
    }

    handleImport(Comp) {
      const Preload = Comp.default ? Comp.default : Comp
      this.setState({
        Component: <Preload {...this.props} {...customProps} />
      })
    }

    render() {
      const { Component } = this.state
      return Component
    }
  }
  return Preloader
}
