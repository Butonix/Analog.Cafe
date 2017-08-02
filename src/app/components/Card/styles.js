// tools
import styled from "styled-components"
import Color from "color"

// components
import { LinkButton } from "../Button"

// styles
import { Sidenote } from "../CaptionStyles"


// css
export const Card = styled.div`
	position: 			relative;
	display: 				block;
	background: 		${ props => props.theme.color.background };
	overflow: 			hidden;
	max-width: 			${ props => props.theme.size.breakpoint.stops.min }px;

	border-radius: 	${ props => props.theme.effects.borderRadius.med }em;
	box-shadow: 		0 ${ props => props.theme.size.block.spacing /2 }em ${ props => props.theme.size.block.spacing * 2 }em
									 ${ props => Color(props.theme.color.foreground).alpha(props.theme.opacity.half).string() };

	${ props => props.theme.size.breakpoint.max.xs`
		border-radius: 0;
	`}

 	figure {
 		margin: 				0;
 		border-bottom:	${ props => props.theme.elements.thickBorder };
 		img {
 			width: 100%;
 		}
 	}
`

export const CardButton = styled(LinkButton)`
	max-width: 			100%;
	margin: 				0;
	border-radius: 	0;
	&:active {
		box-shadow: 	0 -1px 0 ${ props => props.theme.color.foreground };
	}
`

export const CardCaption = styled(Sidenote)`
	text-align: 	left;
	padding: 			${ props => props.theme.size.block.spacing }em ${ props => props.theme.size.block.column.safety }em;
	font-size: 		1.075em !important;

`

export const CardHeader = styled.header`
  padding: 				${ props => props.theme.size.block.spacing /4 }em ${ props => props.theme.size.block.spacing /2 }em;
  padding-right: 	${ props => props.theme.size.block.spacing *3 }em;
  z-index: 				${ props => props.theme.layer.up };

  position: 			relative;
  box-shadow: 		0 1px 1px ${ props => Color(props.theme.color.foreground).alpha(props.theme.opacity.least * 2).string() }
                  , 0 0 0 1px ${ props => Color(props.theme.color.foreground).alpha(props.theme.opacity.least).string() };

  h3 {
    ${ props => props.theme.size.font.auto }
    ${ props => props.theme.typography.title.auto }
    white-space: 		nowrap;
    overflow: 			hidden;
    text-overflow: 	ellipsis;
    text-align:			left;
    padding:				0;
  }
	h3::before {
		content: "✧";
	}
  a {
    text-decoration:none;
    position: 			absolute;
    top: 						0;
    right: 					0;
    padding: 				${ props => props.theme.size.block.spacing / 2.25 }em ${ props => props.theme.size.block.spacing /2 }em;
    &:active {
      background: 	0 0;
      color: 				${ props => props.theme.color.brand };
    }
  }

  .fonts-loaded-headers & h3 { ${ props => props.theme.typography.title.fontsLoaded } }
`
