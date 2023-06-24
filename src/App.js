import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Forum";
import QuestionDetail from "./pages/QuestionDetail";

export default function App() {
  return (
    <div>
      <h2>My forum</h2>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question/:questionId" element={<QuestionDetail />} />
      </Routes>
    </div>
  );
}
