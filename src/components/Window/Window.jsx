import TaskNav from "../TaskNav/TaskNav";
import Main from "../Main/Main";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import "./window.css";

const Window = () => {
  return (
    <div className="window">
      <MemoryRouter>
        <TaskNav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:id" element={<Main />} />
        </Routes>
      </MemoryRouter>
    </div>
  );
};
export default Window;
