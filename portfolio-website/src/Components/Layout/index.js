import Sidebar from "../Sidebar";
import "./index.css";

const Layout = () => {
  return (
    <div className="App">
    <Sidebar />
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>
      </div>
    </div>
  );
};

export default Layout;
