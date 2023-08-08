const menuReducerDefaultState: {
  isOpen: boolean;
} = { isOpen: false };

export const menuReducer = (
  state = menuReducerDefaultState,
  action: { type: string }
) => {
  switch (action.type) {
    case 'HANDLE_IS_OPEN':
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
};
