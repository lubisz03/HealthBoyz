const formReducerDefaultState: {
  formData: {
    name: string;
    last_name: string;
    e_mail: string;
    doctor_id: number;
    date: string | Date | undefined;
    time: string;
  };
} = {
  formData: {
    name: '',
    last_name: '',
    e_mail: '',
    doctor_id: 0,
    date: new Date(),
    time: '',
  },
};

export const formReducer = (
  state = formReducerDefaultState,
  action: {
    type: string;
    data: {
      name: string;
      last_name: string;
      e_mail: string;
      doctor_id: number;
      date: string | Date | undefined;
      time: string;
    };
  }
) => {
  switch (action.type) {
    case 'HANDLE_DATA_CHANGE':
      return { ...state, formData: { ...state.formData, ...action.data } };
    default:
      return state;
  }
};
