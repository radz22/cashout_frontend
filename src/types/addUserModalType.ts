import { dashBoardDataType } from "./dashBoardDataType";
export type addUserModalType = {
  open: boolean;
  handleClose: () => void;
};

export type formModalType = {
  amount: number;
  referrence: string;
};

export type editDataType = {
  open: boolean;
  handleCloseModalData: () => void;
  data?: dashBoardDataType | null;
};
