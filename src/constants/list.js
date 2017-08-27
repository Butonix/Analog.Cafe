// related constants
import { APP_DESCRIPTION, ROUTE_API_DOMAIN } from "./app"
export { ROUTE_ARTICLE_DIR } from "./article"
export { SUMMARY_LENGTH_MAX } from "./input"

// api endpoints
export const ROUTE_LIST_API = ROUTE_API_DOMAIN + "/api/list"
export const ROUTE_AUTHENTICATED_LIST_API = "/api/auth/list"

// filter sets for particular view URLs/routes
export const ROUTE_FILTERS = {
  "/photo-essays": "photo-essay",
  "/articles": "review:how-to:editorial",
  "/me": "",
  "/": ""
}

// meta info for filtered routes
export const ROUTE_META = {
  "/photo-essays": {
    title: "Stories told with images on film",
    description:
      "A collection of photo essays which were created with film (analog) cameras.",
    emoji: "🌇🌃🌌"
    // #photo-essay
  },
  "/articles": {
    title: "Reads of interest",
    description:
      "Stories, editorials, reviews, how-to’s and other articles about art, inspiration and technology.",
    // #story
    // #editorial
    // #review
    // #how-to
    emoji: "🌈"
  },
  "/": {
    title: APP_DESCRIPTION,
    description:
      "Analog.Cafe is an inclusive creative outlet that publishes outstanding images and stories.",
    emoji: "☕️",
    designation: "homepage"
  },
  "/author/*": {
    title: "Images and stories",
    description: "Published works and photography by Analog.Cafe authors.",
    emoji: "🤘"
  },
  default: {
    title: APP_DESCRIPTION,
    emoji: "🍩"
  }
}
