import { useContext } from "react";
import AuthContext from "./context/auth-context";

function Auth() {
  const { status, login } = useContext(AuthContext);
  //   const auth = useContext(AuthContext);
  console.log(status);
  return (
    <div>
      <h1>Have you logged in?</h1>
      {status ? <p>Yes</p> : <p>No</p>}
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Auth;
