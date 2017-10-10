// tools
import axios from "axios"
import { setCard } from "./modalActions"
import errorMessages from "../constants/messages/errors"
import { axiosRequest } from "../utils/axios-request"

import { ROUTE_USER_API, ROUTE_UPDATE_PROFILE_API } from "../constants/user"

// error message
const loginError = {
  status: "ok",
  info: {
    title: errorMessages.VIEW_TEMPLATE.CARD.title,
    text: errorMessages.DISAMBIGUATION.CODE_401.error
  }
}

// check if user is logged in
export const verify = () => {
  return dispatch => {
    if (!localStorage.getItem("token"))
      dispatch({
        type: "USER.SET_STATUS",
        payload: "forbidden"
      })
    else
      dispatch({
        type: "USER.SET_STATUS",
        payload: "ok"
      })
  }
}

// remove token from local storage
export const forget = () => {
  return dispatch => {
    localStorage.removeItem("token")
    dispatch({
      type: "USER.RESET_STATE",
      payload: null
    })
  }
}

// get user data matched to login credentials
export const getInfo = () => {
  return dispatch => {
    // read token and kick if none
    const token = localStorage.getItem("token")
    if (!token) return

    let request = {
      headers: {
        Authorization: "JWT " + token
      },
      url: ROUTE_USER_API
    }
    axios(axiosRequest(request))
      .then(response => {
        dispatch({
          type: "USER.SET_INFO",
          payload: response.data.info
        })
      })
      .catch(error => dispatch(setCard(loginError, { url: "errors/user" })))
  }
}

export const setInfo = user => {
  return dispatch => {
    const token = localStorage.getItem("token")
    const request = {
      method: "put",
      headers: {
        Authorization: "JWT " + token
      },
      data: user,
      url: ROUTE_UPDATE_PROFILE_API
    }
    axios(axiosRequest(request))
      .then(response => {
        dispatch({
          type: "USER.SET_INFO",
          payload: response.data.info
        })
        dispatch({
          type: "USER.SET_STATUS",
          payload: "updated"
        })
      })
      .catch(error => dispatch(setCard(loginError, { url: "errors/user" })))
  }
}
export const acceptInfo = () => {
  return {
    type: "USER.SET_STATUS",
    payload: "ok"
  }
}

// set user routes, notably redirect after login url
export const setRoutes = routes => {
  return {
    type: "USER.SET_ROUTES",
    payload: routes
  }
}
export const resetRoutes = () => {
  return {
    type: "USER.RESET_ROUTES"
  }
}
