// tools
import React from "react"

// styles
import { Figure } from "../../../Pictures"


// export
export class Image extends React.Component {
  state = {};
  componentDidMount() {
    const { node } = this.props
    const { data } = node
    this.load(data.get("file"), data.get("src"))
  }
  load(file, src) {
  	if(!file || !file.name) this.setState({ src })
  	else {
			const reader = new FileReader()
			reader.addEventListener("load", () => this.setState({ src: reader.result }))
			reader.readAsDataURL(file)
		}
  }
  render() {
    const { attributes, state, node } = this.props
    const { src } = this.state
    const focus = state.isFocused && state.selection.hasEdgeIn(node)
		const className = focus ? "focus" : "nofocus"
    return src
      ? <Figure {...attributes} src={src} className={className} >Add caption to your image.</Figure>
      : <Figure {...attributes} src="" className={className}>Loading your image...</Figure>      
  }
}