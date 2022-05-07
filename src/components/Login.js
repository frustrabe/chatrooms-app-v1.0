import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { auth, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Login() {
  const [user, loading] = useAuthState(auth);
  //   const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }

    if (user) {
      console.log("Logged in as", user);
    } else {
      console.log("Not logged in ");
    }
  }, [user, loading]);

  return (
    <div className="login">
      <div className="login__container">
        <h1>{loading ? "App is loading" : "App is loaded"}</h1>

        <button className="login__btn login__google" onClick={signInWithGoogle}>
          Login with Google
        </button>
        <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
      </div>
    </div>
  );
}
