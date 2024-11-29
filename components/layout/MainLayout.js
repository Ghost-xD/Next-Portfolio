// components/layout/MainLayout.js
export default function MainLayout({ children }) {
    return (
      <div className="app-container">
        <div className="sidebar-container">{children[1]}</div> {}
        <div className="sidebar2-container">{children[2]}</div> {}
        <div className="header-container">{children[0]}</div> {}
        <div className="main-content-container">{children[3]}</div> {/* Main content */}
      </div>
    );
  }
  