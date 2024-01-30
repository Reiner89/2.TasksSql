import { Route, Routes } from "react-router-dom";
import { TaskPage } from "./Pages/TaskPage";
import { TaskForm } from "./Pages/TaskForm";
import { NotFound } from "./Pages/NotFound";
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<TaskPage />} />
        <Route path="/new" element={<TaskForm />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
