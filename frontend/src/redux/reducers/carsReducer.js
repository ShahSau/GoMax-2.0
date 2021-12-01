const inititalData = {
  cars: [],
};

export const carsReducer = (state = inititalData, action) => {
  switch (action.type) {
    case "GET_ALL_CARS":
      return {
        ...state,
        cars: action.payload,
      };
    default:
      return state;
  }
};
