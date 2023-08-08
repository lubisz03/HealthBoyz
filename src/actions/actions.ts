import {
  HANDLE_IS_OPEN,
  GET_DOCTORS_DATA,
  HANDLE_DATA_CHANGE,
  SET_BOOKED_HRS,
} from './actionTypes';

export interface HandleIsOpenAction {
  type: typeof HANDLE_IS_OPEN;
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

export interface HandleDataChangeAction {
  type: typeof HANDLE_DATA_CHANGE;
  data: {
    name: string;
    last_name: string;
    e_mail: string;
    doctor_id: number;
    date: string | Date | undefined;
    time: string;
  };
}

export interface SetBookedHrsAction {
  type: typeof SET_BOOKED_HRS;
  data: string[];
}

export const handleIsOpen = (): HandleIsOpenAction => {
  return {
    type: HANDLE_IS_OPEN,
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

export const handleDataChange = (data: {
  name: string;
  last_name: string;
  e_mail: string;
  doctor_id: number;
  date: string | Date | undefined;
  time: string;
}): HandleDataChangeAction => {
  return {
    type: HANDLE_DATA_CHANGE,
    data,
  };
};

export const setBookedHrs = (data: string[]): SetBookedHrsAction => {
  return {
    type: SET_BOOKED_HRS,
    data,
  };
};
