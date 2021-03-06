// tools
import React from "react"
import { Editor } from "slate-react"
import { Value } from "slate"
import getOffsets from "positions"

// redux
import { connect } from "react-redux"

// components
import ImageButton from "./components/ImageButton"
import Menu from "./components/FormatMenu"

// helpers, plugins & schema
import { plugins } from "./plugins"
import { renderNode, renderMark } from "./render"
import { schema } from "./schema"
import { loadContent } from "../../../../../utils/composer-loader"

import {
  menuPosition,
  formatCommand,
  imageButtonPosition,
  handleImageButton
} from "../../../../../utils/composer-menu-items"
import { focusEvents } from "../../../../../utils/composer-focus-events"

import {
  saveContent,
  setDraftStatusHelper
} from "../../../../../utils/composer-saver"

// return
class ContentEditor extends React.PureComponent {
  constructor(props) {
    super(props)
    this.props.composerState.raw = loadContent()

    this.handleClickPropagation = this.handleClickPropagation.bind(this)

    // composerState is what appears by default in composer once the user opens the view
    this.state = {
      value: Value.fromJSON(loadContent()),
      schema,
      author: this.props.author,
      cursorContext: {
        isFocused: false,
        newLine: false,
        parentBlockOffsets: { top: 0, left: 0 }
      },
      dragOver: false,
      editorFocus: false
    }
  }

  handleChange = ({ value }) => {
    this.setState({ value })

    // add information about cursor positions
    const cursorContextDelay = setTimeout(() => {
      const nodeKey = value.focusBlock.key
      const block = window.document.querySelector(`[data-key="${nodeKey}"]`)
      if (!block) return
      const parentOffsets = getOffsets(block, "top left", block, "top left")
      imageButtonPosition(value, parentOffsets, this)
      clearTimeout(cursorContextDelay)
    }, 300)

    // update draft status & save content to device
    setDraftStatusHelper()
    this.props.composerState.raw = JSON.stringify(value.toJSON())
    saveContent(document, value)
  }

  // image button handler:
  handleImageButton = event => handleImageButton(event, this)

  handleClickPropagation = event => {
    event.stopPropagation()
  }
  componentWillReceiveProps = nextProps => {
    if (
      this.props.composer.editorFocusRequested <
      nextProps.composer.editorFocusRequested
    ) {
      this.slateEditor.focus()
      this.setState({
        editorFocus: true
      })
    }
  }
  handleBlur = () => {
    this.setState({
      editorFocus: false
    })
  }
  handleFocus = () => {
    this.setState({
      editorFocus: true
    })
  }
  handleDragOver = () => {
    this.setState({
      dragOver: true
    })
  }
  handleDragEnd = () => {
    this.setState({
      dragOver: false
    })
  }

  // hover menu
  componentDidMount = () => {
    this.updateMenu()
  }
  componentDidUpdate = () => {
    this.updateMenu()
  }
  menuRef = menu => {
    this.menu = menu
  }
  formatCommand = type => formatCommand(type, this)
  updateMenu = () => menuPosition(this)

  // render
  render = () => {
    focusEvents(this)

    return [
      <div style={{ position: "relative" }} key="ContentEditor_div">
        <ImageButton
          cursorContext={this.state.cursorContext}
          onClick={this.handleImageButton}
        />
        <Editor
          plugins={plugins}
          renderNode={renderNode}
          renderMark={renderMark}
          schema={this.state.schema}
          placeholder={"Write your story…"}
          value={this.state.value}
          onChange={this.handleChange}
          onClick={this.handleClickPropagation}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          style={{
            minHeight: "28em",
            boxShadow: this.state.editorFocus
              ? "0 1px 0 0 rgba(44,44,44,.15)"
              : "",
            background: this.state.dragOver ? "rgba(44,44,44,.15)" : ""
          }}
          ref={input => (this.slateEditor = input)}
        />
      </div>,
      <Menu
        menuRef={this.menuRef}
        onChange={this.handleChange}
        value={this.state.value}
        formatCommand={this.formatCommand}
        key="ContentEditor_Menu"
      />
    ]
  }
}

// connect with redux
const mapStateToProps = state => {
  return {
    composer: state.composer
  }
}
export default connect(mapStateToProps)(ContentEditor)
