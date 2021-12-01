const inititalData = {
    services: [],
  };
  
  export const serviceReducer = (state = inititalData, action) => {
    switch (action.type) {
      case "GET_ALL_SERVICE":
        return {
          ...state,
          services: action.payload,
        };
      default:
        return state;
    }
  };