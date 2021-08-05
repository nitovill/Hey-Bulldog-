const {
  GET,
  GETDOGS,
  GETDOGDB,
  GETDOGBYID,
  PAGINAR,
  GET_TEMPERAMENTS,
  GETBYTEMPERAMENTS,
} = require("../actiontypes");
const initialState = {
  dogs: [],
  temperaments: [],
  actualpage: 0,
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET:
      return {
        ...state,
        dogs: action.payload,
      };
    case GETDOGS:
      return {
        ...state,
        dogs: action.payload,
      };
    case GETDOGDB:
      return {
        ...state,
        dogs: action.payload,
      };
    case GETDOGBYID:
      return {
        ...state,
        dogs: action.payload,
      };
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };
    case GETBYTEMPERAMENTS:
      return {
        ...state,
        dogs: action.payload,
      };
    case PAGINAR:
      return {
        ...state,
        actualpage: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
