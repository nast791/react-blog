const initialState = {
  tab: 'entry',
};

export default function authChoice(state = initialState, action) {
  switch (action.type) {
    case "SET_ENTRY":
      return {
        ...state, tab: 'entry'
      };
    case "SET_REG":
      return {
        ...state, tab: 'reg'
      };
    default:
      return state;
  }
}