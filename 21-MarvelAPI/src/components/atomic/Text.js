import { createElement, applyClassName } from '../../utils/createElement.js'

export default function Text({ targetEl, initialState }) {
  const { elType, elClassName } = initialState

  const textEl = createElement(elType, elClassName)

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const { elClassName, content } = this.state
    applyClassName(textEl, elClassName)
    textEl.innerHTML = `${content}`
  }

  this.render()
  targetEl.append(textEl)
}
