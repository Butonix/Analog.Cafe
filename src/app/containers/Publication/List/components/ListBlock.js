// tools
import React from "react"
import { SmartLink } from "../../../../components/SmartLink"
import { Ul, Stats, Caption, ZigzagPicture } from "../../../../components/ListStyles"

// helper
import { datestamp } from "../helpers"

// routes
import { ROUTE_ARTICLE_DIR } from "../routes"


// return
export const ListBlock = props => {
	return (
		<Ul status={ props.status }>
		{
			props.items.map(function(item) {
				return (
					<li key={ item.id }>
						<SmartLink to={ item.slug && ROUTE_ARTICLE_DIR + "/" + item.slug }>
							<section>
								<figure>
									{ item.type !== "placeholder" && <img src={ item.poster.medium } alt={ item.title + " poster image" } /> }
								</figure>
								<h2>{ item.title }</h2>
								<Caption>{ item.summary }</Caption>
								<div>
									<Stats { ...props }>{
										( item.tag === "photo-essay" && item.stats.images === "1" ) ? "Photograph" :
										(item.tag + "").replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())
									}{
										item.type !== "placeholder" && (
											( item.category !== "photo-essay" ) ?
											" | "
												+ Math.round(item.stats.words / 200)
												+ "-minute read" :
											" | "
												+ item.stats.images + " Image" + (item.stats.images > 1 ? "s" : "")
										)
									}</Stats>
									<em>{ item.author.name }{ item.type !== "placeholder" && " · " + datestamp(item["post-date"]) }</em>
								</div>
							</section>
							<ZigzagPicture style={ item.type !== "placeholder" ? { backgroundImage: `url(${ item.poster.medium })`} : null } />
						</SmartLink>
					</li>
				)
			})
		}
	</Ul>
	)
}
