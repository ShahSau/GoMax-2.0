export const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
      case "AUTH":
        localStorage.setItem("gomax-user", JSON.stringify({ ...action?.data }));
        return { ...state, authData: action?.data };
      case "FAUTH":
        localStorage.setItem("gomax-user", JSON.stringify({ ...action?.data }));
        return { ...state, authData: action?.data };
      default:
        return state;
    }
  };