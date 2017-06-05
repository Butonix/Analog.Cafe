// tools
import React from "react"

// components
import { NavLogo } from "./components/NavLogo"

// styles
import { NavContainer, NavLink, NavIndexLink, NavItem } from "./styles"

// render
export const Nav = props => {
	return(
		<NavContainer>
			<ul>
				<NavItem><NavLink 										to={ "/photography" 			}><span>Photography</span></NavLink></NavItem>
				<NavItem><NavLink											to={ "/essays"						}><span>Essays</span></NavLink></NavItem>

				<NavItem prime center	><NavIndexLink	to={ "/"									}><NavLogo /></NavIndexLink></NavItem>

				<NavItem prime left		><NavLink 			to={ "/about"			 				}><span>About</span></NavLink></NavItem>
				<NavItem prime right	><NavLink 			to={ "/submit" 						}><span>Submit</span></NavLink></NavItem>
			</ul>
		</NavContainer>
	)
}
