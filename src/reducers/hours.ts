const hoursReducerDefaultState: {
  bookedHrs: string[];
} = {
  bookedHrs: [],
};

export const hoursReducer = (
  state = hoursReducerDefaultState,
  action: {
    type: string;
    data: string[];
  }
) => {
  switch (action.type) {
    case 'SET_BOOKED_HRS':
      return { ...state, bookedHrs: action.data };
    default:
      return state;
  }
};
