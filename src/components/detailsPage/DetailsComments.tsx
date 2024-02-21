/* //* Utils Imports */
import { useState, useEffect } from "react";
import { formatDateTime, extractComments } from "@Utils/utils";

/* //* Styles Imports */
import Styles from "@Styles/DetailsPage.module.scss";

const DetailsComments = ({ data }: { data: DetailsDataType }) => {
  const [comments, setComments] = useState<CommentType[]>([]);

  useEffect(() => {
    setComments(() => extractComments(data));
  }, []);
  return (
    <div className={Styles.commentsContainer}>
      {comments.length === 0 ? (
        <p>There are no comments on this post.</p>
      ) : (
        comments.map((comment) => (
          <div className={Styles.comment} key={comment?.id}>
            <h2>{comment?.title}</h2>
            <h3>Author: {comment?.author}</h3>
            <p className={Styles.date}>
              {" "}
              {formatDateTime(comment?.created_at)}
            </p>
            <div
              className={""}
              dangerouslySetInnerHTML={{
                __html: comment?.text as string,
              }}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default DetailsComments;
