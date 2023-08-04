const doctorsReducerDefaultState: {
  doctorsData: [];
} = {
  doctorsData: [],
};

export const doctorsReducer = (
  state = doctorsReducerDefaultState,
  action: {
    type: string;
    data: {
      id: number;
      name: string;
      imgUrl: string;
      description: string;
    }[];
  }
) => {
  switch (action.type) {
    case 'GET_DOCTORS_DATA':
      return { ...state, doctorsData: action.data };
    default:
      return state;
  }
};
