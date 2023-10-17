import { useState } from "react";
import "./App.css";
import AdminLogin from "./Components/AdminLogin";
import UserLogin from "./Components/UserLogin";
import { useNavigate } from "react-router-dom";

const data = [
  {
    id: 1,
    username: "john",
    password: "john",
    isAdmin: true,
  },
  {
    id: 2,
    username: "rohan",
    password: "rohan",
    isAdmin: true,
  },
  {
    id: 1,
    username: "smith",
    password: "smith",
    isAdmin: false,
  },
  {
    id: 4,
    username: "joe",
    password: "joe",
    isAdmin: false,
  },
];

function App() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const navigate = useNavigate();
    const getUser = data.find(
      (user) =>
        user.username === formData.username &&
        user.password === formData.password,
    );
    if (!getUser) {
      navigate("/nouser");
    } else {
      if (getUser.isAdmin) {
        navigate("/admin");
      } else {
        navigate("/user");
      }
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="username">username</label>
        <input
          type="text"
          placeholder="username"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input
          type="password"
          placeholder="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button onClick={handleSubmit}>signin</button>
    </div>
  );
}

export default App;
