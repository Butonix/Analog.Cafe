// tools
import React from "react"
// import axios from "axios"

// components
import PictureDocket from "../../components/PictureDocket"
import { CardHeader } from "../../components/CardStyles"
import { GridRow, Square } from "../../components/GridStyles"
import { Caption } from "../../components/CaptionStyles"

// styles
import placeholder from "../../components/icons/images/placeholder-figure.jpg"


// dictionary
// import { ROUTE_IMAGE_API } from "./routes"
import styled from "styled-components"
const SquareButton = styled(Square)`
	cursor: pointer;
	display: flex;
  justify-content: center;
  text-align: center;
	align-items: center;
	background-color: ${ props => props.theme.color.brand };
	h3 { padding: 0; }
	&:active {
		background-color: ${ props => props.theme.color.foreground };
	}
`

// export
export default class extends React.Component {
	constructor(props) {
		super(props)
		this.uploadRequest = this.uploadRequest.bind(this)
		this.initFileUpload = this.initFileUpload.bind(this)
	}

	handleClose = event => {
		if(event){
			event.preventDefault()
			event.stopPropagation()
		}
		const { node, editor } = this.props
    const resolvedState = editor.getState()
      .transform()
			.insertBlock({ type: "paragraph" })
      .removeNodeByKey(node.key)
      .apply()

		// console.log(editor.getState(), resolvedState)
		editor.onChange(resolvedState)
		// editor.setState({ state: resolvedState })

	}

	// image upload handlers
	initFileUpload = event => {
		this.fileInput.click()
	}
  handleFileUpload = e => {
    const file = e.target.files[0]
    this.uploadRequest(file)
  } // ⤵
	uploadRequest = file => {
		const { node, editor } = this.props
		const resolvedState = editor.getState()
			.transform()
			.insertBlock({
				type: "image",
				isVoid: true,
				data: { file, src: placeholder }
			})
			.apply()
		editor.onChange(resolvedState)
		setTimeout((function(){
			this.handleClose()
		}).bind(this), 100)
		// saveContent(this.state.state.document, resolvedState)
	}

  render() {
    // const { attributes, state, node } = this.props
    // const focus = state.isFocused && state.selection.hasEdgeIn(node)
    return (
			<PictureDocket>
				<CardHeader>
					<h3>Add Image</h3>
					<a href="#close" onClick={ this.handleClose.bind(this) } >✕</a>
				</CardHeader>
				<div>
					<GridRow>
						<Square><img src="/images/thumbnails/square.jpg"/></Square>
						<Square><img src="/images/thumbnails/square.jpg"/></Square>
						<SquareButton onClick={ this.initFileUpload }>
							<h3>Upload<br />New</h3>
						</SquareButton>
					</GridRow>
					<GridRow>
						<Square><img src="/images/thumbnails/square.jpg"/></Square>
						<Square><img src="/images/thumbnails/square.jpg"/></Square>
						<Square><img src="/images/thumbnails/square.jpg"/></Square>
					</GridRow>
					<GridRow>
						<Square><img src="/images/thumbnails/square.jpg"/></Square>
						<Square><img src="/images/thumbnails/square.jpg"/></Square>
						<Square><img src="/images/thumbnails/square.jpg"/></Square>
					</GridRow>
				</div>
				<Caption>About image suggestions</Caption>
        <input
          type=								"file"
          accept=							"image/x-png,image/jpeg"
          style={{ 						display: "none" }}
          ref={ input => { 		this.fileInput = input } }
          onChange={ 					this.handleFileUpload }
        />
			</PictureDocket>
		)
  }
}
