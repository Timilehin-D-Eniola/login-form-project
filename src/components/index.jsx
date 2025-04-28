import {useState} from "react"
import Form from "./login.jsx"

const Login = () => {
  const [alert, setAlert] = useState("")

  const handleLogin = (username,password) => {
    if ( username === "username" && password === "password") {
      setAlert("You've logged in successfully")
    } else {
      setAlert("Check username or password")
    }
  }

  return(
    <>
      <h1 className= "login-form">Login Form</h1>
      <Form  onLogin={handleLogin}/>
      <p>{alert}</p>
    </>
  )
}

export default Login;