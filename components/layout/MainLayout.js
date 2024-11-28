// components/layout/MainLayout.js
export default function MainLayout({ children }) {
    return (
      <div className="app-container">
        <div className="sidebar-container">{children[1]}</div> {/* Sidebar */}
        <div className="main-content-container">{children[0]}</div> {/* Main content */}
      </div>
    );
  }
  