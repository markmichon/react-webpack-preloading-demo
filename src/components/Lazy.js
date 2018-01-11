import React, { Component } from "react"

export default (importModule, customProps = {}) => {
  return class Lazy extends Component {
    constructor() {
      super()
      this.state = {
        Lazy: null
      }
    }

    componentDidMount() {
      importModule.then(Comp => {
        this.handleImport(Comp)
      })
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
}
