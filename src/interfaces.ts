export interface CharactersFetchedResults {
  info: ResultsInfo;
  results: any[];
}

export interface Credentials {
  email: string;
  password: string;
}

export interface CustomButton {
  title: string;
  design: string;
  onClick: () => void;
}
export interface CustomInput {
  type: string;
  name: string;
  design: string;
  placeholder: string;
  value: string | undefined;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface DataFetched {
  success: boolean;
  message: string;
  data: any[];
}

export interface ResultsInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}
