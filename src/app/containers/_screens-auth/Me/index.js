// tools
import React from "react"
import Loadable from "react-loadable"

// redux
import { connect } from "react-redux"

// components
import Forbidden from "../../_screens-errors/Forbidden"
import { LinkButton, ButtonGroup } from "../../../components/Button"
import Link from "../../../components/Link"
import AsyncArticleLoader from "../../../components/_screens/AsyncArticleLoader"

// async components
const AsyncList = Loadable({
  loader: () => import("../../List"),
  loading: AsyncArticleLoader
})

// render
const Me = props => {
  return props.user.status === "ok" ? (
    <AsyncList
      header={
        <ButtonGroup>
          <LinkButton to="/me/edit" red style={{ margin: "0 auto" }}>
            Edit Your Profile
          </LinkButton>
          <strong>
            <Link>Sign Out</Link>
          </strong>
        </ButtonGroup>
      }
      private
    />
  ) : (
    <Forbidden />
  )
}

// connet with redux
const mapStateToProps = state => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(Me)
