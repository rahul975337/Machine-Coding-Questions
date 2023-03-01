import { useState } from "react";

function Comment({ commentEntry, handleDeleteClick }) {
  const { name, comment, replies } = commentEntry;
  const [expand, setExpand] = useState(false);
  const [reply, setReply] = useState("");
  const currUserName = "Rahul Tilwani";

  const handleReplyClick = () => {
    setExpand(true);
  };
  const handleAddComment = () => {
    commentEntry.replies.push({
      id: Date.now(),
      name: currUserName,
      comment: reply,
      replies: [],
    });
    setReply("");
  };
  return (
    <div style={{ marginLeft: 100 }}>
      <p style={{ color: "blue" }}>{name}</p>
      <p>{comment}</p>
      <button
        style={{ marginRight: 20 }}
        onClick={() => handleDeleteClick(commentEntry)}
      >
        Delete
      </button>
      <button onClick={handleReplyClick}>Reply</button>
      {replies.length > 0 &&
        replies.map(
          (reply) =>
            expand && (
              <Comment
                handleDeleteClick={handleDeleteClick}
                key={reply.id}
                commentEntry={reply}
              />
            )
        )}
      {expand && (
        <div style={{ marginLeft: 100 }}>
          <input
            type="text"
            value={reply}
            onChange={(e) => setReply(e.target.value)}
          />
          <button onClick={handleAddComment}>Submit</button>
        </div>
      )}
    </div>
  );
}
export default Comment;
