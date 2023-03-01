import { useState } from "react";
import Comment from "./Comment";
import { data } from "./data";

function App() {
  const [commentsData, setCommentsData] = useState(data);
  const handleDeleteClick = (entry) => {
    let data = commentsData.filter((comment) => {
      
      return comment.id !== entry.id;
    });
    setCommentsData(data);
  };
  return (
    <div>
      {commentsData.map((dataEntry) => {
        return (
          <Comment
            key={dataEntry.id}
            handleDeleteClick={handleDeleteClick}
            commentEntry={dataEntry}
          />
        );
      })}
    </div>
  );
}

export default App;
