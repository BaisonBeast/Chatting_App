export const initialState = {
  user:  localStorage.user?JSON.parse(localStorage.user): null
};

// Selector
export const actionTypes = {
  SET_USER: "SET_USER",
  Logout_USER: "Logout_USER"
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {

      case "SET_USER":
      return {
        ...state,
        user:action.user 
      }

      case "Logout_USER":
      return {
        user:action.user 
      }

      default:
      return state;
  }
};

export default reducer;