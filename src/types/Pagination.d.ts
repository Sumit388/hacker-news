export default interface PaginationProps {
  url: string;
  totalCount: number;
  pageSize: number;
  currentPage?: number;
  onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}
