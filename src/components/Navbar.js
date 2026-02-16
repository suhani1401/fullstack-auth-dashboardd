import { Link, useNavigate } from "react-router-dom";
import { isLoggedIn, logout } from "../utils/auth";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">DashboardApp</Link>
      <div>
        {isLoggedIn() ? (
          <>
            <Link className="btn btn-light me-2" to="/dashboard">Dashboard</Link>
            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link className="btn btn-light me-2" to="/">Login</Link>
            <Link className="btn btn-success" to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
