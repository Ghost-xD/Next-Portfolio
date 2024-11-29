import Image from "next/image";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";


export default function Header() {
    return (
      <header className="header">        
        <div className="logo">
          <Image
            src="/vscode.svg"
            alt="vscode logomark"
            width={20}
            height={20}
          />
        </div>
        <nav className="navbar">
          <ul>
            <li><a href="#file">File</a></li> 
            <li><a href="#edit">Edit</a></li>
            <li><a href="#selection">Selection</a></li>
            <li><a href="#view">View</a></li>
            <li><a href="#go">Go</a></li>
            <li><a href="#run">Run</a></li>
            <li><a href="#terminal">Terminal</a></li>
          </ul>
        </nav>
        <LuArrowLeft />
        <LuArrowRight />
      </header>
    );
  }
  