/* //* Utils Imports */
import { formatDateTime } from "@Utils/utils";

const DetailsHeader = ({ data }: { data: DetailsDataType }) => {
  return (
    <div>
      <h1>{data?.title}</h1>
      <p>By: {data?.author}</p>
      <p>Total Points:{data?.points}</p>
      <p>{formatDateTime(data?.created_at)}</p>
    </div>
  );
};

export default DetailsHeader;
