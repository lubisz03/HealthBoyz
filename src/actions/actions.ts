import { HANDLE_IS_OPEN } from './actionTypes';

export interface HandleIsOpenAction {
  type: typeof HANDLE_IS_OPEN;
}

export const handleIsOpen = (): HandleIsOpenAction => {
  return {
    type: HANDLE_IS_OPEN,
  };
};
