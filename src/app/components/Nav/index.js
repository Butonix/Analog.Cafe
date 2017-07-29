// tools
import React from "react"

// components
import Logo from "../Logo"
import done from "../icons/images/done.jpg"
import { ModalDispatch } from "../../containers/Modal"

// styles
import { NavLink, NavIndexLink, NavItem } from "./styles"

// return
export const CommonNav = props => {
	return(
		<ul>
			<NavItem><NavLink exact to={ "/photo-essays" }><span>Photo Essays</span></NavLink></NavItem>
			<NavItem><NavLink	exact to={ "/articles" }><span>Articles</span></NavLink></NavItem>
			<NavItem prime center><NavIndexLink	exact to={ "/" }><Logo /></NavIndexLink></NavItem>
			<NavItem prime left>
				{
					props.userStatus === "ok"
					? <NavLink exact to={ "/submit/compose" }><span>Submit</span></NavLink>
					: <NavLink exact to={ "/about" }><span>About</span></NavLink>
				}
			</NavItem>
			<NavItem prime right>
				{
					props.userStatus === "ok"
					? <NavLink exact to={ "/my-stuff" }><span>My Stuff</span></NavLink>
					: <NavLink exact to={ "/submit" }><span>Submit</span></NavLink>
				}
			</NavItem>
		</ul>
	)
}

export const ComposerNav = props => {
	return(
		<ul>
			<NavItem indicator prime left><ModalDispatch
				with={{
					info: {
						image: done,
						title: "Never Loose Your Work 👍",
						text: "Your draft is saved automatically every 3 seconds onto your device."
					},
					id: "hints/save"
				}}
				style={{ textDecoration: "none" }}
			><span>{ props.draftStatus }</span></ModalDispatch></NavItem>
			<NavItem prime center><NavIndexLink	exact to={ "/" }><Logo /></NavIndexLink></NavItem>
			<NavItem prime right><NavLink exact to={ "/sign-in"	}><span>Send <span role="img" aria-label="Rocket">🚀</span></span></NavLink></NavItem>
		</ul>
	)
}

export { Wrapper } from "./styles"
