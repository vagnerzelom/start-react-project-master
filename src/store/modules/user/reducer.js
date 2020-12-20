const defaultState = null;

export default function user(state = defaultState, action) {
  switch (action.type) {
    case '@user/LOGIN':
      return action.data;

    case '@user/LOGOUT':
      return defaultState;

    default:
      return state;
  }
}
