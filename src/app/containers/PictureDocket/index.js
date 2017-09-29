// tools
import React from "react"
import localForage from "localforage"
import uuidv1 from "uuid/v1"
import { froth } from "../../../utils/image-froth"

// components
import PictureDocket from "../../components/PictureDocket"
import { CardHeader } from "../../components/Card/styles"
import {
  GridContainer,
  GridRow,
  GridButton,
  GridCaption,
  AspectRatio
} from "../../components/GridStyles"
import { ModalDispatch } from "../Modal"

// styles
import { dot } from "../../components/_icons/components/BlankDot"

// constants
import { MESSAGE_HINT_IMAGE_SUGGESTIONS } from "../../../constants/messages/hints"
const suggestions = [
  "image-froth_915090_05378814ac7d4b9b9352b603f2d944de",
  "image-froth_1546790_b5ff5d48edf8488387d39f64e18b2916",
  "image-froth_1494432_2ed2035b7e154d6c88cb0280406f7193",
  "image-froth_1522572_19174bdd522e4ab185e52d9d6fe9e868",
  "image-froth_1542912_2fdd00455a0249c18bda84128470b341",
  "image-froth_1515070_603a06c453204daa8983a81bbbeb2c63",
  "image-froth_669104_8df1a40cea1746d79967ec4e694b59d9",
  "image-froth_669104_a3b70899a1e74905bcb73b1e566943fc"
]

const GridButtonImage = props => {
  return (
    <GridButton onClick={() => props.add(props.src)}>
      <AspectRatio>
        <img
          src={
            froth({
              src: props.src,
              size: "t",
              crop: "square"
            }).src
          }
          alt="Editor’s suggestion"
        />
      </AspectRatio>
    </GridButton>
  )
}

// return
export default class extends React.PureComponent {
  constructor(props) {
    super(props)
    this.uploadRequest = this.uploadRequest.bind(this)
    this.initFileUpload = this.initFileUpload.bind(this)
  }

  handleClose = event => {
    const { node, editor } = this.props
    let resolvedState
    if (event) {
      event.preventDefault()
      event.stopPropagation()
      resolvedState = editor
        .getState()
        .transform()
        .insertBlock({ type: "paragraph" })
        .removeNodeByKey(node.key)
        .apply()
    } else {
      // handleClose without event means auto close on image insert:
      resolvedState = editor
        .getState()
        .transform()
        .removeNodeByKey(node.key)
        .apply()
    }
    editor.onChange(resolvedState)

    // this helps refresh the view and update inserted image...
    // ...i don't know why
    window.scrollBy(0, 1)
  }

  // image upload handlers
  initFileUpload = event => {
    this.fileInput.click()
  }
  handleFileUpload = event => {
    const file = event.target.files[0]
    this.uploadRequest(file)
  } // ⤵
  uploadRequest = file => {
    const key = uuidv1()
    localForage.setItem(key, file)
    const { editor } = this.props
    const resolvedState = editor
      .getState()
      .transform()
      .insertBlock({
        type: "image",
        isVoid: true,
        data: { file, key: key, src: dot }
      })
      .apply()

    editor.onChange(resolvedState)
    setTimeout(() => {
      this.handleClose()
    }, 10)
  }

  // insert selected image suggesstion:
  handleImageSuggestion = src => {
    const { editor } = this.props
    const resolvedState = editor
      .getState()
      .transform()
      .insertBlock({
        type: "image",
        isVoid: true,
        data: { src }
      })
      .apply()

    setTimeout(() => {
      editor.onChange(resolvedState)
      this.handleClose()
    }, 10)
  }

  render = () => {
    return (
      <PictureDocket>
        <CardHeader>
          <h3 style={{ paddingTop: ".25em" }}>Add an image:</h3>
          <a href="#close" onClick={this.handleClose.bind(this)}>
            ✕
          </a>
        </CardHeader>
        <GridContainer>
          <GridRow>
            {suggestions.slice(0, 2).map(src => {
              return (
                <GridButtonImage
                  key={src}
                  src={src}
                  add={this.handleImageSuggestion}
                />
              )
            })}
            <GridButton onClick={this.initFileUpload} red>
              <div style={{ margin: "0 auto" }}>
                ＋
                <br />
                Upload<span> New</span>
              </div>
            </GridButton>
          </GridRow>
          <GridRow>
            {suggestions.slice(2, 5).map(src => {
              return (
                <GridButtonImage
                  key={src}
                  src={src}
                  add={this.handleImageSuggestion}
                />
              )
            })}
          </GridRow>
          <GridRow>
            {suggestions.slice(5, 8).map(src => {
              return (
                <GridButtonImage
                  key={src}
                  src={src}
                  add={this.handleImageSuggestion}
                />
              )
            })}
          </GridRow>
        </GridContainer>
        <GridCaption>
          <ModalDispatch with={MESSAGE_HINT_IMAGE_SUGGESTIONS}>
            Image suggestions
          </ModalDispatch>{" "}
          curated by Analog.Cafe editors.
        </GridCaption>
        <input
          type="file"
          accept="image/x-png,image/jpeg"
          style={{ display: "none" }}
          ref={input => {
            this.fileInput = input
          }}
          onChange={this.handleFileUpload}
        />
      </PictureDocket>
    )
  }
}
