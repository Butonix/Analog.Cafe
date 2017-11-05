// tools
import React from "react"

// redux
import { connect } from "react-redux"
import { requestFocus as requestEditorFocus } from "../../../actions/composerActions"

// components
import HeaderEditor from "./containers/HeaderEditor"
import ContentEditor from "./containers/ContentEditor"
import { Section } from "../../components/ArticleStyles"

// placeholders
const titlePlaceholder = {
  title: "Title",
  subtitle: "Subtitle (Optional)"
}

// return
const Composer = props => {
  return (
    <div>
      <HeaderEditor
        composerState={props.composerState}
        pageTitle={titlePlaceholder.title}
        pageSubtitle={titlePlaceholder.subtitle}
      />
      <Section onClick={props.requestEditorFocus}>
        <ContentEditor
          composerState={props.composerState}
          ref={input => {
            this.contentEditor = input
          }}
        />
      </Section>
    </div>
  )
}

// connect with redux
const mapDispatchToProps = dispatch => {
  return {
    requestEditorFocus: () => {
      dispatch(requestEditorFocus())
    }
  }
}
export default connect(null, mapDispatchToProps)(Composer)

// NOTE: this is a pure component but it's in the containers folder to help tie
// everything together.
