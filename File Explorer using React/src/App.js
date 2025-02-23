import "./styles.css";
import json from "./data.json";
import { useState } from "react";

function List({ data, addNodeToList, deleteNodeFromList }) {
  const [expand, setExpand] = useState({});

  function updateExpand(node) {
    setExpand((prevState) => ({
      ...prevState,
      [node.name]: !expand?.[node.name],
    }));
  }

  return (
    <div className="tree">
      {data.map((node) => (
        <div key={node.id} className="node">
          <div className="item">
            {node.isFolder && (
              <button onClick={() => updateExpand(node)}>
                {expand?.[node.name] ? "-" : "+"}
              </button>
            )}
            <p>{node.name}</p>
            {node.isFolder && (
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSacjbNBMgUprmmZ19fuUViI6J4_hyzDAVpXQ&s"
                alt="create new folder"
                onClick={() => addNodeToList(node.id)}
              />
            )}
            <img
              src="https://w7.pngwing.com/pngs/29/45/png-transparent-delete-key-logo-button-text-rectangle-logo-thumbnail.png"
              alt="create new folder"
              onClick={() => deleteNodeFromList(node.id)}
            />
          </div>
          {expand?.[node.name] && node.isFolder && (
            <div className="child">
              <List
                data={node.children}
                addNodeToList={addNodeToList}
                deleteNodeFromList={deleteNodeFromList}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const [data, setData] = useState(json);

  function addNodeToList(parentId) {
    const name = prompt("Enter Folder Name:");

    if (!name) return;

    function updateTree(list) {
      return list.map((node) => {
        // Base condition
        if (node.id === parentId) {
          return {
            ...node,
            children: [
              ...node.children,
              {
                id: new Date().getTime(),
                name,
                isFolder: true,
                children: [],
              },
            ],
          };
        }

        // recursive call
        if (node.children) {
          return { ...node, children: updateTree(node.children) };
        }

        return node;
      });
    }

    setData((prevState) => updateTree(prevState));
  }

  function deleteNodeFromList(itemId) {
    function updateTree(list) {
      return list
        .filter((item) => item.id !== itemId)
        .map((node) => {
          if (node.children) {
            return { ...node, children: updateTree(node.children) };
          }
          return node;
        });
    }

    setData((prevState) => updateTree(prevState));
  }

  return (
    <div className="App">
      <h1>File Explorer</h1>
      <List
        data={data}
        addNodeToList={addNodeToList}
        deleteNodeFromList={deleteNodeFromList}
      />
    </div>
  );
}
