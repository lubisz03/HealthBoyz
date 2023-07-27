const menuReducerDefaultState: boolean = false;

export const menuReducer = (
  state: boolean = menuReducerDefaultState,
  action: { type: string }
): boolean => {
  switch (action.type) {
    case 'HANDLE_IS_OPEN':
      return !state;
    default:
      return state;
  }
};
