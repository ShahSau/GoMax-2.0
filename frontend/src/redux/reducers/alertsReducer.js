const inititalData = {
  loading: false,
};

export const alertsReducer = (state = inititalData, action) => {
  switch (action.type) {
    case "LOADING": {
      return {
        ...state,
        loading: action.payload,
      };
    }
    default:
      return state;
  }
};
