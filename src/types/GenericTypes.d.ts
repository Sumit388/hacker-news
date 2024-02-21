type sortByOptionTypes = { label: string; value: string };

type sortByTypes = Array<sortByOptionTypes>;

type ErrorType =
  | { response: { data: { message: string }; status: number } }
  | any;
