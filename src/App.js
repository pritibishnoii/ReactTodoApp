import "./App.css";
import NotificationToast from "./tostifyNotification/Mytostify";
import Todo from "./components/to-do App/Todo.jsx";
import Card from "./components/cardFiltering/Card.jsx";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="notify" element={<NotificationToast />} />
        <Route path="card" element={<Card />} />
      </Routes>
      {/* <NotificationToast /> */}
      {/* <Todo /> */}
    </>
  );
}

export default App;
