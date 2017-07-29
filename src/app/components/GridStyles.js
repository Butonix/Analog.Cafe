// tools
import styled, { css } from "styled-components"
import Color from "color"
import { Button } from "./Button"


// css
const squreWidth = css`width: calc(100% / 3 - ${ props => props.theme.size.block.border / 1.5 }px);`
export const GridContainer = styled.div`
	padding: 0;
	${ props => props.theme.size.breakpoint.max.m`
		padding: 0 ${ props => props.theme.size.block.border }px;
	`}
`
export const GridRow = styled.div`
	display:        flex;
  align-content:  flex-start;
  align-items:    stretch;
`
export const Square = styled.div`
	${ squreWidth }
  position:       relative;
  margin:         0 ${ props => props.theme.size.block.border }px ${ props => props.theme.size.block.border }px 0;
  &:last-child {  margin-right: 0; }
  img {           width: 100%; }
  background:     ${ props => Color(props.theme.color.background).alpha(props.theme.opacity.least / 2).string() };
`
export const GridButton = styled(Button)`
	${ squreWidth }
	margin: 0 0 ${ props => props.theme.size.block.border }px 0;
	display: flex;
	justify-content: center;
	text-align: center;
	align-items: center;
`
export const AspectRatio = styled.div`
  padding-top: 100%;
  & > * {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
`