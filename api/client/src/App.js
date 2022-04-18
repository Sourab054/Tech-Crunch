import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SingleBlog from "./pages/SingleBlog";
import CreateBlog from "./pages/CreateBlog";
import UserProfile from "./pages/UserProfile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserState } from "./context.js/UserContext";

function App() {
  const { user } = UserState();
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/write" element={user ? <CreateBlog /> : <Login />} />
          <Route path="/login" element={!user ? <Login /> : <Home />} />
          <Route path="/register" element={!user ? <Register /> : <Home />} />
          <Route
            path="/profile"
            element={!user ? <Register /> : <UserProfile />}
          />
          <Route
            path="/post/:id"
            element={!user ? <Register /> : <SingleBlog />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
