import { Dispatch, SetStateAction } from 'react';

export type DataType = {
  letter: string;
  letter_index: number;
}[];

export type AppDataType = {
  checkboxes: boolean[];
  data: DataType[];
  error: boolean;
  errorMessage: string;
};

export interface AppStateContextInterface {
  appData: AppDataType;
  setAppData: Dispatch<SetStateAction<AppDataType>>;
}
