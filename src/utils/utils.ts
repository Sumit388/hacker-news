export const formatDateTime = (dateTimeString: string) => {
  const dateObj = new Date(dateTimeString);

  // Extract date components
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");

  // Extract time components
  const hours = String(dateObj.getHours()).padStart(2, "0");
  const minutes = String(dateObj.getMinutes()).padStart(2, "0");

  // Format date and time
  const formattedDate = `${day}-${month}-${year}`;
  const formattedTime = `${hours}:${minutes}`;

  return `Date: ${formattedDate}, Time:${formattedTime}`;
};

export const extractComments = (data: DetailsDataType): CommentType[] => {
  const comments: CommentType[] = [];

  function extractCommentsRecursive(comment: CommentType) {
    comments.push(comment);
    comment.children.forEach(extractCommentsRecursive);
  }

  if ("children" in data) {
    data.children.forEach(extractCommentsRecursive);
  }

  return comments;
};
