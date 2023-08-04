import {
  HANDLE_IS_OPEN,
  HANDLE_IS_OPEN_DOCTORS,
  GET_DOCTORS_DATA,
} from './actionTypes';

export interface HandleIsOpenAction {
  type: typeof HANDLE_IS_OPEN;
}

export interface HandleIsOpenDoctorsAction {
  type: typeof HANDLE_IS_OPEN_DOCTORS;
}

export interface GetDoctorsDataAction {
  type: typeof GET_DOCTORS_DATA;
  data: {
    id: number;
    name: string;
    imgUrl: string;
    description: string;
  }[];
}

export const handleIsOpen = (): HandleIsOpenAction => {
  return {
    type: HANDLE_IS_OPEN,
  };
};

export const handleIsOpenDoctors = (): HandleIsOpenDoctorsAction => {
  return {
    type: HANDLE_IS_OPEN_DOCTORS,
  };
};

export const getDoctorsData = (
  data: {
    id: number;
    name: string;
    imgUrl: string;
    description: string;
  }[]
): GetDoctorsDataAction => {
  return {
    type: GET_DOCTORS_DATA,
    data,
  };
};
