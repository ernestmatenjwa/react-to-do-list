import React, {userState, useEffect} from "react";
import "./style.css";
import fire from "./fire.js"

export default function App() {
  const [user, setUser] = userState('');
  const [email, setEmail] = userState('');
  const [password, setPassword] = userState('');
  const [emailError, setEmailError] = userState('');
  const [passwordError, setPasswordError] = userState('');
  const [hasAccount, setHasAccount] = userState('');

  const handleLogin = () => {
     fire 
     .auth()
       .signInWithEmailAndPassword(email, password)
       .catch(err =>{
          switch(err.code){
            case "auth/invalid-email":
              case "auth/user-disabled":
                case "auth/user-not-found":
                  setEmailError(err.message);
                  break;
                  case "auth/wrong-password":
                    setPasswordError(err.message);
                    break;
          }
       })
     
  }
  return (
    <div>
      <h1>Hello Alex!</h1>
      
    </div>
  );
}
