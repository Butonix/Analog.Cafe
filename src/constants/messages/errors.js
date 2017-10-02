import emojis from "./emojis"
export default {
  VIEW_TEMPLATE: {
    ARTICLE: {
      title: emojis.WTF,
      subtitle: "Page Not Available"
    },
    LIST: {
      title: "List not available",
      emoji: emojis.WTF
    },
    PICTURE: {
      name: "Unknown Author",
      title: "Info not available",
      text: "This image has been authored by someone not listed in our records…"
    },
    CARD: {
      title: "Info Not Available",
      text: "This card could not be loaded…"
    },
    SUBMISSION: {
      title: "Submission Failed",
      text:
        "Your submission did not go through. You can try sending it again, if you like."
    },
    SUBMISSION_NO_IMAGES: {
      title: "Forgot to Add Images?",
      text: "Please include at least one photograph or illustration."
    },
    SUBMISSION_NO_CONTENT: {
      title: "Can’t Send Nothing!",
      text:
        "Please make sure that you’ve added a title, text and image(s) to your submission."
    },
    UPLOAD_IMAGE_SIZE: {
      title: "File is Too Large!",
      text:
        "Your images need to be 10MB or less in size. Try selecting another PNG or JPG file."
    }
  },
  DISAMBIGUATION: {
    CODE_103: { error: "Error: User already authenticated (103)" },
    CODE_204: { error: "Error: Malformed or no data received (204)" },
    CODE_404: {
      error: "Error: This view or data for this view does not exist (404)"
    },
    CODE_403: {
      error: "Error: Viewing this content requires matching log in (403)"
    },
    CODE_401: {
      error: "Error: You need to sign in to view this content (401)"
    }
  }
}
