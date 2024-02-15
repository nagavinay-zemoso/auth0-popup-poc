import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <Link to="/">Home page</Link>
        <Link to="/login">Login page</Link>
      </div>
      <h1>Login Page</h1>
    </div>
  );
};

export default Login;
