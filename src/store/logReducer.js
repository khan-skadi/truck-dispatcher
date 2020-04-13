const initialState = {
  logs: [],
  error: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'ADD_LOG':
      return {
        ...state,
        logs: [...state.logs, action.payload]
      };
    case 'GET_LOGS_SUCCESS':
      return {
        ...state,
        logs: action.payload
      };
    default:
      return state;
  }
}
