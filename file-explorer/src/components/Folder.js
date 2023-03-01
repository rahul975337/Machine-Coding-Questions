import { useState } from "react";

function Folder({ handleInsertNode, handleDeleteNode, explorerData }) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder: isFolder,
    });
  };
  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorerData.id, e.target.value, showInput.isFolder);

      setShowInput({ ...showInput, visible: false });
    }
  };
  //   const deleteEntry = (e) => {
  //     handleDeleteNode(explorerData.id);
  //   };
  if (explorerData.isFolder) {
    return (
      <div>
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span>🗂️ {explorerData.name}</span>
          <div className="buttons">
            <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
            <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
            {/* <button onClick={deleteEntry}>Delete</button> */}
          </div>
        </div>
        <div style={{ display: expand ? "block" : "none", paddingLeft: 20 }}>
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "🗂️" : "📄"}</span>
              <input
                onBlur={() => setShowInput({ ...showInput, visible: false })}
                autoFocus
                onKeyDown={onAddFolder}
                className="inputContainer__input"
                type="text"
              />
            </div>
          )}
          {explorerData.items.map((item) => (
            <Folder
              handleInsertNode={handleInsertNode}
              //   handleDeleteNode={handleDeleteNode}
              explorerData={item}
              key={item.id}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="file">
        <span>📄 {explorerData.name}</span>
      </div>
    );
  }
}
export default Folder;

//  <p>{item.name}</p>
