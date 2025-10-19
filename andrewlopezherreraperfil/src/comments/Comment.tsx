import Base from "../base/Base";
import CommentContent from "./CommentContent";
import React from "react";

const Comment: React.FC = () => {

  return (
    <Base frame={<CommentContent />} />
  );
};

export default Comment;