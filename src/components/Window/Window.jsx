import TaskNav from "../TaskNav/TaskNav";
import Main from "../Main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./window.css";

const Window = () => {
  return (
    <div className="window">
      <BrowserRouter>
        <TaskNav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:id" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Window;
