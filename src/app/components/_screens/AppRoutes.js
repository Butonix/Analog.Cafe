// tools
import React from "react"
import { Switch, Route } from "react-router-dom"

// views
// dynamic
import List from "../../containers/List"
import Article from "../../containers/Article"
import NotFound from "../../containers/_screens-errors/NotFound"
// protected
import EditProfile from "../../containers/_screens-auth/EditProfile"
import SignIn from "../../containers/_screens-auth/SignIn"
import Me from "../../containers/_screens-auth/Me"
// static
import About from "./About"
import AppRoutesSubmit from "./AppRoutesSubmit"

// render
export default props => {
  return (
    <main>
      <Switch>
        {/* dynamic urls and views */}
        <Route exact path="/author" component={NotFound} />
        <Route exact path="/zine" component={NotFound} />
        <Route exact path="/author/*" component={List} />
        <Route exact path="/zine/*" component={Article} />

        {/* dynamic views, static urls */}
        <Route exact path="/" component={List} />
        <Route exact path="/photo-essays" component={List} />
        <Route exact path="/articles" component={List} />

        {/* auth views */}
        <Route exact path="/me" component={Me} />
        <Route exact path="/me/edit" component={EditProfile} />
        <Route exact path="/sign-in" component={SignIn} />

        {/* static views and urls */}
        <Route exact path="/about" component={About} />
        <Route path="/submit" component={AppRoutesSubmit} />
        <Route state={{ status: "404" }} component={NotFound} />
      </Switch>
    </main>
  )
}
