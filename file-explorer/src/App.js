import { useState } from "react";
import Folder from "./components/Folder";
import explorer from "./data/folderData";
import useTraverseTree from "./hooks/useTraverseTree";

function App() {
  const { insertNode, deleteNode } = useTraverseTree();
  const [explorerData, setExplorerData] = useState(
    localStorage.getItem("tree")
      ? JSON.parse(localStorage.getItem("tree"))
      : explorer
  );
  //
  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
    localStorage.setItem("tree", JSON.stringify(finalTree));
  };

  // const handleDeleteNode = (folderId) => {
  //   const finalTree = deleteNode(explorerData, folderId);
  //   setExplorerData(finalTree);
  //   // localStorage.setItem("tree", JSON.stringify(finalTree));
  // };
  return (
    <div
      style={{
        margin: 10,
      }}
    >
      <Folder
        // handleDeleteNode={handleDeleteNode}
        handleInsertNode={handleInsertNode}
        explorerData={explorerData}
      />
    </div>
  );
}

export default App;
