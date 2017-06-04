// tools
import React from "react"

// components
import ComposerHeader from "../../../components/Composer/components/Header"
import { ComposerContent } from "../../../components/Composer"
import { Section, Article } from "../../../components/Article"
import { PageButton } from "../../../components/Buttons"


// render

export const Composer = props => {
	return(
		<Article>
			<ComposerHeader  />
			<Section>
				<ComposerContent />
			</Section>
			<PageButton to="/submit/send" red>Send Submission <span role="img" aria-label="Rocket">🚀</span></PageButton>
		</Article>
	)
}