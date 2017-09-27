// tools
import axios from "axios"
import { axiosRequest } from "../utils/axios-request"

import { setCard } from "./modalActions"
import errorMessages from "../constants/messages/errors"

export const setStatus = state => {
  return {
    type: "UPLOAD.SET_STATUS",
    payload: state
  }
}
export const initStatus = () => {
  return {
    type: "UPLOAD.INIT_STATUS"
  }
}

export const send = request => {
  return dispatch => {
    dispatch(initStatus())
    axios(axiosRequest(request))
      .then(response => {
        dispatch(
          setStatus({
            status: "ok"
          })
        )
      })
      .catch(error => {
        error.response && error.response.status === 401
          ? dispatch(
              setStatus({
                status: "unauthorized"
              })
            )
          : dispatch(
              setCard(
                {
                  status: "ok",
                  info: {
                    title: errorMessages.VIEW_TEMPLATE.SUBMISSION.title,
                    text: errorMessages.VIEW_TEMPLATE.SUBMISSION.text,
                    error,
                    stubborn: true,
                    buttons: [
                      {
                        to: "#try-again",
                        onClick: () => {
                          window.location.reload()
                        },
                        text: "Try Again",
                        red: true
                      },
                      {
                        to: "/submit/compose",
                        text: "Cancel"
                      }
                    ]
                  }
                },
                {
                  url: "errors/upload"
                }
              )
            )
      })
  }
}
