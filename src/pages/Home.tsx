import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../components/Profile";
import LoginButton from "../components/LoginButton";
import PopupLoginButton from "../components/PopupLoginButton";
import { Link } from "react-router-dom";

const Home = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <Link to="/">Home page</Link>
        <Link to="/login">Login page</Link>
      </div>
      <h1>Home Page</h1>
      {isAuthenticated ? (
        <Profile />
      ) : (
        <div className="card" style={{ display: "flex", gap: "10px" }}>
          <LoginButton />
          <PopupLoginButton />
        </div>
      )}
    </div>
  );
};

export default Home;
