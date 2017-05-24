// tools
import React from "react";

// styles
import { PictureImage, PictureFigure, PictureCaption } from "./styles";

// return
export const Figure = props => {
	return (
		<PictureFigure { ...props } >
			<PictureImage { ...props } />
			<figcaption>
				<PictureCaption { ...props } >{ props.children }</PictureCaption>
			</figcaption>
		</PictureFigure>
	);
}

// declare
PictureCaption.propTypes = {
	children: 		React.PropTypes.string,
}