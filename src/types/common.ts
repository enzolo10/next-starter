export type OptionType<T = string | number> = {
  label: string;
  value: T;
  isDisabled?: boolean;
  options?: OptionType[];
};

export type PageProps<T = Record<string, string>, S = Record<string, string | undefined>> = {
  params: T;
  searchParams: S;
};
