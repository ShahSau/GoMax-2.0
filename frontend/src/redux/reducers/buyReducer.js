const initialData = {
  buyCar: [],
};

export const buyReducer = (state = initialData, action) => {
  switch (action.type) {
    case "GET_ALL":
      return {
        ...state,
        buyCar: action.payload,
      };
    default:
      return state;
  }
};
