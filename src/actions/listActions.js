// tools
import axios from "axios"
import { setCard } from "./modalActions"

// return
export function setPage(page, appendItems) {
  if(appendItems === false) return {
    type: "LIST.SET_PAGE",
    payload: page
  }
  else return {
    type: "LIST.ADD_PAGE",
    payload: page,
  }
}
export function initPage(state) {
	return {
		type: "LIST.INIT_PAGE",
		payload: state,
	}
}

export function fetchPage(request, appendItems = false) {
  return dispatch => {

    // reset list state (unless it's being paginated)
    !appendItems && dispatch(initPage({
      requested: request,
    }))

    axios({
      method: 			request.method || "get",
      data:         request.data || {},
      url: 					request.url + ".json",
    })
      .then(response => dispatch(setPage(response.data, appendItems)))
      .catch(error =>
        dispatch(setCard({
          status: "ok",
          info: {
            title: "Error " + error.response.status + " 😧",
            text: "Couldn’t load the list. Sorry!",
          }
        }, { url: "errors/list" }))
      )
  }
}