import React, { Component } from "react"

export default (importModule, customProps = {}) => {
  class Lazy extends Component {
    constructor() {
      super()
      this.state = {
        Lazy: null
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
      const Lazy = Comp.default ? Comp.default : Comp
      this.setState({
        Lazy: <Lazy {...this.props} {...customProps} />
      })
    }

    render() {
      const { Lazy } = this.state
      return Lazy
    }
  }
  return Lazy
}
