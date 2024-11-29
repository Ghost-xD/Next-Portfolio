"use client"

import React, { useState } from "react";


//icons
import { IoIosArrowForward,IoIosArrowRoundDown  } from "react-icons/io";
import { BsFillFolderFill } from "react-icons/bs";
import { FaFileAlt } from "react-icons/fa";

const TreeNode = ({ node,customRoutes, onClick }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  

  const hasChildren = node.children && node.children.length > 0;

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const handleClick = (nodeName) => {
    if (onClick) {
        onClick(nodeName);
    }
  };

  return (
    <div style={{ marginBottom: "0.5rem" }}>
      <div
        // onClick={toggleExpand}
        onClick={() => hasChildren && toggleExpand()}
        style={{
          cursor: hasChildren ? "pointer" : "default",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          marginBottom: "0.5rem"
        }}
      >
        {hasChildren && (
          <span>{isExpanded ? <IoIosArrowRoundDown className=""></IoIosArrowRoundDown > : <IoIosArrowForward className=""></IoIosArrowForward >}</span>
        )}

        <span>{hasChildren ? <BsFillFolderFill className="folder-icons"/> : <FaFileAlt className="file-icons"/> }</span>

        <span style={{ cursor: "pointer" }}
          onClick={() => !hasChildren && handleClick(node.name)}>
            {node.name}
        </span>
      </div>

      {hasChildren && isExpanded && (
        <div style={{ marginLeft: "1.3rem" }}>
          {node.children.map((child, index) => (
            <TreeNode
                key={index}
                node={child}
                customRoutes={customRoutes}
                onClick={onClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const FileTree = ({ data, customRoutes, onClick }) => {
    return (
      <div style={{ fontFamily: "monospace", fontSize: "13px" }}>
        {data.map((node, index) => (
          <TreeNode
            key={index}
            node={node}
            customRoutes={customRoutes}
            onClick={onClick}
          />
        ))}
      </div>
    );
  };

export default FileTree;
