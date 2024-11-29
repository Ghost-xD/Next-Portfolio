"use client"

import FileTree from "../common/FileTree";
import { useRouter } from 'next/navigation';

export default function Sidebar2() {

  const router = useRouter();
  
  const treeData = [
    {
      name: "home",
      children: [
        {
          name: "components",
          children: [
            { name: "aboutme.js" },
            { name: "projects.js" },
            { name: "github.js" },
          ],
        },
      ],
    },
    {
      name: "skills_package.json",
    },
    {
      name: "README_RESUME.md",
    },
  ];

  const customRoutes = {
    "aboutme.js": "/about",
    "projects.js": "/projects",
    "github.js": "/github",
    "skills_package.json": "/skills",
    "README_RESUME.md": "/resume",
  };

  const handleClick = (nodeName) => {
    const customRoute = customRoutes[nodeName];
    if (customRoute) {
      router.push(customRoute);
    } else {
      console.error(`No route defined for ${nodeName}`);
    }
  };
  
  return (      
    <aside className="sidebar2">
      <div className="sidebar2-title">Explorer</div>
      <div className="sidebar2-data">
        <FileTree data={treeData} customRoutes={customRoutes} onClick={handleClick}/>
      </div>
    </aside>
  );
}