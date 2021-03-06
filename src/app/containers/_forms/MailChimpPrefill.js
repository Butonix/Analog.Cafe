// tools
import React from "react"

// components
import { Button } from "../../components/Button"
import EmailInput from "./components/EmailInput"

// styles
import { Form } from "../../components/FormStyles"

// helpers
import validateEmail from "../../../utils/email-validator"

// render
export default class extends React.Component {
  constructor(props) {
    super(props)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      email: "",
      warning: false
    }
  }
  handleEmailChange = event => {
    this.setState({ email: event.target.value || "", warning: false })
  }
  handleSubmit = event => {
    event.stopPropagation()
    event.preventDefault()
    validateEmail(this.state.email)
      ? window.open(
          (this.props.formUrl ||
            "https://cafe.us4.list-manage.com/subscribe/post?u=256339f7eafa36f2f466aca44&id=f43e54afe2&MERGE0=") +
            this.state.email,
          "_blank",
          "height=450,width=600"
        )
      : this.setState({ warning: true })
  }
  render = () => {
    return (
      <Form
        style={this.props.style || null}
        withinGroup={this.props.withinGroup}
      >
        <EmailInput
          onChange={this.handleEmailChange}
          warning={this.state.warning}
          autoFocus={this.props.autoFocus}
        />
        <Button
          red
          onClick={event => {
            this.handleSubmit(event)

            // async load Google Analytics module
            import("react-ga").then(ReactGA => {
              ReactGA.event({
                category: "Campaign",
                action: "MailChimpForm.subscribe"
              })
            })
          }}
        >
          {this.props.buttonText || "Subscribe"}
        </Button>
      </Form>
    )
  }
}
