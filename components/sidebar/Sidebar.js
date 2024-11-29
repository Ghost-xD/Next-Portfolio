import { VscSearch,VscDebugAlt,VscRemoteExplorer,VscCopy } from "react-icons/vsc";
import { FaDocker } from "react-icons/fa";
import { CgExtension } from "react-icons/cg";
import { LiaFlaskSolid } from "react-icons/lia";
import { IoGitBranchOutline } from "react-icons/io5";
import { PiUserCircleLight } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";

export default function Sidebar() {
    return (
      <aside className="sidebar">
        <VscCopy className="sidebar-icons"></VscCopy >
        <VscSearch className="sidebar-icons"></VscSearch >
        <IoGitBranchOutline className="sidebar-icons"></IoGitBranchOutline >
        <VscDebugAlt className="sidebar-icons"></VscDebugAlt >
        <CgExtension className="sidebar-icons"></CgExtension >
        <VscRemoteExplorer className="sidebar-icons"></VscRemoteExplorer >
        <LiaFlaskSolid className="sidebar-icons"></LiaFlaskSolid >
        <FaDocker className="sidebar-icons"></FaDocker >

        <div className="spacer"></div>

        <PiUserCircleLight className="sidebar-icons size"></PiUserCircleLight >
        <CiSettings className="sidebar-icons size"></CiSettings >
      </aside>
    );
  }
  