import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Register() {
  const [form, setForm] = useState({ name:"", email:"", password:"" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/auth/register", form);
    alert("Registered! Now login.");
    navigate("/");
  };

  return (
    <div className="container mt-5 col-md-4">
      <h3>Register</h3>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-3" placeholder="Name"
          onChange={(e)=>setForm({...form,name:e.target.value})}/>
        <input className="form-control mb-3" placeholder="Email"
          onChange={(e)=>setForm({...form,email:e.target.value})}/>
        <input type="password" className="form-control mb-3" placeholder="Password"
          onChange={(e)=>setForm({...form,password:e.target.value})}/>
        <button className="btn btn-success w-100">Register</button>
      </form>
    </div>
  );
}

export default Register;
