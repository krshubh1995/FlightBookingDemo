import logo from "./logo.svg";
import "./App.css";
import UserForm from "./compnents/passengerForm/Form";
import { useEffect, useState } from "react";
import LogIn from "./compnents/login/login";

function App() {
  const [loggedIn, setLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("flightLogin")) {
      setLogin(localStorage.getItem("flightLogin"));
    }
  }, []);

  return (
    <div className="App">
      {loggedIn ? (
        <>
          <p
            style={{
              float: "right",
              border: "2px solid black",
              marginRight: "20px",
              cursor: "pointer",
            }}
            onClick={() => {
              localStorage.removeItem("flightLogin");
              setLogin(false);
            }}
          >
            LogOut
          </p>
          <UserForm></UserForm>
        </>
      ) : (
        <LogIn login={setLogin}></LogIn>
      )}
    </div>
  );
}

export default App;
