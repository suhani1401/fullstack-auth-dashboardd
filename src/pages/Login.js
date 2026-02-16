import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container mt-5 col-md-4">
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-3" placeholder="Email"
          onChange={(e)=>setForm({...form,email:e.target.value})}/>
        <input type="password" className="form-control mb-3" placeholder="Password"
          onChange={(e)=>setForm({...form,password:e.target.value})}/>
        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}

export default Login;
