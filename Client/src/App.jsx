import { Route, Routes } from "react-router-dom";
import { TaskPage } from "./Pages/TaskPage";
import { TaskForm } from "./Pages/TaskForm";
import { NotFound } from "./Pages/NotFound";
import { Navbar } from "./Components/Navbar";
import { TaskContextProvider } from "./Context/TaskProvider";

function App() {
  return (
    <div className="relative bg-zinc-900 h-screen">
      <TaskContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<TaskPage />} />
          <Route path="/new" element={<TaskForm />} />
          <Route path="/edit/:id" element={<TaskForm />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </TaskContextProvider>
    </div>
  );
}

export default App;
