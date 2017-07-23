const INITIAL_STATE = {
  "status": "loading",
  "filters": {
    "tags": [],
    "author": {}
  },
  "page" : {
    "current" : "1",
    "total" : "1"
  },
  "items" : [
    {
      "type" : "placeholder",
      "tag" : "████████",
      "title" : "███",
      "id" : "0000000",
      "author" : {
        "name" : "██████"
      },
      "summary" : "█ ████████ ██████ ████ ████ ██████████ ████ ████████████████ ██"
    },
    {
      "type" : "placeholder",
      "tag" : "████",
      "title" : "████",
      "id" : "0000001",
      "author" : {
        "name" : "█████"
      },
      "summary" : "█████ ████████████ ████████ ███ ███████████ ██████████████████"
    },
    {
      "type" : "placeholder",
      "tag" : "█████████",
      "title" : "██",
      "id" : "0000002",
      "author" : {
        "name" : "██"
      },
      "summary" : "█ ██████████ ██████ ██████ ███████████ ███ ███████████ █████████"
    }
  ],
  requested : {
    method: "get",
    data: {},
    url: "",
  }
}

export default (state = INITIAL_STATE, action) =>  {
	switch (action.type) {
		case "SET_PAGE":
			state = {
				...state,
				...action.payload
			}
			break
    case "ADD_PAGE":
			state = {
				...state,
				...action.payload,
        items: [
          ...state.items,
          ...action.payload.items,
        ],
			}
			break
    case "INIT_PAGE":
      state = {
        ...INITIAL_STATE,
        requested: action.payload,
      }
      break
		default:
      return state
	}
	return state
}
