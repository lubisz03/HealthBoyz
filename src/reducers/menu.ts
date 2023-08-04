const menuReducerDefaultState: {
  isOpen: boolean;
  isOpenDoctors: boolean;
} = { isOpen: false, isOpenDoctors: false };

export const menuReducer = (
  state = menuReducerDefaultState,
  action: { type: string }
) => {
  switch (action.type) {
    case 'HANDLE_IS_OPEN':
      return { ...state, isOpen: !state.isOpen };
    case 'HANDLE_IS_OPEN_DOCTORS':
      return { ...state, isOpenDoctors: !state.isOpenDoctors };
    default:
      return state;
  }
};
