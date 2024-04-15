import React from "react";
import { CommentTypeProps } from "../utils/types";

const Comment: React.FC<CommentTypeProps> = ({ comment, setNewDiary }) => {
  return (
    <div className="date_and_comment_container">
      <label htmlFor="comment">Comment</label>
      <input type="text" name="comment" id="comment" value={comment} onChange={(e) => setNewDiary((prevState) => ({ ...prevState, comment: e.target.value }))} />
    </div>
  );
};

export default Comment;
