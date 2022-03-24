type TNavigation = {
  navigate: (str: string, params: any) => void;
};

type TRoute = {
  params: any;
};

export type TMessage = {
  id: number;
  timestamp: number;
  subject: string;
  detail: string;
  marked: boolean;
  navigation: TNavigation;
  route: Partial<TRoute>;
};
